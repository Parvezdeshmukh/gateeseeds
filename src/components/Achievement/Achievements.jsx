import { useEffect, useRef, useState } from 'react'
import './Achievements.css'

// { value: number to count to, suffix: text after number, label: description }
const stats = [
  { value: 5000, suffix: '+', label: 'Number Of Distributors & Dealer Network' },
  { value: 100, suffix: '+', label: 'Number Of Sales Staff' },
  { value: 10000, suffix: '+', label: 'Number Of Production Farmers 10000 Attached In Production.' },
  { value: 21, suffix: '+', label: 'Customer Touch Points Acrosses 21 Key States In India' },
]

function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let frame
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out for a natural finish
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))

      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return value
}

function StatItem({ value, suffix, label, start }) {
  const count = useCountUp(value, start)

  return (
    <div className="achievements-item">
      <div className="achievements-value">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="achievements-label">{label}</p>
    </div>
  )
}

export default function Achievements() {
  const [start, setStart] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect() // only count up once
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="achievements-section"
      aria-labelledby="achievements-heading"
      ref={sectionRef}
    >
      <div className="achievements-shell">
        <h2 id="achievements-heading" className="achievements-heading">
          Leadership in key crops
        </h2>

        <div className="achievements-grid">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} start={start} />
          ))}
        </div>
      </div>
    </section>
  )
}