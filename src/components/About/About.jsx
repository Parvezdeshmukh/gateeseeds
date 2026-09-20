import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import aboutImage from '../../assets/onion-super-gulabi.jpg'
import packImage from '../../assets/pack-super-white.jpg'
import './About.css'

export default function About() {
  return (
    <section className="section about" aria-labelledby="about-heading">
      <div className="shell about__grid">
        <div className="about__media" data-reveal>
          <img
            className="about__photo"
            src={aboutImage}
            alt="Rose-pink onion bulbs grown from GATEE SEEDS onion seed"
            loading="lazy"
          />
          <img
            className="about__pack"
            src={packImage}
            alt="Super White onion seed carton from GATEE SEEDS"
            loading="lazy"
          />
        </div>

        <div className="about__body" data-reveal data-delay="1">
          <p className="eyebrow">About GATEE SEEDS</p>
          <h2 id="about-heading">Onion seed is the whole business</h2>
          <p>
            GATEE SEEDS PVT. LTD. produces and markets onion seed from Chauka, near
            Chhatrapati Sambhajinagar in Maharashtra. Four varieties are packed under the
            GATEE label, each supplied as sortexed seed in a sealed 1 kg carton.
          </p>
          <p>
            Every carton carries a truthful label under the Seeds Act, 1966, recording the
            lot, the test date and the purity and germination standards for that lot.
          </p>

          <dl className="about__facts">
            <div>
              <dt>Varieties packed</dt>
              <dd>4</dd>
            </div>
            <div>
              <dt>Pack size</dt>
              <dd>1 kg carton</dd>
            </div>
            <div>
              <dt>Seed treatment</dt>
              <dd>Thiram</dd>
            </div>
          </dl>

          <Link className="text-link" to="/about">
            More about the company
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
