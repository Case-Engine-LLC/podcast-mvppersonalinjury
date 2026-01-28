'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h2>

            {/* First paragraph - always visible */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>
            </div>

            {/* Read More / Read Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-base font-semibold text-black hover:opacity-70 transition-opacity mt-4"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="45" cy="35" r="12" stroke="#999" strokeWidth="2"/>
              <path d="M15 105 L45 65 L75 90 L105 50" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
