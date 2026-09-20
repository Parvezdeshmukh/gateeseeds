import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import faqs from '../../data/faqs'
import './FAQ.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq" aria-labelledby="faq-heading">
      <div className="shell faq__grid">
        <div className="faq__intro">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-heading">Answers before you ask</h2>
          <p>
            Anything not covered here can be asked directly on WhatsApp — the number is on
            every page.
          </p>
        </div>

        <ul className="faq__list">
          {faqs.map((item, i) => {
            const expanded = open === i
            return (
              <li className={`faq__item${expanded ? ' faq__item--open' : ''}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(expanded ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__sign" aria-hidden="true">
                      {expanded ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
