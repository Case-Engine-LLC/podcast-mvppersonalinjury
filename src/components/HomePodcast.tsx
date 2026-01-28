'use client'

import React from 'react'
import Header from './Header'
import Hero from './Hero'
import TrustBadges from './TrustBadges'
import About from './About'
import LatestEpisodes from './LatestEpisodes'
import StatsBanner from './StatsBanner'
import AwardsSection from './AwardsSection'
import ChapterSection from './ChapterSection'
import AuthorBox from './AuthorBox'
import EpisodeCard from './EpisodeCard'
import SubscribeBanner from './SubscribeBanner'
import PodcastSubscribe from './PodcastSubscribe'
import PodcastSubscribeCTA from './PodcastSubscribeCTA'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import ContactSection from './ContactSection'
import BottomMarquee from './BottomMarquee'
import Footer from './Footer'

const HomePodcast = () => {


  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <TrustBadges />
        <About />
        <LatestEpisodes />
        <PodcastSubscribeCTA />
        <Testimonials />
        <FAQ />

      </main>

      <Footer />
    </div>
  )
}

export default HomePodcast