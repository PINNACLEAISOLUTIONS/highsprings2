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
    { label: 'Home', href: '#home' },
    { label: 'Physicians', href: '#physicians' },
    { label: 'Services', href: '#services' },
    { label: 'Patient Forms', href: '#forms', highlight: true },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Facility', href: '#facility' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 glass-header shadow-xl">
      <div className="site-container h-20 sm:h-22 flex items-center justify-between gap-4">
        {/* Brand Link */}
        <a href="#home" className="flex items-center gap-3.5 group min-w-0" aria-label="High Springs Pediatrics Home">
          <ClinicLogoEmblem />
          <div className="flex flex-col justify-center min-w-0">
            <div className="font-extrabold text-lg sm:text-2xl tracking-tight leading-tight whitespace-nowrap">
              <span className="text-white">High Springs</span>{' '}
              <span className="text-sky-400">Pediatrics</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-300 tracking-wider uppercase whitespace-nowrap">
              &amp; Adult Primary Care
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-slate-200" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${
                link.highlight
                  ? 'text-sky-300 font-semibold bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/20'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a
            href={phoneTel}
            className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-900/30 whitespace-nowrap"
            aria-label={`Call office at ${phone}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span className="hidden sm:inline tabular-nums">{phone}</span>
            <span className="sm:hidden">Call Clinic</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white border border-slate-700/80 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
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
            className="lg:hidden border-t border-slate-800 bg-[#091428]/98 backdrop-blur-2xl px-4 py-5 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-sky-600/20 text-xs font-semibold text-slate-100 border border-slate-800 transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-sky-400">&rarr;</span>
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-800/80">
              <a
                href={phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md"
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
