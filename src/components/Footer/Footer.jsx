import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from 'react-icons/fa'

import logo from '../../assets/logo.jpg'
import siteConfig from '../../config/siteConfig'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'

import './Footer.css'

export default function Footer() {
  const { lang, t } = useLanguage()
  const { contact, social, company } = siteConfig

  const isSet = (url) =>
    url && !url.endsWith('_URL')

  const footerText = t.footer || {
    quickLinks: 'Quick links',
    contact: 'Contact',
    whatsappEnquiry: 'WhatsApp enquiry',
    footerNav: 'Footer',
    whyChooseUs: 'Why Choose Us',
    copyright: 'All rights reserved.',
    description: company.description,
    tagline: 'Onion seed producers and marketers.'
  }

  const quickLinks = [
    {
      to: '/',
      label: t.navbar.home
    },
    {
      to: '/about',
      label: t.navbar.about
    },
    {
      to: '/onion-seeds',
      label: t.navbar.onionSeeds
    },
    {
      to: '/gallery',
      label: t.navbar.gallery
    },
    {
      to: '/contact',
      label: t.navbar.contact
    }
  ]

  const socials = [
    isSet(social.instagram) && {
      href: social.instagram,
      label: 'Instagram',
      Icon: FaInstagram
    },

    isSet(social.facebook) && {
      href: social.facebook,
      label: 'Facebook',
      Icon: FaFacebookF
    },

    isSet(social.youtube) && {
      href: social.youtube,
      label: 'YouTube',
      Icon: FaYoutube
    },

    {
      href: whatsappLink(undefined, lang),
      label: 'WhatsApp',
      Icon: FaWhatsapp
    }
  ].filter(Boolean)

  const address =
    contact.addressLines?.[lang] ||
    contact.addressLines?.en ||
    []

  return (
    <footer className="footer">

      <div className="shell footer__grid">

        {/* Brand */}
        <div className="footer__brand">

          <div className="footer__id">
            <span className="logo-chip footer__logo">
              <img
                src={logo}
                alt="GATEE SEEDS Pvt. Ltd. logo"
                width="70"
                height="70"
                loading="lazy"
              />
            </span>

            <span>
              <strong>GATEE SEEDS</strong>
              <small>PVT. LTD.</small>
            </span>
          </div>

          <p>
            {footerText.description}
          </p>

          <ul className="footer__social">
            {socials.map(
              ({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              )
            )}
          </ul>

        </div>

        {/* Quick Links */}
        <nav
          className="footer__col"
          aria-label={footerText.footerNav}
        >
          <h2>
            {footerText.quickLinks}
          </h2>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <a href="/#why-choose-us">
                {t.navbar.whyChooseUs}
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer__col">

          <h2>
            {footerText.contact}
          </h2>

          <ul className="footer__contact">

            {/* Phone */}
            <li>
              <FiPhone aria-hidden="true" />

              <span>
                <a href={telLink(contact.phonePrimary)}>
                  {contact.phonePrimaryDisplay}
                </a>

                <a href={telLink(contact.phoneSecondary)}>
                  {contact.phoneSecondaryDisplay}
                </a>
              </span>
            </li>

            {/* WhatsApp */}
            <li>
              <FaWhatsapp aria-hidden="true" />

              <a
                href={whatsappLink(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerText.whatsappEnquiry}
              </a>
            </li>

            {/* Email */}
            <li>
              <FiMail aria-hidden="true" />

              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>

            {/* Address */}
            <li>
              <FiMapPin aria-hidden="true" />

              <address>
                {address.slice(1).map((line) => (
                  <span key={line}>
                    {line}
                  </span>
                ))}
              </address>
            </li>

          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer__bar">

        <div className="shell footer__barInner">

          <p>
            © {new Date().getFullYear()} GATEE SEEDS PVT. LTD.{' '}
            {footerText.copyright}
          </p>

          <p>
            {footerText.tagline}
          </p>

        </div>

      </div>

    </footer>
  )
}