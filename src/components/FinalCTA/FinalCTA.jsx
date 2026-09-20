import { Link } from 'react-router-dom'
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="section final" aria-labelledby="final-heading">
      <div className="shell final__inner" data-reveal>
        <h2 id="final-heading">Ready to look at the varieties?</h2>
        <p>
          Open the range to compare all four onion selections, or send us a message with what
          you need.
        </p>
        <div className="btn-row final__actions">
          <Link className="btn" to="/onion-seeds">
            Explore onion seeds
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className="btn btn--outline" to="/contact">
            <FiMessageSquare aria-hidden="true" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
