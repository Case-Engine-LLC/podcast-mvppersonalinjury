import V1EpisodePage from '@/themes/v1/pages/V1EpisodePage'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <V1EpisodePage episodeId={id} />
}
