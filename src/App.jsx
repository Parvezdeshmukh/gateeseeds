import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar/TopBar'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingSocial from './components/FloatingSocial/FloatingSocial'
import Home from './pages/Home/Home'
import AboutPage from './pages/About/About'
import OnionSeedsPage from './pages/OnionSeeds/OnionSeedsPage'
import OnionDetails from './pages/OnionDetails/OnionDetails'
import GalleryPage from './pages/Gallery/GalleryPage'
import ContactPage from './pages/Contact/ContactPage'
import NotFound from './pages/NotFound/NotFound'
import Loader from './components/Loader/Loader'

/** Scrolls to the top on route change, or to the hash target when there is one. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'auto' : 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
    <Loader loadingDuration={2500} />
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <TopBar />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/onion-seeds" element={<OnionSeedsPage />} />
          <Route path="/onion-seeds/:id" element={<OnionDetails />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingSocial />
    </>
  )
}
