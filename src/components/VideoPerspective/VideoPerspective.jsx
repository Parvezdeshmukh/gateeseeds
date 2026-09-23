import { useEffect, useRef, useState, useCallback } from 'react'
import './VideoPerspective.css'

// Replace videoId with your real YouTube video IDs
// (the part after "v=" in a YouTube URL, e.g. https://www.youtube.com/watch?v=XXXXXXXXXXX)
const videos = [
  {
    videoId: 'PwbOWrzTrAA',
    title: 'GATEE SEEDS | Video',
  },
  {
    videoId: 'YYYYYYYYYYY',
    title: 'Ellora Seeds | Ellora Commando-1112 #review #farming',
  },
  {
    videoId: 'ZZZZZZZZZZZ',
    title: 'Ellora Seeds | Ellora Safed #elloraseeds #agriculture',
  },
]

const AUTO_SCROLL_MS = 3500 // gap between auto-slides

export default function VideoPerspective() {
  const trackRef = useRef(null)
  const hideTimeoutRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [modalVideo, setModalVideo] = useState(null) // video object or null

  // Touch devices don't reliably fire CSS :hover, so a finger tap/drag
  // on the carousel temporarily reveals the arrows via this handler,
  // then hides them again after a short pause.
  const handleTouchActivity = useCallback(() => {
    setIsHovering(true)
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    hideTimeoutRef.current = setTimeout(() => setIsHovering(false), 2500)
  }, [])

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  const scrollToIndex = useCallback((idx) => {
    const track = trackRef.current
    if (!track) return

    const clamped = Math.max(0, Math.min(idx, videos.length - 1))
    const card = track.children[clamped]
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    }
    setActiveIndex(clamped)
  }, [])

  const scrollByCard = (direction) => {
    scrollToIndex(activeIndex + direction)
  }

  // Auto-scroll: advances one card at a time, loops back to start,
  // pauses while the modal is open or the user is hovering/touching.
  useEffect(() => {
    if (modalVideo || isHovering) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1 >= videos.length ? 0 : prev + 1
        scrollToIndex(nextIndex)
        return nextIndex
      })
    }, AUTO_SCROLL_MS)

    return () => clearInterval(timer)
  }, [modalVideo, isHovering, scrollToIndex])

  // Keep the active dot in sync if the user swipes/drags manually.
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return

    let closest = 0
    let closestDist = Infinity
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - track.scrollLeft)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }

  // Close modal on Escape key
  useEffect(() => {
    if (!modalVideo) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setModalVideo(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [modalVideo])

  return (
    <section
      className="video-section"
      aria-labelledby="video-heading"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchActivity}
      onTouchMove={handleTouchActivity}
    >
      <div className="video-shell">
        <h2 id="video-heading" className="video-heading">
          A New Agri Perspective
        </h2>
        <span className="video-underline" aria-hidden="true" />

        <div className={`video-carousel ${isHovering ? 'video-carousel--active' : ''}`}>
          <button
            type="button"
            className="video-nav video-nav--prev"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous video"
          >
            ←
          </button>

          <div className="video-track" ref={trackRef} onScroll={handleScroll}>
            {videos.map((video) => (
              <div className="video-card" key={video.videoId}>
                <div className="video-thumb-wrap">
                  {/* Unplayed YouTube embed — shows YouTube's own title bar,
                      channel avatar, and "Watch on YouTube" chrome, like a
                      normal embedded player before it's clicked. */}
                  <iframe
                    className="video-embed video-embed--facade"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    tabIndex={-1}
                  />
                  {/* Invisible click-catcher on top: the iframe itself has
                      pointer-events disabled, so this is what opens our modal
                      instead of letting YouTube's own player take over inline. */}
                  <button
                    type="button"
                    className="video-thumb-click"
                    onClick={() => setModalVideo(video)}
                    aria-label={`Play: ${video.title}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="video-nav video-nav--next"
            onClick={() => scrollByCard(1)}
            aria-label="Next video"
          >
            →
          </button>
        </div>
      </div>

      {modalVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="YouTube video player"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-modal-header">
              <span>YouTube video player</span>
            </div>

            <div className="video-modal-body">
              <div className="video-modal-embed-wrap">
                <iframe
                  className="video-embed"
                  src={`https://www.youtube.com/embed/${modalVideo.videoId}`}
                  title={modalVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="video-modal-footer">
              <button
                type="button"
                className="video-modal-close"
                onClick={() => setModalVideo(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}