import { ImageResponse } from 'next/og'
import { attorney, siteConfig, stats } from '@/data/siteData'

export const runtime = 'edge'
export const alt = `${siteConfig.podcastName} — hosted by ${attorney.name}, ${attorney.firm}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#070519',
          color: '#ffffff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            background:
              'radial-gradient(circle at 70% 30%, rgba(250,163,26,0.32) 0%, rgba(7,5,25,0) 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              width: 48,
              height: 2,
              background: '#FAA31A',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#FAA31A',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            MVP Accident Attorneys
          </div>
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 28,
          }}
        >
          <div style={{ display: 'flex' }}>{attorney.name}</div>
        </div>

        <div
          style={{
            fontSize: 30,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.35,
            maxWidth: 920,
            display: 'flex',
            marginBottom: 48,
          }}
        >
          {attorney.title}. The MVP of Personal Injury Law — California-specific
          accident education for Irvine, Riverside, Sacramento, and Los Angeles.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 64,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.18)',
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <span style={{ display: 'flex' }}>{stats.rating} stars</span>
            <span style={{ display: 'flex', color: '#FAA31A' }}>·</span>
            <span style={{ display: 'flex' }}>{stats.reviewCount}+ reviews</span>
            <span style={{ display: 'flex', color: '#FAA31A' }}>·</span>
            <span style={{ display: 'flex' }}>{stats.satisfactionRate}% satisfaction</span>
          </div>
          <div style={{ display: 'flex', color: '#FAA31A', fontWeight: 600 }}>
            mvppersonalinjury.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
