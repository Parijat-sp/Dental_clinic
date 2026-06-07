import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import WaveDivider from '@/components/WaveDivider'
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

        {/* White → Surface wave */}
        <WaveDivider color="#F8F9FC" bg="#ffffff" />
        <Services />
        <WaveDivider color="#ffffff" bg="#F8F9FC" flip />

        {/* Stats – dark navy */}
        <WaveDivider color="#0D0D2B" bg="#ffffff" />
        <StatsSection />
        <WaveDivider color="#ffffff" bg="#0D0D2B" flip />

        <Doctors />

        <WaveDivider color="#F8F9FC" bg="#ffffff" />
        <Testimonials />
        <WaveDivider color="#ffffff" bg="#F8F9FC" flip />

        <BookingForm />
        <AccessibilitySection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
