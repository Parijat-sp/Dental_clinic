import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
