'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { topicalEntryGrid } from '@/data/siteData'

const TopicalEntryGrid = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {topicalEntryGrid.title}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {topicalEntryGrid.tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === index
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Link Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topicalEntryGrid.tabs[activeTab].links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all group border border-gray-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-secondary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-secondary transition-colors shrink-0 mt-1 ml-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopicalEntryGrid
