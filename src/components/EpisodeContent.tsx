'use client'

import React, { useState } from 'react'
import { Play } from 'lucide-react'

const EpisodeContent = () => {
  const [activeTab, setActiveTab] = useState('Transcript')
  const [isExpanded, setIsExpanded] = useState(false)

  const tabs = ['Transcript', 'Overview', 'Lorem ipsum dolor']

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="w-[90%] mx-auto bg-primary rounded-[30px] py-12 md:py-16">
        <div className="max-w-container mx-auto px-6 md:px-12">
          {/* Video Player */}
          <div className="relative w-full aspect-video bg-[#3a3a3a] rounded-3xl overflow-hidden mb-12 flex items-center justify-center group cursor-pointer">
            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={32} className="text-white fill-white ml-1" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 md:gap-12 border-b border-white/10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-4 text-base md:text-lg font-bold transition-all relative ${
                  activeTab === tab ? 'text-white' : 'text-white/40'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-5xl">
            {/* Transcript Tab */}
            {activeTab === 'Transcript' && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Episode Transcript
                </h2>

                <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-6 mb-8">
                  <p>
                    <span className="text-white font-semibold">[00:00:00]</span> Welcome back to another episode. Today we're diving deep into an incredible topic that's been on everyone's mind lately.
                  </p>
                  <p>
                    <span className="text-white font-semibold">[00:02:15]</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    <span className="text-white font-semibold">[00:05:30]</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Key Discussion Points
                </h3>

                <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-6 mb-8">
                  <p>
                    <span className="text-white font-semibold">[00:10:45]</span> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>

                <div className="bg-[#2a2a3e] rounded-3xl p-8 md:p-12 mb-8 relative">
                  <div className="text-white/20 text-[80px] md:text-[100px] font-bold leading-[0.7] -mb-2">"</div>
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    <span className="text-white font-semibold">[00:15:20]</span> This is the most important insight from today's discussion. Remember this key takeaway as we move forward.
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-6 mb-8">
                    <p>
                      <span className="text-white font-semibold">[00:20:00]</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                      <span className="text-white font-semibold">[00:25:30]</span> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-base md:text-lg font-bold text-white hover:text-white/80 transition-colors"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </>
            )}

            {/* Overview Tab */}
            {activeTab === 'Overview' && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Episode Overview
                </h2>

                <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-6 mb-8">
                  <p>
                    In this episode, we explore the fascinating world of modern innovation and how it shapes our daily lives. From groundbreaking discoveries to practical applications, we cover it all.
                  </p>
                  <p>
                    Our discussion takes you through the historical context, current trends, and future possibilities. Whether you're a beginner or an expert, there's something valuable for everyone in this conversation.
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  What You'll Learn
                </h3>

                <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-4 mb-8">
                  <p>• The fundamental principles behind the topic</p>
                  <p>• Real-world applications and case studies</p>
                  <p>• Expert insights and industry perspectives</p>
                  <p>• Practical tips you can implement today</p>
                  <p>• Future trends and what to expect next</p>
                </div>

                <div className="bg-[#2a2a3e] rounded-3xl p-8 md:p-12 mb-8 relative">
                  <div className="text-white/20 text-[80px] md:text-[100px] font-bold leading-[0.7] -mb-2">"</div>
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    This episode is a must-listen for anyone interested in staying ahead of the curve and understanding the bigger picture.
                  </p>
                </div>
              </>
            )}

            {/* Lorem ipsum dolor Tab */}
            {activeTab === 'Lorem ipsum dolor' && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Additional Resources
                </h2>

                <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-6 mb-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Recommended Reading
                </h3>

                <div className="text-base md:text-lg leading-relaxed text-white/70 space-y-4 mb-8">
                  <p>• Lorem ipsum dolor sit amet consectetur</p>
                  <p>• Sed do eiusmod tempor incididunt</p>
                  <p>• Ut labore et dolore magna aliqua</p>
                  <p>• Quis nostrud exercitation ullamco</p>
                  <p>• Duis aute irure dolor in reprehenderit</p>
                </div>

                <div className="bg-[#2a2a3e] rounded-3xl p-8 md:p-12 mb-8 relative">
                  <div className="text-white/20 text-[80px] md:text-[100px] font-bold leading-[0.7] -mb-2">"</div>
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EpisodeContent
