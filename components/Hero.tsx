import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroBgShapes} aria-hidden="true">
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
      </div>

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge} aria-label="Award badge">
            <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
              <path d="M8 1l1.9 3.8 4.2.6-3 3 .7 4.2L8 10.5l-3.8 2.1.7-4.2-3-3 4.2-.6z"/>
            </svg>
            Rated #1 Dental Clinic — 5 Years Running
          </div>

          <h1 id="hero-heading" className={styles.heroH1}>
            Your Healthiest, <br/>
            <span className="text-gradient">Brightest Smile</span><br/>
            Starts Here
          </h1>

          <p className={styles.heroSub}>
            Compassionate, evidence-based dental care for every member of your family.
            Our board-certified dentists combine cutting-edge technology with a gentle, patient-first approach.
          </p>

          <div className={styles.heroActions}>
            <a href="#booking" className="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Appointment
            </a>
            <a href="tel:+15551234567" className="btn btn-outline btn-lg">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 3a2 2 0 01-.4 2L8.1 10a16 16 0 006 6l1.3-1.3a2 2 0 012-.5c1 .3 2 .6 3 .7a2 2 0 011.6 2z"/>
              </svg>
              Call (555) 123-4567
            </a>
          </div>

          <div className={styles.heroTrust} role="list" aria-label="Trust indicators">
            <div className={styles.trustItem} role="listitem">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 2l3.1 6.3 7 1-5 4.9 1.2 7L12 18l-6.3 3.2L7 14.2 2 9.3l7-1z"/>
              </svg>
              <span><strong>4.9/5</strong> Rating</span>
            </div>
            <div className={styles.trustDivider} aria-hidden="true" />
            <div className={styles.trustItem} role="listitem">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
              <span><strong>12,000+</strong> Happy Patients</span>
            </div>
            <div className={styles.trustDivider} aria-hidden="true" />
            <div className={styles.trustItem} role="listitem">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span><strong>20+ Years</strong> Experience</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImageWrap} aria-hidden="true">
          <div className={styles.heroImageCard}>
            <Image
              src="/assets/clinic_interior.png"
              alt="Modern BrightSmile dental clinic interior"
              width={520}
              height={390}
              className={styles.heroImg}
              priority
            />
            <div className={`${styles.heroBadgeFloating} ${styles.heroBadgeOpen}`}>
              <span className={styles.badgeDot} />Open Now
            </div>
            <div className={`${styles.heroBadgeFloating} ${styles.heroBadgeWait}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Avg. Wait: &lt;10 min
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
