'use client'

import React from 'react'
import Header from './Header'
import Hero from './Hero'
import StatsBanner from './StatsBanner'
import AwardsSection from './AwardsSection'
import ChapterSection from './ChapterSection'
import AuthorBox from './AuthorBox'
import EpisodeCard from './EpisodeCard'
import SubscribeBanner from './SubscribeBanner'
import PodcastSubscribe from './PodcastSubscribe'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import ContactSection from './ContactSection'
import BottomMarquee from './BottomMarquee'
import Footer from './Footer'

const HomeEbook = () => {
  const episodes = [
    {
      id: '1',
      title: 'Lorem ipsum Dolor Sit Amet Consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      date: '12.07.25',
      episodeNumber: '01',
    },
    {
      id: '2',
      title: 'Lorem ipsum Dolor Sit Amet Consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      date: '12.07.25',
      episodeNumber: '01',
    },
    {
      id: '3',
      title: 'Lorem ipsum Dolor Sit Amet Consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      date: '12.07.25',
      episodeNumber: '01',
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <StatsBanner />
        <AwardsSection />
        
        <ChapterSection />
        <AuthorBox />

        {/* Latest Episodes Section */}
        <section className="py-24 bg-[#070519]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.48px] text-white">
                Latest Episodes
              </h2>
              <p className="text-[18px] leading-[1.3] text-white/70 max-w-[926px] mx-auto mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {episodes.map((episode) => (
                <EpisodeCard key={episode.id} {...episode} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="bg-white text-black px-12 py-4 rounded-[6px] font-bold text-[18px] hover:bg-white/90 transition-all inline-flex items-center gap-2">
                View All Episodes
              </button>
            </div>
          </div>
        </section>

        <PodcastSubscribe />
        
        <SubscribeBanner />

        <Testimonials />
        
        <ContactSection />
        
        <FAQ />
        
        <BottomMarquee />
      </main>

      <Footer />
    </div>
  )
}

export default HomeEbook