import { useState } from 'react'
import { motion } from 'motion/react'

interface AppointmentSectionProps {
  phone: string
  phoneTel: string
  hours: string
  address: string
}

// ponytail: mailto handoff — no server, no spam filtering, needs a mail client.
// Upgrade path: POST formData to a Formspree/Web3Forms endpoint and drop the mailto.
const CLINIC_EMAIL = 'frontdesk@highspringspediatrics.com' // TODO: confirm real inbox

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
    const body = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || '—'}`,
      `Physician: ${formData.physician}`,
      `Reason: ${formData.reason}`,
      `Preferred time: ${formData.preferredTime}`,
      '',
      `Notes: ${formData.notes || '—'}`,
    ].join('\n')
    const subject = `Appointment request — ${formData.name || 'New patient'}`
    window.location.href =
      `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-[#134e48] text-white relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              <span>Direct Office Access</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Schedule Your Family Visit
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 font-normal">
              Call our reception desk for immediate same-day appointments, or submit an online request and our clinical staff will call to confirm your scheduled time.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c332f] border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#0f766e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Telephone Desk</div>
                  <a href={phoneTel} className="text-xl sm:text-2xl font-black text-white hover:text-[#f97316] tabular-nums transition-colors">
                    {phone}
                  </a>
                  <div className="text-xs text-teal-200 mt-0.5 font-medium">Guaranteed same-day sick visits for children</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c332f] border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#0f766e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Office Hours</div>
                  <div className="text-sm font-bold text-white mt-0.5">{hours}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Saturday &amp; Sunday: Closed (On-call triage)</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c332f] border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#0f766e] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Clinic Address</div>
                  <div className="text-sm font-bold text-white mt-0.5">{address}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Ground-level entrance with handicap parking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Crisp White Appointment Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#134e48] mb-2">
                  Appointment Request Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our front desk staff will contact you at <strong>{formData.phone}</strong> during clinic hours to confirm your scheduled appointment time.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={phoneTel}
                    className="btn-uf-primary px-5 py-2.5 rounded-xl text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    Call Office Directly
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#134e48] mb-1">
                    Request an Appointment Online
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Or call our triage desk at <a href={phoneTel} className="text-[#0f766e] font-bold underline">{phone}</a> for immediate same-day needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appt-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient / Parent Name *
                    </label>
                    <input
                      id="appt-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full legal name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="appt-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="appt-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(386) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appt-physician" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Physician *
                    </label>
                    <select
                      id="appt-physician"
                      value={formData.physician}
                      onChange={(e) => setFormData({ ...formData, physician: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20 outline-none transition-all cursor-pointer"
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
                    <label htmlFor="appt-reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Visit Reason *
                    </label>
                    <select
                      id="appt-reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20 outline-none transition-all cursor-pointer"
                    >
                      <option>Wellness Checkup / Physical</option>
                      <option>Same-Day Sick Visit (Fever, Cough, Earache)</option>
                      <option>Newborn First-Week Care</option>
                      <option>Immunizations / Vaccines</option>
                      <option>Chronic Care (Diabetes, Blood Pressure)</option>
                      <option>Lab Work / EKG</option>
                      <option>Other Medical Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time of Day
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Morning (9:00 AM – 12:00 PM)', 'Afternoon (1:00 PM – 5:00 PM)'].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setFormData({ ...formData, preferredTime: time })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          formData.preferredTime === time
                            ? 'bg-[#0f766e] border-[#0f766e] text-white shadow-sm'
                            : 'bg-slate-50 border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="appt-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Brief Notes or Symptoms (Optional)
                  </label>
                  <textarea
                    id="appt-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about any specific symptoms or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-uf-primary w-full py-4 rounded-xl text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#0f766e]/20 transition-all cursor-pointer"
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
