import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import siteConfig from '../../config/siteConfig'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'

import './Contact.css'

const empty = {
  name: '',
  mobile: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  const { contact } = siteConfig
  const { t, lang } = useLanguage()

  const contactText = t.contact

  const update = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))

    setErrors((prev) => ({
      ...prev,
      [field]: '',
    }))
  }

  const validate = () => {
    const next = {}

    if (!form.name.trim()) {
      next.name = contactText.nameError
    }

    if (!/^[0-9+\s-]{10,15}$/.test(form.mobile.trim())) {
      next.mobile = contactText.mobileError
    }

    if (!form.message.trim()) {
      next.message = contactText.messageError
    }

    setErrors(next)

    return Object.keys(next).length === 0
  }

  const send = () => {
    if (!validate()) return

    const text = [
      contactText.whatsappGreeting,
      '',
      `${contactText.fullName}: ${form.name.trim()}`,
      `${contactText.mobile}: ${form.mobile.trim()}`,
      `${contactText.message}: ${form.message.trim()}`,
    ].join('\n')

    window.open(
      whatsappLink(text, lang),
      '_blank',
      'noopener'
    )
  }

  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="shell contact__grid">

        {/* Contact Information */}
        <div className="contact__info" data-reveal>
          <p className="eyebrow">
            {contactText.eyebrow}
          </p>

          <h2 id="contact-heading">
            {contactText.title}
          </h2>

          <p>
            {contactText.description}
          </p>

          <ul className="contact__list">

            {/* Phone */}
            <li>
              <span
                className="contact__icon"
                aria-hidden="true"
              >
                <FiPhone />
              </span>

              <div>
                <span className="contact__label">
                  {contactText.phone}
                </span>

                <a href={telLink(contact.phonePrimary)}>
                  {contact.phonePrimaryDisplay}
                </a>

                <a href={telLink(contact.phoneSecondary)}>
                  {contact.phoneSecondaryDisplay}
                </a>
              </div>
            </li>

            {/* WhatsApp */}
            <li>
              <span
                className="contact__icon contact__icon--wa"
                aria-hidden="true"
              >
                <FaWhatsapp />
              </span>

              <div>
                <span className="contact__label">
                  {contactText.whatsapp}
                </span>

                <a
                  href={whatsappLink(undefined, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.phonePrimaryDisplay}
                </a>
              </div>
            </li>

            {/* Email */}
            <li>
              <span
                className="contact__icon"
                aria-hidden="true"
              >
                <FiMail />
              </span>

              <div>
                <span className="contact__label">
                  {contactText.email}
                </span>

                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </li>

            {/* Address */}
          <li>
  <span
    className="contact__icon"
    aria-hidden="true"
  >
    <FiMapPin />
  </span>

  <div>
    <span className="contact__label">
      {contactText.address}
    </span>

    <address>
    {(contact.addressLines[lang] || contact.addressLines.en).map((line) => (
  <span key={line}>
    {line}
  </span>
))}
    </address>
  </div>
</li>

          </ul>
        </div>

        {/* Contact Form */}
        <div
          className="contact__formCard"
          data-reveal
          data-delay="1"
        >
          <h3>
            {contactText.formTitle}
          </h3>

          <p className="contact__note">
            {contactText.formNote}
          </p>

          {/* Name */}
          <div className="field">
            <label htmlFor="cf-name">
              {contactText.fullName}
            </label>

            <input
              id="cf-name"
              type="text"
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name
                  ? 'cf-name-error'
                  : undefined
              }
            />

            {errors.name && (
              <p
                className="field__error"
                id="cf-name-error"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div className="field">
            <label htmlFor="cf-mobile">
              {contactText.mobile}
            </label>

            <input
              id="cf-mobile"
              type="tel"
              inputMode="tel"
              value={form.mobile}
              onChange={update('mobile')}
              autoComplete="tel"
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={
                errors.mobile
                  ? 'cf-mobile-error'
                  : undefined
              }
            />

            {errors.mobile && (
              <p
                className="field__error"
                id="cf-mobile-error"
              >
                {errors.mobile}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="field">
            <label htmlFor="cf-message">
              {contactText.message}
            </label>

            <textarea
              id="cf-message"
              rows="4"
              value={form.message}
              onChange={update('message')}
              placeholder={contactText.messagePlaceholder}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message
                  ? 'cf-message-error'
                  : undefined
              }
            />

            {errors.message && (
              <p
                className="field__error"
                id="cf-message-error"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="button"
            className="btn contact__submit"
            onClick={send}
          >
            <FiSend aria-hidden="true" />
            {contactText.sendEnquiry}
          </button>

        </div>
      </div>
    </section>
  )
}