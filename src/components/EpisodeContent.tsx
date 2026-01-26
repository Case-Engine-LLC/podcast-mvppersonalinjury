'use client'

import React, { useState } from 'react'
import { PlayCircle, Quote } from 'lucide-react'

const EpisodeContent = () => {
  const [activeTab, setActiveTab] = useState('Transcript')

  const tabs = ['Transcript', 'Overview', 'Lorem Ipsum Dolor']

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Player Section */}
        <div className="bg-[#070519] rounded-[24px] aspect-video flex items-center justify-center mb-16 relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <PlayCircle size={80} className="text-white relative z-10 cursor-pointer hover:scale-110 transition-transform" />
           {/* Decorative elements */}
           <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between opacity-50">
              <div className="h-1 bg-white/20 rounded-full flex-grow mx-4 relative">
                 <div className="absolute top-0 left-0 h-full w-1/4 bg-white" />
              </div>
              <span className="text-white text-[12px]">00:00 / 45:00</span>
           </div>
        </div>

        {/* Tabs and Content */}
        <div className="max-w-[1164px] mx-auto">
          {/* Tabs */}
          <div className="flex items-center gap-12 border-b border-black/10 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-4 text-[18px] font-bold transition-all relative ${
                  activeTab === tab ? 'text-black' : 'text-black/40'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
             <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-8">Donec Mi Odio, Faucibus At.</h2>
             
             <div className="text-[18px] leading-[1.6] text-black/80 space-y-8 mb-12">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                </p>
             </div>

             <div className="bg-[#070519] rounded-[20px] p-8 md:p-12 mb-12 relative overflow-hidden">
                <Quote className="absolute top-8 left-8 text-white/5" size={120} />
                <div className="relative z-10">
                   <p className="text-[20px] md:text-[24px] italic leading-[1.4] text-white/90">
                    "Phasellus a est. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Phasellus consectetuer vestibulum elit. Fusce egestas elit eget lorem."
                   </p>
                </div>
             </div>

             <div className="text-[18px] leading-[1.6] text-black/80 space-y-8 mb-12">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
             </div>

             <button className="text-[18px] font-bold text-black hover:opacity-70 transition-opacity border-b-2 border-black">
                Read More
             </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EpisodeContent
