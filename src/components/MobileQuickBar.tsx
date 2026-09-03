interface MobileQuickBarProps {
  phoneTel: string
  address: string
}

export const MobileQuickBar = ({ phoneTel, address }: MobileQuickBarProps) => {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`

  return (
    <aside aria-label="Mobile Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#060e1d]/95 backdrop-blur-xl border-t border-slate-800/90 py-2.5 px-3 flex items-center justify-around shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <a
        href={phoneTel}
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-emerald-400 active:scale-95 transition-transform"
        aria-label="Call clinic directly"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <span>Call Office</span>
      </a>

      <a
        href="#physicians"
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-sky-400 active:scale-95 transition-transform"
        aria-label="View physicians"
      >
        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <span>Doctors</span>
      </a>

      <a
        href="#forms"
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-teal-400 active:scale-95 transition-transform"
        aria-label="Download patient registration forms"
      >
        <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <span>Forms PDF</span>
      </a>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-300 active:scale-95 transition-transform"
        aria-label="Open clinic directions in Google Maps"
      >
        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
          <svg className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <span>Directions</span>
      </a>
    </aside>
  )
}

export default MobileQuickBar
