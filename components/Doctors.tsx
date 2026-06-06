import Image from 'next/image'
import styles from './Doctors.module.css'

const doctors = [
  {
    img: '/assets/doctor_female.png',
    alt: 'Dr. Sarah Mitchell, DDS – Lead Dentist and Clinic Director',
    name: 'Dr. Sarah Mitchell, DDS',
    title: 'Lead Dentist & Clinic Director',
    bio: 'With 18 years of practice, Dr. Mitchell specializes in restorative and cosmetic dentistry. She completed her residency at Johns Hopkins and is a fellow of the American College of Dentists.',
    specialties: ['Cosmetic', 'Restorative', 'Implants'],
    cred1: 'DDS, Johns Hopkins University',
    cred2: 'ADA Certified Member',
    availability: 'Accepting Patients',
    limited: false,
  },
  {
    img: '/assets/doctor_male.png',
    alt: 'Dr. James Thornton, DMD – Senior Dentist, Oral Surgery',
    name: 'Dr. James Thornton, DMD',
    title: 'Senior Dentist, Oral Surgery',
    bio: 'Dr. Thornton brings 22 years of surgical expertise. His gentle approach and advanced training in sedation dentistry make complex procedures stress-free for anxious patients.',
    specialties: ['Oral Surgery', 'Sedation', 'Extractions'],
    cred1: 'DMD, Harvard School of Dental Medicine',
    cred2: 'Board-Certified Oral Surgeon',
    availability: 'Accepting Patients',
    limited: false,
  },
  {
    img: '/assets/doctor_specialist.png',
    alt: 'Dr. Arjun Mehta, MDS – Orthodontist and Invisalign Provider',
    name: 'Dr. Arjun Mehta, MDS',
    title: 'Orthodontist & Invisalign Provider',
    bio: 'A double-board certified orthodontist, Dr. Mehta has helped over 3,000 patients achieve straighter smiles. He is a Diamond-level Invisalign provider and lecturer at State University.',
    specialties: ['Invisalign®', 'Braces', 'Pediatric Ortho'],
    cred1: 'MDS, Columbia University',
    cred2: 'Diamond Invisalign® Provider',
    availability: 'Limited Slots',
    limited: true,
  },
]

export default function Doctors() {
  return (
    <section className={`${styles.doctors} section-padding`} id="doctors" aria-labelledby="doctors-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Meet The Team</span>
          <h2 id="doctors-heading">Expert Doctors Who Care</h2>
          <p>Our board-certified dental professionals bring decades of combined experience and a genuine passion for patient wellbeing.</p>
        </div>
        <div className={styles.doctorsGrid} role="list">
          {doctors.map((d) => (
            <article key={d.name} className={styles.doctorCard} role="listitem">
              <div className={styles.doctorImgWrap}>
                <Image
                  src={d.img} alt={d.alt}
                  width={400} height={280}
                  className={styles.doctorImg}
                  loading="lazy"
                />
                <div className={`${styles.doctorAvailability} ${d.limited ? styles.limited : ''}`}
                  aria-label={`Doctor availability: ${d.availability}`}>
                  <span className={`${styles.availDot} ${d.limited ? styles.availDotAmber : ''}`} />
                  {d.availability}
                </div>
              </div>
              <div className={styles.doctorInfo}>
                <h3>{d.name}</h3>
                <p className={styles.doctorTitle}>{d.title}</p>
                <p className={styles.doctorBio}>{d.bio}</p>
                <div className={styles.doctorSpecialties} aria-label="Specialties">
                  {d.specialties.map((s) => (
                    <span key={s} className={styles.specialtyTag}>{s}</span>
                  ))}
                </div>
                <div className={styles.doctorCredentials} aria-label="Credentials">
                  <div className={styles.credential}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                    </svg>
                    {d.cred1}
                  </div>
                  <div className={styles.credential}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    {d.cred2}
                  </div>
                </div>
                <a href="#booking" className={`btn btn-outline btn-sm`}
                  aria-label={`Book appointment with ${d.name}`}>
                  Book with {d.name.split(' ')[1]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
