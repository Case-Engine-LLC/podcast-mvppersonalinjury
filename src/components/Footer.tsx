'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navColumns = [
    {
      title: 'Episodes',
      links: [
        { name: 'Episode 1', href: '#' },
        { name: 'Episode 2', href: '#' },
        { name: 'Episode 3', href: '#' },
      ],
    },
    {
      title: '',
      links: [
        { name: 'Episode 4', href: '#' },
        { name: 'Episode 5', href: '#' },
        { name: 'Episode 6', href: '#' },
      ],
    },
    {
      title: '',
      links: [
        { name: 'Episode 7', href: '#' },
        { name: 'Episode 8', href: '#' },
        { name: 'Episode 9', href: '#' },
      ],
    }
  ]

  return (
    <footer className="bg-white border-t border-black/10 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-4">
            <Link href="/" className="text-[18px] font-extrabold tracking-[-0.36px] text-black mb-6 block">
              LOGO HERE
            </Link>
            <p className="text-[14px] leading-[1.4] text-[#616161] max-w-[400px] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorealiqua. 
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Facebook size={20} className="text-black" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Instagram size={20} className="text-black" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin size={20} className="text-black" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Twitter size={20} className="text-black" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Youtube size={20} className="text-black" />
              </Link>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navColumns.map((column, colIndex) => (
              <div key={colIndex}>
                {column.title && (
                  <h4 className="text-[16px] font-bold text-black mb-4">{column.title}</h4>
                )}
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-[16px] text-black hover:opacity-70 transition-opacity">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between text-[14px] text-[#616161] gap-4">
          <p>© {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
