import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import onionSeeds from '../../data/onionSeeds'
import OnionCard from '../OnionCard/OnionCard'
import './OnionSeeds.css'

export default function OnionSeeds({ showAll = false, heading = 'Our onion seeds' }) {
  const seeds = showAll ? onionSeeds : onionSeeds.slice(0, 4)

  return (
    <section className="section section--tint seeds" id="onion-seeds" aria-labelledby="seeds-heading">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">Onion seed range</p>
          <h2 id="seeds-heading">{heading}</h2>
          <p>
            Four onion selections packed under the GATEE label, each supplied as sortexed
            seed in a sealed 1 kg carton.
          </p>
        </div>

        <div className="seeds__grid">
          {seeds.map((seed, i) => (
            <OnionCard key={seed.id} seed={seed} delay={i % 4} />
          ))}
        </div>

        {!showAll && (
          <div className="seeds__more" data-reveal>
            <Link className="btn btn--outline" to="/onion-seeds">
              See all varieties
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
