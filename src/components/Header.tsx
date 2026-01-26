'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Nav Item', href: '#' },
    { name: 'Nav Item', href: '#' },
    { name: 'Nav Item', href: '#' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e1dddc] md:bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-[18px] font-extrabold tracking-[-0.36px] text-black">
          LOGO HERE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[16px] font-bold text-black hover:opacity-70 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Subscribe Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 bg-white px-6 py-2 rounded-[6px] text-[16px] font-bold text-black hover:bg-black hover:text-white transition-all group"
          >
            <div className="w-[18px] h-[18px] relative">
              <img src="/images/8678af5e-9562-4d38-9998-6a1755239ff6.png" alt="" className="w-full h-full object-contain group-hover:invert transition-all" />
            </div>
            Subscribe
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#e1dddc] absolute top-full left-0 right-0 border-t border-black/10 py-6 px-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[18px] font-bold text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-[6px] text-[18px] font-bold text-black shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
