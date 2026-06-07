import React from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './Doctors.module.css'

const doctors = [
  {
    img: '/assets/doctor_male.png',
    alt: 'Dr. James Thornton – Senior Dentist',
    name: 'James Thornton',
    title: 'Dentist',
    social: ['facebook','twitter','instagram'],
  },
  {
    img: '/assets/doctor_female.png',
    alt: 'Dr. Sarah Mitchell – Lead Dentist',
    name: 'Mariana Jola',
    title: 'Dental Hygienist',
    social: ['facebook','twitter','instagram'],
    featured: true,
  },
  {
    img: '/assets/doctor_specialist.png',
    alt: 'Dr. Arjun Mehta – Orthodontist',
    name: 'Serbian Yale',
    title: 'Dentist',
    social: ['facebook','twitter','instagram'],
  },
]

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    facebook: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    twitter:  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  }
  return icons[type] ?? null
}

export default function Doctors() {
  return (
    <section className={`section-padding ${styles.section}`} id="doctors" aria-labelledby="doctors-heading">
      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <span className="section-tag">Our Team</span>
          <h2 id="doctors-heading">Dedicated <span>Dentists</span></h2>
          <p>Embark on a Journey through Heartfelt Experiences. Unver the Praises and Testimonials from Our Esteemed Clients, Unraveling the Unmatched Quality of Our Dental Care.</p>
        </div>

        <div className={styles.grid} role="list">
          {doctors.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 120} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
              <article className={`${styles.card} ${d.featured ? styles.featured : ''}`} role="listitem">
                <div className={styles.imgWrap}>
                  <Image
                    src={d.img} alt={d.alt}
                    width={320} height={360}
                    className={styles.img}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                  />
                  <div className={styles.overlay} aria-hidden="true"/>
                  <div className={styles.socials} aria-label={`${d.name} social links`}>
                    {d.social.map(type => (
                      <a key={type} href="#" className={styles.socialBtn}
                        aria-label={`${d.name} on ${type}`}>
                        <SocialIcon type={type}/>
                      </a>
                    ))}
                  </div>
                </div>
                <div className={styles.info}>
                  <h3>{d.name}</h3>
                  <p>{d.title}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
