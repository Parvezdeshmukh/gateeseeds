import { PiPlantBold } from 'react-icons/pi'
import { TbBuildingWarehouse } from 'react-icons/tb'
import { FiTruck, FiMessageCircle } from 'react-icons/fi'

import { useLanguage } from '../../context/LanguageContext'

import './Process.css'

const steps = [
  {
    n: '01',
    icon: PiPlantBold,
    key: 'select',
  },
  {
    n: '02',
    icon: TbBuildingWarehouse,
    key: 'store',
  },
  {
    n: '03',
    icon: FiTruck,
    key: 'supply',
  },
  {
    n: '04',
    icon: FiMessageCircle,
    key: 'support',
  },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <section
      className="section section--tint process"
      aria-labelledby="process-heading"
    >
      <div className="shell">

        <div className="section-head section-head--center">
          <p className="eyebrow">
            {t.process.eyebrow}
          </p>

          <h2 id="process-heading">
            {t.process.title}
          </h2>
        </div>

        <ol className="process__list">
          {steps.map((step, i) => {
            const Icon = step.icon
            const item = t.process.steps[step.key]

            return (
              <li
                className="process__step"
                key={step.n}
                data-reveal
                data-delay={i % 4}
              >
                <span
                  className="process__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </span>

                <span
                  className="process__n"
                  aria-hidden="true"
                >
                  {step.n}
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            )
          })}
        </ol>

      </div>
    </section>
  )
}