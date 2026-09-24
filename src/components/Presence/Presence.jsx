import mapImg from '../../assets/mpp.png'
import './Presence.css'

export default function Presence() {
  return (
    <section className="presence-section" aria-labelledby="presence-heading">
      <div className="presence-shell">
        <div className="presence-map">
          <img
            src={mapImg}
            alt="GATEE SEEDS presence across Maharashtra, Panjab and UP - MP"
            loading="lazy"
          />
        </div>

        <div className="presence-content">
          <p className="presence-eyebrow">Who we are</p>
          <h2 id="presence-heading" className="presence-heading">
            Our Presence Across India
          </h2>
          <p className="presence-text">
            GATEE SEEDS Pvt. Ltd. is dedicated to providing quality seeds and
            reliable agricultural solutions to farmers and growers. Our focus is
            on quality, consistency, farmer satisfaction, and sustainable
            farming practices.
          </p>
          <p className="presence-text">
            With integrity, transparency, and customer-focused service at the
            heart of our work, we strive to build lasting relationships with
            farmers and contribute to better yields and a stronger
            agricultural future.
          </p>
        </div>
      </div>
    </section>
  )
}