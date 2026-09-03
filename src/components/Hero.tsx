import { useState } from 'react'
import { motion } from 'motion/react'
import heroUfImg from '../assets/hero_uf_blend@2x.png'

interface HeroProps {
  phone: string
  phoneTel: string
}

export const Hero = ({ phone, phoneTel }: HeroProps) => {
  const [searchVal, setSearchVal] = useState('')

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchVal.trim()) return
    const q = searchVal.toLowerCase()
    if (q.includes('form') || q.includes('pdf') || q.includes('pack')) {
      window.location.hash = '#forms'
    } else if (q.includes('child') || q.includes('pedia') || q.includes('nasir')) {
      window.location.hash = '#physicians'
    } else if (q.includes('adult') || q.includes('ramin') || q.includes('intern')) {
      window.location.hash = '#physicians'
    } else if (q.includes('insur') || q.includes('blue') || q.includes('medica')) {
      window.location.hash = '#insurance'
    } else {
      window.location.hash = '#services'
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-r from-[#072c56] via-[#093566] to-[#143963] text-white pt-8 sm:pt-12 lg:pt-14 pb-0 overflow-hidden border-b border-white/10">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Left Column: Search & Text (Direct UF Health style) */}
          <div className="lg:col-span-7 pb-8 lg:pb-16 text-left">
            {/* UF Health-style Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold mb-4"
            >
              <span className="text-[#f47321]">📍</span>
              <span className="truncate">19228 NW US Hwy 441, High Springs &bull; Accepting New Patients</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-2.5"
            >
              Find a Doctor
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal max-w-xl"
            >
              Find the health care partner that&apos;s right for you and your family.
            </motion.p>

            {/* UF Health Search Input Pill */}
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              onSubmit={handleHeroSearch}
              className="relative flex items-center w-full max-w-xl bg-white rounded-full p-1.5 pl-5 sm:pl-6 shadow-2xl border border-white/20 mb-6"
            >
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Name, specialty or subject"
                className="w-full text-sm sm:text-base text-slate-800 placeholder:text-slate-500 font-medium outline-none bg-transparent pr-3"
              />
              <button
                type="submit"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#005598] hover:bg-[#004277] text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-md cursor-pointer"
                aria-label="Search doctors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
            </motion.form>

            {/* Quick Action Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center gap-2 text-xs"
            >
              <span className="text-slate-300 font-medium mr-1">Popular:</span>
              <a
                href="#physicians"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors"
              >
                Dr. Nasir Ahmed (Pediatrics)
              </a>
              <a
                href="#physicians"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors"
              >
                Dr. Ramin Ahmad (Adult Care)
              </a>
              <a
                href="#forms"
                className="px-3 py-1.5 rounded-full bg-[#f47321]/20 hover:bg-[#f47321]/30 border border-[#f47321]/40 text-orange-200 font-bold transition-colors"
              >
                Registration Forms (PDF)
              </a>
              <a
                href={phoneTel}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors hidden sm:inline-block tabular-nums"
              >
                Call: {phone}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Doctor & Patient Photo (Direct blend from screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-end relative overflow-hidden"
          >
            <div className="relative w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
              <img
                src={heroUfImg}
                alt="Doctor consulting with patient in clinic"
                className="w-full max-w-[520px] h-auto object-contain object-bottom filter drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
