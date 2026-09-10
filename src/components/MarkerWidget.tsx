'use client'

import { useEffect } from 'react'

/**
 * Marker.io feedback widget.
 *
 * Loads MVP Accident Attorneys' own Marker project (key MAA) so a bug reported
 * on this site lands on MVP's board with the page, browser and console context
 * attached. Without it, feedback on this site has nowhere to go — a 2026-09-10
 * fleet check found the widget missing on both MVP microsites while 12 of the
 * other sites carried it.
 *
 * The project id falls back to MVP's rather than being env-only, matching how
 * this repo already handles GTM/GA4 in <Analytics>: an env-only gate silently
 * renders nothing until someone remembers to set a Vercel variable, which is
 * exactly how this went missing. Override with NEXT_PUBLIC_MARKER_PROJECT_ID.
 */
const MVP_MARKER_PROJECT = '682ec9d821b85228e21a7b0e'

export function MarkerWidget() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_MARKER_PROJECT_ID || MVP_MARKER_PROJECT
    if (!projectId) return

    let cancelled = false
    let widget: { unload?: () => void } | null = null

    import('@marker.io/browser').then(async (mod) => {
      if (cancelled) return
      try {
        widget = await mod.default.loadWidget({ project: projectId })
      } catch (e) {
        console.error('Marker.io load failed:', e)
      }
    })

    return () => {
      cancelled = true
      widget?.unload?.()
    }
  }, [])

  return null
}
