import { motion } from 'motion/react'
import CountUp from './react-bits/CountUp'

export const StatsBar = () => {
  const stats = [
    { target: 20, suffix: '+', label: 'Years Serving Families', detail: 'High Springs Community Clinic' },
    { target: 5.0, suffix: ' ★', label: 'Patient Satisfaction', detail: 'Trusted Family Practice' },
    { target: 21, suffix: '', label: 'Surrounding Communities', detail: 'Alachua, Fort White & Newberry' },
    { target: 2, suffix: ' MDs', label: 'Generations of Care', detail: 'Pediatrician & Internist' },
  ]

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200 text-slate-900 relative z-20">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 items-stretch">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 text-center border border-slate-200/80 med-card flex flex-col items-center justify-center h-full shadow-sm hover:border-[#00529b]/40 hover:shadow-md transition-all"
            >
              <div className="text-2xl sm:text-4xl font-black text-[#00529b] flex items-center justify-center tabular-nums">
                <CountUp to={stat.target} duration={1.5 + i * 0.15} />
                <span className="text-[#f47321] ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#002147] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
