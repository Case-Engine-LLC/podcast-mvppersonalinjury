'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      showCta: true
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showCta: false
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showCta: false
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showCta: false
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showCta: false
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  {faq.showCta && (
                    <button className="mt-2 bg-secondary text-white px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all uppercase tracking-wider">
                      CTA GOES HERE
                    </button>
                  )}
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
