import styles from './AccessibilitySection.module.css'

const features = [
  'Wheelchair accessible facility',
  'Sign language interpretation available',
  'Screen reader compatible website',
  'Sensory-friendly appointment times',
  'HIPAA-compliant communications',
  'Multi-language support (ES, ZH, HI, FR)',
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function AccessibilitySection() {
  return (
    <section className={`${styles.a11ySection} section-padding`} aria-labelledby="accessibility-heading">
      <div className={`container ${styles.a11yInner}`}>
        <div className={styles.a11yIcon} aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" width="80" height="80">
            <circle cx="32" cy="32" r="31" stroke="#0ea5e9" strokeWidth="2" fill="#e0f2fe"/>
            <circle cx="32" cy="18" r="5" fill="#0ea5e9"/>
            <path d="M20 28h24M32 28v16M22 44l10-6 10 6" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.a11yContent}>
          <h2 id="accessibility-heading">Our Commitment to Accessibility</h2>
          <p>Dental Clinic is dedicated to ensuring our services are accessible to everyone, regardless of ability. We strive to meet WCAG 2.1 AA standards across all touchpoints.</p>
          <div className={styles.a11yFeatures} role="list">
            {features.map((f) => (
              <div key={f} className={styles.a11yFeature} role="listitem">
                <CheckIcon />{f}
              </div>
            ))}
          </div>
          <a href="mailto:accessibility@dentalclinic.com" className="btn btn-outline" aria-label="Contact us about accessibility needs">
            Contact Our Accessibility Team
          </a>
        </div>
      </div>
    </section>
  )
}
