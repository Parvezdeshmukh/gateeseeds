import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaGlobe } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import siteConfig from '../../config/siteConfig'
import { useLanguage } from '../../context/LanguageContext'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import './FloatingSocial.css'

export default function FloatingSocial() {
  const { social, contact } = siteConfig
  const { toggleLanguage, t } = useLanguage()
  const isSet = (url) => url && !url.endsWith('_URL')

  const items = [
    {
      key: 'wa',
      label: 'WhatsApp',
      href: whatsappLink(),
      Icon: FaWhatsapp,
      cls: 'fs--wa',
      external: true
    },
    {
      key: 'call',
      label: `Call ${contact.phonePrimaryDisplay}`,
      href: telLink(contact.phonePrimary),
      Icon: FiPhone,
      cls: 'fs--call'
    },
    isSet(social.instagram) && {
      key: 'ig',
      label: 'Instagram',
      href: social.instagram,
      Icon: FaInstagram,
      cls: 'fs--ig',
      external: true
    },
    isSet(social.facebook) && {
      key: 'fb',
      label: 'Facebook',
      href: social.facebook,
      Icon: FaFacebookF,
      cls: 'fs--fb',
      external: true
    },
    isSet(social.youtube) && {
      key: 'yt',
      label: 'YouTube',
      href: social.youtube,
      Icon: FaYoutube,
      cls: 'fs--yt',
      external: true
    },
    {
      key: 'lang',
      label: t.topbar.switchLanguage,
      Icon: FaGlobe,
      cls: 'fs--lang',
      action: toggleLanguage
    }
  ].filter(Boolean)

  return (
    <div className="fs" role="complementary" aria-label="Quick contact">
      {items.map((item) => {
        const { key, label, href, Icon, cls, external, action } = item

        if (action) {
          return (
            <button
              key={key}
              type="button"
              className={`fs__btn ${cls}`}
              aria-label={label}
              onClick={action}
            >
              <Icon aria-hidden="true" />
              <span className="fs__tip">{label}</span>
            </button>
          )
        }

        return (
          
           <a  key={key}
            className={`fs__btn ${cls}`}
            href={href}
            aria-label={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            <Icon aria-hidden="true" />
            <span className="fs__tip">{label}</span>
          </a>
        )
      })}
    </div>
  )
}