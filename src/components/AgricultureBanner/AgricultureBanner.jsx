import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import banner from '../../assets/hero-1.jpg'
import { useLanguage } from '../../context/LanguageContext'

import './AgricultureBanner.css'

export default function AgricultureBanner() {
  const { t } = useLanguage()

  const agricultureBanner = t?.agricultureBanner || {
    title: 'Growing better starts with the right seed',
    description:
      'Look through the four onion varieties packed under the GATEE SEEDS label.',
    button: 'Explore onion seeds',
  }

  return (
    <section
      className="banner"
      aria-labelledby="banner-heading"
    >
      <img
        className="banner__bg"
        src={banner}
        alt=""
        loading="lazy"
        aria-hidden="true"
      />

      <div className="banner__wash" />

      <div className="shell banner__inner">
        <h2 id="banner-heading" data-reveal>
          {agricultureBanner.title}
        </h2>

        <p data-reveal data-delay="1">
          {agricultureBanner.description}
        </p>

        <Link
          className="btn btn--white"
          to="/onion-seeds"
          data-reveal
          data-delay="2"
        >
          {agricultureBanner.button}
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}