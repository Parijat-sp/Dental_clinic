import Link from 'next/link'
import styles from './Footer.module.css'

const col1 = ['General Dentistry','Teeth Whitening','Cosmetic Dentistry','Orthodontics','Dental Implants','Emergency Dental']
const col2: [string,string][] = [['Our Doctors','#doctors'],['Patient Reviews','#testimonials'],['Book Appointment','#booking'],['Contact Us','#contact'],['Careers','#'],['Blog','#']]
const col3 = ['Insurance Information','New Patient Forms','Financing Options','Accessibility Statement','Privacy Policy','Sitemap']

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Dental Clinic home">
            <svg width="40" height="40" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <rect width="42" height="42" rx="12" fill="#0057FF"/>
              <path d="M13 14 Q13 9 17.5 9 Q19.5 9 21 11.5 Q22.5 9 24.5 9 Q29 9 29 14 Q29 20 26 28 Q24.5 32 23 32 Q21.5 32 21 27.5 Q20.5 32 19 32 Q17.5 32 16 28 Q13 20 13 14Z" fill="white"/>
              <path d="M31 8 L31.8 10.2 L34 11 L31.8 11.8 L31 14 L30.2 11.8 L28 11 L30.2 10.2Z" fill="#93C5FD"/>
            </svg>
            <span>Dental<span style={{color:'#0057FF'}}> Clinic</span></span>
          </Link>
          <p>Premium dental care with compassion, technology, and transparency. Serving our community since 2005.</p>
          <div className={styles.socials} aria-label="Social media">
            {[
              { label:'Facebook', d:<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
              { label:'Instagram', path: true },
              { label:'Twitter', d:<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
            ].map(({ label, d, path }) => (
              <a key={label} href="#" className={styles.socialBtn} aria-label={`Dentixa on ${label}`}>
                {path ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{d}</svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <div className={styles.col}><h3>Services</h3><ul>{col1.map(s=><li key={s}><a href="#services">{s}</a></li>)}</ul></div>
          <div className={styles.col}><h3>Clinic</h3><ul>{col2.map(([l,h])=><li key={l}><a href={h}>{l}</a></li>)}</ul></div>
          <div className={styles.col}><h3>Resources</h3><ul>{col3.map(r=><li key={r}><a href="#">{r}</a></li>)}</ul></div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
          <p className={styles.credit}>
            Designed &amp; developed by{' '}
            <a href="https://rytful.com" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>
              Rytful Media
            </a>
          </p>
          <div className={styles.legal}>
            {['Privacy','Terms','Accessibility','Sitemap'].map(l=><a key={l} href="#">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
