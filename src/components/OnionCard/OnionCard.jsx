import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { productWhatsappLink } from '../../utils/whatsapp'
import './OnionCard.css'

export default function OnionCard({ seed, delay = 0 }) {
  return (
    <article className="ocard" data-reveal data-delay={delay} style={{ '--pack': seed.packColor }}>
      <Link className="ocard__media" to={`/onion-seeds/${seed.id}`} tabIndex={-1} aria-hidden="true">
        <img src={seed.image} alt="" loading="lazy" />
        <span className="ocard__tag">{seed.category}</span>
      </Link>

      <div className="ocard__body">
        <h3 className="ocard__name">
          <Link to={`/onion-seeds/${seed.id}`}>{seed.name}</Link>
        </h3>
        <p className="ocard__marathi" lang="mr">
          {seed.nameMarathi}
        </p>
        <p className="ocard__text">{seed.short}</p>

        <div className="ocard__actions">
          <Link className="btn btn--sm btn--outline" to={`/onion-seeds/${seed.id}`}>
            View details
          </Link>
          <a
            className="btn btn--sm"
            href={productWhatsappLink(seed.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${seed.name} on WhatsApp`}
          >
            <FaWhatsapp aria-hidden="true" />
            Enquire
          </a>
        </div>
      </div>
    </article>
  )
}
