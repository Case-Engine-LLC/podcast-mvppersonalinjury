'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const OtherEpisodes = () => {
  const episodes = [
    {
      id: '2',
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur Sit Amet Consectetur',
      description: 'Episode 2 / Lorem ipsum dolor / 2 hr 21 min',
      image: null,
    },
    {
      id: '3',
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur Sit Amet Consectetur',
      description: 'Episode 3 / Lorem ipsum dolor / 2 hr 21 min',
      image: null,
    },
    {
      id: '4',
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur Sit Amet Consectetur',
      description: 'Episode 4 / Lorem ipsum dolor / 2 hr 21 min',
      image: null,
    }
  ]

  return (
    <section className="py-24 bg-white border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4">Other Episodes</h2>
          <p className="text-[18px] text-black/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <Link 
              key={episode.id} 
              href={`/episode/${episode.id}`}
              className="group flex flex-col h-full"
            >
              <div className="aspect-[420/280] bg-[#eeeef0] rounded-[12px] mb-6 overflow-hidden relative border border-black/5">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                     <div className="w-16 h-16 border-4 border-black rounded-lg" />
                  </div>
              </div>
              <div className="inline-block bg-[#ce5743] text-white text-[10px] font-bold px-3 py-1 rounded-[4px] self-start mb-3 uppercase tracking-wider">
                EPISODE {episode.id}
              </div>
              <h3 className="text-[18px] font-bold text-black mb-2 group-hover:text-[#ce5743] transition-colors line-clamp-2">
                {episode.title}
              </h3>
              <p className="text-[14px] text-black/40">
                {episode.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Carousel Controls Placeholder */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="w-12 h-12 rounded-full bg-[#070519] text-white flex items-center justify-center hover:bg-black transition-colors">
             <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#070519] text-white flex items-center justify-center hover:bg-black transition-colors">
             <ArrowRight size={20} />
          </button>
          <div className="flex-grow max-w-[200px] h-[2px] bg-black/10 rounded-full relative overflow-hidden">
             <div className="absolute left-0 top-0 h-full w-1/3 bg-black/40" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherEpisodes
