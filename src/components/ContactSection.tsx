'use client'

import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { contact } from '@/data/siteData'

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#f1f2f4]">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[12px] shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-[#070519] p-12 text-white">
            <h2 className="text-[24px] font-bold mb-12 leading-none">Get in touch now!</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-white/50 shrink-0" size={24} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.96px] mb-1 opacity-50">ADDRESS</p>
                  <p className="text-[18px]">{contact.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-white/50 shrink-0" size={24} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.96px] mb-1 opacity-50">PHONE</p>
                  <p className="text-[18px]">{contact.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-white/50 shrink-0" size={24} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.96px] mb-1 opacity-50">EMAIL</p>
                  <p className="text-[18px]">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">NAME</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full border border-black/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-black/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-black mb-2">EMAIL</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full border border-black/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-black/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[14px] font-bold text-black mb-2">MESSAGE</label>
                <textarea
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full border border-black/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-black/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-12 py-4 rounded-[3px] font-bold text-[14px] uppercase tracking-[0.7px] hover:bg-black/80 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
