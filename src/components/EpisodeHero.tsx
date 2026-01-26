'use client'

import React from 'react'
import Link from 'next/link'

const EpisodeHero = () => {
  return (
    <section className="py-16 bg-[#f1f2f4]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#c9c9c9] px-4 py-1.5 rounded-[6px] text-[12px] font-bold text-black uppercase tracking-[0.96px] mb-6">
              EPISODE 1
            </div>
            <h1 className="text-[40px] md:text-[53px] font-bold leading-[1.1] tracking-[-0.53px] text-black mb-8 max-w-[667px]">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h1>
            <p className="text-[18px] leading-[1.3] text-black mb-12 max-w-[570px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-[12px] transition-transform hover:scale-105">
                <div className="w-[30px] h-[30px] relative">
                  <img src="/images/7c93db6f-cade-46e1-858e-5df615b47674.png" alt="" className="w-full h-full object-contain invert" />
                </div>
                <div>
                   <div className="text-[10px] text-[#9e9e9e] uppercase">Available on</div>
                   <div className="text-[16px] font-bold">Apple Podcast</div>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-[12px] transition-transform hover:scale-105">
                <div className="w-[30px] h-[30px] relative">
                  <img src="/images/4109017c-2e12-4292-bc3e-ffaedadd5fe4.png" alt="" className="w-full h-full object-contain invert" />
                </div>
                <div>
                   <div className="text-[10px] text-[#9e9e9e] uppercase">Available on</div>
                   <div className="text-[16px] font-bold">Spotify</div>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-[12px] transition-transform hover:scale-105">
                <div className="w-[30px] h-[30px] relative">
                  <img src="/images/a3042885-214b-4a3f-b35a-ad83321daab1.png" alt="" className="w-full h-full object-contain invert" />
                </div>
                <div>
                   <div className="text-[10px] text-[#9e9e9e] uppercase">Available on</div>
                   <div className="text-[16px] font-bold">Soundcloud</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-square max-w-[500px] ml-auto">
            <div className="absolute inset-0 bg-[#eeeef0] rounded-[20px] flex items-center justify-center overflow-hidden border border-black/5">
                <div className="w-1/3 h-1/3 border-4 border-black/10 rounded-lg flex items-center justify-center">
                   <div className="w-full h-px bg-black/10 rotate-45" />
                   <div className="w-full h-px bg-black/10 -rotate-45" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EpisodeHero
