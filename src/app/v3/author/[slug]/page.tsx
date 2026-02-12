import V3AuthorPage from '@/themes/v3/pages/V3AuthorPage'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <V3AuthorPage slug={slug} />
}
