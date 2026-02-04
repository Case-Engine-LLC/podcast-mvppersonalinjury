'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { stats } from '@/data/siteData'

const StatsBanner = () => {
  return (
    <section className="bg-[#070519] py-12 md:py-16">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* Column 1: Rating */}
          <div className="flex items-center justify-center md:border-r border-white/10 px-8">
            <div className="flex items-center gap-6">
              <span className="text-[42px] font-bold text-white tracking-[-0.42px]">{stats.rating}</span>
              <div>
                <div className="flex items-center gap-1 text-[#ce5743] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[16px] text-white opacity-60">{stats.reviewCount} Reviews</p>
                {stats.ratingVerbalization && (
                  <p className="text-[13px] text-white opacity-40 mt-1 max-w-[200px]">
                    {stats.ratingVerbalization}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Satisfaction */}
          <div className="flex items-center justify-center md:border-r border-white/10 px-8 text-center md:text-left">
            <div className="flex items-center gap-6">
              <span className="text-[42px] font-bold text-white tracking-[-0.42px]">{stats.satisfactionRate}%</span>
              <div>
                <p className="text-[16px] text-white opacity-60 max-w-[150px]">
                  {stats.satisfactionLabel}
                </p>
                {stats.satisfactionVerbalization && (
                  <p className="text-[13px] text-white opacity-40 mt-1 max-w-[200px]">
                    {stats.satisfactionVerbalization}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Column 3: Stats */}
          <div className="flex items-center justify-center px-8 text-center md:text-left">
            <div className="flex items-center gap-6">
              <span className="text-[42px] font-bold text-white tracking-[-0.42px]">{stats.casesHandled}+</span>
              <div>
                <p className="text-[16px] text-white opacity-60 max-w-[150px]">
                  {stats.casesLabel}
                </p>
                {stats.casesVerbalization && (
                  <p className="text-[13px] text-white opacity-40 mt-1 max-w-[200px]">
                    {stats.casesVerbalization}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
