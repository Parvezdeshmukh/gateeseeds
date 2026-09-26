
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import { productWhatsappLink } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'

import './OnionCard.css'

export default function OnionCard({ seed, delay = 0 }) {
  const { lang, t } = useLanguage()

  // Card button/text translations
  const cardText = t?.onionCard || {
    viewDetails: 'View details',
    enquire: 'Enquire',
    whatsappAria: `Enquire about ${seed.name} on WhatsApp`,
  }

  // Product-specific translation
  const productText =
    seed.translations?.[lang] || seed.translations?.en

  return (
    <article
      className="ocard"
      data-reveal
      data-delay={delay}
      style={{ '--pack': seed.packColor }}
    >
      {/* Product Image */}
      <Link
        className="ocard__media"
        to={`/onion-seeds/${seed.id}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={seed.image}
          alt=""
          loading="lazy"
        />

        <span className="ocard__tag">
          {productText?.category || seed.category}
        </span>
      </Link>

      <div className="ocard__body">

        {/* Product Name */}
        <h3 className="ocard__name">
          <Link to={`/onion-seeds/${seed.id}`}>
            {seed.name}
          </Link>
        </h3>

        {/* Marathi Product Name */}
        <p className="ocard__marathi" lang="mr">
          {seed.nameMarathi}
        </p>

        {/* Product Short Description */}
        <p className="ocard__text">
          {productText?.short || seed.short}
        </p>

        {/* Actions */}
        <div className="ocard__actions">

          <Link
            className="btn btn--sm btn--outline"
            to={`/onion-seeds/${seed.id}`}
          >
            {cardText.viewDetails}
          </Link>

          <a
            className="btn btn--sm"
           href={productWhatsappLink(seed.name, lang)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              productText?.name
                ? `${cardText.whatsappAria} ${productText.name}`
                : cardText.whatsappAria
            }
          >
            <FaWhatsapp aria-hidden="true" />
            {cardText.enquire}
          </a>

        </div>
      </div>
    </article>
  )
}

