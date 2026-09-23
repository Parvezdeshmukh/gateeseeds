import { useEffect, useState } from 'react'
import './Testimonials.css'

// Add / edit testimonials here.
const testimonials = [
  {
    lead: 'एलोरा रमन -',
    quote: 'अंकुरण क्षमता अच्छी है और उत्पादन भी अच्छी गुणवत्ता का है और बाजार में इसकी मांग बहुत अधिक है',
    name: 'हन्ना नाली',
    location: 'आसाम भोगड़िया',
  },
  {
    lead: 'एलोरा सुपर 313 -',
    quote: 'बीज की गुणवत्ता बहुत बढ़िया है, अंकुरण अच्छा हुआ और फसल स्वस्थ है',
    name: 'रमेश पटेल',
    location: 'गुजरात',
  },
  {
    lead: 'एलोरा कमांडो-1112 -',
    quote: 'उत्पादन क्षमता शानदार है, पिछले साल से काफी बेहतर परिणाम मिले',
    name: 'सुरेश यादव',
    location: 'मध्य प्रदेश',
  },
]

const AUTO_ROTATE_MS = 4500

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering || testimonials.length <= 1) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_ROTATE_MS)
    return () => clearInterval(timer)
  }, [isHovering])

  const active = testimonials[activeIndex]

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
          <span className="testi-kicker">TESTIMONIALS</span>
          <h2 id="testi-heading" className="testi-heading">
            What our Farmers
            <br />
            are talking about
            <br />
            us.
          </h2>
        </div>

        <span className="testi-divider" aria-hidden="true" />

        <div className="testi-card-wrap">
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