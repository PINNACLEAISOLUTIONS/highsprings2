import { motion } from 'motion/react'
import clinicExteriorImg from '../assets/clinic_exterior.jpg'

export const FacilityTourSection = () => {
  const address = '19228 NW US Highway 441, High Springs, FL 32643'
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`

  return (
    <section id="facility" className="py-16 sm:py-24 bg-[#0b162c] text-white relative">
      <div className="site-container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Modern Clinical Facility
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Accessible, Comfortable Healthcare in High Springs
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Conveniently situated directly along US Highway 441 in High Springs, our freestanding medical office provides hassle-free parking, stroller accessibility, and sanitized private exam suites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Photo Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#0c1830] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative flex flex-col justify-between med-card group"
            >
              <div className="h-72 sm:h-96 w-full overflow-hidden relative">
                <img
                  src={clinicExteriorImg}
                  alt="High Springs Medical Building Exterior"
                  className="w-full h-full object-cover med-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1830] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      High Springs Medical Practice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {address}
                    </p>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md whitespace-nowrap"
                  >
                    <span>Open in Google Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Facility Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col justify-between gap-4"
            >
              <div className="bg-[#0f213f] rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-lg med-card">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center font-bold mb-3">
                  ♿
                </div>
                <h4 className="text-base font-bold text-white mb-1">Stroller &amp; Handicap Accessible</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero stairs, wide ground-level doors, smooth entry ramp, and designated ADA parking directly in front of the clinic entrance.
                </p>
              </div>

              <div className="bg-[#0f213f] rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-lg med-card">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-400 flex items-center justify-center font-bold mb-3">
                  🔬
                </div>
                <h4 className="text-base font-bold text-white mb-1">On-Site Rapid Diagnostic Suite</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In-office CLIA-waived testing for immediate diagnosis of strep, flu, RSV, COVID, urinalysis, and hemoglobin without sending you elsewhere.
                </p>
              </div>

              <div className="bg-[#0f213f] rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-lg med-card">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold mb-3">
                  🧸
                </div>
                <h4 className="text-base font-bold text-white mb-1">Comfortable Family Environment</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Quiet, child-friendly reception area with clean exam rooms thoroughly sanitized between every single patient visit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilityTourSection
