import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../../config/siteConfig'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import './Contact.css'

const empty = { name: '', mobile: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const { contact } = siteConfig

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name so we know who is writing.'
    if (!/^[0-9+\s-]{10,15}$/.test(form.mobile.trim()))
      next.mobile = 'Enter a mobile number we can reach you on.'
    if (!form.message.trim()) next.message = 'Tell us which variety and how much you need.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const send = () => {
    if (!validate()) return
    const text = [
      'Hello GATEE SEEDS, I would like to enquire about your onion seed products.',
      '',
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.mobile.trim()}`,
      `Message: ${form.message.trim()}`
    ].join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="shell contact__grid">
        <div className="contact__info" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Talk to GATEE SEEDS</h2>
          <p>
            Call during working hours or message on WhatsApp at any time. Enquiries go
            straight to the numbers printed on our cartons.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon" aria-hidden="true"><FiPhone /></span>
              <div>
                <span className="contact__label">Phone</span>
                <a href={telLink(contact.phonePrimary)}>{contact.phonePrimaryDisplay}</a>
                <a href={telLink(contact.phoneSecondary)}>{contact.phoneSecondaryDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon contact__icon--wa" aria-hidden="true"><FaWhatsapp /></span>
              <div>
                <span className="contact__label">WhatsApp</span>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {contact.phonePrimaryDisplay}
                </a>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true"><FiMail /></span>
              <div>
                <span className="contact__label">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true"><FiMapPin /></span>
              <div>
                <span className="contact__label">Address</span>
                <address>
                  {contact.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__formCard" data-reveal data-delay="1">
          <h3>Send an enquiry</h3>
          <p className="contact__note">
            Your details open in WhatsApp, ready to send. Nothing is stored on this website.
          </p>

          <div className="field">
            <label htmlFor="cf-name">Full name</label>
            <input
              id="cf-name"
              type="text"
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'cf-name-error' : undefined}
            />
            {errors.name && <p className="field__error" id="cf-name-error">{errors.name}</p>}
          </div>

          <div className="field">
            <label htmlFor="cf-mobile">Mobile number</label>
            <input
              id="cf-mobile"
              type="tel"
              inputMode="tel"
              value={form.mobile}
              onChange={update('mobile')}
              autoComplete="tel"
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? 'cf-mobile-error' : undefined}
            />
            {errors.mobile && <p className="field__error" id="cf-mobile-error">{errors.mobile}</p>}
          </div>

          <div className="field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              rows="4"
              value={form.message}
              onChange={update('message')}
              placeholder="Variety, quantity and your district"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'cf-message-error' : undefined}
            />
            {errors.message && (
              <p className="field__error" id="cf-message-error">{errors.message}</p>
            )}
          </div>

          <button type="button" className="btn contact__submit" onClick={send}>
            <FiSend aria-hidden="true" />
            Send enquiry on WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
