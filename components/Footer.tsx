import Link from 'next/link'
import styles from './Footer.module.css'

const services = ['General Dentistry','Teeth Whitening','Cosmetic Dentistry','Orthodontics','Dental Implants','Emergency Dental']
const clinic   = [['Our Doctors','#doctors'],['Patient Portal','#portal'],['Patient Reviews','#testimonials'],['Book Appointment','#booking'],['Contact Us','#contact'],['Careers','#']]
const resources = ['Insurance Information','New Patient Forms','Dental Blog','Financing Options','Accessibility Statement','Privacy Policy']

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo} aria-label="BrightSmile Dental Clinic home">
            <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="19" fill="#0ea5e9" stroke="#fff" strokeWidth="1"/>
              <path d="M13 18c0-4 3.5-7 7-7s7 3 7 7c0 6-3 10-7 10s-7-4-7-10z" fill="#fff"/>
              <path d="M17 14c0 0 1 3 3 3s3-3 3-3" stroke="#0ea5e9" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <span className={styles.logoText}>Bright<span className={styles.logoAccent}>Smile</span></span>
          </Link>
          <p>Premium dental care with compassion, technology, and transparency. Serving our community since 2005.</p>
          <div className={styles.footerSocial} aria-label="Social media links">
            <a href="#" className={styles.socialLink} aria-label="Follow BrightSmile on Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Follow BrightSmile on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Follow BrightSmile on Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          <div className={styles.footerNavCol}>
            <h3>Services</h3>
            <ul>{services.map(s => <li key={s}><a href="#services">{s}</a></li>)}</ul>
          </div>
          <div className={styles.footerNavCol}>
            <h3>Clinic</h3>
            <ul>{clinic.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
          </div>
          <div className={styles.footerNavCol}>
            <h3>Patient Resources</h3>
            <ul>{resources.map(r => <li key={r}><a href="#">{r}</a></li>)}</ul>
          </div>
        </nav>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
          <p>© {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.</p>
          <div className={styles.footerLegal}>
            {['Privacy Policy','Terms of Use','Accessibility','Sitemap'].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
