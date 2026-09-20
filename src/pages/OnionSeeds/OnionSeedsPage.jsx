import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import OnionSeeds from '../../components/OnionSeeds/OnionSeeds'
import EnquiryCTA from '../../components/EnquiryCTA/EnquiryCTA'
import FAQ from '../../components/FAQ/FAQ'
import { labelStandards } from '../../data/onionSeeds'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import './OnionSeedsPage.css'

export default function OnionSeedsPage() {
  useReveal()

  useEffect(() => {
    setPageMeta(
      'Onion Seeds | GATEE SEEDS PVT. LTD.',
      'Four onion seed varieties from GATEE SEEDS: Super Gulabi, Onion Export Special, Super White and Puna Fursungi Gavran.'
    )
  }, [])

  return (
    <>
      <PageHeader
        title="Onion seeds"
        subtitle="Four selections packed under the GATEE SEEDS label, each as sortexed seed in a sealed 1 kg carton."
        crumbs={[{ label: 'Onion Seeds' }]}
      />

      <OnionSeeds showAll heading="The full range" />

      <section className="section standards" aria-labelledby="standards-heading">
        <div className="shell">
          <div className="section-head section-head--center">
            <p className="eyebrow">Common to every pack</p>
            <h2 id="standards-heading">Label standards</h2>
            <p>
              These minimum standards are printed on the truthful label of every GATEE SEEDS
              onion carton, along with the lot number and test date.
            </p>
          </div>

          <ul className="standards__grid">
            {labelStandards.map((row, i) => (
              <li key={row.label} data-reveal data-delay={i % 4}>
                <span className="standards__value">{row.value}</span>
                <span className="standards__label">{row.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryCTA />
      <FAQ />
    </>
  )
}
