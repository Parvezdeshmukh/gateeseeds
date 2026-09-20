import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../../config/siteConfig'
import { whatsappLink, telLink } from '../../utils/whatsapp'
import './EnquiryCTA.css'

export default function EnquiryCTA() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <span className="cta__leaf cta__leaf--left" aria-hidden="true" />
      <span className="cta__leaf cta__leaf--right" aria-hidden="true" />

      <div className="shell cta__inner">
        <div>
          <p className="eyebrow eyebrow--light">Enquiries</p>
          <h2 id="cta-heading">Looking for quality onion seed?</h2>
          <p>
            Send the variety and quantity you need. We will confirm what can be supplied and
            share the details.
          </p>
        </div>

        <div className="btn-row cta__actions">
          <a
            className="btn btn--white"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp enquiry
          </a>
          <a className="btn btn--ghost-light" href={telLink(siteConfig.contact.phonePrimary)}>
            <FiPhone aria-hidden="true" />
            {siteConfig.contact.phonePrimaryDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
