import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import aboutImage from '../../assets/onion-super-gulabi.jpg';
import packImage from '../../assets/pack-super-white.jpg';

import { useLanguage } from '../../context/LanguageContext';

import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      className="section about"
      aria-labelledby="about-heading"
    >
      <div className="shell about__grid">

        {/* Images */}
        <div
          className="about__media"
          data-reveal
        >
          <img
            className="about__photo"
            src={aboutImage}
            alt={t.about.imageAlt}
            loading="lazy"
          />

          <img
            className="about__pack"
            src={packImage}
            alt={t.about.packImageAlt}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div
          className="about__body"
          data-reveal
          data-delay="1"
        >
          <p className="eyebrow">
            {t.about.eyebrow}
          </p>

          <h2 id="about-heading">
            {t.about.title}
          </h2>

          <p>
            {t.about.description1}
          </p>

          <p>
            {t.about.description2}
          </p>

          {/* Facts */}
          <dl className="about__facts">

            <div>
              <dt>{t.about.varieties}</dt>
              <dd>4</dd>
            </div>

            <div>
              <dt>{t.about.packSize}</dt>
              <dd>{t.about.packSizeValue}</dd>
            </div>

            <div>
              <dt>{t.about.seedTreatment}</dt>
              <dd>Thiram</dd>
            </div>

          </dl>

          {/* More About */}
          <Link
            className="text-link"
            to="/about"
          >
            {t.about.more}
            <FiArrowRight
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}