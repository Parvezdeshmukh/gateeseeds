import { useEffect, useState } from 'react'
import './Review.css'

import { useLanguage } from '../../context/LanguageContext'

// =====================================================
// Testimonials
// Keep only keys here.
// Actual translated text is inside translations.js
// =====================================================
const testimonials = [
  {
    lead: 'Gatee Seeds -',
    translationKey: 'testimonial1',
    nameKey: 'parvezDeshmukh',
    locationKey: 'maharashtra',
  },
  {
    lead: 'Gatee Seeds -',
    translationKey: 'testimonial2',
    nameKey: 'abuzarShaikh',
    locationKey: 'maharashtra',
  },
]

// =====================================================
// Review Videos
// Replace videoId with your real YouTube video IDs
// =====================================================
const reviewVideos = [
  {
    videoId: 'PwbOWrzTrAA',
    translationKey: 'video1',
  },
  {
    videoId: 'YYYYYYYYYYY',
    translationKey: 'video2',
  },
  {
    videoId: 'ZZZZZZZZZZZ',
    translationKey: 'video3',
  },
]

const AUTO_ROTATE_MS = 4500

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [videoIndex, setVideoIndex] = useState(0)

  const { t } = useLanguage()

  const reviewText = t.testimonials

  const active = testimonials[activeIndex]
  const activeVideo = reviewVideos[videoIndex]

  // =====================================================
  // Get translated testimonial
  // =====================================================
  const activeTestimonial =
    reviewText.items?.[active.translationKey] || {
      quote: '',
    }

  // =====================================================
  // Get translated person name
  // =====================================================
  const activeName =
    reviewText.people?.[active.nameKey] ||
    active.nameKey

  // =====================================================
  // Get translated location
  // =====================================================
  const activeLocation =
    reviewText.locations?.[active.locationKey] ||
    active.locationKey

  // =====================================================
  // Get translated video title
  // =====================================================
  const activeVideoText =
    reviewText.videos?.[
      activeVideo.translationKey
    ] || {
      title: 'Testimonial',
    }

  // =====================================================
  // Previous Video
  // =====================================================
  const showPrevVideo = () => {
    setVideoIndex(
      (i) =>
        (i - 1 + reviewVideos.length) %
        reviewVideos.length
    )
  }

  // =====================================================
  // Next Video
  // =====================================================
  const showNextVideo = () => {
    setVideoIndex(
      (i) =>
        (i + 1) % reviewVideos.length
    )
  }

  // =====================================================
  // Auto Rotate Testimonials
  // =====================================================
  useEffect(() => {
    if (isHovering) return

    const timer = setInterval(() => {
      setActiveIndex(
        (i) =>
          (i + 1) % testimonials.length
      )
    }, AUTO_ROTATE_MS)

    return () => clearInterval(timer)
  }, [isHovering])

  return (
    <section
      className="testi-section"
      aria-labelledby="testi-heading"
      onMouseEnter={() =>
        setIsHovering(true)
      }
      onMouseLeave={() =>
        setIsHovering(false)
      }
    >
      <span
        className="testi-corner"
        aria-hidden="true"
      />

      <div className="testi-shell">

        {/* =================================================
            VIDEO SECTION
        ================================================== */}
        <div className="testi-intro">
          <div className="testi-video-carousel">

            {/* YouTube Video */}
            <div
              className="testi-video-wrap"
              key={activeVideo.videoId}
            >
              <iframe
                className="testi-video"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
                title={
                  activeVideoText.title
                }
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Navigation */}
            {reviewVideos.length > 1 && (
              <>
                {/* Previous Video */}
                <button
                  type="button"
                  className="testi-video-nav testi-video-nav--prev"
                  onClick={showPrevVideo}
                  aria-label={
                    reviewText.previousVideo
                  }
                >
                  ←
                </button>

                {/* Next Video */}
                <button
                  type="button"
                  className="testi-video-nav testi-video-nav--next"
                  onClick={showNextVideo}
                  aria-label={
                    reviewText.nextVideo
                  }
                >
                  →
                </button>

                {/* Video Dots */}
                <div
                  className="testi-video-dots"
                  role="tablist"
                  aria-label={
                    reviewText.selectVideo
                  }
                >
                  {reviewVideos.map(
                    (video, i) => (
                      <button
                        key={
                          video.videoId + i
                        }
                        type="button"
                        className={`testi-video-dot ${
                          i === videoIndex
                            ? 'is-active'
                            : ''
                        }`}
                        onClick={() =>
                          setVideoIndex(i)
                        }
                        role="tab"
                        aria-selected={
                          i === videoIndex
                        }
                        aria-label={`${reviewText.showVideo} ${
                          i + 1
                        }`}
                      />
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================== */}
        <span
          className="testi-divider"
          aria-hidden="true"
        />

        {/* =================================================
            TESTIMONIAL SECTION
        ================================================== */}
        <div className="testi-card-wrap">

          {/* Section Title */}
          <span
            className="testi-kicker testi-kicker--right"
            id="testi-heading"
          >
            {reviewText.title}
          </span>

          {/* Active Testimonial */}
          <div
            className="testi-card"
            key={activeIndex}
          >
            <p className="testi-quote">
              <span className="testi-lead">
                {active.lead}
              </span>{' '}
              {activeTestimonial.quote}
            </p>

            {/* Name */}
            <p className="testi-name">
              {activeName}
            </p>

            {/* Location */}
            <p className="testi-location">
              {activeLocation}
            </p>
          </div>

          {/* =================================================
              TESTIMONIAL DOTS
          ================================================== */}
          {testimonials.length > 1 && (
            <div
              className="testi-dots"
              role="tablist"
              aria-label={
                reviewText.selectTestimonial
              }
            >
              {testimonials.map(
                (testimonial, i) => (
                  <button
                    key={
                      testimonial.nameKey + i
                    }
                    type="button"
                    className={`testi-dot ${
                      i === activeIndex
                        ? 'is-active'
                        : ''
                    }`}
                    onClick={() =>
                      setActiveIndex(i)
                    }
                    role="tab"
                    aria-selected={
                      i === activeIndex
                    }
                    aria-label={`${reviewText.showTestimonial} ${
                      i + 1
                    }`}
                  />
                )
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}