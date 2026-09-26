
import mapImg from '../../assets/mpp.png'
import { useLanguage } from '../../context/LanguageContext'

import './Presence.css'

export default function Presence() {
  const { t } = useLanguage()

  return (
    <section
      className="presence-section"
      aria-labelledby="presence-heading"
    >
      <div className="presence-shell">

        <div className="presence-map">
          <img
            src={mapImg}
            alt={t.presence.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="presence-content">
          <p className="presence-eyebrow">
            {t.presence.eyebrow}
          </p>

          <h2
            id="presence-heading"
            className="presence-heading"
          >
            {t.presence.title}
          </h2>

          <p className="presence-text">
            {t.presence.description1}
          </p>

          <p className="presence-text">
            {t.presence.description2}
          </p>
        </div>

      </div>
    </section>
  )
}

