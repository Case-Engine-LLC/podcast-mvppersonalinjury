'use client'

import React, { useState } from 'react'
import { Info } from 'lucide-react'

interface Badge {
  id: number
  title: string
  imageSrc: string
  tooltip: string
}

const TrustBadges = () => {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

  const badges: Badge[] = [
    {
      id: 1,
      title: 'TRUSTED SELLER',
      imageSrc: '/badges/badge-1.svg', // Replace with your actual badge image
      tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      title: 'SAFE CHOICE',
      imageSrc: '/badges/badge-2.svg', // Replace with your actual badge image
      tooltip: 'Sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
      id: 3,
      title: 'TRUSTED SELLER',
        imageSrc: '/badges/badge-1.svg', // Replace with your actual badge image
      tooltip: 'Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      id: 4,
      title: 'SAFE CHOICE',
      imageSrc: '/badges/badge-2.svg', // Replace with your actual badge image
      tooltip: 'Duis aute irure dolor in reprehenderit in voluptate.'
    },
    {
      id: 5,
      title: 'TRUSTED SELLER',
      imageSrc: '/badges/badge-1.svg', // Replace with your actual badge image
      tooltip: 'Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 6,
      title: 'SAFE CHOICE',
      imageSrc: '/badges/badge-2.svg', // Replace with your actual badge image
      tooltip: 'Sunt in culpa qui officia deserunt mollit anim.'
    }
  ]

  return (
    <section className="bg-white py-12 overflow-hidden border-y border-gray-200">
      <div className="flex animate-marquee-slower">
        {/* First set of badges */}
        {badges.map((badge) => (
          <div
            key={`first-${badge.id}`}
            className="relative flex items-center gap-4 mx-16 shrink-0"
            onMouseEnter={() => setHoveredBadge(badge.id)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            {/* Badge Image */}
            <img
              src={badge.imageSrc}
              alt={badge.title}
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="30" fill="%23e5e7eb" stroke="%23000" stroke-width="2"/><text x="32" y="38" font-family="Arial" font-size="12" text-anchor="middle" fill="%23000">BADGE</text></svg>';
              }}
            />

            {/* Info Icon */}
            <button className="relative">
              <Info size={20} className="text-gray-400 hover:text-black transition-colors" />

              {/* Tooltip */}
              {hoveredBadge === badge.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-black text-white text-xs rounded-lg p-3 shadow-lg z-10 animate-in fade-in slide-in-from-bottom-2">
                  {badge.tooltip}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-black rotate-45" />
                </div>
              )}
            </button>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {badges.map((badge) => (
          <div
            key={`second-${badge.id}`}
            className="relative flex items-center gap-4 mx-16 shrink-0"
            onMouseEnter={() => setHoveredBadge(badge.id + 100)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            {/* Badge Image */}
            <img
              src={badge.imageSrc}
              alt={badge.title}
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="30" fill="%23e5e7eb" stroke="%23000" stroke-width="2"/><text x="32" y="38" font-family="Arial" font-size="12" text-anchor="middle" fill="%23000">BADGE</text></svg>';
              }}
            />

            {/* Info Icon */}
            <button className="relative">
              <Info size={20} className="text-gray-400 hover:text-black transition-colors" />

              {/* Tooltip */}
              {hoveredBadge === badge.id + 100 && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-black text-white text-xs rounded-lg p-3 shadow-lg z-10 animate-in fade-in slide-in-from-bottom-2">
                  {badge.tooltip}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-black rotate-45" />
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges
