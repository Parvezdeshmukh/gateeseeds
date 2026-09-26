
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiPhone, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import onionSeeds, {
  getSeedById,
  labelStandards
} from '../../data/onionSeeds'

import OnionCard from '../../components/OnionCard/OnionCard'
import PageHeader from '../../components/PageHeader/PageHeader'
import siteConfig from '../../config/siteConfig'

import {
  productWhatsappLink,
  telLink
} from '../../utils/whatsapp'

import { useLanguage } from '../../context/LanguageContext'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'

import './OnionDetails.css'

export default function OnionDetails() {
  const { id } = useParams()
  const seed = getSeedById(id)

  const { lang, t } = useLanguage()

  useReveal([id])

  /*
   * Product-specific translations
   * Falls back to English if translation is not available.
   */
  const productText =
    seed?.translations?.[lang] || seed?.translations?.en

  const detailsText = t?.onionDetails || {
    missingTitle: 'That variety is not on the site',
    missingDescription:
      'The link may be out of date. Open the range to see everything available.',
    backToSeeds: 'Back to onion seeds',

    onionSeeds: 'Onion Seeds',

    category: 'Category',
    netWeight: 'Net weight',
    cropCode: 'Crop code',
    seedTreatment: 'Seed treatment',
    sowingSeason: 'Sowing season',
    seedRate: 'Seed rate',
    spacing: 'Spacing',
    bulbColour: 'Bulb colour',
    bulbShape: 'Bulb shape',
    bulbWeight: 'Bulb weight',
    maturity: 'Maturity',

    packDetails: 'Pack details',
    truthfulStandards: 'Truthful label standards',

    enquireWhatsApp: 'Enquire on WhatsApp',
    callNow: 'Call now',

    disclaimer:
      'Agronomic details such as sowing season, seed rate, spacing and maturity will be listed here once confirmed by GATEE SEEDS.',

    moreVarieties: 'More varieties',
    otherOnionSeeds: 'Other onion seeds',
    seeAll: 'See all varieties'
  }

  useEffect(() => {
    if (seed) {
      const name = productText?.name || seed.name
      const short = productText?.short || seed.short

      setPageMeta(
        `${name} Onion Seed | GATEE SEEDS PVT. LTD.`,
        `${name} onion seed from GATEE SEEDS PVT. LTD. ${short}`
      )
    }
  }, [seed, productText])

  if (!seed) {
    return (
      <section className="section">
        <div className="shell missing">
          <h1>{detailsText.missingTitle}</h1>

          <p>
            {detailsText.missingDescription}
          </p>

          <Link
            className="btn"
            to="/onion-seeds"
          >
            <FiArrowLeft aria-hidden="true" />
            {detailsText.backToSeeds}
          </Link>
        </div>
      </section>
    )
  }

  /*
   * Use translated product values when available.
   * Original seed data remains as fallback.
   */
  const specs = [
    [detailsText.category, productText?.category || seed.category],
    [detailsText.netWeight, productText?.netWeight || seed.netWeight],
    [detailsText.cropCode, productText?.cropCode || seed.cropCode],
    [
      detailsText.seedTreatment,
      productText?.seedTreatment || seed.seedTreatment
    ],
    [
      detailsText.sowingSeason,
      productText?.season || seed.season
    ],
    [
      detailsText.seedRate,
      productText?.seedRate || seed.seedRate
    ],
    [
      detailsText.spacing,
      productText?.spacing || seed.spacing
    ],
    [
      detailsText.bulbColour,
      productText?.bulbColour || seed.bulbColour
    ],
    [
      detailsText.bulbShape,
      productText?.bulbShape || seed.bulbShape
    ],
    [
      detailsText.bulbWeight,
      productText?.bulbWeight || seed.bulbWeight
    ],
    [
      detailsText.maturity,
      productText?.maturity || seed.maturity
    ]
  ].filter(([, value]) => value)

  const others = onionSeeds
    .filter((item) => item.id !== seed.id)
    .slice(0, 3)

  const productName = productText?.name || seed.name

  return (
    <>
      <PageHeader
        title={productName}
        subtitle={productText?.short || seed.short}
        crumbs={[
          {
            label: detailsText.onionSeeds,
            to: '/onion-seeds'
          },
          {
            label: productName
          }
        ]}
      />

      <section
        className="section detail"
        aria-labelledby="detail-heading"
      >
        <div className="shell detail__grid">

          {/* Product Images */}
          <div
            className="detail__media"
            data-reveal
            style={{
              '--pack': seed.packColor
            }}
          >
            <img
              className="detail__photo"
              src={seed.image}
              alt={`${productName} onion bulbs`}
            />

            <img
              className="detail__pack"
              src={seed.packImage}
              alt={`${productName} onion seed carton`}
              loading="lazy"
            />
          </div>

          {/* Product Information */}
          <div
            className="detail__body"
            data-reveal
            data-delay="1"
          >
            <p className="eyebrow">
              {productText?.category || seed.category}
            </p>

            <h2 id="detail-heading">
              {productName}

              {seed.nameMarathi && (
                <span lang="mr">
                  {seed.nameMarathi}
                </span>
              )}
            </h2>

            <p>
              {productText?.description || seed.description}
            </p>

            {/* Pack Details */}
            <h3 className="detail__subhead">
              {detailsText.packDetails}
            </h3>

            <dl className="detail__specs">
              {specs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {/* Truthful Label Standards */}
            <details className="detail__standards">
              <summary>
                {detailsText.truthfulStandards}
              </summary>

              <ul>
                {labelStandards.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </li>
                ))}
              </ul>
            </details>

            {/* Actions */}
            <div className="btn-row detail__actions">

              <a
                className="btn"
                href={productWhatsappLink(
                  productName,
                  lang
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                {detailsText.enquireWhatsApp}
              </a>

              <a
                className="btn btn--outline"
                href={telLink(
                  siteConfig.contact.phonePrimary
                )}
              >
                <FiPhone aria-hidden="true" />
                {detailsText.callNow}
              </a>

            </div>

            {/* Disclaimer */}
            <p className="detail__disclaimer">
              {detailsText.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Other Varieties */}
      <section
        className="section section--tint"
        aria-labelledby="others-heading"
      >
        <div className="shell">

          <div className="section-head">
            <p className="eyebrow">
              {detailsText.moreVarieties}
            </p>

            <h2 id="others-heading">
              {detailsText.otherOnionSeeds}
            </h2>
          </div>

          <div className="detail__others">
            {others.map((item, i) => (
              <OnionCard
                key={item.id}
                seed={item}
                delay={i}
              />
            ))}
          </div>

          <div className="detail__back">
            <Link
              className="text-link"
              to="/onion-seeds"
            >
              {detailsText.seeAll}

              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}

