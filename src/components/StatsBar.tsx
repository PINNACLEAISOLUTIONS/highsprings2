import { motion } from 'motion/react'
import CountUp from './react-bits/CountUp'

export const StatsBar = () => {
  const stats = [
    { target: 20, suffix: '+', label: 'Years Serving Families', detail: 'Established Community Practice' },
    { target: 5.0, suffix: ' ★', label: 'Patient Satisfaction', detail: 'Trusted by Generations of Parents' },
    { target: 21, suffix: '', label: 'Surrounding Communities', detail: 'Alachua, Gilchrist, Columbia & Marion' },
    { target: 2, suffix: ' MDs', label: 'Generations of Care', detail: 'Pediatrician & Internist Under One Roof' },
  ]

  return (
    <section className="py-10 bg-[#070e1f] border-y border-slate-800/80 relative z-20">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0e1c36]/80 rounded-2xl p-4 sm:p-6 text-center border border-slate-800/90 med-card flex flex-col items-center justify-center h-full shadow-md"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-sky-400 flex items-center justify-center tabular-nums">
                <CountUp to={stat.target} duration={1.6 + i * 0.15} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 hidden sm:block">
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
