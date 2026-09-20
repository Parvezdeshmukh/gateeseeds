import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import siteConfig from '../../config/siteConfig'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import './FloatingSocial.css'

export default function FloatingSocial() {
  const { social, contact } = siteConfig
  const isSet = (url) => url && !url.endsWith('_URL')

  const items = [
    { key: 'wa', label: 'WhatsApp', href: whatsappLink(), Icon: FaWhatsapp, cls: 'fs--wa', external: true },
    { key: 'call', label: `Call ${contact.phonePrimaryDisplay}`, href: telLink(contact.phonePrimary), Icon: FiPhone, cls: 'fs--call' },
    isSet(social.instagram) && { key: 'ig', label: 'Instagram', href: social.instagram, Icon: FaInstagram, cls: 'fs--ig', external: true },
    isSet(social.facebook) && { key: 'fb', label: 'Facebook', href: social.facebook, Icon: FaFacebookF, cls: 'fs--fb', external: true },
    isSet(social.youtube) && { key: 'yt', label: 'YouTube', href: social.youtube, Icon: FaYoutube, cls: 'fs--yt', external: true }
  ].filter(Boolean)

  return (
    <div className="fs" role="complementary" aria-label="Quick contact">
      {items.map(({ key, label, href, Icon, cls, external }) => (
        <a
          key={key}
          className={`fs__btn ${cls}`}
          href={href}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <Icon aria-hidden="true" />
          <span className="fs__tip">{label}</span>
        </a>
      ))}
    </div>
  )
}
