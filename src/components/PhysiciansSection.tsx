import { motion } from 'motion/react'
import drNasirImg from '../assets/staff1.jpg'
import drRaminImg from '../assets/dr_ramin_ahmad.jpg'
import childPacketPdf from '../assets/new_child_packet.pdf'
import adultFormPdf from '../assets/adult_new_patient_form.pdf'

export const PhysiciansSection = () => {
  const physicians = [
    {
      name: 'Dr. Nasir Ahmed, M.D.',
      title: 'Pediatric Specialist & Founding Physician',
      specialty: 'Pediatrics & Adolescent Care',
      ages: 'Ages 0 – 18',
      image: drNasirImg,
      badgeText: '20+ Years Caring for North Central Florida',
      badgeColor: 'bg-sky-50 text-[#00529b] border-sky-200',
      pdf: childPacketPdf,
      pdfLabel: 'Child Registration (PDF)',
      credentials: [
        'Residency: West Virginia University School of Medicine',
        'Fellowship Trained: Royal Hospitals, United Kingdom',
        'Specialist in Newborn Care, Developmental Milestones & Pediatric Asthma',
        'Guaranteed Same-Day Urgent Sick Visits for Local Children & Teens',
      ],
      bio: 'Founding physician of High Springs Pediatrics, dedicated to providing compassionate, personal, and accessible medicine to local children and growing families.',
    },
    {
      name: 'Dr. Ramin Ahmad, M.D.',
      title: 'Internal Medicine Physician',
      specialty: 'Adult & Senior Primary Care',
      ages: 'Adults & Seniors (18+)',
      image: drRaminImg,
      badgeText: 'HCA Florida North Florida Hospital Staff Privileges',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
      pdf: adultFormPdf,
      pdfLabel: 'Adult Intake Form (PDF)',
      credentials: [
        'Residency: University of Central Florida (UCF) / HCA Healthcare',
        'Active Hospital Staff Privileges: HCA Florida North Florida Hospital',
        'Comprehensive Annual Wellness Physicals, EKG & On-Site Blood Panels',
        'Long-term Management: Hypertension, Type 2 Diabetes, Lipids & Thyroid',
      ],
      bio: 'Continues the family legacy with modern evidence-based adult primary care, preventive screenings, and cardiovascular chronic disease management.',
    },
  ]

  return (
    <section id="physicians" className="py-16 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00529b]/10 border border-[#00529b]/20 text-[#00529b] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47321]" />
            <span>Two Generations of Trusted Clinical Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight">
            Meet Our Attending Physicians
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            Father and son doctors practicing side-by-side to deliver personal, continuous care for your entire family under one roof.
          </p>
        </div>

        {/* 2 Distinguished Physician Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {physicians.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="pro-med-card bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                {/* Header with Physician Headshot & Hospital Badge */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6 text-center sm:text-left">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden ring-4 ring-slate-100 border border-slate-200 shadow-md flex-shrink-0 bg-slate-50 relative">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top med-img group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-[#00529b]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00529b] text-white text-[11px] font-bold tracking-wide">
                        {doc.specialty}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                        {doc.ages}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#002147] tracking-tight leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#00529b] mt-1">
                      {doc.title}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>
                </div>

                {/* Hospital Badge Pill */}
                <div className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 mb-5 ${doc.badgeColor}`}>
                  <span className="text-base">🏥</span>
                  <span>{doc.badgeText}</span>
                </div>

                {/* Verified Qualifications List */}
                <div className="border-t border-slate-100 pt-4 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Board Training &amp; Hospital Affiliations:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {doc.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-sky-100 text-[#00529b] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  className="btn-uf-primary w-full sm:w-auto flex-1 text-center py-2.5 px-4 rounded-xl text-white text-xs sm:text-sm font-bold shadow-sm"
                >
                  Book with {doc.name.split(' ')[1]}
                </a>
                <a
                  href={doc.pdf}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#00529b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                  <span>{doc.pdfLabel}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhysiciansSection
