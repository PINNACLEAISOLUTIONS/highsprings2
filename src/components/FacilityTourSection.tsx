import { motion } from 'motion/react'
import clinicExteriorImg from '../assets/clinic_exterior.jpg'

export const FacilityTourSection = () => {
  const address = '19228 NW US Highway 441, High Springs, FL 32643'
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`

  return (
    <section id="facility" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white to-[#eef4f3] text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f766e]/10 border border-[#0f766e]/20 text-[#0f766e] text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              <span>Modern Clinical Facility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#134e48] tracking-tight">
              Comfortable, Accessible Family Care
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Conveniently situated directly along US Highway 441 in High Springs, our freestanding medical office provides free parking, stroller accessibility, and private exam rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Photo Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 pro-med-card rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="h-72 sm:h-96 w-full overflow-hidden relative bg-slate-100">
                <img
                  src={clinicExteriorImg}
                  alt="High Springs Medical Building Exterior"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover med-img transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-white/90 bg-[#134e48]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Freestanding Clinic Building &bull; High Springs, FL
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 bg-white">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-bold text-[#134e48] mb-1">
                      High Springs Medical Practice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#0f766e] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{address}</span>
                    </p>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-uf-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-xs shadow-sm whitespace-nowrap"
                  >
                    <span>Get Directions in Google Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Facility Features List */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="pro-med-card rounded-3xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 text-[#0f766e] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>
                </div>
                <h4 className="text-base font-bold text-[#134e48] mb-1">Stroller &amp; Handicap Accessible</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero stairs, smooth ground-level entry, wide doors, and dedicated ADA handicap parking directly in front of the clinic doors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="pro-med-card rounded-3xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M9.5 16h5"/></svg>
                </div>
                <h4 className="text-base font-bold text-[#134e48] mb-1">On-Site Diagnostic Suite</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  CLIA-waived in-office laboratory testing for rapid strep, flu, COVID, urinalysis, EKG, and blood glucose without leaving the clinic.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pro-med-card rounded-3xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h4 className="text-base font-bold text-[#134e48] mb-1">Comfortable Family Environment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Warm, calm reception area with private clinical rooms thoroughly sanitized between every single patient appointment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilityTourSection
