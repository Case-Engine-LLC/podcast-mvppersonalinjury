import V2AuthorPage from '@/themes/v2/pages/V2AuthorPage'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <V2AuthorPage slug={slug} />
}
