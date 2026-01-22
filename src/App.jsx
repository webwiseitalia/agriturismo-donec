import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/CookieBanner'

gsap.registerPlugin(ScrollTrigger)

// Componente wrapper per gestire Lenis e scroll
function AppContent() {
  const lenisRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // Non usare Lenis nelle pagine policy per scroll nativo
    const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

    if (isPolicyPage) {
      // Distruggi Lenis se esiste
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          lenis.scrollTo(target, {
            offset: 0,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          })
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [location.pathname])

  return (
    <div className="relative">
      <div className="noise" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
