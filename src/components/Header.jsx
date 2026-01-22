import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import logo from '../assets/foto/foto-28.webp'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)

    gsap.fromTo(logoRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    )

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Donec', href: '#chi-siamo' },
    { label: 'Stanze', href: '#camere' },
    { label: 'Étoile', href: '#chalet' },
    { label: 'Cucina', href: '#ristorante' },
    { label: 'Territorio', href: '#territorio' },
  ]

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? 'mix-blend-difference' : ''
        }`}
      >
        <div className="flex justify-between items-start px-6 md:px-12 py-6 md:py-8">
          <a href="#home" ref={logoRef} className="relative z-50">
            <img
              src={logo}
              alt="Donec"
              className={`transition-all duration-500 ${
                isScrolled ? 'h-10 invert' : 'h-14 md:h-16'
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-12 mt-2">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`text-fluid-sm font-body tracking-wide link-hover ${
                  isScrolled ? 'text-white' : 'text-[#1a1714]'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-6 mt-2">
            <motion.a
              href="#contatti"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className={`hidden md:block text-fluid-sm font-body tracking-wide ${
                isScrolled ? 'text-white' : 'text-[#1a1714]'
              }`}
            >
              Prenota
            </motion.a>

            <button
              onClick={() => setIsOpen(true)}
              className={`relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 ${
                isScrolled ? 'text-white' : 'text-[#1a1714]'
              }`}
            >
              <span className="block w-8 h-[2px] bg-current" />
              <span className="block w-5 h-[2px] bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 3rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[100] bg-[#1a1714]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-12 w-10 h-10 flex items-center justify-center text-[#F5F0E8]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>

            <div className="h-full flex flex-col justify-between px-6 md:px-12 py-24 md:py-32">
              <nav className="flex-1 flex flex-col justify-center">
                {[...navItems, { label: 'Contatti', href: '#contatti' }].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="block text-fluid-4xl font-display text-[#F5F0E8] hover:text-[#C4A35A] transition-colors duration-300 leading-[1.1] py-2"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 text-[#F5F0E8]/60 text-fluid-sm"
              >
                <div>
                  <p>Località Donec</p>
                  <p>25050 Villa Dalegno (BS)</p>
                </div>
                <div className="text-right">
                  <p>+39 375 714 0148</p>
                  <p>info@agriturismodonec.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
