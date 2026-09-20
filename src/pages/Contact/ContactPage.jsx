import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Contact from '../../components/Contact/Contact'
import MapSection from '../../components/MapSection/MapSection'
import FAQ from '../../components/FAQ/FAQ'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import './ContactPage.css'

export default function ContactPage() {
  useReveal()

  useEffect(() => {
    setPageMeta(
      'Contact | GATEE SEEDS PVT. LTD.',
      'Call or message GATEE SEEDS PVT. LTD., Chauka, Chhatrapati Sambhajinagar, Maharashtra, for onion seed enquiries.'
    )
  }, [])

  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="Call, message on WhatsApp, or send an enquiry with the variety and quantity you need."
        crumbs={[{ label: 'Contact Us' }]}
      />
      <Contact />
      <MapSection />
      <FAQ />
    </>
  )
}
