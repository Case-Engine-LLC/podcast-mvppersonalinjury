'use client'

import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Meghan Doyle',
      initials: 'MD',
      source: 'Google Reviewer',
      rating: 5,
      text: 'Great attorney. Brett was very helpful in the beginning explaining everything to me. I was always informed on my case and the status of it. When I had questions they answered quickly . Jessica helped resolve my medical bills by almost half! I highly recommend MVP Attorneys !',
    },
    {
      name: 'Meghan Doyle',
      initials: 'MD',
      source: 'Google Reviewer',
      rating: 5,
      text: 'I had a great experience working with MVP Accident Attorneys! They were very informative and kept me up-to-date with everything going on. Brett was amazing with his communication and timeliness to handle any of my concerns and questions! The whole team was great and explained everything thoroughly. I’d highly recommend going with them if you need an accident attorney!',
    },
    {
      name: 'Meghan Doyle',
      initials: 'MD',
      source: 'Google Reviewer',
      rating: 5,
      text: 'Great attorney. Brett was very helpful in the beginning explaining everything to me. I was always informed on my case and the status of it. When I had questions they answered quickly . Jessica helped resolve my medical bills by almost half! I highly recommend MVP Attorneys !',
    }
  ]

  return (
    <section className="py-24 bg-[#f1f2f4]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#c9c9c9] px-6 py-1.5 rounded-[6px] text-[12px] font-bold text-black uppercase tracking-[0.96px] mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.48px] text-black mb-8">
            Lorem ipsum dolor sit amet consectetur 
          </h2>
          <p className="text-[18px] leading-[1.3] text-black max-w-[926px] mx-auto opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-[12px] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#eeeef0] flex items-center justify-center font-bold text-[16px] text-black">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-black">{item.name}</h4>
                  <p className="text-[14px] text-[#676767]">{item.source}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-6 text-[#ce5743]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[16px] leading-[1.4] text-black opacity-80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
