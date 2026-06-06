import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import StatsSection from '@/components/StatsSection'
import Doctors from '@/components/Doctors'

import Testimonials from '@/components/Testimonials'
import BookingForm from '@/components/BookingForm'
import AccessibilitySection from '@/components/AccessibilitySection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <StatsSection />
        <Doctors />

        <Testimonials />
        <BookingForm />
        <AccessibilitySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
