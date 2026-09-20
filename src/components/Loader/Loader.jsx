import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Loader.css'

// How long the fade-out lasts (keep in sync with `transition` in Loader.css)
const EXIT_MS = 500

// Speed streaks around the logo. Defined once, outside the component.
// side: which side of the ring · y: vertical position · d: delay · c: colour
const STREAKS = [
  { side: 'left', y: '38%', d: '0s', c: '#3faf20' },
  { side: 'left', y: '52%', d: '0.35s', c: '#0b5db7' },
  { side: 'left', y: '64%', d: '0.7s', c: '#3faf20' },
  { side: 'right', y: '42%', d: '0.15s', c: '#0b5db7' },
  { side: 'right', y: '54%', d: '0.5s', c: '#3faf20' },
  { side: 'right', y: '66%', d: '0.85s', c: '#0b5db7' }
]

/**
 * Full-screen GATEE SEEDS loading screen.
 *
 * @param {number}   loadingDuration  How long the loader stays visible, in ms (default 2500)
 * @param {Function} onFinish         Optional. Called once the loader has faded out.
 */
function Loader({ loadingDuration = 2500, onFinish }) {
  // 'loading' -> 'exit' (fading out) -> 'done' (removed from the page)
  const [phase, setPhase] = useState('loading')
  const onFinishRef = useRef(onFinish)

  // Always call the latest onFinish without restarting the timers
  useEffect(() => {
    onFinishRef.current = onFinish
  }, [onFinish])

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase('exit'), loadingDuration)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      if (onFinishRef.current) onFinishRef.current()
    }, loadingDuration + EXIT_MS)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [loadingDuration])

  // Stop the page behind the loader from scrolling while it is visible
  const done = phase === 'done'
  useEffect(() => {
    if (done) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [done])

  if (done) return null

  return (
    <div
      className={`gatee-loader${phase === 'exit' ? ' gatee-loader--exit' : ''}`}
      style={{ '--gl-duration': `${loadingDuration}ms` }}
      role="status"
      aria-live="polite"
      aria-busy={phase === 'loading'}
    >
      <span className="gatee-loader__sr">Loading GATEE SEEDS website</span>

      <div className="gatee-loader__stage" aria-hidden="true">
        <div className="gatee-loader__glow" />
        <div className="gatee-loader__track" />

        <div className="gatee-loader__spinner gatee-loader__spinner--echo">
          <span className="gatee-loader__arc" />
        </div>
        <div className="gatee-loader__spinner">
          <span className="gatee-loader__arc" />
          <span className="gatee-loader__head" />
        </div>

        <div className="gatee-loader__streaks">
          {STREAKS.map((s, i) => (
            <span
              key={i}
              className={`gatee-loader__streak gatee-loader__streak--${s.side}`}
              style={{ '--y': s.y, '--d': s.d, '--c': s.c }}
            />
          ))}
        </div>

        <span className="gatee-loader__shadow" />

        <div className="gatee-loader__runner">
          <img
            className="gatee-loader__logo"
            src={logo}
            alt="GATEE SEEDS PVT. LTD."
            draggable="false"
            decoding="async"
          />
        </div>
      </div>

      <div className="gatee-loader__label" aria-hidden="true">
        <p className="gatee-loader__text">
          Loading
          <span className="gatee-loader__dot">.</span>
          <span className="gatee-loader__dot">.</span>
          <span className="gatee-loader__dot">.</span>
        </p>
        <div className="gatee-loader__bar">
          <div className="gatee-loader__fill" />
        </div>
      </div>
    </div>
  )
}

export default Loader