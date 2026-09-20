import { PiPlantBold } from 'react-icons/pi'
import { TbBuildingWarehouse } from 'react-icons/tb'
import { FiTruck, FiHeadphones } from 'react-icons/fi'
import './WhyChooseUs.css'

const points = [
  {
    icon: PiPlantBold,
    title: 'Sortexed onion seed',
    text: 'Every variety is cleaned and sortexed before packing, and each carton carries its truthful label.'
  },
  {
    icon: TbBuildingWarehouse,
    title: 'Sealed and stored',
    text: 'Seed is packed in sealed 1 kg cartons and held in organised storage until it is dispatched.'
  },
  {
    icon: FiTruck,
    title: 'Straightforward supply',
    text: 'Tell us the variety and quantity you need and we will confirm what can be supplied.'
  },
  {
    icon: FiHeadphones,
    title: 'Reach a person',
    text: 'Call or message on WhatsApp — the same numbers printed on the carton reach us directly.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="section why" id="why-choose-us" aria-labelledby="why-heading">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">Why GATEE SEEDS</p>
          <h2 id="why-heading">What you can count on</h2>
        </div>

        <ul className="why__grid">
          {points.map((point, i) => {
            const Icon = point.icon
            return (
              <li className="why__card" key={point.title} data-reveal data-delay={i % 4}>
                <span className="why__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
