import styles from './TrustBar.module.css'

const badges = [
  { label: 'ADA Member',       bg: '#E8F0FF', color: '#0057FF' },
  { label: 'Joint Commission', bg: '#d1fae5', color: '#065f46' },
  { label: 'HIPAA Compliant',  bg: '#ede9fe', color: '#5b21b6' },
  { label: 'State Licensed',   bg: '#fef3c7', color: '#92400e' },
  { label: 'All Insurance',    bg: '#fce7f3', color: '#9d174d' },
  { label: 'ADA Member',       bg: '#E8F0FF', color: '#0057FF' },
  { label: 'Joint Commission', bg: '#d1fae5', color: '#065f46' },
  { label: 'HIPAA Compliant',  bg: '#ede9fe', color: '#5b21b6' },
  { label: 'State Licensed',   bg: '#fef3c7', color: '#92400e' },
  { label: 'All Insurance',    bg: '#fce7f3', color: '#9d174d' },
]

export default function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Certifications and accreditations">
      <div className={styles.track} aria-hidden="true">
        <div className={styles.marquee}>
          {badges.map(({ label, bg, color }, i) => (
            <div key={i} className={styles.item}>
              <svg viewBox="0 0 120 40" width="120" height="40">
                <rect width="120" height="40" rx="8" fill={bg}/>
                <text x="60" y="26" textAnchor="middle" fill={color}
                  fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12">{label}</text>
              </svg>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={styles.marquee} aria-hidden="true">
          {badges.map(({ label, bg, color }, i) => (
            <div key={`b${i}`} className={styles.item}>
              <svg viewBox="0 0 120 40" width="120" height="40">
                <rect width="120" height="40" rx="8" fill={bg}/>
                <text x="60" y="26" textAnchor="middle" fill={color}
                  fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12">{label}</text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
