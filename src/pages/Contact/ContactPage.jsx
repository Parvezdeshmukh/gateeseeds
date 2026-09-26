import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Contact from '../../components/Contact/Contact'
import MapSection from '../../components/MapSection/MapSection'
import FAQ from '../../components/FAQ/FAQ'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import { useLanguage } from '../../context/LanguageContext'
import './ContactPage.css'

export default function ContactPage() {
  const { t } = useLanguage()
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
  title={t.contactPage.pageTitle}
  subtitle={t.contactPage.pageSubtitle}
  crumbs={[
    { label: t.contactPage.breadcrumb }
  ]}
/>
      <Contact />
      <MapSection />
      <FAQ />
    </>
  )
}
