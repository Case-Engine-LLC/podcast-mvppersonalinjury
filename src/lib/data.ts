import { fetchPodcastFeed, fetchTranscript as fetchRssTranscript, type RSSEpisode, type TranscriptSegment } from './rss'
import { generatedTranscripts, TRANSCRIPTS_BY_GUID } from '@/data/transcripts.generated'
import { episodes as staticEpisodes, siteConfig } from '@/data/siteData'

// Prefer env var (Vercel project setting), fall back to siteData.rssFeedUrl
// so the build still has a wired feed if the env var is not set.
const RSS_URL = process.env.PODCAST_RSS_URL || (siteConfig as { rssFeedUrl?: string })?.rssFeedUrl || undefined

export function slugifyEpisode(title: string, fallback: string = 'episode'): string {
  if (!title) return fallback
  const s = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  return s.slice(0, 80) || fallback
}
export const REVALIDATE = parseInt(process.env.REVALIDATE_SECONDS || '3600', 10)

export interface Episode {
  id: number
  slug?: string
  guid?: string
  sourceGuid?: string
  rssGuid?: string
  number: number
  season?: number | null
  isExtension?: boolean
  numbered?: boolean
  title: string
  subtitle: string
  description: string
  duration: string
  date: string
  category: string
  featured: boolean
  topic: string
  concepts: string[]
  chapters: string[]
  logo: string
  audioUrl?: string
  audioType?: string
  transcriptUrl?: string | null
  transcriptType?: string | null
  youtubeUrl?: string
}

// The live FlightCast RSS feed mistakenly tags Chelsee Sachs's "YOU Interview"
// episode with the same <itunes:episode>1 as Brett Sachs's "YOU Interview"
// episode (see the header comment in transcripts.generated.ts, which already
// anticipated this collision and keys her transcript/guid data as "id 5").
// That feed-level collision produces two homepage links both rendered as
// "Ep. 1" and duplicate "#episode-1" PodcastEpisode JSON-LD entries
// (Marker ticket f7b8f763-b6ba-423d-82c0-644aca7e1c55). We don't control the
// FlightCast feed itself, so correct the number at the single point where feed
// data becomes site data. Chelsee's episode (published 06.09.26) is
// chronologically the 5th published episode overall — after Brett=1 (03.09.26),
// Irvine main=2 (05.28.26), Riverside=3 (06.01.26), Sacramento=4 (06.03.26) —
// which also matches the id already reserved for her transcript below.
const EPISODE_NUMBER_OVERRIDES_BY_GUID: Record<string, number> = {
  'flightcast:01KTMM8B3FFXMYKE8A6DD49ZEE': 5, // Chelsee Sachs "YOU Interview"
}

function rssEpisodeToEpisode(ep: RSSEpisode): Episode {
  const override = findStaticEpisodeOverride(ep)
  const explicitSlug = override?.slug
  const correctedId = EPISODE_NUMBER_OVERRIDES_BY_GUID[ep.guid] ?? ep.id

  return {
    id: correctedId,
    slug: explicitSlug || slugifyEpisode(ep.title, String(ep.id)),
    guid: ep.guid,
    sourceGuid: ep.guid,
    rssGuid: ep.guid,
    number: correctedId,
    season: ep.season,
    isExtension: ep.isExtension,
    numbered: ep.numbered,
    title: override?.title || ep.title,
    subtitle: override?.subtitle || ep.subtitle,
    description: override?.description || ep.description,
    duration: override?.duration || ep.duration,
    date: override?.date || ep.date,
    category: override?.category || ep.category,
    featured: ep.featured,
    topic: override?.topic || ep.topic,
    concepts: override?.concepts?.length ? override.concepts : ep.concepts,
    chapters: override?.chapters?.length ? override.chapters : ep.chapters,
    logo: override?.logo || ep.logo,
    audioUrl: ep.audioUrl || undefined,
    audioType: ep.audioType || undefined,
    transcriptUrl: ep.transcriptUrl,
    transcriptType: ep.transcriptType,
    youtubeUrl: override?.youtubeUrl,
  }
}

function normalizeStaticEpisode(ep: Record<string, unknown>): Episode {
  return {
    id: (ep.id as number) ?? 1,
    slug: (ep.slug as string) || slugifyEpisode((ep.title as string) || '', String((ep.id as number) ?? 1)),
    guid: (ep.guid as string) ?? undefined,
    sourceGuid: (ep.sourceGuid as string) ?? undefined,
    rssGuid: (ep.rssGuid as string) ?? undefined,
    number: (ep.number as number) ?? (ep.id as number) ?? 1,
    season: (ep.season as number | null) ?? null,
    isExtension: (ep.isExtension as boolean) ?? false,
    numbered: (ep.numbered as boolean) ?? true,
    title: (ep.title as string) ?? '',
    subtitle: (ep.subtitle as string) ?? '',
    description: (ep.description as string) ?? '',
    duration: (ep.duration as string) ?? '',
    date: (ep.date as string) ?? '',
    category: (ep.category as string) ?? '',
    featured: (ep.featured as boolean) ?? false,
    topic: (ep.topic as string) ?? '',
    concepts: (ep.concepts as string[]) ?? [],
    chapters: (ep.chapters as string[]) ?? [],
    logo: (ep.logo as string) ?? '',
    audioUrl: (ep.audioUrl as string) ?? undefined,
    audioType: (ep.audioType as string) ?? undefined,
    transcriptUrl: (ep.transcriptUrl as string) ?? null,
    transcriptType: (ep.transcriptType as string) ?? null,
    youtubeUrl: (ep.youtubeUrl as string) ?? undefined,
  }
}

function normalizeForMatch(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function findStaticEpisodeOverride(ep: RSSEpisode): Episode | null {
  const normalizedTitle = normalizeForMatch(ep.title)
  const generatedSlug = slugifyEpisode(ep.title, String(ep.id))

  for (const item of staticEpisodes as Record<string, unknown>[]) {
    const staticEp = normalizeStaticEpisode(item)
    const staticGuid = staticEp.guid || staticEp.sourceGuid || staticEp.rssGuid

    if (staticGuid && staticGuid === ep.guid) return staticEp
    if (staticEp.slug && staticEp.slug === generatedSlug) return staticEp
    if (staticEp.title && normalizeForMatch(staticEp.title) === normalizedTitle) return staticEp
  }

  return null
}

let feedCache: { episodes: Episode[]; fetchedAt: number } | null = null

// Remove duplicate feed items that share a slug, keeping the best-tagged one:
// a numbered main beats a season-only city extension beats an untagged duplicate.
// (Fixes the case where an accidental untagged copy hijacks an episode's page.)
function dedupeBySlug(episodes: Episode[]): Episode[] {
  const rank = (e: Episode) => (e.numbered ? 2 : e.isExtension ? 1 : 0)
  const best = new Map<string, Episode>()
  for (const ep of episodes) {
    const key = ep.slug || String(ep.id)
    const cur = best.get(key)
    if (!cur || rank(ep) > rank(cur)) best.set(key, ep)
  }
  return episodes.filter(ep => best.get(ep.slug || String(ep.id)) === ep)
}

export async function getAllEpisodes(): Promise<Episode[]> {
  if (!RSS_URL) {
    return dedupeBySlug((staticEpisodes as Record<string, unknown>[]).map(normalizeStaticEpisode))
  }

  // Simple in-memory cache for same request cycle
  if (feedCache && Date.now() - feedCache.fetchedAt < 30_000) {
    return feedCache.episodes
  }

  try {
    const feed = await fetchPodcastFeed(RSS_URL)
    const episodes = dedupeBySlug(feed.episodes.map(rssEpisodeToEpisode))
    feedCache = { episodes, fetchedAt: Date.now() }
    return episodes
  } catch (e) {
    console.error('RSS fetch failed, falling back to static data:', e)
    return dedupeBySlug((staticEpisodes as Record<string, unknown>[]).map(normalizeStaticEpisode))
  }
}

export async function getEpisodeById(id: number): Promise<Episode | null> {
  const episodes = await getAllEpisodes()
  return episodes.find(ep => ep.id === id) ?? null
}

export async function getEpisodeBySlug(slug: string): Promise<Episode | null> {
  const episodes = await getAllEpisodes()
  return episodes.find(ep => ep.slug === slug) ?? null
}

export async function getEpisodeByIdOrSlug(idOrSlug: string): Promise<Episode | null> {
  const episodes = await getAllEpisodes()
  const bySlug = episodes.find(ep => ep.slug === idOrSlug)
  if (bySlug) return bySlug
  const n = Number(idOrSlug)
  if (Number.isFinite(n)) return episodes.find(ep => ep.id === n) ?? null
  return null
}

export async function getEpisodeTranscript(episode: Episode): Promise<TranscriptSegment[]> {
  // Resolve by guid FIRST: the guid is unique per feed item, which matters
  // because several episodes collide on itunes:episode number in the live RSS
  // feed (Ep2 Irvine/Riverside/Sacramento location cuts; Brett's and Chelsee's
  // "YOU Interview" episodes both carry itunes:episode=1) — numeric-id-only
  // lookup would serve the wrong transcript for those. See header comment in
  // transcripts.generated.ts for the guid -> Drive-source mapping.
  const guid = episode.guid || episode.sourceGuid || episode.rssGuid
  if (guid && TRANSCRIPTS_BY_GUID[guid]) return TRANSCRIPTS_BY_GUID[guid]

  // Next, a slug-keyed transcript: the slug is a stable identity that works for
  // city extensions (which have no episode number to key on). Fall back to the
  // legacy numeric-id key so existing main-episode transcripts keep working.
  const bySlug = episode.slug ? generatedTranscripts[episode.slug] : undefined
  if (bySlug && bySlug.length) return bySlug

  if (RSS_URL && episode.transcriptUrl && episode.transcriptType) {
    const segments = await fetchRssTranscript(episode.transcriptUrl, episode.transcriptType)
    if (segments.length > 0) return segments
  }

  return generatedTranscripts[episode.id] ?? []
}

export async function getEpisodeTopics(episodes: Episode[]): Promise<string[]> {
  const topics = new Set<string>(['All'])
  episodes.forEach(ep => {
    if (ep.topic) topics.add(ep.topic)
  })
  return Array.from(topics)
}
