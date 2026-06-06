'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <div className={styles.announcementBar} role="banner" aria-label="Clinic announcement">
        <span>🎉 New Patient Special: Free Consultation &amp; X-Ray — </span>
        <a href="#booking" className={styles.announcementLink} onClick={close}>Book Today</a>
      </div>

      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo} aria-label="BrightSmile Dental Clinic home">
            <svg className={styles.logoIcon} viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="19" fill="#0ea5e9" stroke="#fff" strokeWidth="1"/>
              <path d="M13 18c0-4 3.5-7 7-7s7 3 7 7c0 6-3 10-7 10s-7-4-7-10z" fill="#fff"/>
              <path d="M17 14c0 0 1 3 3 3s3-3 3-3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <span className={styles.logoText}>Bright<span className={styles.logoAccent}>Smile</span></span>
          </Link>

          <button
            className={styles.navToggle}
            id="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
          </button>

          <nav id="nav-menu" className={`${styles.navMenu} ${open ? styles.open : ''}`} role="menu">
            {[
              { href: '#services', label: 'Services' },
              { href: '#doctors',  label: 'Our Doctors' },
              { href: '#testimonials', label: 'Reviews' },
              { href: '#contact',  label: 'Contact' },
            ].map(({ href, label }) => (
              <a key={href} href={href} className={styles.navLink} role="menuitem" onClick={close}>{label}</a>
            ))}
            <a href="#booking" className={`btn btn-primary ${styles.navCta}`} role="menuitem" onClick={close}>
              Book Appointment
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
