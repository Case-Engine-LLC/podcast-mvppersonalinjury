'use client'

import React from 'react'

const AuthorBox = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Author Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block bg-[#c9c9c9] px-6 py-1.5 rounded-[6px] text-[12px] font-bold text-black uppercase tracking-[0.96px] mb-6">
              ABOUT THE AUTHOR
            </div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.48px] text-black mb-8 max-w-[571px]">
              Lorem ipsum dolor sit amet consectetur 
            </h2>
            <div className="text-[18px] leading-[1.3] text-black space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              </p>
            </div>
            <div className="mt-12">
               <img src="/images/d943e6d7-a34b-47d6-ab66-4ec5d8781d10.png" alt="Author Signature" className="h-[84px] object-contain" />
            </div>
          </div>

          {/* Author Image */}
          <div className="order-1 md:order-2">
            <div className="aspect-[454/526] bg-[#c9c9c9] rounded-[20px] relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/images/37f50b44-3bd9-4292-b5bb-2b15044556b9.png" alt="" className="w-1/2 h-1/2 object-contain" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorBox
