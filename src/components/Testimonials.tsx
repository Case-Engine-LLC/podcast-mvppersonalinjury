'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials as testimonialsData } from '@/data/siteData'

interface Testimonial {
  id: number
  name: string
  initials: string
  role: string
  rating: number
  text: string
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const testimonials: Testimonial[] = testimonialsData

  const cardsPerView = isMobile ? 1 : 3
  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0

  const getTransform = () => {
    if (isMobile) {
      return `translateX(-${currentIndex * 100}%)`
    }
    return `translateX(-${currentIndex * (100 / cardsPerView)}%)`
  }

  return (
    <section className="testimonails-home bg-primary py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Slider Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out md:gap-6"
              style={{
                transform: getTransform()
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                >
                  {/* Testimonial Card */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col border border-gray-200">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {testimonial.initials}
                        </span>
                      </div>

                      {/* Name and Role */}
                      <div>
                        <h3 className="text-lg font-bold text-black">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          size={20}
                          fill="#FFA500"
                          stroke="#FFA500"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-base text-gray-700 leading-relaxed flex-grow">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-8">
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={24} stroke="white" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} stroke="white" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex-grow h-1 bg-black/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-500 ease-in-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
