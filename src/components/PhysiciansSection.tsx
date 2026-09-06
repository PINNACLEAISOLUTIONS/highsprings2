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
      badgeText: '20+ Years Caring for North Central Florida Families',
      badgeColor: 'bg-teal-50 text-[#0f766e] border-teal-200',
      pdf: childPacketPdf,
      pdfLabel: 'Child Registration (PDF)',
      isLightened: true,
      credentials: [
        'Residency: West Virginia University School of Medicine',
        'Fellowship Trained: Royal Hospitals, United Kingdom',
        'Specialist in Newborn Care, Developmental Milestones & Pediatric Asthma',
        'Guaranteed Same-Day Urgent Sick Visits for Local Children & Teens',
      ],
      bio: 'Founding physician of High Springs Pediatrics, dedicated to providing compassionate, personal, and accessible medicine to local children and growing families for over two decades.',
    },
    {
      name: 'Dr. Ramin Ahmad, M.D.',
      title: 'Internal Medicine Physician',
      specialty: 'Adult & Senior Primary Care',
      ages: 'Adults & Seniors (18+)',
      image: drRaminImg,
      badgeText: 'HCA Florida North Florida Hospital Active Staff Privileges',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
      pdf: adultFormPdf,
      pdfLabel: 'Adult Intake Form (PDF)',
      isLightened: false,
      credentials: [
        'Residency: University of Central Florida (UCF) / HCA Healthcare',
        'Active Hospital Staff Privileges: HCA Florida North Florida Hospital',
        'Comprehensive Annual Wellness Physicals, EKG & On-Site Blood Panels',
        'Long-term Management: Hypertension, Type 2 Diabetes, Lipids & Thyroid',
      ],
      bio: 'Continues the family legacy with modern evidence-based adult primary care, preventive screenings, cardiovascular care, and chronic disease management.',
    },
  ]

  return (
    <section id="physicians" className="py-20 sm:py-28 lg:py-32 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f766e]/10 border border-[#0f766e]/20 text-[#0f766e] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            <span>Two Generations of Trusted Clinical Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#134e48] tracking-tight">
            Meet Our Attending Physicians
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Father and son doctors practicing side-by-side to deliver personal, continuous care for your entire family under one roof.
          </p>
        </div>

        {/* 2 Distinguished Physician Cards with Full-Width Photos Across the Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {physicians.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="pro-med-card bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl transition-all group"
            >
              <div>
                {/* Full-Width Doctor Image Header Spanning Across the Card */}
                <div className="h-72 sm:h-84 md:h-96 w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover object-top med-img group-hover:scale-105 transition-transform duration-500 ${
                      doc.isLightened ? 'brightness-[1.12] contrast-[1.03]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#134e48]/80 via-transparent to-black/30" />

                  {/* Floating Badges Across Top */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0f766e] text-xs sm:text-sm font-extrabold shadow-md border border-white/30">
                      {doc.specialty}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#134e48]/90 text-white text-xs sm:text-sm font-bold shadow-md backdrop-blur-md border border-white/20">
                      {doc.ages}
                    </span>
                  </div>

                  {/* Verified Medical Checkmark Badge on Photo */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-md backdrop-blur-md border border-white/20">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Board Attending Physician</span>
                  </div>
                </div>

                {/* Card Body with Enlarged Typography */}
                <div className="p-6 sm:p-8">
                  {/* Doctor Name - Scaled to the same prominent size as Compassionate Family Healthcare */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#134e48] tracking-tight leading-[1.15] mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-base sm:text-lg font-extrabold text-[#0f766e] mb-3">
                    {doc.title}
                  </p>

                  {/* Doctor Bio - Larger Window Font */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                    {doc.bio}
                  </p>

                  {/* Hospital Badge Pill */}
                  <div className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 mb-6 ${doc.badgeColor}`}>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>
                    <span>{doc.badgeText}</span>
                  </div>

                  {/* Verified Qualifications List - Larger Window Font */}
                  <div className="border-t border-slate-100 pt-5 mb-2">
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-500 uppercase tracking-wider mb-3.5">
                      Board Training &amp; Hospital Affiliations:
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-base text-slate-700">
                      {doc.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-teal-100 text-[#0f766e] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span className="leading-snug">{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Actions - Larger Buttons */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100/60 mt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  className="btn-uf-primary w-full sm:w-auto flex-1 text-center py-3.5 px-5 rounded-xl text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Book with {doc.name.split(' ')[1]}
                </a>
                <a
                  href={doc.pdf}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
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
