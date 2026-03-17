import V2Home from '@/themes/v2/pages/V2Home'
import { generateHomeSchema } from '@/lib/schema-helpers'

const homeSchema = generateHomeSchema('/v2')

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <V2Home />
    </>
  )
}
