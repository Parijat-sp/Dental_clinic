'use client'
import styles from './PatientPortal.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: 'Online Appointment Scheduling',
    desc: 'Book, reschedule, or cancel anytime, 24/7',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: 'Medical Records Access',
    desc: 'View X-rays, treatment history, and lab results',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    title: 'Secure Messaging',
    desc: 'Message your care team directly, HIPAA-encrypted',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: 'Billing & Insurance',
    desc: 'View invoices, pay online, track claims',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    title: 'Prescription Refills',
    desc: 'Request refills and get reminders for medications',
  },
]

export default function PatientPortal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax value for the background image
  const bgY = useTransform(scrollYProgress, [0, 1], [-150, 150])

  return (
    <section ref={sectionRef} className={`${styles.portalSection} section-padding`} id="portal" aria-labelledby="portal-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Image Parallax */}
      <motion.div style={{ y: bgY, position: 'absolute', top: 0, right: '-20%', width: '600px', opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}>
        <img src="/assets/portal_bg.png" alt="Portal Background" style={{ width: '100%', borderRadius: '24px' }} />
      </motion.div>

      <div className={`container ${styles.portalInner}`} style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.portalContent}>
          <span className="section-tag section-tag--light">Digital Convenience</span>
          <h2 id="portal-heading">Your Health, At Your Fingertips</h2>
          <p>Our secure patient portal gives you 24/7 access to everything you need — no phone calls, no waiting on hold.</p>

          <ul className={styles.portalFeatures} aria-label="Patient portal features">
            {features.map(({ icon, title, desc }) => (
              <li key={title} className={styles.portalFeatureItem}>
                <div className={styles.portalFeatureIcon} aria-hidden="true">{icon}</div>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.portalCtaGroup}>
            <a href="#" className="btn btn-primary" id="portal-login-btn">Log In to Portal</a>
            <a href="#" className="btn btn-ghost" id="portal-signup-btn">Create Account</a>
          </div>
          <p className={styles.portalSecurityNote}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            256-bit SSL encrypted • HIPAA compliant • SOC 2 Type II certified
          </p>
        </div>

        <div className={styles.portalMockup} aria-hidden="true" role="presentation">
          <div className={styles.mockupPhone}>
            <div className={styles.mockupNotch} />
            <div className={styles.mockupScreen}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupAvatar} />
                <div className={styles.mockupHeaderText}>
                  <div className={styles.mockupName}>Hello, Alex 👋</div>
                  <div className={styles.mockupSub}>Your next appointment</div>
                </div>
              </div>
              <div className={styles.mockupCard}>
                <div className={styles.mockupCardIcon}>🦷</div>
                <div className={styles.mockupCardContent}>
                  <div className={styles.mockupCardTitle}>Cleaning &amp; Exam</div>
                  <div className={styles.mockupCardDate}>June 14, 2026 · 10:00 AM</div>
                  <div className={styles.mockupCardDoctor}>Dr. Sarah Mitchell</div>
                </div>
                <div className={styles.mockupCardBadge}>Confirmed</div>
              </div>
              <div className={styles.mockupSectionTitle}>Quick Actions</div>
              <div className={styles.mockupActions}>
                {[['📅','Schedule'],['📋','Records'],['💬','Message'],['💳','Billing']].map(([icon,label]) => (
                  <div key={label} className={styles.mockupAction}>
                    <div className={styles.mockupActionIcon}>{icon}</div>
                    <div className={styles.mockupActionLabel}>{label}</div>
                  </div>
                ))}
              </div>
              <div className={styles.mockupSectionTitle}>Health Summary</div>
              <div className={styles.mockupHealth}>
                <div className={styles.mockupHealthRow}><span>Last Visit</span><span className={styles.mockupHealthVal}>Dec 10, 2025</span></div>
                <div className={styles.mockupHealthRow}><span>Treatment Plan</span><span className={`${styles.mockupHealthVal} ${styles.statusGreen}`}>Active</span></div>
                <div className={styles.mockupHealthRow}><span>Insurance</span><span className={`${styles.mockupHealthVal} ${styles.statusGreen}`}>Verified ✓</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
