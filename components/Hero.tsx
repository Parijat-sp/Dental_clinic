import styles from './Hero.module.css'

const stats = [
  { number: '827+', label: 'Transform your smile quickly with our exceptional services.' },
  { number: '170', label: 'Performed surgeries' },
  { number: '85', label: 'Satisfied Patients' },
  { number: '176', label: 'Staff Members' },
  { number: '98', label: 'Yearly Surgeries' },
]

// Floating particles config
const particles = [
  { icon: '🦷', size: 28, top: '12%', left: '5%', delay: '0s', dur: '6s' },
  { icon: '✨', size: 20, top: '70%', left: '3%', delay: '1.5s', dur: '5s' },
  { icon: '🦷', size: 18, top: '25%', right: '4%', delay: '0.8s', dur: '7s' },
  { icon: '💊', size: 16, top: '80%', right: '6%', delay: '2s', dur: '5.5s' },
  { icon: '⭐', size: 22, top: '50%', left: '8%', delay: '0.4s', dur: '8s' },
  { icon: '✨', size: 14, top: '10%', right: '12%', delay: '1.2s', dur: '4.5s' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      {/* Floating background particles */}
      <div className={styles.particlesWrap} aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              fontSize: p.size,
              top: p.top,
              left: 'left' in p ? p.left : undefined,
              right: 'right' in p ? (p as { right: string }).right : undefined,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          >
            {p.icon}
          </span>
        ))}
      </div>

      <div className={`container ${styles.inner}`}>

        {/* ── Left text column ── */}
        <div className={styles.content}>
          <div className={styles.datePill} aria-label="Clinic hours">
            <span className={styles.dot} />
            <span>We&apos;re Open Today · 09 AM – 16 PM</span>
          </div>

          <h1 id="hero-heading" className={styles.heading}>
            Get a <span className={styles.accent}>Beautiful</span><br />
            Straight Smile<br />
            <span className={styles.accent}>Quickly.</span>
          </h1>

          <p className={styles.sub}>
            Transform your smile quickly and effortlessly with our exceptional services.
            We understand the importance of having a beautiful, straight smile and that&apos;s
            why we offer efficient solutions tailored to your needs.
          </p>

          <div className={styles.actions}>
            <a href="#booking" className={`btn btn-primary btn-lg ${styles.pulseBtn}`}>
              Book Now
              <span className={styles.pulseRing} aria-hidden="true" />
            </a>
            <a href="#services" className={styles.learnMore}>
              <span className={styles.playBtn} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
              Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow} role="list" aria-label="Clinic statistics">
            <div className={styles.statMain} role="listitem">
              <span className={styles.statNum}>{stats[0].number}</span>
              <span className={styles.statLabel}>{stats[0].label}</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.statGrid} role="list">
              {stats.slice(1).map(({ number, label }) => (
                <div key={label} className={styles.statItem} role="listitem">
                  <span className={styles.statNum}>{number}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right image column ── */}
        <div className={styles.imageWrap} aria-hidden="true">
          {/* Animated concentric rings */}
          <div className={styles.ring1} />
          <div className={styles.ring2} />
          <div className={styles.ring3} />

          {/* Animated decorative blobs */}
          <div className={styles.blob1} />
          <div className={styles.blob2} />

          {/* Floating date badge */}
          <div className={styles.floatingCard}>
            <div className={styles.fcIcon}>📅</div>
            <div>
              <div className={styles.fcTitle}>July 27, 2026</div>
              <div className={styles.fcSub}>Next Appointment</div>
            </div>
          </div>

          {/* Animated badge — top right */}
          <div className={styles.ratingBadge}>
            <span className={styles.ratingStars}>★★★★★</span>
            <span className={styles.ratingText}>4.9 Rating</span>
          </div>

          <div className={styles.imageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/dental_hero.png"
              alt="3D dental braces model showing orthodontic treatment"
              className={styles.heroImg}
              width={560}
              height={520}
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className={styles.scrollIndicator} aria-label="Scroll to services">
        <span className={styles.scrollDot} />
      </a>
    </section>
  )
}
