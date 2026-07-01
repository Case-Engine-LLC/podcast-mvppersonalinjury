import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/themes/v1/variables.css'
import { siteConfig, about, attorney } from '@/data/siteData'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { Analytics } from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL = siteConfig.podcastUrl
// Meta/SEO title — "Podcast" inserted before the host and "w." spelled out
// (e.g. "...Personal Injury Law Podcast with Brett & Chelsee Sachs").
// Visible on-page headings use siteConfig.podcastName directly.
const TITLE = siteConfig.podcastName.replace(' w. ', ' Podcast with ')
const DESCRIPTION = about.description

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: attorney.name, url: 'https://themvp.com' }],
  keywords: [
    attorney.name,
    attorney.firm,
    'MVP Accident Attorneys',
    'Brett Sachs',
    'California personal injury podcast',
    'Orange County accident attorney',
    'Irvine personal injury lawyer',
    'Riverside personal injury lawyer',
    'Sacramento personal injury lawyer',
    'Los Angeles personal injury attorney',
    'Irvine Riverside Sacramento personal injury',
    'car accident attorney California',
    'wrongful death lawyer California',
  ],
  category: 'Legal Podcast',
  alternates: {
    canonical: '/',
    ...(siteConfig.rssFeedUrl
      ? {
          types: {
            'application/rss+xml': siteConfig.rssFeedUrl,
          },
        }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${TITLE} — hosted by ${attorney.name} of ${attorney.firm}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [{ url: '/icon', type: 'image/png' }],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#070519' },
    { media: '(prefers-color-scheme: dark)', color: '#070519' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics
          gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-M4RQQ56R'}
          ga4Id={process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-PJG5MG1JGQ'}
          clarityProjectId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'gujq334he8'}
        />
      </body>
    </html>
  )
}
