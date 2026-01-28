'use client'

import React from 'react'
import Link from 'next/link'
import { Play, Info, ArrowRight } from 'lucide-react'
import { episodes as episodesData, subscribeCTA } from '@/data/siteData'

interface Episode {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  duration: string
  imageUrl?: string
}

interface LatestEpisodesProps {
  episodes?: Episode[]
}

const LatestEpisodes = ({ episodes }: LatestEpisodesProps) => {
  const defaultEpisodes: Episode[] = episodesData.map(ep => ({
    id: String(ep.id),
    number: String(ep.number).padStart(2, '0'),
    title: ep.title,
    subtitle: ep.subtitle,
    description: ep.description,
    duration: ep.duration,
  }))

  const episodeList = episodes || defaultEpisodes

  return (
    <section id="episodes" className="bg-primary py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Episodes
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            {subscribeCTA.description}
          </p>
        </div>

        {/* Episodes List */}
        <div className="space-y-0">
          {episodeList.map((episode, index) => (
            <div key={episode.id}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 items-center">
                {/* Episode Image */}
                <div className="md:col-span-3">
                  <div className="w-full aspect-square bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    {episode.imageUrl ? (
                      <img src={episode.imageUrl} alt={episode.title} className="w-full h-full object-cover" />
                    ) : (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="25" r="8" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
                        <path d="M10 70 L30 45 L50 60 L70 35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Episode Content */}
                <div className="md:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    {episode.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                    {episode.description}
                  </p>

                  {/* Play Button */}
                  <Link href={`/episode/${episode.id}`} className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Play size={20} fill="black" stroke="black" className="ml-0.5" />
                    </div>
                    <span className="text-lg font-semibold">Play Episode</span>
                  </Link>

                  {/* Episode Info */}
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Info size={16} />
                    <span>{episode.subtitle} • {episode.duration}</span>
                  </div>
                </div>

                {/* Episode Number */}
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="text-5xl md:text-6xl font-bold text-white/20">
                    {episode.number}
                  </span>
                </div>
              </div>

              {/* Divider */}
              {index < episodeList.length - 1 && (
                <div className="border-b border-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-base hover:bg-white/90 transition-all"
          >
            View All Episodes
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestEpisodes
