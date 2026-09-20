import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiArrowRight } from 'react-icons/fi'
import { setPageMeta } from '../../utils/seo'
import './NotFound.css'

export default function NotFound() {
  useEffect(() => {
    setPageMeta('Page not found | GATEE SEEDS PVT. LTD.', 'This page could not be found.')
  }, [])

  return (
    <section className="section nf">
      <div className="shell nf__inner">
        <p className="eyebrow">404</p>
        <h1>This page is not here</h1>
        <p>
          The link may be old or mistyped. Start again from the home page, or go straight to
          the onion seed range.
        </p>
        <div className="btn-row nf__actions">
          <Link className="btn" to="/">
            <FiHome aria-hidden="true" />
            Home
          </Link>
          <Link className="btn btn--outline" to="/onion-seeds">
            Onion seeds
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
