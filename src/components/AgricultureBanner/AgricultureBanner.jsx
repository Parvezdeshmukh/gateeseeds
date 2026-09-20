import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import banner from '../../assets/hero-1.jpg'
import './AgricultureBanner.css'

export default function AgricultureBanner() {
  return (
    <section className="banner" aria-labelledby="banner-heading">
      <img className="banner__bg" src={banner} alt="" loading="lazy" aria-hidden="true" />
      <div className="banner__wash" />
      <div className="shell banner__inner">
        <h2 id="banner-heading" data-reveal>
          Growing better starts with the right seed
        </h2>
        <p data-reveal data-delay="1">
          Look through the four onion varieties packed under the GATEE SEEDS label.
        </p>
        <Link className="btn btn--white" to="/onion-seeds" data-reveal data-delay="2">
          Explore onion seeds
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
