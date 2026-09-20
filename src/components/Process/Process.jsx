import { PiPlantBold } from 'react-icons/pi'
import { TbBuildingWarehouse } from 'react-icons/tb'
import { FiTruck, FiMessageCircle } from 'react-icons/fi'
import './Process.css'

const steps = [
  { n: '01', icon: PiPlantBold, title: 'Select', text: 'Seed lots are chosen and cleaned for packing.' },
  { n: '02', icon: TbBuildingWarehouse, title: 'Store', text: 'Sealed cartons are held in organised storage.' },
  { n: '03', icon: FiTruck, title: 'Supply', text: 'Confirmed orders are packed and dispatched.' },
  { n: '04', icon: FiMessageCircle, title: 'Support', text: 'Questions answered by call or WhatsApp.' }
]

export default function Process() {
  return (
    <section className="section section--tint process" aria-labelledby="process-heading">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">How it works</p>
          <h2 id="process-heading">From our store to your field</h2>
        </div>

        <ol className="process__list">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <li className="process__step" key={step.n} data-reveal data-delay={i % 4}>
                <span className="process__icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="process__n" aria-hidden="true">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
