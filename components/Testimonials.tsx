import ScrollReveal from './ScrollReveal'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'The clinic is also exceptionally clean and prioritizes hygiene. They follow strict cleanliness protocols, which gives me added confidence that I am in a safe environment for dental care.',
    name: 'Selina Martin',
    role: 'Patient Manager',
    initials: 'SM',
  },
  {
    quote: 'Dr. Mitchell transformed my smile completely. I had veneers done and the results are beyond what I imagined. The whole team is warm, professional, and incredibly skilled.',
    name: 'James Kowalski',
    role: 'Dental Implant Patient',
    initials: 'JK',
    featured: true,
  },
  {
    quote: "My son's braces journey with Dr. Mehta was phenomenal. He explained everything in detail and the Invisalign results speak for themselves. Highly recommend to any parent!",
    name: 'Laura Peterson',
    role: "Parent of Ortho Patient",
    initials: 'LP',
  },
]

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`} id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Patient Reviews</span>
          <h2 id="testimonials-heading">What Our <span>Patients</span> Say</h2>
          <p>Real experiences from real families who trust Dental Clinic with their oral health.</p>
        </div>

        <div className={styles.grid} role="list">
          {testimonials.map(({ quote, name, role, initials, featured }, i) => (
            <ScrollReveal key={name} delay={i * 100} direction="up">
              <article className={`${styles.card} ${featured ? styles.featured : ''}`} role="listitem">
                <div className={styles.quoteIcon} aria-hidden="true">“</div>
                <p className={styles.quote}>{quote}</p>
                <div className={styles.readMore}>
                  <a href="#" className={styles.readLink}>Read More →</a>
                </div>
                <footer className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">{initials}</div>
                  <div>
                    <strong>{name}</strong>
                    <span>{role}</span>
                  </div>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.ratingBar} aria-label="Overall rating summary">
          <div className={styles.rating}>
            <span className={styles.score}>4.9</span>
            <div>
              <div className={styles.stars} aria-label="5 stars">★★★★★</div>
              <span className={styles.count}>Based on 847 verified reviews</span>
            </div>
          </div>
          <div className={styles.platforms}>
            {['Google Reviews', 'Healthgrades', 'Zocdoc'].map(p => (
              <span key={p} className={styles.badge}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
