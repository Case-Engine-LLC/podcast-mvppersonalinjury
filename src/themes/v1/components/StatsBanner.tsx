'use client'

import React from 'react'
import { stats } from '@/data/siteData'

const StatsBanner = () => {
  return (
    <section className="bg-white py-0 md:py-12">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1: Rating - Orange */}
          <div className="bg-[#EC6A00] rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="text-[#FFC564] text-4xl md:text-6xl font-bold">
                {stats.rating}
              </div>
              <img
                src="/icons/stars.svg"
                alt="Stars"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <h3 className="text-[#451F00] text-xl md:text-2xl font-bold mb-3">
              Positive Reviews
            </h3>
            <p className="text-[#451F00] text-sm md:text-base leading-relaxed">
              {stats.ratingVerbalization}
            </p>
          </div>

          {/* Card 2: Satisfaction - Yellow */}
          <div className="bg-[#FAA61A] rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="text-[#10284B] text-4xl md:text-6xl font-bold">
                {stats.satisfactionRate}%
              </div>
              <img
                src="/icons/like.svg"
                alt="Like"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <h3 className="text-[#10284B] text-xl md:text-2xl font-bold mb-3">
              {stats.satisfactionLabel}
            </h3>
            <p className="text-[#10284B] text-sm md:text-base leading-relaxed">
              {stats.satisfactionVerbalization}
            </p>
          </div>

          {/* Card 3: Cases - Dark Blue */}
          <div className="bg-[#10284B] rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="text-[#EC6A00] text-4xl md:text-6xl font-bold">
                {stats.casesHandled}+
              </div>
              <img
                src="/icons/case.svg"
                alt="Case"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <h3 className="text-[#A3C9FF] text-xl md:text-2xl font-bold mb-3">
              {stats.casesLabel}
            </h3>
            <p className="text-[#A3C9FF] text-sm md:text-base leading-relaxed">
              {stats.casesVerbalization}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
