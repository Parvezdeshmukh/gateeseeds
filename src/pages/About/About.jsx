import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import AboutSection from '../../components/About/About'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Process from '../../components/Process/Process'
import EnquiryCTA from '../../components/EnquiryCTA/EnquiryCTA'
import { labelStandards, recommendedStates } from '../../data/onionSeeds'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import { useLanguage } from '../../context/LanguageContext'
import './About.css'

export default function AboutPage() {
  const { t } = useLanguage()
  useReveal()

  useEffect(() => {
    setPageMeta(
      'About | GATEE SEEDS PVT. LTD.',
      'GATEE SEEDS PVT. LTD. packs four onion seed varieties as sortexed seed in sealed cartons from Chhatrapati Sambhajinagar, Maharashtra.'
    )
  }, [])

  return (
    <>
     <PageHeader
  title={t.about.eyebrow}
  subtitle={t.about.description1}
  crumbs={[
    { label: t.navbar.about }
  ]}
/>

      <AboutSection />

      <section className="section section--tint label" aria-labelledby="label-heading">
        <div className="shell label__grid">
          <div data-reveal>
            <p className="eyebrow">On every carton</p>
            <h2 id="label-heading">What the truthful label records</h2>
            <p>
              The Seeds Act, 1966 requires a truthful label on every seed container. These
              are the minimum standards printed on the GATEE SEEDS onion seed carton,
              alongside the lot number, test date and date of packing for that lot.
            </p>
            <p className="label__note">
              Seed in these cartons is treated with Thiram. It is not for food, feed or oil
              purposes, and packs should be bought sealed.
            </p>
          </div>

          <dl className="label__specs" data-reveal data-delay="1">
            {labelStandards.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="shell label__states" data-reveal>
          <h3>Recommended for cultivation in</h3>
          <ul>
            {recommendedStates.map((state) => (
              <li key={state}>{state}</li>
            ))}
          </ul>
          <p className="label__note">
            Seasons listed on the carton: Kharif and Rangada.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <EnquiryCTA />
    </>
  )
}
