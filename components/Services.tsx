import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    iconClass: styles.iconBlue,
    title: 'General Dentistry',
    desc: 'Routine exams, professional cleanings, fillings, and preventive care to keep your smile healthy year-round.',
    features: ['Comprehensive Exams','Professional Cleanings','Digital X-Rays','Cavity Fillings'],
    link: '#booking', linkLabel: 'Book a general dentistry appointment',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    iconClass: styles.iconTeal,
    title: 'Teeth Whitening',
    desc: 'Professional in-office and take-home whitening treatments that deliver visibly brighter results safely.',
    features: ['In-Office Whitening','Custom Tray Kits','Sensitivity-Safe','Long-Lasting Results'],
    link: '#booking', linkLabel: 'Book a teeth whitening appointment',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    iconClass: styles.iconWhite,
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with veneers, bonding, and smile makeovers tailored to your unique facial aesthetics.',
    features: ['Porcelain Veneers','Dental Bonding','Smile Makeovers','Gum Contouring'],
    link: '#booking', linkLabel: 'Book a cosmetic dentistry appointment',
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    iconClass: styles.iconPurple,
    title: 'Orthodontics',
    desc: 'Traditional braces and clear aligner therapy for straighter teeth and a healthier bite at any age.',
    features: ['Invisalign® Certified','Traditional Braces','Retainers','Teen & Adult Options'],
    link: '#booking', linkLabel: 'Book an orthodontics appointment',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    iconClass: styles.iconRose,
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements that restore your function and confidence completely.',
    features: ['Single Implants','Full-Arch Restoration','Bone Grafting','3D Imaging Guided'],
    link: '#booking', linkLabel: 'Book a dental implants consultation',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      </svg>
    ),
    iconClass: styles.iconAmber,
    title: 'Emergency Dental',
    desc: 'Same-day emergency appointments for toothaches, broken teeth, and urgent dental needs.',
    features: ['Same-Day Appointments','Toothache Relief','Broken Tooth Repair','After-Hours Line'],
    link: 'tel:+15551234567', linkLabel: 'Call for emergency dental care',
    linkText: 'Call Now →',
  },
]

export default function Services() {
  return (
    <section className={`${styles.services} section-padding`} id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 id="services-heading">Comprehensive Dental Services</h2>
          <p>From routine checkups to advanced restorative treatments — all under one roof, designed for your comfort.</p>
        </div>
        <div className={styles.servicesGrid} role="list">
          {services.map((s) => (
            <article
              key={s.title}
              className={`${styles.serviceCard} ${s.featured ? styles.featured : ''}`}
              role="listitem"
              tabIndex={0}
            >
              {s.featured && <div className={styles.featuredBadge} aria-label="Most popular service">Most Popular</div>}
              <div className={`${styles.serviceIcon} ${s.iconClass}`} aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className={styles.serviceFeatures} aria-label={`${s.title} services`}>
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a
                href={s.link}
                className={`${styles.serviceLink} ${s.featured ? styles.serviceLinkLight : ''}`}
                aria-label={s.linkLabel}
              >
                {s.linkText ?? 'Book Now →'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
