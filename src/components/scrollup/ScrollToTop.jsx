import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`stt${visible ? ' stt--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}