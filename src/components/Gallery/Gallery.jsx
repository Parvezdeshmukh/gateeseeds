import { useEffect, useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import galleryItems, { galleryCategories } from '../../data/gallery'
import useReveal from '../../hooks/useReveal'
import './Gallery.css'

export default function Gallery({ limit }) {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null) // index into `visible`, or null

  // Re-run the reveal observer every time the filter changes, so newly
  // rendered items (that were never scrolled into view before) get
  // observed and receive the `is-visible` class instead of staying hidden.
  useReveal([filter])

  const visible = galleryItems
    .filter((item) => filter === 'All' || item.category === filter)
    .slice(0, limit || galleryItems.length)

  const lightbox = lightboxIndex !== null ? visible[lightboxIndex] : null

  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + visible.length) % visible.length)
  const showNext = () => setLightboxIndex((i) => (i + 1) % visible.length)

  useEffect(() => {
    if (lightboxIndex === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex])

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
              <button type="button" onClick={() => setLightboxIndex(i)}>
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
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery__close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <FiX />
          </button>

          {visible.length > 1 && (
            <>
              <button
                type="button"
                className="gallery__nav gallery__nav--prev"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                className="gallery__nav gallery__nav--next"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </>
          )}

          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <figcaption>{lightbox.title}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}