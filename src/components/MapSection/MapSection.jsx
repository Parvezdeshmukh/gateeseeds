import { FiMapPin } from 'react-icons/fi'
import siteConfig from '../../config/siteConfig'
import './MapSection.css'

export default function MapSection() {
  const { googleMapEmbedUrl, contact } = siteConfig
  const ready = googleMapEmbedUrl && googleMapEmbedUrl !== 'GOOGLE_MAP_EMBED_URL'

  return (
    <section className="map" aria-label="Location of GATEE SEEDS">
      {ready ? (
        <iframe
          title="GATEE SEEDS on Google Maps"
          src={googleMapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="map__placeholder">
          <FiMapPin aria-hidden="true" />
          <p>
            <strong>Map to be added.</strong> Paste the Google Maps embed link into{' '}
            <code>src/config/siteConfig.js</code> as <code>googleMapEmbedUrl</code>.
          </p>
          <p className="map__address">{contact.addressLines.join(' ')}</p>
        </div>
      )}
    </section>
  )
}
