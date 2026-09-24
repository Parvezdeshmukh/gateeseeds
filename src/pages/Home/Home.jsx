import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Presence from '../../components/Presence/Presence'
import OnionSeeds from '../../components/OnionSeeds/OnionSeeds'
import Achievements from '../../components/Achievement/Achievements'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import AgricultureBanner from '../../components/AgricultureBanner/AgricultureBanner'
import Process from '../../components/Process/Process'
import VideoPerspective from '../../components/VideoPerspective/VideoPerspective'
import Gallery from '../../components/Gallery/Gallery'
import Review from '../../components/Review/Review'
import EnquiryCTA from '../../components/EnquiryCTA/EnquiryCTA'
import FAQ from '../../components/FAQ/FAQ'
import FinalCTA from '../../components/FinalCTA/FinalCTA'
import useReveal from '../../hooks/useReveal'
import { setPageMeta } from '../../utils/seo'
import { useEffect } from 'react'
import './Home.css'

export default function Home() {
  useReveal()

  useEffect(() => {
    setPageMeta(
      'GATEE SEEDS PVT. LTD. | Quality Onion Seeds',
      'GATEE SEEDS PVT. LTD. — Explore onion seed products, reliable supply and easy product enquiries.'
    )
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Presence/>
      <OnionSeeds />
      <Achievements />
      <hr/>
      <WhyChooseUs />
      <AgricultureBanner />
      <Process />
      <VideoPerspective/> 
      <Gallery limit={8} />
      <Review />
      <EnquiryCTA />
      <FAQ />
      <FinalCTA />
    </>
  )
}
