'use client'

import React from 'react'
import Header from '../components/Header'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import Footer from '../components/Footer'

interface V3EpisodePageProps {
  episodeId: string
}

const V3EpisodePage = ({ episodeId }: V3EpisodePageProps) => {
  return (
    <div className="bg-[#050505] text-[#e2e8f0] min-h-screen overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <Header />

      <main>
        <EpisodeHero episodeId={episodeId} />
        <EpisodeContent episodeId={episodeId} />
        <OtherEpisodes currentEpisodeId={episodeId} />
      </main>

      <Footer />
    </div>
  )
}

export default V3EpisodePage
