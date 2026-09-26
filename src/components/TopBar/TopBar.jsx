import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGlobe, FaWhatsapp } from 'react-icons/fa';

import siteConfig from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { whatsappLink, telLink } from '../../utils/whatsapp';

import './TopBar.css';

export default function TopBar() {
  const { contact } = siteConfig;
  const { toggleLanguage, t } = useLanguage();

  return (
    <div className="topbar">
      <div className="shell topbar__inner">

        {/* Left Side */}
        <ul className="topbar__list">

          {/* Phone */}
          <li>
            <a
              href={telLink(contact.phonePrimary)}
              title={t.topbar.callPrimary}
            >
              <FiPhone aria-hidden="true" />
              <span>{contact.phonePrimaryDisplay}</span>
            </a>
          </li>

          {/* Email */}
          <li className="topbar__mail">
            <a
              href={`mailto:${contact.email}`}
              title={t.topbar.email}
            >
              <FiMail aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <ul className="topbar__list topbar__list--end">

          {/* Location */}
          <li className="topbar__place">
            <span className="topbar__static">
              <FiMapPin aria-hidden="true" />
             <span>{t.topbar.address}</span>
            </span>
          </li>

          <li className="topbar-divider desktop-only">|</li>

          {/* WhatsApp */}
          <li>
            <a
              className="topbar__wa"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              title={t.topbar.whatsapp}
            >
              <FaWhatsapp aria-hidden="true" />
              <span>{t.topbar.whatsapp}</span>
            </a>
          </li>

          <li className="topbar__divider desktop-only">|</li>

          {/* Language Switcher */}
          <li>
            <button
              onClick={toggleLanguage}
              className="lang-switcher-btn"
              title={t.topbar.switchLanguage}
              type="button"
            >
              <FaGlobe aria-hidden="true" />
              <span>{t.langToggle}</span>
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
}