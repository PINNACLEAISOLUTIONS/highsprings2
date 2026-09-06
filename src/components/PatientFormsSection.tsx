import { motion } from 'motion/react'
import childPacketPdf from '../assets/new_child_packet.pdf'
import adultFormPdf from '../assets/adult_new_patient_form.pdf'

export const PatientFormsSection = () => {
  return (
    <section id="forms" className="py-16 sm:py-24 bg-[#f2f7f6] text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f766e]/10 border border-[#0f766e]/20 text-[#0f766e] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            <span>Save Waiting Room Time</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#134e48] tracking-tight">
            Official Patient Registration Packets
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            Download, print, and fill out your official medical intake forms in advance to speed up check-in at our High Springs office.
          </p>
        </div>

        {/* 2 White Medical Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 max-w-5xl mx-auto mb-12">
          {/* Child Registration Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="pro-med-card rounded-3xl border border-slate-200 p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-teal-50 border border-teal-200 text-[#0f766e] flex items-center justify-center text-2xl shadow-sm">
                  📄
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-[#0f766e] text-xs font-bold border border-teal-200">
                  Pediatrics (Ages 0–18)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#134e48] mb-2">
                New Child Registration Packet (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Official registration form for infants, children, and teens under 18. Includes full health history, parental consent, immunization records release, and insurance authorization.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span className="font-semibold">Pediatric Medical History &amp; Consent</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Standard Printable PDF &bull; 2.0 MB</span>
                </div>
              </div>
            </div>

            <a
              href={childPacketPdf}
              download="High_Springs_Pediatrics_Child_Packet.pdf"
              className="btn-uf-primary inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
              Download Child Packet (PDF)
            </a>
          </motion.div>

          {/* Adult Registration Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="pro-med-card rounded-3xl border border-slate-200 p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center text-2xl shadow-sm">
                  📋
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200">
                  Adult Care &bull; Dr. Ramin Ahmad
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#134e48] mb-2">
                Adult New Patient Intake Form (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Official adult intake for internal medicine. Covers cardiovascular review, chronic symptom assessment, prior surgeries, and complete prescription medication reconciliation.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span className="font-semibold">Cardiovascular &amp; Medication Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Standard Printable PDF &bull; 1.7 MB</span>
                </div>
              </div>
            </div>

            <a
              href={adultFormPdf}
              download="High_Springs_Primary_Care_Adult_Form.pdf"
              className="btn-uf-primary inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
              Download Adult Form (PDF)
            </a>
          </motion.div>
        </div>

        {/* First Visit Checklist Bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <h4 className="text-base font-bold text-[#134e48] mb-3 flex items-center gap-2">
            <span className="text-[#f97316] text-lg">★</span> What to Bring with Your Form on Visit Day:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mt-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-[#134e48] text-xs block mb-1">1. Photo ID</span>
              <p className="text-[11px] text-slate-500">Government driver license, state ID, or passport.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-[#134e48] text-xs block mb-1">2. Insurance Card</span>
              <p className="text-[11px] text-slate-500">Current commercial, Medicare, or Florida Medicaid card.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-[#134e48] text-xs block mb-1">3. Vaccine Records</span>
              <p className="text-[11px] text-slate-500">Childhood immunization booklet or state records.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-[#134e48] text-xs block mb-1">4. Medications</span>
              <p className="text-[11px] text-slate-500">Prescription bottles or accurate daily schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientFormsSection
