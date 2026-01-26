'use client'

import React, { useState } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import EpisodeHero from '../../../components/EpisodeHero'
import EpisodeContent from '../../../components/EpisodeContent'
import OtherEpisodes from '../../../components/OtherEpisodes'
import FAQ from '../../../components/FAQ'

const EpisodePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="pt-[72px]">
        <EpisodeHero />
        <EpisodeContent />
        <OtherEpisodes />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default EpisodePage
