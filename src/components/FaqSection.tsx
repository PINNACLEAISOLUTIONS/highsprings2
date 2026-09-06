import { motion } from 'motion/react'

// Q&A copy is kept in sync with the FAQPage JSON-LD in index.html.
const faqs = [
  {
    q: 'Do you accept new patients and walk-in sick visits?',
    a: 'Yes. We are accepting new patients of all ages and keep same-day slots open every weekday for sick visits such as fever, cough, earache, and sore throat. Call (386) 454-1156 in the morning to be seen that day.',
  },
  {
    q: 'What insurance plans do you take?',
    a: 'We are in-network with Florida Blue (BCBS), UnitedHealthcare, Aetna, Cigna, Humana, Tricare and CHAMPVA, plus Medicare Part B for adults and Florida Medicaid and Sunshine Health / Staywell for children and adults. We also offer transparent self-pay rates and HSA/FSA direct billing.',
  },
  {
    q: 'Which doctor should my child or I see?',
    a: 'Dr. Nasir Ahmed, M.D. cares for newborns, children, and teens ages 0–18. Dr. Ramin Ahmad, M.D. is an internal medicine physician for adults and seniors 18 and older, including annual wellness exams and chronic conditions like blood pressure, cholesterol, and type 2 diabetes.',
  },
  {
    q: 'Where are you located and is there parking?',
    a: 'We are a freestanding clinic at 19228 NW US Highway 441, High Springs, FL 32643, directly on US-441. Parking is free, ground-level, stroller friendly, and includes dedicated ADA handicap spaces in front of the entrance.',
  },
  {
    q: 'What are your office hours?',
    a: 'The office is open Monday–Friday, 9:00 AM – 5:00 PM Eastern Time. We are closed Saturday and Sunday with on-call triage for established patients. For a medical emergency, call 911.',
  },
  {
    q: 'Can I fill out patient forms before my first visit?',
    a: 'Yes. Download and print the New Child Registration Packet or the Adult New Patient Intake Form from the Patient Forms section above, complete them at home, and bring them with a photo ID, your insurance card, vaccine records, and a list of current medications.',
  },
]

export const FaqSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f766e]/10 border border-[#0f766e]/20 text-[#0f766e] text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              <span>Before You Call</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#134e48] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              Quick answers about new patients, insurance, hours, and your first visit to our High Springs clinic.
            </p>
          </div>

          {/* Native accordion — <details> needs no JS and is accessible by default */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
          >
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group pro-med-card rounded-2xl border border-slate-200 shadow-sm px-5 sm:px-6 py-1 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none font-bold text-sm sm:text-base text-[#134e48]">
                  <span>{item.q}</span>
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-[#0f766e]/10 text-[#0f766e] flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pb-5 pr-10">
                  {item.a}
                </p>
              </details>
            ))}
          </motion.div>

          {/* Fallback CTA */}
          <p className="text-center text-xs sm:text-sm text-slate-500 mt-8">
            Still have a question?{' '}
            <a href="tel:3864541156" className="text-[#0f766e] font-bold underline">
              Call our office at (386) 454-1156
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
