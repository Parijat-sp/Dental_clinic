'use client'

import { useState, useRef } from 'react'
import styles from './BookingForm.module.css'

interface FormState {
  firstName: string; lastName: string; email: string; phone: string;
  service: string; doctor: string; date: string; time: string;
  insurance: string; notes: string; newPatient: boolean; consent: boolean;
}

const init: FormState = {
  firstName:'', lastName:'', email:'', phone:'',
  service:'', doctor:'', date:'', time:'',
  insurance:'', notes:'', newPatient: false, consent: false,
}

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(init)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email address.'
    if (!form.phone.trim())     e.phone   = 'Phone number is required.'
    if (!form.service)          e.service = 'Please select a service.'
    if (!form.date)             e.date    = 'Please choose a preferred date.'
    if (!form.consent)          e.consent = 'You must agree to the privacy policy.'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    setErrors(err => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={`${styles.bookingSection} section-padding`} id="booking" aria-labelledby="booking-heading">
      <div className={`container ${styles.bookingInner}`}>
        {/* Info column */}
        <div className={styles.bookingInfo} id="contact">
          <span className="section-tag">Easy Scheduling</span>
          <h2 id="booking-heading">Book Your Appointment</h2>
          <p>Schedule in under 2 minutes. We&apos;ll confirm within 30 minutes during business hours.</p>

          <div className={styles.bookingHours} aria-label="Clinic hours">
            <h3 className={styles.hoursTitle}>Clinic Hours</h3>
            <dl className={styles.hoursList}>
              {[['Monday – Friday','8:00 AM – 7:00 PM'],['Saturday','9:00 AM – 5:00 PM'],['Sunday','Emergency Only']].map(([day,hrs]) => (
                <div key={day} className={styles.hoursRow}>
                  <dt>{day}</dt><dd>{hrs}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.bookingContact} aria-label="Contact options">
            <a href="tel:+15551234567" className={styles.contactItem}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 3a2 2 0 01-.4 2L8.1 10a16 16 0 006 6l1.3-1.3a2 2 0 012-.5c1 .3 2 .6 3 .7a2 2 0 011.6 2z"/>
              </svg>
              (555) 123-4567
            </a>
            <a href="mailto:hello@brightsmile.com" className={styles.contactItem}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              hello@brightsmile.com
            </a>
            <div className={`${styles.contactItem} ${styles.contactAddress}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              123 Smile Avenue, Suite 200, New York, NY 10001
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className={styles.bookingFormWrap}>
          <form ref={formRef} className={styles.bookingForm} id="booking-form" noValidate onSubmit={handleSubmit} aria-label="Appointment booking form">
            <h3 className={styles.formTitle}>Schedule Online</h3>

            <div className={styles.formRow}>
              <Field label="First Name" id="first-name" name="firstName" type="text" value={form.firstName} onChange={handleChange} error={errors.firstName} placeholder="Jane" required autoComplete="given-name"/>
              <Field label="Last Name"  id="last-name"  name="lastName"  type="text" value={form.lastName}  onChange={handleChange} error={errors.lastName}  placeholder="Smith" required autoComplete="family-name"/>
            </div>
            <div className={styles.formRow}>
              <Field label="Email Address" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@example.com" required autoComplete="email"/>
              <Field label="Phone Number"  id="phone" name="phone" type="tel"   value={form.phone} onChange={handleChange} error={errors.phone} placeholder="(555) 000-0000" required autoComplete="tel"/>
            </div>
            <div className={styles.formRow}>
              <SelectField label="Service Needed" id="service" name="service" value={form.service} onChange={handleChange} error={errors.service} required>
                <option value="" disabled>Select a service…</option>
                <option value="general">General Checkup &amp; Cleaning</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="cosmetic">Cosmetic Consultation</option>
                <option value="orthodontics">Orthodontic Consultation</option>
                <option value="implants">Dental Implants Consultation</option>
                <option value="emergency">Emergency Care</option>
                <option value="other">Other</option>
              </SelectField>
              <SelectField label="Preferred Doctor" id="doctor" name="doctor" value={form.doctor} onChange={handleChange}>
                <option value="">No preference</option>
                <option value="mitchell">Dr. Sarah Mitchell</option>
                <option value="thornton">Dr. James Thornton</option>
                <option value="mehta">Dr. Arjun Mehta</option>
              </SelectField>
            </div>
            <div className={styles.formRow}>
              <Field label="Preferred Date" id="date" name="date" type="date" value={form.date} onChange={handleChange} error={errors.date} required/>
              <SelectField label="Preferred Time" id="time" name="time" value={form.time} onChange={handleChange}>
                <option value="">Any available time</option>
                <option value="morning">Morning (8AM – 12PM)</option>
                <option value="afternoon">Afternoon (12PM – 5PM)</option>
                <option value="evening">Evening (5PM – 7PM)</option>
              </SelectField>
            </div>

            <SelectField label="Insurance Provider" id="insurance" name="insurance" value={form.insurance} onChange={handleChange} fullWidth>
              <option value="">Select insurance or self-pay…</option>
              {['Aetna','Blue Cross Blue Shield','Cigna','Delta Dental','Guardian','Humana','MetLife','United Healthcare','Self-Pay / Uninsured','Other'].map(ins => (
                <option key={ins} value={ins.toLowerCase().replace(/ /g,'-')}>{ins}</option>
              ))}
            </SelectField>

            <div className={styles.formGroup}>
              <label htmlFor="notes">Additional Notes or Concerns</label>
              <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange}
                placeholder="Describe any pain, anxiety, or special needs…"
                aria-describedby="notes-hint"/>
              <span className={styles.fieldHint} id="notes-hint">This information helps us prepare for your visit.</span>
            </div>

            <CheckboxField id="new-patient" name="newPatient" checked={form.newPatient} onChange={handleChange} label="I am a new patient"/>
            <CheckboxField id="consent" name="consent" checked={form.consent} onChange={handleChange} required
              error={errors.consent}
              label={<>I agree to the <a href="#" className={styles.formLink}>Privacy Policy</a> and consent to be contacted regarding my appointment. <span aria-label="required" className={styles.required}>*</span></>}/>

            <button type="submit" className={`btn btn-primary btn-full btn-lg ${styles.submitBtn}`} disabled={loading || submitted} id="submit-btn">
              {loading ? (
                <><span className={styles.spinner} aria-hidden="true"/>Processing…</>
              ) : submitted ? (
                <><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Appointment Requested!</>
              ) : (
                <><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Confirm Appointment Request</>
              )}
            </button>

            {submitted && (
              <div className={styles.formSuccess} role="alert" aria-live="polite">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="16 10 11 15 8 12"/>
                </svg>
                <div>
                  <strong>Appointment Request Received!</strong>
                  <p>Thank you! We&apos;ll confirm your appointment within 30 minutes. Check your email for a confirmation link.</p>
                </div>
              </div>
            )}

            <p className={styles.formDisclaimer}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              Your information is secure and will never be shared. We&apos;ll contact you within 30 minutes to confirm.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ---- Sub-components ---- */
function Field({ label, id, name, type, value, onChange, error, placeholder, required, autoComplete }: {
  label: string; id: string; name: string; type: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; placeholder?: string; required?: boolean; autoComplete?: string;
}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}{required && <span aria-label="required" className={styles.required}>*</span>}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange}
        className={error ? styles.invalid : ''} placeholder={placeholder}
        required={required} aria-required={required} autoComplete={autoComplete}/>
      {error && <span className={styles.fieldError} id={`${id}-error`} role="alert" aria-live="polite">{error}</span>}
    </div>
  )
}

function SelectField({ label, id, name, value, onChange, error, required, fullWidth, children }: {
  label: string; id: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string; required?: boolean; fullWidth?: boolean; children: React.ReactNode;
}) {
  return (
    <div className={`${styles.formGroup} ${fullWidth ? styles.fullWidth : ''}`}>
      <label htmlFor={id}>{label}{required && <span aria-label="required" className={styles.required}>*</span>}</label>
      <select id={id} name={name} value={value} onChange={onChange}
        className={error ? styles.invalid : ''} required={required} aria-required={required}>
        {children}
      </select>
      {error && <span className={styles.fieldError} id={`${id}-error`} role="alert" aria-live="polite">{error}</span>}
    </div>
  )
}

function CheckboxField({ id, name, checked, onChange, label, required, error }: {
  id: string; name: string; checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode; required?: boolean; error?: string;
}) {
  return (
    <div className={`${styles.formGroup} ${styles.formCheckbox}`}>
      <label className={styles.checkboxLabel}>
        <input type="checkbox" id={id} name={name} checked={checked} onChange={onChange} required={required} aria-required={required}/>
        <span className={styles.checkboxCustom} aria-hidden="true"/>
        {label}
      </label>
      {error && <span className={styles.fieldError} id={`${id}-error`} role="alert" aria-live="polite">{error}</span>}
    </div>
  )
}
