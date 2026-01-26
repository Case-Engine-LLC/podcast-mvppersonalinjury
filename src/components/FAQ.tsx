'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.48px] text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] leading-[1.3] text-black/70 max-w-[926px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className="max-w-[1164px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-black/5 last:border-0"
            >
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[18px] font-bold text-black group-hover:text-black/70 transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-8 animate-in fade-in slide-in-from-top-2">
                  <p className="text-[16px] leading-[1.6] text-black/70">
                    {faq.answer}
                  </p>
                  {index === 0 && (
                    <button className="mt-6 bg-[#3b82f6] text-white px-6 py-2 rounded-[4px] font-bold text-[14px] hover:bg-opacity-90 transition-all uppercase">
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
