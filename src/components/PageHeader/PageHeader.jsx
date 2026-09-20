import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import bg from '../../assets/hero-2.jpg'
import './PageHeader.css'

export default function PageHeader({ title, subtitle, crumbs = [] }) {
  return (
    <section className="phead" aria-labelledby="phead-title">
      <img className="phead__bg" src={bg} alt="" aria-hidden="true" />
      <div className="phead__wash" />
      <div className="shell phead__inner">
        <h1 id="phead-title">{title}</h1>
        {subtitle && <p>{subtitle}</p>}

        <nav className="phead__crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {crumbs.map((crumb, i) => (
              <li key={crumb.label}>
                <FiChevronRight aria-hidden="true" />
                {crumb.to && i < crumbs.length - 1 ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
