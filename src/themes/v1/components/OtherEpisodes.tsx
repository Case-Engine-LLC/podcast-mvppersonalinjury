'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { episodes as episodesData, subscribeCTA } from '@/data/siteData'

const OtherEpisodes = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Map episodes from siteData - for now we just have episode 1
  // Show "Coming Soon" for future episodes
  const episodes = [
    ...episodesData.map(ep => ({
      id: String(ep.id),
      title: ep.title,
      episodeNumber: `Episode ${ep.number}`,
      category: ep.category,
      duration: ep.duration,
      image: null,
    })),
    // Coming soon placeholders
    {
      id: 'coming-2',
      title: 'Coming Soon: New Attorney Interview',
      episodeNumber: 'Episode 2',
      category: 'Personal Injury',
      duration: 'TBA',
      image: null,
    },
    {
      id: 'coming-3',
      title: 'Coming Soon: New Attorney Interview',
      episodeNumber: 'Episode 3',
      category: 'Personal Injury',
      duration: 'TBA',
      image: null,
    },
  ]

  const maxIndex = Math.max(0, episodes.length - 3)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Other Episodes
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {subscribeCTA.description}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {episodes.map((episode) => (
              <Link
                key={episode.id}
                href={episode.id.startsWith('coming') ? '#subscribe' : `/episode/${episode.id}`}
                className="group flex flex-col flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
              >
                <div className="aspect-video bg-gray-200 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                    <circle cx="45" cy="35" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15 105 L45 65 L75 90 L105 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="inline-block bg-gray-200 px-3 py-1.5 rounded-md text-xs font-bold text-black uppercase tracking-widest self-start mb-3">
                  {episode.episodeNumber}
                </div>

                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {episode.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {episode.episodeNumber} • {episode.category} • {episode.duration}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a3e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} stroke="white" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center hover:bg-[#2a2a3e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} stroke="white" />
          </button>

          {/* Progress Bar */}
          <div className="flex-grow h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1a1a2e] transition-all duration-500 ease-in-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherEpisodes
