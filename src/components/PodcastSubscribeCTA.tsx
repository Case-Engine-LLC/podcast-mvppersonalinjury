'use client'

import React from 'react'
import Link from 'next/link'

const PodcastSubscribeCTA = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="bg-secondary rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Side - Image */}
            <div className="relative h-[400px] md:h-[500px] bg-gray-700 flex items-center justify-center">
              {/* Simple Placeholder Image */}
              <div className="w-full h-full flex items-center justify-center">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="130" height="130" rx="8" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
                  <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
                  <path d="M10 130 L50 80 L90 110 L140 50" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="py-12 md:py-16 px-6 md:px-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Subscribe To Our Podcast
              </h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
                Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              </p>
              <Link
                href="#"
                className="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold text-base hover:bg-white/90 transition-all"
              >
                Subscribe Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PodcastSubscribeCTA
