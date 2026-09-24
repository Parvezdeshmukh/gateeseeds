import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import hero1 from '../../assets/hero-1.jpg'
import hero2 from '../../assets/hero-2.jpg'
import hero3 from '../../assets/hero-3.jpg'
import hero4 from '../../assets/hero-4.jpeg'
import { whatsappLink } from '../../utils/whatsapp'
import './Hero.css'

const slides = [
  {
    image: hero1,
    alt: 'Close view of rose-pink Super Gulabi onion bulbs',
    title: ['Quality onion seeds.', 'Better agriculture.'],
    text: 'Sortexed onion seed, packed and labelled for farm supply.'
  },
  {
    image: hero2,
    alt: 'White onion bulbs with fresh green tops',
    title: ['Reliable onion seed', 'for every growing season.'],
    text: 'Four varieties, each sealed in a 1 kg carton with a truthful label.'
  },
  {
    image: hero3,
    alt: 'Golden brown Puna Fursungi Gavran onion bulbs',
    title: ['Grow with confidence.', 'Choose better seed.'],
    text: 'Ask about any variety on WhatsApp and get details the same day.'
  },
  {
  image: hero4,
  alt: 'Onion crop grown for export-quality production',
  title: ['Premium Onion Seeds.', 'Better Crops.'],
  text: 'Quality seeds for healthy growth and better harvests.'
}

]

const INTERVAL = 5200

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(null)

  const go = useCallback((next) => {
    setIndex((prev) => (next + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduced) return undefined
    const id = setTimeout(() => go(index + 1), INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused, go])

  const onTouchStart = (e) => {
    touchStart.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const delta = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(delta) > 48) go(index + (delta < 0 ? 1 : -1))
    touchStart.current = null
  }

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="GATEE SEEDS onion seed varieties"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero__stage">
        {slides.map((slide, i) => (
          <div
            key={slide.alt}
            className={`hero__slide${i === index ? ' hero__slide--on' : ''}`}
            aria-hidden={i !== index}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : 'low'}
            />
          </div>
        ))}
        <div className="hero__wash" />
      </div>

      <div className="shell hero__content">
        <p className="hero__eyebrow">GATEE SEEDS PVT. LTD.</p>

        <h1 className="hero__title" key={index}>
          {slides[index].title.map((line, li) => (
            <span className="hero__line" key={line} style={{ '--l': li }}>
              {line}
            </span>
          ))}
        </h1>

        <p className="hero__text" key={`t${index}`}>
          {slides[index].text}
        </p>

        <div className="btn-row hero__actions">
          <Link className="btn" to="/onion-seeds">
            Explore onion seeds
            <FiArrowRight aria-hidden="true" />
          </Link>
          <a
            className="btn btn--white"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp enquiry
          </a>
        </div>
      </div>

      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

      <div className="hero__dots" role="tablist" aria-label="Choose slide">
        {slides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1} of ${slides.length}`}
            className={`hero__dot${i === index ? ' hero__dot--on' : ''}`}
            onClick={() => setIndex(i)}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  )
}
