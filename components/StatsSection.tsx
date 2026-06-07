import CountUp from './CountUp'
import styles from './StatsSection.module.css'

const stats = [
  { target: 170, suffix: '', label: 'Performed Surgeries' },
  { target: 85,  suffix: '', label: 'Satisfied Patients'  },
  { target: 176, suffix: '', label: 'Staff Members'       },
  { target: 98,  suffix: '', label: 'Yearly Surgeries'    },
]

export default function StatsSection() {
  return (
    <section className={styles.section} aria-label="Clinic statistics">
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <span className="section-tag">Why Choose Us</span>
          <h2>Numbers That <span>Speak</span> for Themselves</h2>
          <p>Our commitment to excellence is reflected in every patient we serve. Join thousands of satisfied smiles.</p>
          <a href="#booking" className="btn btn-primary">Book a Consultation</a>
        </div>
        <div className={styles.statsGrid} role="list">
          {stats.map(({ target, suffix, label }, i) => (
            <div key={label} className={styles.statCard} role="listitem"
              style={{ animationDelay: `${i * 0.12}s` }}>
              <span className={styles.num}>
                <CountUp target={target} suffix={suffix} duration={1600}/>
              </span>
              <span className={styles.label}>{label}</span>
              <div className={styles.statBar} aria-hidden="true"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
