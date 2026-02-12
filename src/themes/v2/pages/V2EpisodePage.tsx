import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'

interface V2EpisodePageProps {
  episodeId: string
}

function V2EpisodePage({ episodeId }: V2EpisodePageProps) {
  return (
    <div className="bg-[#f4f2ed] text-[#091830] min-h-screen overflow-x-hidden selection:bg-[#FF9E00] selection:text-white">
      <Header />

      <main>
        <EpisodeHero />
        <EpisodeContent />
        <OtherEpisodes />
      </main>

      <Footer />
    </div>
  )
}

export default V2EpisodePage
