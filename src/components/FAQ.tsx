'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqGroups } from '@/data/siteData'

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>('0-0')

  const toggleItem = (key: string) => {
    setOpenItem(openItem === key ? null : key)
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Common questions about the podcast, personal injury law, and working with an attorney.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">
              {/* Group Label */}
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-gray-200 px-4 py-1.5 rounded-md text-xs font-bold text-black uppercase tracking-wider">
                  {group.label}
                </span>
                {group.description && (
                  <span className="text-sm text-gray-400">{group.description}</span>
                )}
              </div>

              {/* Questions */}
              <div className="flex flex-col gap-3">
                {group.questions.map((faq, faqIndex) => {
                  const itemKey = `${groupIndex}-${faqIndex}`
                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                    >
                      <button
                        className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(itemKey)}
                      >
                        <span className="text-base md:text-lg font-bold text-black pr-4">
                          {faq.question}
                        </span>
                        <span className="shrink-0">
                          {openItem === itemKey ? (
                            <Minus size={24} className="text-black" strokeWidth={2} />
                          ) : (
                            <Plus size={24} className="text-black" strokeWidth={2} />
                          )}
                        </span>
                      </button>

                      {openItem === itemKey && (
                        <div className="px-6 md:px-8 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-base text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
