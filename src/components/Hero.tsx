'use client'

import React from 'react'
import Link from 'next/link'
import { PlayCircle, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-[#e1dddc]">
      {/* Marquee */}
      <div className="bg-black py-3 overflow-hidden whitespace-nowrap mb-12">
        <div className="inline-block animate-marquee text-white font-bold uppercase tracking-[2px] text-[14px]">
          NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / 
        </div>
        <div className="inline-block animate-marquee text-white font-bold uppercase tracking-[2px] text-[14px]">
          NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / NEW SEASON / 
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-block bg-[#c9c9c9] px-4 py-1.5 rounded-[6px] text-[12px] font-bold text-black uppercase tracking-[0.96px] mb-6">
            LOREM IPSUM DOLO
          </div>
          <h1 className="text-[40px] md:text-[53px] font-bold leading-[1.1] tracking-[-0.53px] text-black mb-8 max-w-[667px]">
            Lorem ipsum dolor sit amet consectetur 
          </h1>
          <p className="text-[18px] leading-[1.3] text-black mb-12 max-w-[570px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-[20px] transition-transform hover:scale-105">
              <div className="w-[34px] h-[34px] relative">
                <img src="/images/7c93db6f-cade-46e1-858e-5df615b47674.png" alt="" className="w-full h-full object-contain invert" />
              </div>
              <div>
                <div className="text-[12px] text-[#9e9e9e]">Available on</div>
                <div className="text-[18px] font-bold">Apple Podcast</div>
              </div>
            </Link>
            <Link href="#" className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-[20px] transition-transform hover:scale-105">
              <div className="w-[34px] h-[34px] relative">
                <img src="/images/4109017c-2e12-4292-bc3e-ffaedadd5fe4.png" alt="" className="w-full h-full object-contain invert" />
              </div>
              <div>
                <div className="text-[12px] text-[#9e9e9e]">Available on</div>
                <div className="text-[18px] font-bold">Spotify</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[451/581]">
          <div className="absolute inset-0 bg-[#6f6f6f] rounded-[12px] flex items-center justify-center overflow-hidden">
             {/* Placeholder for Ebook/Featured Image */}
             <div className="w-1/2 h-1/2 bg-white/10 rounded flex items-center justify-center">
                <PlayCircle size={64} className="text-white/20" />
             </div>
          </div>
        </div>
      </div>

      {/* Featured Episode Banner */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-16">
        <div className="bg-[#070519] rounded-[12px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-[#c9c9c9] rounded-[8px] shrink-0" />
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[20px] md:text-[24px] font-bold text-white">Episode Name Goes Here</h3>
              <Link href="#" className="text-[14px] text-white/70 hover:text-white flex items-center gap-1">
                Release Page <ArrowRight size={14} />
              </Link>
            </div>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[800px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-white">
                <PlayCircle size={24} />
                <span className="text-[14px]">Episode 01 / 01.07.25</span>
              </button>
              {/* Progress Bar Placeholder */}
              <div className="flex-grow h-1 bg-white/20 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-white" />
              </div>
              <span className="text-[12px] text-white/50">0:00 / 0:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
