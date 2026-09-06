import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Desktop-only floating "Request an Appointment" pill that fades in once the
// hero is scrolled past. Mobile already has MobileQuickBar.
export const StickyBookCta = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="btn-uf-orange hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 pl-6 pr-5 py-3.5 rounded-full text-white font-bold text-sm shadow-xl shadow-orange-950/25"
        >
          <span>Request an Appointment</span>
          <span aria-hidden>&rarr;</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default StickyBookCta
