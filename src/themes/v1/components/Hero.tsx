'use client'

import React from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import FeaturedEpisodePlayer from './FeaturedEpisodePlayer'
import { siteConfig, episode, content, footer } from '@/data/siteData'
import type { Episode } from '@/lib/data'

interface HeroProps {
  latestEpisode?: Episode | null
}

const Hero = ({ latestEpisode }: HeroProps) => {
  const ep = latestEpisode ?? episode
  return (
    <>
    <section className="hero-section relative pt-[5rem] md:pt-[7.5rem] pb-12 md:pb-0 md:min-h-[90vh] overflow-hidden">
      {/* Hero Background Image - indexable - Desktop */}
      <figure className="hidden md:block absolute inset-0 z-0 m-0">
        <img
          src="/hero-bg.jpg"
          alt={content.heroTitle}
          className="w-full h-full object-cover object-[center_right]"
        />
      </figure>

      {/* Hero Background Image - Mobile/Tablet */}
      <figure className="md:hidden absolute inset-0 z-0 m-0">
        <img
          src="/hero-bg.jpg"
          alt={content.heroTitle}
          className="w-full h-full object-cover object-center"
        />
      </figure>

      {/* Attorney Image - anchored to the content container's right edge (not the viewport)
          so it stays aligned with the layout on large monitors */}
      <div className="hidden md:block absolute inset-0 z-[1] pointer-events-none">
        <div className="relative mx-auto h-full max-w-container px-4 md:px-12">
          <img
            src="/attorneys.png"
            alt={content.heroTitle}
            className="absolute bottom-0 right-4 md:right-12 h-[68%] lg:h-[78%] w-auto object-contain object-bottom block"
          />
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="relative z-[1] w-[110%] -ml-[5%] bg-secondary py-3 md:py-4 overflow-hidden whitespace-nowrap -rotate-[2deg] transform origin-center">
        <div className="flex animate-marquee">
          <span className="text-black font-bold uppercase tracking-[0.3em] text-xs md:text-sm inline-block">
            {siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="text-black font-bold uppercase tracking-[0.3em] text-xs md:text-sm inline-block">
            {siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{siteConfig.tagline}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-[2] max-w-container mx-auto px-4 md:px-12 pt-6 md:pt-12 pb-0 md:pb-12">
        {/* Text Content */}
        <div className="md:w-[55%] pb-6 md:pb-16 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-[2.25rem] leading-[1.2] md:text-5xl font-bold md:leading-tighter text-white mb-3 md:mb-4">
            {content.heroTitle}
          </h1>

          {/* Description */}
          <p className="hero-description text-sm md:text-lg text-white/80 leading-relaxed mb-5 md:mb-8 max-w-xl mx-auto md:mx-0">
            {content.heroDescription}
          </p>

          {/* Available On Buttons — one shared style for every platform (MAA-503) */}
          <div id="listen" className="flex flex-row flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-start scroll-mt-24">
            <a
              href={footer.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
              className="flex items-center gap-1.5 md:gap-3 px-2 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl transition-all hover:scale-105 flex-1 sm:flex-initial sm:min-w-[15rem]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5.85px)'
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[0.6rem] md:text-xs text-white/60">Available on</div>
                <div className="text-sm md:text-lg font-bold text-white">YouTube</div>
              </div>
            </a>

            <a
              href={siteConfig.platformLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Spotify"
              className="flex items-center gap-1.5 md:gap-3 px-2 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl transition-all hover:scale-105 flex-1 sm:flex-initial sm:min-w-[15rem]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5.85px)'
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_132_42)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.2385 16.8439C24.1148 13.2073 14.0125 12.8725 8.16429 14.6471C7.22569 14.9302 6.23389 14.4019 5.94889 13.4614C5.66389 12.5228 6.194 11.531 7.1326 11.246C13.8453 9.2073 25.0021 9.60043 32.053 13.7861C32.8966 14.2877 33.174 15.3788 32.6724 16.2224C32.1746 17.066 31.0802 17.3455 30.2385 16.8439ZM30.039 22.2304C29.6096 22.9277 28.6976 23.1459 28.0003 22.7184C22.895 19.5796 15.1088 18.6713 9.0687 20.5048C8.284 20.7404 7.45751 20.2995 7.22001 19.5167C6.98441 18.7339 7.4252 17.9071 8.208 17.6696C15.1069 15.5758 23.6854 16.5906 29.5507 20.1949C30.248 20.6224 30.4665 21.535 30.039 22.2304ZM27.7134 27.4034C27.3714 27.962 26.6437 28.1388 26.0851 27.7968C21.6239 25.0703 16.0075 24.4549 9.3936 25.9654C8.7571 26.1117 8.1206 25.7123 7.9762 25.0739C7.8299 24.4374 8.227 23.8035 8.8673 23.6572C16.1044 22.0023 22.3117 22.7143 27.3201 25.7752C27.8787 26.1172 28.0554 26.8448 27.7134 27.4034ZM19 0C8.5063 0 0 8.5063 0 19C0 29.4937 8.5063 38 19 38C29.4937 38 38 29.4937 38 19C38 8.5082 29.4937 0 19 0Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_132_42">
                          <rect width="38" height="38" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
              </div>
              <div className="text-left">
                <div className="text-[0.6rem] md:text-xs text-white/60">Available on</div>
                <div className="text-sm md:text-lg font-bold text-white">Spotify</div>
              </div>
            </a>

            <a
              href={siteConfig.platformLinks.apple}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Apple Podcasts"
              className="flex items-center gap-1.5 md:gap-3 px-2 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl transition-all hover:scale-105 flex-1 sm:flex-initial sm:min-w-[15rem]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5.85px)'
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" fill="white"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[0.6rem] md:text-xs text-white/60">Available on</div>
                <div className="text-sm md:text-lg font-bold text-white">Apple Podcasts</div>
              </div>
            </a>
          </div>
        </div>

        {/* Attorney Image - Mobile only, stacked below the text */}
        <div className="md:hidden flex justify-center mt-2">
          <img
            src="/attorneys.png"
            alt={content.heroTitle}
            className="w-auto max-h-[55vh] object-contain object-bottom"
          />
        </div>

      </div>
    </section>

    {/* Featured Episode Player - Outside hero with negative margin */}
    <div className="relative z-10 -mt-8 md:-mt-16">
      <div className="max-w-container mx-auto px-4 md:px-12">
        <FeaturedEpisodePlayer
          episodeNumber={String(ep.number ?? 1)}
          title={ep.title}
          description={(ep.description ?? '').replace(/\*\*/g, '')}
          duration={ep.duration}
          episodeLink={`/episode/${(ep as { slug?: string; number?: number }).slug ?? ep.number ?? 1}`}
          imageUrl={(latestEpisode as any)?.logo || undefined}
          audioUrl={(latestEpisode as any)?.audioUrl || undefined}
        />
      </div>
    </div>
    </>
  )
}

export default Hero
