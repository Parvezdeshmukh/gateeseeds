import { useState } from 'react'
import './Review.css'

// Add / edit testimonials here.
const testimonials = [
  {
    lead: 'Gatee Seeds -',
    quote:
      'Pyaz ka ankuran bahut accha hua aur size bhi ekdum uniform mila, quality dekh kar market mein demand turant ban gayi.',
    name: 'Parvez Deshmukh',
    location: 'Maharashtra',
  },
  {
    lead: 'Gatee Seeds -',
    quote:
      'Onion ki fasal is baar bahut healthy nikli, rate bhi accha mila aur beej ki germination pichle saalon se kaafi behtar thi.',
    name: 'Abuzar Shaikh',
    location: 'Maharashtra',
  },
]

// Review videos carousel — shown on the left.
// Replace videoId with your real YouTube video IDs
// (the part after "v=" in a YouTube URL, e.g. https://www.youtube.com/watch?v=XXXXXXXXXXX)
const reviewVideos = [
  { videoId: 'PwbOWrzTrAA', title: 'Testimonial' },
  { videoId: 'YYYYYYYYYYY', title: 'Testimonial' },
  { videoId: 'ZZZZZZZZZZZ', title: 'Testimonial' },
]

const AUTO_ROTATE_MS = 4500

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [videoIndex, setVideoIndex] = useState(0)

  const active = testimonials[activeIndex]
  const activeVideo = reviewVideos[videoIndex]

  const showPrevVideo = () =>
    setVideoIndex((i) => (i - 1 + reviewVideos.length) % reviewVideos.length)
  const showNextVideo = () =>
    setVideoIndex((i) => (i + 1) % reviewVideos.length)

  return (
    <section
      className="testi-section"
      aria-labelledby="testi-heading"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="testi-corner" aria-hidden="true" />

      <div className="testi-shell">
        <div className="testi-intro">
          <div className="testi-video-carousel">
            <div className="testi-video-wrap" key={activeVideo.videoId}>
              {/* Live YouTube embed — no autoplay, so it shows YouTube's own
                  title bar / channel avatar / play button / "Watch on
                  YouTube" chrome. Clicking it plays right here, inline —
                  no modal. */}
              <iframe
                className="testi-video"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {reviewVideos.length > 1 && (
              <>
                <button
                  type="button"
                  className="testi-video-nav testi-video-nav--prev"
                  onClick={showPrevVideo}
                  aria-label="Previous video"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="testi-video-nav testi-video-nav--next"
                  onClick={showNextVideo}
                  aria-label="Next video"
                >
                  →
                </button>
                <div className="testi-video-dots" role="tablist" aria-label="Select video">
                  {reviewVideos.map((v, i) => (
                    <button
                      key={v.videoId + i}
                      type="button"
                      className={`testi-video-dot ${i === videoIndex ? 'is-active' : ''}`}
                      onClick={() => setVideoIndex(i)}
                      role="tab"
                      aria-selected={i === videoIndex}
                      aria-label={`Show video ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <span className="testi-divider" aria-hidden="true" />

        <div className="testi-card-wrap">
          <span className="testi-kicker testi-kicker--right" id="testi-heading">
            TESTIMONIALS
          </span>
          <div className="testi-card" key={activeIndex}>
            <p className="testi-quote">
              <span className="testi-lead">{active.lead}</span> {active.quote}
            </p>
            <p className="testi-name">{active.name}</p>
            <p className="testi-location">{active.location}</p>
          </div>

          {testimonials.length > 1 && (
            <div className="testi-dots" role="tablist" aria-label="Select testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name + i}
                  type="button"
                  className={`testi-dot ${i === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}