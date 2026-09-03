import { motion } from 'motion/react'
import drNasirImg from '../assets/staff1.jpg'
import drRaminImg from '../assets/dr_ramin_ahmad.jpg'
import childPacketPdf from '../assets/new_child_packet.pdf'
import adultFormPdf from '../assets/adult_new_patient_form.pdf'

export const PhysiciansSection = () => {
  const physicians = [
    {
      name: 'Dr. Nasir Ahmed, M.D.',
      title: 'Founding Pediatrician • 20+ Years in High Springs',
      role: 'Pediatrics & Newborn Care',
      ages: 'Ages 0 – 18',
      image: drNasirImg,
      badgeColor: 'sky',
      pdf: childPacketPdf,
      pdfLabel: 'Child Registration Packet (PDF)',
      bullets: [
        'Fellowship Trained: Royal Hospitals UK & West Virginia University Residency',
        'Specialist in Newborn First-Week Checks, Childhood Milestones & Pediatric Asthma',
        'Guaranteed Same-Day Urgent Sick Visits for Local Infants, Children & Teens',
        'School, Sports & Camp Physicals with Complete State Immunization Records (DH 680)',
      ],
      bio: 'Dr. Nasir Ahmed founded High Springs Pediatrics to provide personal, unrushed pediatric medicine to families who value having a doctor who knows their children by name.',
    },
    {
      name: 'Dr. Ramin Ahmad, M.D.',
      title: 'Internal Medicine Specialist',
      role: 'Adult & Senior Primary Care',
      ages: 'Adults & Seniors (18+)',
      image: drRaminImg,
      badgeColor: 'teal',
      pdf: adultFormPdf,
      pdfLabel: 'Adult New Patient Form (PDF)',
      bullets: [
        'Residency: University of Central Florida (UCF) College of Medicine / HCA Healthcare',
        'Active Hospital Staff Privileges at HCA Florida North Florida Hospital',
        'Comprehensive Annual Wellness Physicals, EKG & On-Site Blood Panels',
        'Long-term Management: Hypertension, Type 2 Diabetes, Cardiovascular Health & Thyroid',
      ],
      bio: 'Dr. Ramin Ahmad brings modern evidence-based adult primary care and chronic disease management, continuing the family legacy of dedicated clinical care in High Springs.',
    },
  ]

  return (
    <section id="physicians" className="py-16 sm:py-24 bg-[#0b162c] text-white relative">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Two Generations of Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Meet Our Dedicated Physicians
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Father and son physicians practicing side-by-side to deliver seamless, comprehensive care for your entire family from the first days of life through retirement.
          </p>
        </motion.div>

        {/* 2-Column Physician Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {physicians.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#0f203d]/85 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between med-card shadow-xl"
            >
              <div>
                {/* Doctor Portrait & Title */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6 text-center sm:text-left">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden ring-4 ring-sky-500/20 border-2 border-sky-400/40 shadow-xl flex-shrink-0 bg-slate-950">
                    <img
                      src={doc.image}
                      alt={`${doc.name} - ${doc.role}`}
                      className="w-full h-full object-cover object-top med-img"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                        doc.badgeColor === 'sky'
                          ? 'bg-sky-500/15 text-sky-300 border border-sky-400/30'
                          : 'bg-teal-500/15 text-teal-300 border border-teal-400/30'
                      }`}>
                        {doc.role}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300 font-semibold">
                        {doc.ages}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-sky-200/90 mt-1">
                      {doc.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>
                </div>

                {/* Key Qualifications */}
                <div className="border-t border-slate-800/80 pt-4 mb-6">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                    Clinical Focus &amp; Credentials
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    {doc.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Quick Links */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  className="btn-primary w-full sm:w-auto flex-1 text-center py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md transition-colors"
                >
                  Book with {doc.name.split(' ')[1]}
                </a>
                <a
                  href={doc.pdf}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold border border-slate-700/80 transition-all"
                >
                  <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                  Intake PDF
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
