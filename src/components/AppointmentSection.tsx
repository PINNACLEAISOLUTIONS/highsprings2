import { useState } from 'react'
import { motion } from 'motion/react'

interface AppointmentSectionProps {
  phone: string
  phoneTel: string
  hours: string
  address: string
}

export const AppointmentSection = ({ phone, phoneTel, hours, address }: AppointmentSectionProps) => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    physician: 'Dr. Nasir Ahmed, M.D. (Pediatrics & Newborns Ages 0–18)',
    reason: 'Wellness Checkup / Physical',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-[#071021] border-t border-slate-800 text-white relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Direct Office Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Schedule Your Family Visit
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              Call our friendly reception desk for immediate same-day scheduling, or submit an appointment request below and our team will call to confirm your time.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b162c] border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Telephone Desk</div>
                  <a href={phoneTel} className="text-xl sm:text-2xl font-black text-sky-400 hover:text-white tabular-nums transition-colors">
                    {phone}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Guaranteed same-day sick appointments available</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b162c] border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Office Hours</div>
                  <div className="text-sm font-bold text-white mt-0.5">{hours}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Saturday &amp; Sunday: Closed (On-call emergency)</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b162c] border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Clinic Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{address}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Convenient ground level with free parking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Appointment Form */}
          <div className="lg:col-span-7 bg-[#0b162c] border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl med-card">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Appointment Request Received
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our front desk staff will contact you at <strong>{formData.phone}</strong> during clinic hours to confirm your scheduled appointment time.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={phoneTel}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                  >
                    Call Office Immediately
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-slate-300 mb-4">
                    Fill out this form or call <a href={phoneTel} className="text-sky-400 font-bold underline">{phone}</a> for urgent same-day needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Patient or Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full legal name"
                      className="w-full px-4 py-3 rounded-xl bg-[#070e1f] border border-slate-700/80 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(386) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#070e1f] border border-slate-700/80 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Select Physician *
                    </label>
                    <select
                      value={formData.physician}
                      onChange={(e) => setFormData({ ...formData, physician: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070e1f] border border-slate-700/80 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all cursor-pointer"
                    >
                      <option value="Dr. Nasir Ahmed, M.D. (Pediatrics & Newborns Ages 0–18)">
                        Dr. Nasir Ahmed, M.D. (Pediatrics 0–18)
                      </option>
                      <option value="Dr. Ramin Ahmad, M.D. (Adult & Senior Primary Care)">
                        Dr. Ramin Ahmad, M.D. (Adult Primary Care)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Visit Reason *
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070e1f] border border-slate-700/80 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all cursor-pointer"
                    >
                      <option>Wellness Checkup / Physical</option>
                      <option>Same-Day Sick Visit (Fever, Cough, Earache)</option>
                      <option>Newborn First-Week Care</option>
                      <option>Immunizations / Vaccines</option>
                      <option>Chronic Care (Diabetes, Blood Pressure)</option>
                      <option>Lab Work / EKG</option>
                      <option>Other Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Time of Day
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Morning (9:00 AM – 12:00 PM)', 'Afternoon (1:00 PM – 5:00 PM)'].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setFormData({ ...formData, preferredTime: time })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          formData.preferredTime === time
                            ? 'bg-sky-600/30 border-sky-400 text-sky-200 font-bold'
                            : 'bg-[#070e1f] border-slate-700/80 text-slate-400 hover:text-white'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Brief Notes or Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about any specific symptoms, medications, or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070e1f] border border-slate-700/80 text-white text-xs sm:text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-all placeholder:text-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-sky-900/30 transition-all cursor-pointer"
                >
                  Submit Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentSection
