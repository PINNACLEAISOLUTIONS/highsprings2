import ClinicLogoEmblem from './ClinicLogoEmblem'

interface FooterProps {
  phone: string
  phoneTel: string
  address: string
  hours: string
}

export const Footer = ({ phone, phoneTel, address, hours }: FooterProps) => {
  return (
    <footer className="bg-[#040914] text-slate-400 py-12 sm:py-16 border-t border-slate-800/80 text-xs mt-auto">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Clinic Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ClinicLogoEmblem />
              <div>
                <div className="font-extrabold text-white text-base leading-tight">
                  High Springs Pediatrics
                </div>
                <div className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider">
                  &amp; Adult Primary Care
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Serving High Springs, Alachua, Fort White, Newberry, and surrounding Florida communities with trusted, personalized medical care for children and adults.
            </p>
          </div>

          {/* Clinical Care Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-sky-300 transition-colors">Newborn First-Week Care</a></li>
              <li><a href="#services" className="hover:text-sky-300 transition-colors">Pediatric Same-Day Sick Visits</a></li>
              <li><a href="#services" className="hover:text-sky-300 transition-colors">Adult Wellness Physicals</a></li>
              <li><a href="#services" className="hover:text-sky-300 transition-colors">Childhood &amp; Adult Vaccines</a></li>
              <li><a href="#services" className="hover:text-sky-300 transition-colors">On-Site Rapid Diagnostic Suite</a></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Patient Forms &amp; Insurance
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#forms" className="text-sky-300 hover:text-white font-medium transition-colors">Child Registration Packet (PDF)</a></li>
              <li><a href="#forms" className="text-teal-300 hover:text-white font-medium transition-colors">Adult Intake Form (PDF)</a></li>
              <li><a href="#insurance" className="hover:text-sky-300 transition-colors">Florida Blue &amp; Commercial Insurance</a></li>
              <li><a href="#insurance" className="hover:text-sky-300 transition-colors">Florida Medicaid &amp; Medicare Part B</a></li>
              <li><a href="#facility" className="hover:text-sky-300 transition-colors">Stroller &amp; Handicap Parking Info</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact &amp; Location
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-semibold">{address}</p>
              <p>
                <a href={phoneTel} className="text-sky-400 font-bold text-sm hover:underline tabular-nums">
                  {phone}
                </a>
              </p>
              <p className="text-slate-400 mt-2">{hours}</p>
              <p className="text-rose-400 font-bold mt-2">
                Emergency: Call 911
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Credits */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <div>
            <p>&copy; {new Date().getFullYear()} High Springs Pediatrics &amp; Primary Care. All rights reserved.</p>
            <p className="text-slate-400 mt-1">
              Physicians: Dr. Nasir Ahmed, M.D. &bull; Dr. Ramin Ahmad, M.D.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#home" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <span>Back to Top</span>
              <span>&uarr;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
