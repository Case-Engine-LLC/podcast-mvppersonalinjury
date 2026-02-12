import V2EpisodePage from '@/themes/v2/pages/V2EpisodePage'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <V2EpisodePage episodeId={id} />
}
