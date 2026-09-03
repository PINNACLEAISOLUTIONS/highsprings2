import { useState } from 'react'
import { motion } from 'motion/react'
import newbornCareImg from '../assets/newborn_care.jpg'
import primaryFamilyCareImg from '../assets/primary_family_care.jpg'
import vaccinationsImg from '../assets/vaccinations.jpg'
import diagnosticLabsImg from '../assets/diagnostic_labs.jpg'

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pediatric' | 'adult' | 'diagnostics'>('all')

  const services = [
    {
      id: 'pediatric',
      title: 'Pediatric Care & Newborn Medicine',
      subtitle: 'Dr. Nasir Ahmed, M.D.',
      badge: 'Infants, Children & Teens',
      category: 'pediatric',
      img: newbornCareImg,
      desc: 'Gentle, attentive pediatric medicine starting from the hospital nursery through high school graduation.',
      features: [
        'Newborn discharge checkups & weight tracking',
        'Guaranteed same-day sick visits for acute fever & earaches',
        'Childhood asthma management & breathing treatments',
        'School, sports & camp physicals with Florida DH 680 forms',
      ],
    },
    {
      id: 'adult',
      title: 'Adult Primary Care & Chronic Disease',
      subtitle: 'Dr. Ramin Ahmad, M.D.',
      badge: 'Adults & Seniors (18+)',
      category: 'adult',
      img: primaryFamilyCareImg,
      desc: 'Proactive internal medicine focused on lifelong wellness, preventive screenings, and disease control.',
      features: [
        'Annual wellness exams & Medicare comprehensive visits',
        'Hypertension & cardiovascular risk monitoring',
        'Type 2 diabetes management & continuous care',
        'Thyroid, lipid management & prescription oversight',
      ],
    },
    {
      id: 'vaccines',
      title: 'Immunizations & Childhood Vaccines',
      subtitle: 'CDC & Florida Health Approved',
      badge: 'All Ages Available',
      category: 'diagnostics',
      img: vaccinationsImg,
      desc: 'Full schedule of safe childhood immunizations and essential adult boosters administered with care.',
      features: [
        'State-required school entry vaccines & Blue Card DH 680',
        'Infant immunization milestone series (DTaP, MMR, IPV)',
        'Annual influenza vaccines for high-risk patients',
        'Adult boosters: Tdap, Shingrix & pneumonia vaccines',
      ],
    },
    {
      id: 'labs',
      title: 'On-Site Diagnostic Suite & Rapid Testing',
      subtitle: 'Point-of-Care Laboratory',
      badge: 'Results While You Wait',
      category: 'diagnostics',
      img: diagnosticLabsImg,
      desc: 'Fast, accurate in-office testing so you receive your diagnosis and treatment plan without waiting days.',
      features: [
        'Rapid strep throat, flu A&B, and COVID-19 PCR/antigen',
        'Point-of-care urinalysis & urine culture screening',
        'In-office EKG cardiovascular rhythm monitoring',
        'Blood glucose, hemoglobin & comprehensive routine panels',
      ],
    },
  ]

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab || (activeTab === 'diagnostics' && s.id === 'labs'))

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#071021] border-y border-slate-800 text-white relative">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Comprehensive Medical Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Core Clinical Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            From your baby's first milestones to adult cardiovascular health and rapid diagnostic lab work, our clinic is fully equipped to serve you.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'pediatric', label: 'Pediatrics (Ages 0–18)' },
              { id: 'adult', label: 'Adult Primary Care' },
              { id: 'diagnostics', label: 'Testing & Vaccines' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-900/40'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {filteredServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0c1830] rounded-3xl border border-slate-800/90 overflow-hidden flex flex-col justify-between med-card shadow-lg"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="h-52 sm:h-60 overflow-hidden relative">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover med-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1830] via-transparent to-transparent" />
                  
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-sky-300 text-[11px] font-bold border border-sky-400/20 shadow-sm">
                    {svc.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">
                    {svc.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {svc.desc}
                  </p>

                  <div className="border-t border-slate-800/80 pt-4">
                    <ul className="space-y-2">
                      {svc.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <svg className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-sky-600/20 text-slate-200 hover:text-sky-300 border border-slate-800 hover:border-sky-400/40 text-xs font-bold transition-all"
                >
                  <span>Request Visit for This Service</span>
                  <span>&rarr;</span>
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
