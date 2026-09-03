import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import ClinicLogoEmblem from './ClinicLogoEmblem'

interface NavbarProps {
  phone: string
  phoneTel: string
}

export const Navbar = ({ phone, phoneTel }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Find a Doctor', href: '#physicians', active: true },
    { label: 'Pediatric Care', href: '#services' },
    { label: 'Adult Primary Care', href: '#services' },
    { label: 'Patient Forms (PDF)', href: '#forms' },
    { label: 'Insurance Plans', href: '#insurance' },
    { label: 'Location & Facility', href: '#facility' },
    { label: 'Appointments', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* ── Primary Brand Header (UF Deep Navy #002147) ── */}
      <div className="bg-[#002147] border-b border-white/10 py-3.5 px-4">
        <div className="site-container flex items-center justify-between gap-4 sm:gap-6">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3.5 group min-w-0" aria-label="High Springs Pediatrics & Primary Care">
            <ClinicLogoEmblem />
            <div className="flex flex-col justify-center min-w-0">
              <div className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight whitespace-nowrap text-white">
                High Springs <span className="text-[#38bdf8]">Pediatrics</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase whitespace-nowrap flex items-center gap-1.5">
                <span>&amp; Adult Primary Care</span>
                <span className="text-[#f47321]">&bull;</span>
                <span className="text-[#f47321] font-extrabold">North Florida</span>
              </div>
            </div>
          </a>

          {/* Right Action Phone & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={phoneTel}
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#00529b] hover:bg-[#004182] text-white text-xs sm:text-sm font-bold shadow-md whitespace-nowrap border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#f47321]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="hidden sm:inline tabular-nums">{phone}</span>
              <span className="sm:hidden">Call Clinic</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#001736] text-slate-200 hover:text-white border border-slate-700/80 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. UF Blue Secondary Navigation Bar (Direct UF Health style) ── */}
      <div className="hidden lg:block bg-[#00529b] border-t border-white/15 px-4 py-1.5 shadow-md">
        <div className="site-container flex items-center justify-between">
          <nav className="flex items-center gap-1 text-xs font-semibold text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  link.active
                    ? 'bg-white text-[#00529b] font-bold shadow-sm'
                    : 'text-white/95 hover:bg-white/15 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="text-[11px] font-semibold text-sky-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Walk-In Sick Visits Welcome</span>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-700 bg-[#001736] px-4 py-5 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#002147] hover:bg-[#00529b] text-xs font-semibold text-white border border-white/10 transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-[#f47321]">&rarr;</span>
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-700">
              <a
                href={phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00529b] hover:bg-[#004182] text-white font-bold text-sm shadow-md"
              >
                Call Office: {phone}
              </a>
              <a
                href="#forms"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-800"
              >
                Download Patient Forms (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
