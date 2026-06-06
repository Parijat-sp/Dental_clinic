import styles from './Testimonials.module.css'

const testimonials = [
  {
    stars: '★★★★★',
    quote: 'I used to be terrified of the dentist, but BrightSmile completely changed that. Dr. Mitchell is so patient and explains every step. My smile has never looked better!',
    initials: 'MR',
    name: 'Maria Rodriguez',
    role: 'Patient since 2019',
    featured: false,
  },
  {
    stars: '★★★★★',
    quote: 'Dr. Thornton performed my implant surgery and it was absolutely painless. The entire team made me feel at ease. I can\'t believe I waited so long to get this done. Highly recommend!',
    initials: 'JK',
    name: 'James Kowalski',
    role: 'Dental Implant Patient',
    featured: true,
  },
  {
    stars: '★★★★★',
    quote: "Dr. Mehta's Invisalign treatment transformed my teen's confidence. The patient portal is amazing — we track progress and schedule appointments easily. 10/10!",
    initials: 'LP',
    name: 'Laura Peterson',
    role: "Orthodontic Patient's Parent",
    featured: false,
  },
]

export default function Testimonials() {
  return (
    <section className={`${styles.testimonials} section-padding`} id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Patient Stories</span>
          <h2 id="testimonials-heading">What Our Patients Say</h2>
          <p>Real experiences from real families who trust BrightSmile with their oral health.</p>
        </div>

        <div className={styles.testimonialsGrid} role="list">
          {testimonials.map(({ stars, quote, initials, name, role, featured }) => (
            <article key={name} className={`${styles.testimonialCard} ${featured ? styles.featured : ''}`} role="listitem">
              <div className={styles.testimonialStars} aria-label="5 out of 5 stars">{stars}</div>
              <blockquote><p className={styles.testimonialQuote}>&ldquo;{quote}&rdquo;</p></blockquote>
              <footer className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} aria-hidden="true">{initials}</div>
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className={styles.testimonialsSummary} aria-label="Review summary">
          <div className={styles.summaryRating}>
            <span className={styles.summaryScore} aria-label="Overall rating 4.9 out of 5">4.9</span>
            <div className={styles.summaryStars} aria-hidden="true">★★★★★</div>
            <span className={styles.summaryCount}>Based on 847 reviews</span>
          </div>
          <div className={styles.summaryPlatforms}>
            {['Google Reviews', 'Healthgrades', 'Zocdoc'].map((p) => (
              <span key={p} className={styles.platformBadge}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
