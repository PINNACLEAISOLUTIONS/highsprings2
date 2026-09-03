import { motion } from 'motion/react'
import childPacketPdf from '../assets/new_child_packet.pdf'
import adultFormPdf from '../assets/adult_new_patient_form.pdf'

export const PatientFormsSection = () => {
  return (
    <section id="forms" className="py-16 sm:py-24 bg-[#0b162c] text-white relative">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Save Waiting Room Time
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Official Patient Registration Forms
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Download and complete your new patient packet before arriving at our High Springs office. Completing these forms in advance helps our clinical staff get your family into an exam room without delay.
          </p>
        </motion.div>

        {/* 2 Primary Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {/* Child Packet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f213f] rounded-3xl border border-slate-800 p-7 sm:p-9 flex flex-col justify-between med-card shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center text-2xl font-bold shadow-inner">
                  👶
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 text-xs font-bold border border-sky-400/20">
                  Pediatrics &bull; Ages 0–18
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                New Child Registration Packet (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Complete intake document for newborns, infants, and youth under 18. Covers birth history, developmental milestones, immunization release, and parental treatment consent.
              </p>

              <div className="bg-slate-900/70 rounded-2xl p-4 border border-slate-800 mb-6 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Includes Medical History &amp; Consent
                </div>
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Standard PDF Format &bull; 2.0 MB
                </div>
              </div>
            </div>

            <a
              href={childPacketPdf}
              download="High_Springs_Pediatrics_Child_Packet.pdf"
              className="btn-primary inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-900/30"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
              Download Child Packet (PDF)
            </a>
          </motion.div>

          {/* Adult Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0f213f] rounded-3xl border border-slate-800 p-7 sm:p-9 flex flex-col justify-between med-card shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-400/30 text-teal-400 flex items-center justify-center text-2xl font-bold shadow-inner">
                  📋
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-bold border border-teal-400/20">
                  Adult Care &bull; Dr. Ramin Ahmad
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Adult New Patient Intake Form (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Official adult intake for internal medicine and routine physicals. Covers cardiovascular screening, prior surgeries, chronic symptoms, and complete prescription medication review.
              </p>

              <div className="bg-slate-900/70 rounded-2xl p-4 border border-slate-800 mb-6 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Medication &amp; Health Review
                </div>
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Standard PDF Format &bull; 1.7 MB
                </div>
              </div>
            </div>

            <a
              href={adultFormPdf}
              download="High_Springs_Primary_Care_Adult_Form.pdf"
              className="btn-primary inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-teal-900/30"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
              Download Adult Form (PDF)
            </a>
          </motion.div>
        </div>

        {/* First Visit Preparation Checklist */}
        <div className="bg-[#081224] border border-slate-800/90 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto text-xs sm:text-sm text-slate-300">
          <h4 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-sky-400 text-xl">✓</span> What to Bring on the Day of Your Visit
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-white block mb-1">1. Photo ID</span>
              <p className="text-[11px] text-slate-400">Driver license, state ID, or military identification.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-white block mb-1">2. Insurance Card</span>
              <p className="text-[11px] text-slate-400">Current commercial, Medicare, or Medicaid card.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-white block mb-1">3. Vaccine Records</span>
              <p className="text-[11px] text-slate-400">Childhood immunization booklet or state records.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-white block mb-1">4. Medication List</span>
              <p className="text-[11px] text-slate-400">Prescription bottles or accurate dosage schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientFormsSection
