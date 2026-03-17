import V3Home from '@/themes/v3/pages/V3Home'
import { generateHomeSchema } from '@/lib/schema-helpers'

const homeSchema = generateHomeSchema('/v3')

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <V3Home />
    </>
  )
}
