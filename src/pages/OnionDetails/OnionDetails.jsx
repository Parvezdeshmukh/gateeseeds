import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiPhone, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import onionSeeds, { getSeedById, labelStandards } from '../../data/onionSeeds'
import OnionCard from '../../components/OnionCard/OnionCard'
import PageHeader from '../../components/PageHeader/PageHeader'
import siteConfig from '../../config/siteConfig'
import { productWhatsappLink, telLink } from '../../utils/whatsapp'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import './OnionDetails.css'

export default function OnionDetails() {
  const { id } = useParams()
  const seed = getSeedById(id)
  useReveal([id])

  useEffect(() => {
    if (seed) {
      setPageMeta(
        `${seed.name} Onion Seed | GATEE SEEDS PVT. LTD.`,
        `${seed.name} (${seed.nameMarathi}) onion seed from GATEE SEEDS PVT. LTD. ${seed.short}`
      )
    }
  }, [seed])

  if (!seed) {
    return (
      <section className="section">
        <div className="shell missing">
          <h1>That variety is not on the site</h1>
          <p>The link may be out of date. Open the range to see everything available.</p>
          <Link className="btn" to="/onion-seeds">
            <FiArrowLeft aria-hidden="true" />
            Back to onion seeds
          </Link>
        </div>
      </section>
    )
  }

  // Only fields the client has actually filled in are shown.
  const specs = [
    ['Category', seed.category],
    ['Net weight', seed.netWeight],
    ['Crop code', seed.cropCode],
    ['Seed treatment', seed.seedTreatment],
    ['Sowing season', seed.season],
    ['Seed rate', seed.seedRate],
    ['Spacing', seed.spacing],
    ['Bulb colour', seed.bulbColour],
    ['Bulb shape', seed.bulbShape],
    ['Bulb weight', seed.bulbWeight],
    ['Maturity', seed.maturity]
  ].filter(([, value]) => value)

  const others = onionSeeds.filter((item) => item.id !== seed.id).slice(0, 3)

  return (
    <>
      <PageHeader
        title={seed.name}
        subtitle={seed.short}
        crumbs={[{ label: 'Onion Seeds', to: '/onion-seeds' }, { label: seed.name }]}
      />

      <section className="section detail" aria-labelledby="detail-heading">
        <div className="shell detail__grid">
          <div className="detail__media" data-reveal style={{ '--pack': seed.packColor }}>
            <img
              className="detail__photo"
              src={seed.image}
              alt={`${seed.name} onion bulbs`}
            />
            <img
              className="detail__pack"
              src={seed.packImage}
              alt={`${seed.name} onion seed carton, net weight ${seed.netWeight}`}
              loading="lazy"
            />
          </div>

          <div className="detail__body" data-reveal data-delay="1">
            <p className="eyebrow">{seed.category}</p>
            <h2 id="detail-heading">
              {seed.name} <span lang="mr">{seed.nameMarathi}</span>
            </h2>
            <p>{seed.description}</p>

            <h3 className="detail__subhead">Pack details</h3>
            <dl className="detail__specs">
              {specs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <details className="detail__standards">
              <summary>Truthful label standards</summary>
              <ul>
                {labelStandards.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </li>
                ))}
              </ul>
            </details>

            <div className="btn-row detail__actions">
              <a
                className="btn"
                href={productWhatsappLink(seed.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <a className="btn btn--outline" href={telLink(siteConfig.contact.phonePrimary)}>
                <FiPhone aria-hidden="true" />
                Call now
              </a>
            </div>

            <p className="detail__disclaimer">
              Agronomic details such as sowing season, seed rate, spacing and maturity will
              be listed here once confirmed by GATEE SEEDS.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="others-heading">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">More varieties</p>
            <h2 id="others-heading">Other onion seeds</h2>
          </div>

          <div className="detail__others">
            {others.map((item, i) => (
              <OnionCard key={item.id} seed={item} delay={i} />
            ))}
          </div>

          <div className="detail__back">
            <Link className="text-link" to="/onion-seeds">
              See all varieties
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
