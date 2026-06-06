import styles from './StatsSection.module.css'

const stats = [
  { number: '12,000+', label: 'Happy Patients',     aria: '12,000 patients' },
  { number: '20+',     label: 'Years of Excellence', aria: '20 years' },
  { number: '4.9★',   label: 'Average Rating',      aria: '4.9 out of 5 star rating' },
  { number: '98%',     label: 'Patient Satisfaction',aria: '98 percent satisfaction' },
]

export default function StatsSection() {
  return (
    <section className={styles.statsSection} aria-label="Clinic statistics">
      <div className={`container ${styles.statsGrid}`}>
        {stats.map(({ number, label, aria }) => (
          <div key={label} className={styles.statItem}>
            <span className={styles.statNumber} aria-label={aria}>{number}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
