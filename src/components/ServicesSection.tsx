import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import newbornCareImg from '../assets/newborn_care.jpg'
import primaryFamilyCareImg from '../assets/primary_family_care.jpg'
import vaccinationsImg from '../assets/vaccinations.jpg'
import diagnosticLabsImg from '../assets/diagnostic_labs.jpg'

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pediatric' | 'adult' | 'diagnostics'>('all')

  useEffect(() => {
    const handleSwitch = (e: CustomEvent) => {
      if (e.detail && ['all', 'pediatric', 'adult', 'diagnostics'].includes(e.detail)) {
        setActiveTab(e.detail)
      }
    }
    window.addEventListener('switch-service-tab' as any, handleSwitch)
    return () => window.removeEventListener('switch-service-tab' as any, handleSwitch)
  }, [])

  const services = [
    {
      id: 'pediatric',
      category: 'pediatric',
      title: 'Pediatric Care & Newborn Medicine',
      subtitle: 'Dr. Nasir Ahmed, M.D.',
      badge: 'Ages 0–18',
      tag: 'Same-Day Sick Care',
      tagColor: 'bg-teal-100 text-[#0f766e] border-teal-200',
      img: newbornCareImg,
      iconBg: 'bg-teal-50 text-[#0f766e] border-teal-200',
      accentColor: '#0f766e',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
          <path d="M17 14h.5a3.5 3.5 0 0 1 3.5 3.5v1.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.5A3.5 3.5 0 0 1 6.5 14H7" />
          <circle cx="12" cy="7" r="2" />
        </svg>
      ),
      desc: 'Gentle, compassionate pediatric care from birth through high school graduation with guaranteed urgent appointments.',
      features: [
        'Newborn discharge checkups & milestone tracking',
        'Guaranteed same-day sick visits for fever & ear infections',
        'Childhood asthma & breathing nebulizer care',
        'School, sports & camp physicals (Florida Blue Card DH 680)',
      ],
    },
    {
      id: 'adult',
      category: 'adult',
      title: 'Adult Primary Care & Chronic Health',
      subtitle: 'Dr. Ramin Ahmad, M.D.',
      badge: 'Adults & Seniors (18+)',
      tag: 'Internal Medicine',
      tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
      img: primaryFamilyCareImg,
      iconBg: 'bg-teal-50 text-teal-700 border-teal-200',
      accentColor: '#0d9488',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      hasEkg: true,
      desc: 'Evidence-based internal medicine focused on lifelong cardiovascular health, metabolic balance, and wellness.',
      features: [
        'Annual wellness exams & Medicare preventive physicals',
        'Hypertension, cholesterol & cardiovascular risk reduction',
        'Type 2 diabetes management & continuous nutrition plans',
        'Thyroid management & comprehensive prescription reviews',
      ],
    },
    {
      id: 'vaccines',
      category: 'diagnostics',
      title: 'Immunizations & Childhood Vaccines',
      subtitle: 'CDC & Florida Health Schedule',
      badge: 'All Ages',
      tag: 'State Certified',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
      img: vaccinationsImg,
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
      accentColor: '#0d9488',
      iconSvg: (
        <svg className="w-6 h-6 float-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      desc: 'Safe, on-schedule pediatric vaccines and adult boosters administered in a gentle, reassuring clinical setting.',
      features: [
        'Mandatory school-entry vaccines & Blue Card DH 680 certification',
        'Infant series (DTaP, IPV, MMR, Varicella, Hepatitis B)',
        'Annual seasonal influenza protection for children & seniors',
        'Adult boosters: Tdap, Shingrix shingles & Pneumococcal',
      ],
    },
    {
      id: 'labs',
      category: 'diagnostics',
      title: 'On-Site Diagnostic Suite & Rapid Labs',
      subtitle: 'In-Office Clinical Suite',
      badge: 'Rapid 15-Min Results',
      tag: 'CLIA-Certified',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
      img: diagnosticLabsImg,
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
      accentColor: '#d97706',
      iconSvg: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0-4 0" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      ),
      desc: 'Point-of-care rapid testing and diagnostic panels so you receive prompt diagnosis and answers during your visit.',
      features: [
        'Rapid 10-minute strep throat, flu A&B, and COVID tests',
        'Point-of-care urinalysis & infection screening',
        'In-office 12-lead EKG cardiovascular testing',
        'Blood glucose, hemoglobin & routine metabolic panels',
      ],
    },
  ]

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab || (activeTab === 'diagnostics' && (s.id === 'labs' || s.id === 'vaccines')))

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white to-[#eef4f3] text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        {/* Section Header (Matching UF Health "Common areas of care" style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f766e]/10 border border-[#0f766e]/20 text-[#0f766e] text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              <span>Dedicated Family Medicine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#134e48] tracking-tight">
              Common Areas of Care
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Serving every generation of your family with personalized, unrushed medicine under one roof in High Springs.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
            {[
              { id: 'all', label: 'All Care' },
              { id: 'pediatric', label: 'Pediatrics' },
              { id: 'adult', label: 'Adult Primary' },
              { id: 'diagnostics', label: 'Labs & Vaccines' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0f766e] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#134e48] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Professional Medical Care Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 max-w-6xl mx-auto">
          {filteredServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="pro-med-card rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header with Image & Overlay Tag */}
                <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-100">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover med-img transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur-md bg-white/95 ${svc.tagColor}`}>
                      {svc.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#134e48]/90 text-white text-[11px] font-bold shadow-sm backdrop-blur-md border border-white/20">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Optional Animated EKG Heartbeat Line for Adult Care Card */}
                  {svc.hasEkg && (
                    <div className="absolute bottom-3 left-4 right-4 pointer-events-none opacity-80">
                      <svg className="w-full h-8" viewBox="0 0 500 40" fill="none">
                        <path
                          className="ekg-wave"
                          d="M0 20 H180 L195 5 L210 35 L225 10 L240 28 L250 20 H500"
                          stroke="#5eead4"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8">
                  {/* Physician Lead with Icon Box */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center med-icon-box ${svc.iconBg}`}>
                      {svc.iconSvg}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0f766e] uppercase tracking-wider block">
                        {svc.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#134e48] tracking-tight leading-snug">
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Checklist of Visit Scopes */}
                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Included in this service:
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {svc.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#0f766e] text-[#134e48] hover:text-white text-xs sm:text-sm font-bold border border-slate-200 hover:border-[#0f766e] transition-all group-hover:shadow-md"
                >
                  <span>Request Appointment for This Service</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
