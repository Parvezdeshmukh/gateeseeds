import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Gallery from '../../components/Gallery/Gallery'
import EnquiryCTA from '../../components/EnquiryCTA/EnquiryCTA'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import { useLanguage } from '../../context/LanguageContext'
import './GalleryPage.css'

export default function GalleryPage() {
  const { t } = useLanguage()
  useReveal()

  useEffect(() => {
    setPageMeta(
      'Gallery | GATEE SEEDS PVT. LTD.',
      'Pack artwork and onion selections from the GATEE SEEDS onion seed range.'
    )
  }, [])

  return (
    <>
     <PageHeader
  title={t.gallery.pageTitle}
  subtitle={t.gallery.pageSubtitle}
  crumbs={[
    { label: t.gallery.breadcrumb }
  ]}
/>
      <Gallery />
      <EnquiryCTA />
    </>
  )
}
