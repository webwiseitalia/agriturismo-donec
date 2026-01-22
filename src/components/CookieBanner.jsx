import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteData } from '../constants/siteData'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Verifica se siamo in una pagina policy (dove non mostrare il blur)
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Controlla se l'utente ha già dato il consenso
    const consent = localStorage.getItem(siteData.cookieKey)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookieKey, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookieKey, 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay blur - solo se non siamo in una pagina policy */}
      {!isPolicyPage && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Banner Cookie */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-[#1a1714] text-[#F5F0E8] p-6 md:p-8 shadow-2xl border border-[#F5F0E8]/10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            {/* Icona e Testo */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#C4A35A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-fluid-base font-display">Informativa Cookie</h3>
              </div>
              <p className="text-fluid-sm text-[#F5F0E8]/70 leading-relaxed">
                Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento.
                Non utilizziamo cookie di profilazione o tracciamento.
                Per saperne di più, consulta la nostra{' '}
                <Link
                  to="/cookie-policy"
                  className="text-[#C4A35A] hover:underline"
                >
                  Cookie Policy
                </Link>{' '}
                e la{' '}
                <Link
                  to="/privacy-policy"
                  className="text-[#C4A35A] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Bottoni - stessa grandezza e stile */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 border border-[#F5F0E8]/30 text-[#F5F0E8] font-body text-fluid-sm tracking-wide hover:border-[#F5F0E8] transition-colors duration-300 min-w-[140px]"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 border border-[#C4A35A] bg-[#C4A35A] text-[#1a1714] font-body text-fluid-sm tracking-wide hover:bg-[#F5F0E8] hover:border-[#F5F0E8] transition-colors duration-300 min-w-[140px]"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
