import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import '@/themes/v1/variables.css'
import { siteConfig, about, attorney } from '@/data/siteData'
import SchemaJsonLd from '@/components/SchemaJsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL = siteConfig.podcastUrl
const TITLE = siteConfig.podcastName
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
        <Script id="marker-io" strategy="afterInteractive">
          {`
            window.markerConfig = {
              project: '${process.env.NEXT_PUBLIC_MARKER_PROJECT_ID || '682ec9d821b85228e21a7b0e'}',
              source: 'snippet'
            };

            !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","clearReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
          `}
        </Script>
      </body>
    </html>
  )
}
