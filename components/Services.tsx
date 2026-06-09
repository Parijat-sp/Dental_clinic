'use client'
import ScrollReveal from './ScrollReveal'
import styles from './Services.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    desc: 'Routine exams, professional cleanings, fillings, and preventive care to keep your smile healthy year-round.',
    features: ['Comprehensive Exams', 'Professional Cleanings', 'Digital X-Rays', 'Cavity Fillings'],
    link: '#booking',
  },
  {
    icon: '✨',
    title: 'Teeth Whitening',
    desc: 'Professional in-office and take-home whitening treatments that deliver visibly brighter results safely.',
    features: ['In-Office Whitening', 'Custom Tray Kits', 'Sensitivity-Safe', 'Long-Lasting Results'],
    link: '#booking',
  },
  {
    icon: '💎',
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with veneers, bonding, and smile makeovers tailored to your unique facial aesthetics.',
    features: ['Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers', 'Gum Contouring'],
    link: '#booking',
    featured: true,
  },
  {
    icon: '🔲',
    title: 'Orthodontics',
    desc: 'Traditional braces and clear aligner therapy for straighter teeth and a healthier bite at any age.',
    features: ['Invisalign® Certified', 'Traditional Braces', 'Retainers', 'Teen & Adult Options'],
    link: '#booking',
  },
  {
    icon: '🏥',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements that restore your function and confidence completely.',
    features: ['Single Implants', 'Full-Arch Restoration', 'Bone Grafting', '3D Imaging Guided'],
    link: '#booking',
  },
  {
    icon: '🚨',
    title: 'Emergency Dental',
    desc: 'Same-day emergency appointments for toothaches, broken teeth, and urgent dental needs.',
    features: ['Same-Day Slots', 'Toothache Relief', 'Broken Tooth Repair', 'After-Hours Line'],
    link: 'tel:+15551234567',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`} id="services" aria-labelledby="services-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 id="services-heading">Our <span>Dental</span> Services</h2>
          <p>From routine checkups to advanced restorative treatments — all under one roof, designed for your comfort.</p>
        </div>
        <div className={styles.grid} role="list">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1} direction="up">
              <article
                className={`${styles.card} ${s.featured ? styles.featured : ''}`}
                role="listitem" tabIndex={0}>
                <div className={styles.iconWrap} aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul aria-label={`${s.title} features`}>
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <a href={s.link} className={styles.cardLink}
                  aria-label={`Learn more about ${s.title}`}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Decorative Parallax Images */}
      <motion.div style={{ y: y1, position: 'absolute', top: '10%', left: '-10%', width: '400px', opacity: 0.1, zIndex: 1, pointerEvents: 'none' }}>
        <img src="/assets/dental_service_1.png" alt="Dental Service" style={{ width: '100%', borderRadius: '24px' }} />
      </motion.div>
      <motion.div style={{ y: y2, position: 'absolute', bottom: '10%', right: '-10%', width: '400px', opacity: 0.1, zIndex: 1, pointerEvents: 'none' }}>
        <img src="/assets/dental_service_2.png" alt="Happy Patient" style={{ width: '100%', borderRadius: '24px' }} />
      </motion.div>
    </section>
  )
}
