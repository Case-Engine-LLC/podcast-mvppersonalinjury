'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/siteData'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Common questions about personal injury law and working with an attorney.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base md:text-lg font-bold text-black pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0">
                  {openIndex === index ? (
                    <Minus size={24} className="text-black" strokeWidth={2} />
                  ) : (
                    <Plus size={24} className="text-black" strokeWidth={2} />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
