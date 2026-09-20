import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import galleryItems, { galleryCategories } from '../../data/gallery'
import './Gallery.css'

export default function Gallery({ limit }) {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const visible = galleryItems
    .filter((item) => filter === 'All' || item.category === filter)
    .slice(0, limit || galleryItems.length)

  useEffect(() => {
    if (!lightbox) return undefined
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading">From seed to field</h2>
          <p>
            Pack artwork and onion selections from the GATEE SEEDS range. Field, crop and
            storage photographs will be added here.
          </p>
        </div>

        {!limit && (
          <div className="gallery__filters" role="group" aria-label="Filter gallery">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`gallery__filter${filter === cat ? ' gallery__filter--on' : ''}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <ul className={`gallery__grid${limit ? ' gallery__grid--compact' : ''}`}>
          {visible.map((item, i) => (
            <li
              key={item.id}
              className={`gallery__item gallery__item--${item.size}`}
              data-reveal
              data-delay={i % 4}
            >
              <button type="button" onClick={() => setLightbox(item)}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery__overlay">
                  <span className="gallery__title">{item.title}</span>
                  <span className="gallery__cat">{item.category}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {lightbox && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="gallery__close"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <FiX />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <figcaption>{lightbox.title}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
