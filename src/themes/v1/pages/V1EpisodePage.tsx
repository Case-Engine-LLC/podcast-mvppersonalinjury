import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'
import { siteConfig, attorney, contact, episode } from '@/data/siteData'
import type { Episode } from '@/lib/data'
import type { TranscriptSegment } from '@/lib/rss'

const SITE_URL = 'https://mvppersonalinjury.com'

export function generateEpisodeSchema(episodeId: string, rssEp?: any) {
  const ep = rssEp ?? episode
  const episodeUrl = `https://mvppersonalinjury.com/episode/${episodeId}`
  const siteUrl = 'https://mvppersonalinjury.com'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${episodeUrl}#webpage`,
        'url': episodeUrl,
        'name': `${ep.title} | ${siteConfig.podcastName}`,
        'headline': ep.title,
        'description': typeof ep.description === 'string' ? ep.description.slice(0, 200) : '',
        'inLanguage': 'en',
        'isPartOf': { '@id': `${siteUrl}/#website` },
        'speakable': {
          '@type': 'SpeakableSpecification',
          'name': ['headline', 'description'],
        },
      },
      {
        '@type': 'PodcastEpisode',
        '@id': `${episodeUrl}#episode`,
        'name': ep.title,
        'description': typeof ep.description === 'string' ? ep.description.slice(0, 200) : '',
        'url': episodeUrl,
        'episodeNumber': ep.number ?? ep.id ?? 1,
        'partOfSeries': { '@id': `${siteUrl}/#podcast` },
        'productionCompany': { '@id': `${siteUrl}/#org` },
        ...(ep.audioUrl ? { 'associatedMedia': { '@type': 'MediaObject', 'contentUrl': ep.audioUrl } } : {}),
        ...(ep.logo ? { 'image': ep.logo } : {}),
        'speakable': {
          '@type': 'SpeakableSpecification',
          'name': ['name', 'description'],
        },
      },
      {
        '@type': 'PodcastSeries',
        '@id': `${siteUrl}/#podcast`,
        'name': siteConfig.podcastName,
        'url': siteUrl,
        'inLanguage': 'en',
      },
      {
        '@type': ['LegalService', 'Organization'],
        '@id': `${siteUrl}/#org`,
        'name': attorney.firm,
        'url': contact.website,
        'telephone': contact.phone,
        'email': contact.email,
      },
    ],
  }
}

interface V1EpisodePageProps {
  episodeId: string
  episode?: Episode | null
  allEpisodes?: Episode[]
  transcript?: TranscriptSegment[]
}

const V1EpisodePage = ({ episodeId, episode: rssEpisode, allEpisodes, transcript }: V1EpisodePageProps) => {
  const schema = generateEpisodeSchema(episodeId, rssEpisode)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header variant="light" />

      <main className="pt-[6rem]">
        <EpisodeHero episode={rssEpisode} />
        <EpisodeContent episode={rssEpisode} transcript={transcript} />
        <OtherEpisodes episodes={allEpisodes} />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default V1EpisodePage
