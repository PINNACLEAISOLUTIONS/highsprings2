import { useState } from 'react'
import { motion } from 'motion/react'

export const InsuranceSection = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const plans = [
    { name: 'Florida Blue (BCBS)', network: 'Preferred In-Network', tier: 'Commercial & Exchange', verified: true },
    { name: 'Medicare Part B', network: 'Adult Primary Care', tier: 'Federal Program', verified: true },
    { name: 'Florida Medicaid', network: 'State Managed Health', tier: 'Children & Adults', verified: true },
    { name: 'Sunshine Health / Staywell', network: 'Medicaid Managed Care', tier: 'State Plan', verified: true },
    { name: 'UnitedHealthcare (UHC)', network: 'Commercial Networks', tier: 'Employer & Individual', verified: true },
    { name: 'Aetna & Cigna', network: 'In-Network Participating', tier: 'Major Commercial', verified: true },
    { name: 'Tricare & CHAMPVA', network: 'Military Families Care', tier: 'Armed Forces', verified: true },
    { name: 'Humana', network: 'Participating Network', tier: 'Commercial & Senior', verified: true },
    { name: 'HSA / FSA Direct Billing', network: 'Direct Office Billing', tier: 'Flexible Spending Accounts', verified: true },
    { name: 'Self-Pay Transparent Rates', network: 'Affordable Office Visits', tier: 'Uninsured Discount', verified: true },
  ]

  const filteredPlans = plans.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.network.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tier.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="insurance" className="py-20 sm:py-28 lg:py-32 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="site-container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>In-Network Verified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#134e48] tracking-tight">
              Accepted Insurance Plans
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              We participate with Florida's leading health insurance carriers, Florida Medicaid for children and mothers, and Medicare Part B for adult primary care.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="mb-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your plan (e.g. Florida Blue, Medicare, Medicaid, Aetna)..."
                className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20 outline-none transition-all placeholder:text-slate-400 shadow-sm"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 px-1.5 py-0.5 rounded-md hover:bg-slate-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Plan Chips Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.name}
                layout
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:border-[#0f766e]/40 hover:bg-white transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-[#134e48] group-hover:text-[#0f766e] transition-colors truncate">
                      {plan.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {plan.network}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-slate-600 px-2.5 py-1 rounded-lg bg-white border border-slate-200 whitespace-nowrap ml-2 shadow-xs">
                  {plan.tier}
                </span>
              </motion.div>
            ))}
          </div>

          {filteredPlans.length === 0 && (
            <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500 mb-8">
              No exact match for "{searchTerm}". Please call our office billing desk at{' '}
              <a href="tel:3864541156" className="text-[#0f766e] font-bold underline">(386) 454-1156</a>{' '}
              to verify your network coverage and co-pay tier.
            </div>
          )}

          {/* Billing Reassurance Card */}
          <div className="bg-gradient-to-b from-white to-[#eef4f3] rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#134e48] mb-1">
                Have a question about your specific plan or co-payment?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Our in-office insurance coordinator will check your eligibility, deductible, and co-payment prior to your visit.
              </p>
            </div>
            <a
              href="tel:3864541156"
              className="btn-uf-primary flex-shrink-0 px-5 py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-sm whitespace-nowrap"
            >
              Call Billing Staff: (386) 454-1156
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsuranceSection
