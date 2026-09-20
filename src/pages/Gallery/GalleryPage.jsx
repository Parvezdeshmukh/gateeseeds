import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Gallery from '../../components/Gallery/Gallery'
import EnquiryCTA from '../../components/EnquiryCTA/EnquiryCTA'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import './GalleryPage.css'

export default function GalleryPage() {
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
        title="Gallery"
        subtitle="Pack artwork and onion selections from the GATEE SEEDS range."
        crumbs={[{ label: 'Gallery' }]}
      />
      <Gallery />
      <EnquiryCTA />
    </>
  )
}
