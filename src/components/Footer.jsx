import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/foto/foto-28.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current.querySelectorAll('.fade-up')
      elements.forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.08
          }
        )
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      id="contatti"
      ref={footerRef}
      className="relative bg-[#1a1714] text-[#F5F0E8] overflow-hidden"
    >
      {/* Main Content */}
      <div ref={contentRef} className="px-6 md:px-12 py-20 md:py-28">

        {/* Top Section - CTA */}
        <div className="fade-up text-center mb-20 md:mb-28">
          <span className="text-fluid-xs font-body tracking-[0.4em] uppercase text-[#C4A35A] block mb-6">
            Prenota il tuo soggiorno
          </span>
          <h2 className="text-fluid-4xl md:text-fluid-5xl font-display leading-[0.9] mb-8">
            Vieni a trovarci
          </h2>
          <p className="text-fluid-base text-[#F5F0E8]/60 max-w-xl mx-auto mb-10">
            Siamo a Villa Dalegno, a 10 minuti a piedi da Ponte di Legno.
            Un angolo di paradiso alpino ti aspetta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+393757140148"
              className="inline-flex items-center gap-3 bg-[#C4A35A] text-[#1a1714] px-8 py-4 text-fluid-sm font-body tracking-wide hover:bg-[#F5F0E8] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +39 375 714 0148
            </a>
            <a
              href="https://wa.me/393757140148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#F5F0E8]/20 text-[#F5F0E8] px-8 py-4 text-fluid-sm font-body tracking-wide hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px w-full mb-16 md:mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5F0E8]/10 to-transparent" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">

          {/* Logo & Address */}
          <div className="fade-up col-span-12 md:col-span-3">
            <div className="h-20 md:h-24 mb-6">
              <img
                src={logo}
                alt="Donec"
                className="h-full w-auto object-contain opacity-70"
              />
            </div>
            <div className="text-fluid-sm text-[#F5F0E8]/50 space-y-1">
              <p className="text-[#F5F0E8]/70 font-medium">Donec Società Agricola</p>
              <p>Località Donec</p>
              <p>25050 Villa Dalegno (BS)</p>
            </div>
          </div>

          {/* Contacts */}
          <div className="fade-up col-span-6 md:col-span-2">
            <h4 className="text-fluid-xs text-[#C4A35A] tracking-[0.2em] uppercase mb-5">
              Contatti
            </h4>
            <div className="space-y-3 text-fluid-sm">
              <a href="tel:+393757140148" className="block text-[#F5F0E8]/70 hover:text-[#C4A35A] transition-colors">
                +39 375 714 0148
              </a>
              <a href="mailto:info@agriturismodonec.com" className="block text-[#F5F0E8]/70 hover:text-[#C4A35A] transition-colors">
                info@agriturismodonec.com
              </a>
              <p className="text-[#F5F0E8]/40 pt-2">Ristorante:</p>
              <a href="tel:+393473994451" className="block text-[#F5F0E8]/70 hover:text-[#C4A35A] transition-colors">
                +39 347 399 4451
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="fade-up col-span-6 md:col-span-2">
            <h4 className="text-fluid-xs text-[#C4A35A] tracking-[0.2em] uppercase mb-5">
              Esplora
            </h4>
            <nav className="space-y-3 text-fluid-sm">
              {[
                { name: 'Chi Siamo', href: '#chi-siamo' },
                { name: 'Le Stanze', href: '#camere' },
                { name: 'Chalet Étoile', href: '#chalet' },
                { name: 'Ristorante', href: '#ristorante' },
                { name: 'Territorio', href: '#territorio' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#F5F0E8]/50 hover:text-[#C4A35A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Map */}
          <div className="fade-up col-span-12 md:col-span-2">
            <h4 className="text-fluid-xs text-[#C4A35A] tracking-[0.2em] uppercase mb-5">
              Seguici
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/agriturdonec/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#F5F0E8]/20 flex items-center justify-center hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#F5F0E8]/20 flex items-center justify-center hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p className="text-fluid-xs text-[#F5F0E8]/40">
              90K followers su Instagram
            </p>
          </div>

          {/* Map */}
          <div className="fade-up col-span-12 md:col-span-3">
            <h4 className="text-fluid-xs text-[#C4A35A] tracking-[0.2em] uppercase mb-5">
              Dove siamo
            </h4>
            <div className="aspect-[4/3] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.8012890776193!2d10.500279776891048!3d46.26393937115566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783546d43d0c269%3A0xf5c05b2d76cde7e0!2sAgriturismo%20Donec!5e0!3m2!1sit!2sit!4v1699000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5F0E8]/5">
        <div className="px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-fluid-xs text-[#F5F0E8]/30">
              <span>© {new Date().getFullYear()} Agriturismo Donec</span>
              <span className="hidden md:inline">•</span>
              <span>P.IVA IT02872820986</span>
              <span className="hidden md:inline">•</span>
              <span>100% Green Energy</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-fluid-xs text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-fluid-xs text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors">
                Cookie Policy
              </a>
              <a
                href="#home"
                className="w-8 h-8 border border-[#F5F0E8]/20 rounded-full flex items-center justify-center hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-300"
                aria-label="Torna su"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
