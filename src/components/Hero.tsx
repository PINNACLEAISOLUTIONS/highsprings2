import { motion } from 'motion/react'
import heroUfImg from '../assets/hero_uf_blend@2x.png'

interface HeroProps {
  phone: string
  phoneTel: string
}

export const Hero = ({ phone, phoneTel }: HeroProps) => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-[#072c56] via-[#093566] to-[#143963] text-white pt-6 sm:pt-10 lg:pt-12 pb-0 overflow-hidden border-b border-white/10">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Left Column: Authentic Clinic Headline & Actions */}
          <div className="lg:col-span-7 pb-8 lg:pb-14 text-left">
            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold mb-4"
            >
              <span className="text-[#f47321]">📍</span>
              <span className="truncate">19228 NW US Hwy 441, High Springs &bull; Accepting New Patients</span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-3.5 max-w-2xl"
            >
              Compassionate Family Healthcare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-sky-100">
                For Every Generation
              </span>
            </motion.h1>

            {/* Reassuring Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-6 font-normal max-w-xl"
            >
              Led by founding pediatrician <strong>Dr. Nasir Ahmed, M.D.</strong> and internal medicine physician <strong>Dr. Ramin Ahmad, M.D.</strong> Dedicated newborn checkups, adolescent care, and comprehensive adult primary medicine under one roof in High Springs.
            </motion.p>

            {/* Direct Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6"
            >
              <a
                href="#contact"
                className="btn-uf-orange inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-950/20 whitespace-nowrap cursor-pointer transition-all"
              >
                <span>Request an Appointment</span>
                <span>&rarr;</span>
              </a>
              <a
                href={phoneTel}
                className="btn-uf-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm sm:text-base border border-white/20 shadow-md whitespace-nowrap cursor-pointer transition-all tabular-nums"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f47321]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Call: {phone}</span>
              </a>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap items-center gap-2 text-xs"
            >
              <a
                href="#physicians"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium transition-colors"
              >
                👶 Dr. Nasir Ahmed (Pediatrics)
              </a>
              <a
                href="#physicians"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium transition-colors"
              >
                🩺 Dr. Ramin Ahmad (Adult Care)
              </a>
              <a
                href="#forms"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-sky-200 font-semibold transition-colors"
              >
                📄 Intake Forms (PDF)
              </a>
            </motion.div>
          </div>

          {/* Right Column: Doctor & Patient Photo Blend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-end relative overflow-hidden"
          >
            <div className="relative w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
              <img
                src={heroUfImg}
                alt="Doctor consulting with patient in High Springs clinic"
                className="w-full max-w-[500px] h-auto object-contain object-bottom filter drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
