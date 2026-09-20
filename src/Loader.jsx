import { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Loader.css'

/**
 * Full-screen preloader shown on the first visit only.
 *
 * It waits for the window `load` event so the hero image is actually ready,
 * with a short minimum on screen so it never flashes, and a hard ceiling so a
 * slow image can never trap the visitor behind it.
 */
const MIN_VISIBLE = 900
const MAX_VISIBLE = 4000

export default function Loader() {
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const started = Date.now()
    let timers = []

    const finish = () => {
      const waited = Date.now() - started
      timers.push(setTimeout(() => setDone(true), Math.max(0, MIN_VISIBLE - waited)))
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    timers.push(setTimeout(() => setDone(true), MAX_VISIBLE))

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('load', finish)
    }
  }, [])

  // Keep the node mounted through the fade, then drop it from the DOM.
  useEffect(() => {
    if (!done) {
      document.body.classList.add('is-loading')
      return undefined
    }
    document.body.classList.remove('is-loading')
    const id = setTimeout(() => setGone(true), 650)
    return () => clearTimeout(id)
  }, [done])

  if (gone) return null

  return (
    <div
      className={`loader${done ? ' loader--out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading GATEE SEEDS"
    >
      <div className="loader__mark">
        <span className="loader__ring" aria-hidden="true" />
        <span className="logo-chip loader__logo">
          <img src={logo} alt="" width="96" height="96" />
        </span>
      </div>

      <p className="loader__name">
        GATEE SEEDS <span>PVT. LTD.</span>
      </p>

      <span className="loader__bar" aria-hidden="true">
        <span />
      </span>

      <p className="loader__text">Quality onion seeds</p>
    </div>
  )
}
