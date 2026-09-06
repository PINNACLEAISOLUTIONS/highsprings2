import { useMemo } from 'react'

export const ClinicStatusBanner = () => {
  const status = useMemo(() => {
    try {
      // Get current Florida (Eastern Time) parts
      const now = new Date()
      const estString = now.toLocaleString('en-US', { timeZone: 'America/New_York' })
      const estDate = new Date(estString)
      const day = estDate.getDay() // 0 = Sun, 1 = Mon, ... 6 = Sat
      const hour = estDate.getHours()
      const minute = estDate.getMinutes()
      const totalMinutes = hour * 60 + minute

      const openMinutes = 9 * 60 // 9:00 AM
      const closeMinutes = 17 * 60 // 5:00 PM

      const isWeekday = day >= 1 && day <= 5
      const isOpen = isWeekday && totalMinutes >= openMinutes && totalMinutes < closeMinutes

      if (isOpen) {
        return {
          isOpen: true,
          badge: 'Open Today',
          message: 'Office open until 5:00 PM • Walk-in sick visits welcome',
          color: 'emerald',
        }
      } else if (isWeekday && totalMinutes < openMinutes) {
        return {
          isOpen: false,
          badge: 'Opens at 9:00 AM',
          message: 'Opening today at 9:00 AM • Phones active for appointments',
          color: 'amber',
        }
      } else if (day >= 1 && day <= 4 && totalMinutes >= closeMinutes) {
        return {
          isOpen: false,
          badge: 'Closed',
          message: 'Closed for the day • Reopens tomorrow at 9:00 AM',
          color: 'amber',
        }
      } else {
        return {
          isOpen: false,
          badge: 'Weekend Hours',
          message: 'Closed for the weekend • Reopens Monday at 9:00 AM',
          color: 'amber',
        }
      }
    } catch {
      return {
        isOpen: true,
        badge: 'Clinic Hours',
        message: 'Mon – Fri: 9:00 AM – 5:00 PM • Same-day appointments available',
        color: 'sky',
      }
    }
  }, [])

  return (
    <aside aria-label="Clinic hours and emergency contact" className="bg-[#071124] border-b border-slate-800/80 text-xs py-2 px-4">
      <div className="site-container flex flex-wrap items-center justify-between gap-2 text-slate-300">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold text-[11px] ${
            status.isOpen 
              ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
              : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-400 status-dot-pulse' : 'bg-amber-400'}`} />
            {status.badge}
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            {status.message}
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] ml-auto">
          <span className="text-rose-300 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            Medical Emergency? Call 911
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <a
            href="tel:3864541156"
            className="text-sky-400 hover:text-sky-300 font-bold tabular-nums transition-colors hidden md:inline"
          >
            Direct: (386) 454-1156
          </a>
        </div>
      </div>
    </aside>
  )
}

export default ClinicStatusBanner
