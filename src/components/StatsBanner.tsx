'use client'

import React from 'react'
import { Star } from 'lucide-react'

const StatsBanner = () => {
  return (
    <section className="bg-[#070519] py-12 md:py-16">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* Column 1: Rating */}
          <div className="flex items-center justify-center md:border-r border-white/10 px-8">
            <div className="flex items-center gap-6">
              <span className="text-[42px] font-bold text-white tracking-[-0.42px]">4.98</span>
              <div>
                <div className="flex items-center gap-1 text-[#ce5743] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[16px] text-white opacity-60">2,469 Readers</p>
              </div>
            </div>
          </div>

          {/* Column 2: Satisfaction */}
          <div className="flex items-center justify-center md:border-r border-white/10 px-8 text-center md:text-left">
            <div className="flex items-center gap-6">
              <span className="text-[42px] font-bold text-white tracking-[-0.42px]">99%</span>
              <p className="text-[16px] text-white opacity-60 max-w-[150px]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          {/* Column 3: Stats */}
          <div className="flex items-center justify-center px-8 text-center md:text-left">
            <div className="flex items-center gap-6">
              <span className="text-[42px] font-bold text-white tracking-[-0.42px]">200+</span>
              <p className="text-[16px] text-white opacity-60 max-w-[150px]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
