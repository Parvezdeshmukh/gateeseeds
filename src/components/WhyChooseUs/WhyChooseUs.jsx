import { PiPlantBold } from 'react-icons/pi'
import { TbBuildingWarehouse } from 'react-icons/tb'
import { FiTruck, FiHeadphones } from 'react-icons/fi'

import { useLanguage } from '../../context/LanguageContext'

import './WhyChooseUs.css'

const points = [
  {
    icon: PiPlantBold,
    key: 'sortexed',
  },
  {
    icon: TbBuildingWarehouse,
    key: 'sealed',
  },
  {
    icon: FiTruck,
    key: 'supply',
  },
  {
    icon: FiHeadphones,
    key: 'support',
  },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section
      className="section why"
      id="why-choose-us"
      aria-labelledby="why-heading"
    >
      <div className="shell">

        <div className="section-head section-head--center">
          <p className="eyebrow">
            {t.whyChooseUs.eyebrow}
          </p>

          <h2 id="why-heading">
            {t.whyChooseUs.title}
          </h2>
        </div>

        <ul className="why__grid">
          {points.map((point, i) => {
            const Icon = point.icon
            const item = t.whyChooseUs.points[point.key]

            return (
              <li
                className="why__card"
                key={point.key}
                data-reveal
                data-delay={i % 4}
              >
                <span
                  className="why__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}