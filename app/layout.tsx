import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmoothScroller from '@/components/SmoothScroller'
import Preloader from '@/components/Preloader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dental Clinic – Your Smile, Our Priority',
  description:
    'Dental Clinic – Trusted, compassionate dental care for your whole family. Book an appointment with our expert dentists today.',
  keywords: [
    'dental clinic', 'dentist', 'teeth whitening', 'orthodontics',
    'family dentistry', 'dental care',
  ],
  openGraph: {
    title: 'Dental Clinic – Your Smile, Our Priority',
    description: 'Premium dental care with a gentle touch. Serving families for over 20 years.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{overflowX:'hidden'}}>
        <Preloader />
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  )
}
