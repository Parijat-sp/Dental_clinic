import styles from './TrustBar.module.css'

const badges = [
  { label: 'ADA Member',        bg: '#e0f2fe', color: '#0369a1' },
  { label: 'Joint Commission',  bg: '#d1fae5', color: '#065f46' },
  { label: 'HIPAA Compliant',   bg: '#ede9fe', color: '#5b21b6' },
  { label: 'State Licensed',    bg: '#fef3c7', color: '#92400e' },
  { label: 'All Insurance',     bg: '#fce7f3', color: '#9d174d' },
]

export default function TrustBar() {
  return (
    <section className={styles.trustBar} aria-label="Certifications and accreditations">
      <div className={`container ${styles.trustBarInner}`}>
        <p className={styles.trustBarLabel}>Trusted &amp; Accredited By</p>
        <div className={styles.trustLogos} role="list">
          {badges.map(({ label, bg, color }) => (
            <div key={label} className={styles.trustLogoItem} role="listitem">
              <svg viewBox="0 0 100 36" aria-label={label} role="img" width="100" height="36">
                <rect width="100" height="36" rx="6" fill={bg}/>
                <text x="50" y="24" textAnchor="middle" fill={color}
                  fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11">{label}</text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
