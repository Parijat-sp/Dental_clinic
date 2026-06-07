'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const close = () => setOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Dental Clinic home">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
            <rect width="42" height="42" rx="12" fill="#0057FF"/>
            <path
              d="M13 14 Q13 9 17.5 9 Q19.5 9 21 11.5 Q22.5 9 24.5 9 Q29 9 29 14 Q29 20 26 28 Q24.5 32 23 32 Q21.5 32 21 27.5 Q20.5 32 19 32 Q17.5 32 16 28 Q13 20 13 14Z"
              fill="white"
            />
            <path d="M31 8 L31.8 10.2 L34 11 L31.8 11.8 L31 14 L30.2 11.8 L28 11 L30.2 10.2Z" fill="#93C5FD"/>
          </svg>
          <span className={styles.logoText}>Dental<span className={styles.logoAccent}> Clinic</span></span>
        </Link>

        {/* Desktop nav */}
        <nav id="nav-menu" className={`${styles.navMenu} ${open ? styles.open : ''}`} aria-label="Main navigation">
          {[
            ['#home',     'Home'],
            ['#services', 'Our Services'],
            ['#doctors',  'Our Clinics'],
            ['#testimonials','Blog'],
            ['#contact',  'Location'],
          ].map(([href, label]) => (
            <a key={href} href={href} className={styles.navLink} onClick={close}>{label}</a>
          ))}
          <a href="#booking" className={`btn btn-dark btn-sm ${styles.bookBtn}`} onClick={close}>Book Online</a>
        </nav>

        <button className={styles.toggle} onClick={() => setOpen(!open)}
          aria-expanded={open} aria-label="Toggle menu">
          <span className={`${styles.bar} ${open ? styles.b1 : ''}`}/>
          <span className={`${styles.bar} ${open ? styles.b2 : ''}`}/>
          <span className={`${styles.bar} ${open ? styles.b3 : ''}`}/>
        </button>
      </div>
    </header>
  )
}
