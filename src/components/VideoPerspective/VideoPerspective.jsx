import { useEffect, useRef, useState, useCallback } from 'react'
import './VideoPerspective.css'

import { useLanguage } from '../../context/LanguageContext'

// Replace videoId with your real YouTube video IDs
const videos = [
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

const AUTO_SCROLL_MS = 3500

export default function VideoPerspective() {
  const trackRef = useRef(null)
  const hideTimeoutRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [modalVideo, setModalVideo] = useState(null)

  const { t } = useLanguage()

  const videoText = t.videoPerspective

  const handleTouchActivity = useCallback(() => {
    setIsHovering(true)

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }

    hideTimeoutRef.current = setTimeout(
      () => setIsHovering(false),
      2500
    )
  }, [])

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  const scrollToIndex = useCallback((idx) => {
    const track = trackRef.current
    if (!track) return

    const clamped = Math.max(
      0,
      Math.min(idx, videos.length - 1)
    )

    const card = track.children[clamped]

    if (card) {
      track.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth',
      })
    }

    setActiveIndex(clamped)
  }, [])

  const scrollByCard = (direction) => {
    scrollToIndex(activeIndex + direction)
  }

  useEffect(() => {
    if (modalVideo || isHovering) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex =
          prev + 1 >= videos.length ? 0 : prev + 1

        scrollToIndex(nextIndex)

        return nextIndex
      })
    }, AUTO_SCROLL_MS)

    return () => clearInterval(timer)
  }, [
    modalVideo,
    isHovering,
    scrollToIndex,
  ])

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return

    let closest = 0
    let closestDist = Infinity

    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(
        child.offsetLeft - track.scrollLeft
      )

      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })

    setActiveIndex(closest)
  }

  useEffect(() => {
    if (!modalVideo) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalVideo(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () =>
      window.removeEventListener(
        'keydown',
        onKeyDown
      )
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

        <h2
          id="video-heading"
          className="video-heading"
        >
          {videoText.title}
        </h2>

        <span
          className="video-underline"
          aria-hidden="true"
        />

        <div
          className={`video-carousel ${
            isHovering
              ? 'video-carousel--active'
              : ''
          }`}
        >
          <button
            type="button"
            className="video-nav video-nav--prev"
            onClick={() => scrollByCard(-1)}
            aria-label={videoText.previous}
          >
            ←
          </button>

          <div
            className="video-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {videos.map((video) => {
              const title =
                videoText.videos[
                  video.translationKey
                ]

              return (
                <div
                  className="video-card"
                  key={video.videoId}
                >
                  <div className="video-thumb-wrap">

                    <iframe
                      className="video-embed video-embed--facade"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      tabIndex={-1}
                    />

                    <button
                      type="button"
                      className="video-thumb-click"
                      onClick={() =>
                        setModalVideo(video)
                      }
                      aria-label={`${videoText.play}: ${title}`}
                    />

                  </div>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            className="video-nav video-nav--next"
            onClick={() => scrollByCard(1)}
            aria-label={videoText.next}
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
            aria-label={videoText.player}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="video-modal-header">
              <span>{videoText.player}</span>
            </div>

            <div className="video-modal-body">
              <div className="video-modal-embed-wrap">
                <iframe
                  className="video-embed"
                  src={`https://www.youtube.com/embed/${modalVideo.videoId}`}
                  title={
                    videoText.videos[
                      modalVideo.translationKey
                    ]
                  }
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
                onClick={() =>
                  setModalVideo(null)
                }
              >
                {videoText.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}