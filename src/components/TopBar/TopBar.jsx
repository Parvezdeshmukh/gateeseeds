import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../../config/siteConfig'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import './TopBar.css'

export default function TopBar() {
  const { contact } = siteConfig

  return (
    <div className="topbar">
      <div className="shell topbar__inner">
        <ul className="topbar__list">
          <li>
            <a href={telLink(contact.phonePrimary)}>
              <FiPhone aria-hidden="true" />
              <span>{contact.phonePrimaryDisplay}</span>
            </a>
          </li>
          <li className="topbar__mail">
            <a href={`mailto:${contact.email}`}>
              <FiMail aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </li>
        </ul>

        <ul className="topbar__list topbar__list--end">
          <li className="topbar__place">
            <span className="topbar__static">
              <FiMapPin aria-hidden="true" />
              <span>{contact.addressShort}</span>
            </span>
          </li>
          <li>
            <a
              className="topbar__wa"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>WhatsApp enquiry</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
