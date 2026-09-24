import { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'
import siteConfig from '../../config/siteConfig'
import './MapSection.css'

export default function MapSection() {
  const { locations, contact } = siteConfig
  const [activeId, setActiveId] = useState(locations?.[0]?.id)

  const activeLocation = locations?.find((loc) => loc.id === activeId) || locations?.[0]

  const isReady = (url) => url && !url.startsWith('GOOGLE_MAP_EMBED_URL')

 return (
  <section className="map" aria-label="Locations of GATEE SEEDS">
    {locations && locations.length > 1 && (
      <div className="map__tabs" role="tablist" aria-label="Select location">
        {locations.map((loc) => (
          <button
            key={loc.id}
            type="button"
            role="tab"
            aria-selected={activeLocation?.id === loc.id}
            className={`map__tab${activeLocation?.id === loc.id ? ' map__tab--active' : ''}`}
            onClick={() => setActiveId(loc.id)}
          >
            <FiMapPin aria-hidden="true" />
            {loc.name}
          </button>
        ))}
      </div>
    )}

    <div className="map__frame">
      {activeLocation && isReady(activeLocation.googleMapEmbedUrl) ? (
        <iframe
          title={`GATEE SEEDS on Google Maps - ${activeLocation.name}`}
          src={activeLocation.googleMapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="map__placeholder">
          <FiMapPin aria-hidden="true" />
          <p>
            <strong>Map to be added for {activeLocation?.name}.</strong> Paste the Google Maps
            embed link into <code>src/config/siteConfig.js</code> under{' '}
            <code>locations.{activeLocation?.id}.googleMapEmbedUrl</code>.
          </p>
          <p className="map__address">
            {(activeLocation?.addressLines || contact?.addressLines || []).join(' ')}
          </p>
        </div>
      )}
    </div>
  </section>
)
}