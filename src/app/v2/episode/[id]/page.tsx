import V2EpisodePage from '@/themes/v2/pages/V2EpisodePage'
import { generateEpisodeSchema } from '@/themes/v1/pages/V1EpisodePage'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const schema = generateEpisodeSchema(id)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <V2EpisodePage episodeId={id} />
    </>
  )
}
