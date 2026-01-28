'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const episodes = [
    { name: 'Episode 1', href: '#' },
    { name: 'Episode 2', href: '#' },
    { name: 'Episode 3', href: '#' },
    { name: 'Episode 4', href: '#' },
    { name: 'Episode 5', href: '#' },
    { name: 'Episode 6', href: '#' },
    { name: 'Episode 7', href: '#' },
    { name: 'Episode 8', href: '#' },
    { name: 'Episode 9', href: '#' },
  ]

  return (
    <footer className="bg-[#0a0a1a] text-white">
      {/* Marquee Section */}
      <div className="py-12 md:py-16 overflow-hidden">
        <div className="flex animate-marquee-fast">
          <span className="font-extrabold text-white whitespace-nowrap" style={{ fontSize: 'clamp(4rem, 8vw, 12.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01
          </span>
          <span className="font-extrabold text-white whitespace-nowrap ml-8" style={{ fontSize: 'clamp(4rem, 8vw, 12.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Logo & Social */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-6">
              LOGO HERE
            </h3>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Twitter size={20} className="text-white" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin size={20} className="text-white" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Facebook size={20} className="text-white" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Instagram size={20} className="text-white" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Youtube size={20} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column - Episodes */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Episodes</h3>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {episodes.map((episode, index) => (
                <Link
                  key={index}
                  href={episode.href}
                  className="text-base text-white/80 hover:text-white transition-colors"
                >
                  {episode.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-6 md:px-12 py-6">
          <p className="text-sm text-white/60 text-center">
            © {currentYear} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
