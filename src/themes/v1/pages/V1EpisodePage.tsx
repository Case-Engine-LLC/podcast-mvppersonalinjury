import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'

interface V1EpisodePageProps {
  episodeId: string
}

const V1EpisodePage = ({ episodeId }: V1EpisodePageProps) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Header variant="light" />

      <main className="pt-[6rem]">
        <EpisodeHero />
        <EpisodeContent />
        <OtherEpisodes />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default V1EpisodePage
