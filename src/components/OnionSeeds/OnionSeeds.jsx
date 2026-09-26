import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import onionSeeds from '../../data/onionSeeds'
import OnionCard from '../OnionCard/OnionCard'
import { useLanguage } from '../../context/LanguageContext'

import './OnionSeeds.css'

export default function OnionSeeds({
  showAll = false,
  heading
}) {
  const { t } = useLanguage()

  const seeds = showAll
    ? onionSeeds
    : onionSeeds.slice(0, 4)

  // Fallback in case translation is temporarily missing
  const onionSeedsText = t?.onionSeeds || {
    eyebrow: 'Onion seed range',
    title: 'Our onion seeds',
    description:
      'Four onion selections packed under the GATEE label, each supplied as sortexed seed in a sealed 1 kg carton.',
    seeAll: 'See all varieties'
  }

  // Use custom heading if passed, otherwise use translated heading
  const sectionHeading =
    heading || onionSeedsText.title

  return (
    <section
      className="section section--tint seeds"
      id="onion-seeds"
      aria-labelledby="seeds-heading"
    >
      <div className="shell">

        <div className="section-head section-head--center">

          <p className="eyebrow">
            {onionSeedsText.eyebrow}
          </p>

          <h2 id="seeds-heading">
            {sectionHeading}
          </h2>

          <p>
            {onionSeedsText.description}
          </p>

        </div>

        <div className="seeds__grid">
          {seeds.map((seed, i) => (
            <OnionCard
              key={seed.id}
              seed={seed}
              delay={i % 4}
            />
          ))}
        </div>

        {!showAll && (
          <div
            className="seeds__more"
            data-reveal
          >
            <Link
              className="btn btn--outline"
              to="/onion-seeds"
            >
              {onionSeedsText.seeAll}

              <FiArrowRight
                aria-hidden="true"
              />
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}
