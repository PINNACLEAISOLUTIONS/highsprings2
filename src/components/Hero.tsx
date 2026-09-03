import { motion } from 'motion/react'
import clinicExteriorImg from '../assets/clinic_exterior.jpg'

interface HeroProps {
  phone: string
  phoneTel: string
}

export const Hero = ({ phone, phoneTel }: HeroProps) => {
  return (
    <section id="home" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden ambient-glow-sky">
      <div className="site-container relative z-10 flex flex-col items-center text-center">
        {/* Trust Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 status-dot-pulse" />
          High Springs, Florida &bull; Accepting New Patients &amp; Transfers
        </motion.div>

        {/* Primary Headline with Balanced Wrap */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl mb-4"
        >
          Compassionate Family Healthcare{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-200">
            For Every Generation
          </span>
        </motion.h1>

        {/* Reassuring Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
        >
          Led by founding pediatrician <strong>Dr. Nasir Ahmed, M.D.</strong> and internal medicine physician <strong>Dr. Ramin Ahmad, M.D.</strong> Dedicated newborn checkups, adolescent health, and comprehensive adult care under one roof.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-10"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-900/30 whitespace-nowrap"
          >
            Request an Appointment
          </a>
          <a
            href="#forms"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-all shadow-sm whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Registration Forms (PDF)
          </a>
          <a
            href={phoneTel}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-full text-slate-300 hover:text-white text-sm font-semibold hover:bg-slate-900/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call: {phone}
          </a>
        </motion.div>

        {/* Clinic Exterior Visual Showcase with Clean Depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-5xl rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative med-card group"
        >
          <div className="h-56 sm:h-72 md:h-96 w-full relative overflow-hidden">
            <img
              src={clinicExteriorImg}
              alt="High Springs Pediatrics & Primary Care Clinic Building at 19228 NW US Highway 441, High Springs, FL"
              className="w-full h-full object-cover med-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            {/* Overlay Badges */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-white">
              <div className="flex items-center gap-2 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="font-semibold">19228 NW US Highway 441, High Springs, FL 32643</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-sky-200">
                <span>Free Patient Parking &bull; Stroller Accessible Entrance</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Checkpoints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-300 mt-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Same-Day Sick Visits
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            On-Site Rapid Labs
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            HCA &amp; UF Health Networks
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Florida Medicaid &amp; Commercial Insurance
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
