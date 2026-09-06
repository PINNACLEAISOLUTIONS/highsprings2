import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import ClinicStatusBanner from './components/ClinicStatusBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import PhysiciansSection from './components/PhysiciansSection'
import ServicesSection from './components/ServicesSection'
import PatientFormsSection from './components/PatientFormsSection'
import InsuranceSection from './components/InsuranceSection'
import FacilityTourSection from './components/FacilityTourSection'
import AppointmentSection from './components/AppointmentSection'
import FaqSection from './components/FaqSection'
import MobileQuickBar from './components/MobileQuickBar'
import Footer from './components/Footer'
import './App.css'

const CLINIC = {
  name: 'High Springs Pediatrics & Primary Care',
  phone: '(386) 454-1156',
  phoneTel: 'tel:3864541156',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
  address: '19228 NW US Highway 441, High Springs, FL 32643',
}

export function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#ffffff'
  }, [])

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-white text-slate-900 flex flex-col w-full pb-16 md:pb-0 font-sans selection:bg-[#0f766e] selection:text-white">
      {/* Live Open/Closed status strip */}
      <ClinicStatusBanner />

      {/* Modern Sticky Navigation */}
      <Navbar phone={CLINIC.phone} phoneTel={CLINIC.phoneTel} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section with Clinic Exterior Visual */}
        <Hero phone={CLINIC.phone} phoneTel={CLINIC.phoneTel} />

        {/* Community Trust Stats */}
        <StatsBar />

        {/* Father & Son Physicians Showcase */}
        <PhysiciansSection />

        {/* Clinical Services with Interactive Filters */}
        <ServicesSection />

        {/* Official Patient Intake Forms (PDF) */}
        <PatientFormsSection />

        {/* Insurance Verification & Search */}
        <InsuranceSection />

        {/* Clinic Facility Tour & Google Maps Access */}
        <FacilityTourSection />

        {/* Common Questions (mirrors FAQPage structured data) */}
        <FaqSection />

        {/* Direct Appointment Request & Phone Desk */}
        <AppointmentSection
          phone={CLINIC.phone}
          phoneTel={CLINIC.phoneTel}
          hours={CLINIC.hours}
          address={CLINIC.address}
        />
      </main>

      {/* Comprehensive Medical Clinic Footer */}
      <Footer
        phone={CLINIC.phone}
        phoneTel={CLINIC.phoneTel}
        address={CLINIC.address}
        hours={CLINIC.hours}
      />

      {/* Mobile-Only Ergonomic Bottom Quick Bar */}
      <MobileQuickBar
        phoneTel={CLINIC.phoneTel}
        address={CLINIC.address}
      />
    </div>
    </MotionConfig>
  )
}

export default App
