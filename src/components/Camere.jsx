import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitType from 'split-type'
import cameraStandard from '../assets/foto/foto-26.webp'
import cameraSuperior from '../assets/foto/foto-8.webp'
import cameraQuadrupla from '../assets/foto/foto-7.webp'
import suite from '../assets/foto/foto-33.webp'
import bagno from '../assets/foto/foto-25.webp'
import dettaglio from '../assets/foto/foto-24.webp'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Camere() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const headerRef = useRef(null)
  const titleRef = useRef(null)
  const slidesContainerRef = useRef(null)
  const progressRef = useRef(null)
  const scrollTriggerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const camere = [
    {
      name: 'Standard',
      image: cameraStandard,
      price: '90',
      desc: 'Vista mozzafiato sulle montagne',
      features: ['Balcone privato', 'Vista Alpi', '20 mq']
    },
    {
      name: 'Superior',
      image: cameraSuperior,
      price: '120',
      desc: 'Design contemporaneo alpino',
      features: ['Ampio balcone', 'Zona lettura', '28 mq']
    },
    {
      name: 'Quadrupla',
      image: cameraQuadrupla,
      price: '150',
      desc: 'Perfetta per le famiglie',
      features: ['Accesso giardino', '4 posti letto', '35 mq']
    },
    {
      name: 'Suite',
      image: suite,
      price: '180',
      desc: 'L\'esperienza definitiva',
      features: ['Vasca in camera', 'Living area', '45 mq']
    },
  ]

  const updateActiveIndex = useCallback((progress) => {
    const totalSlides = camere.length
    const newIndex = Math.min(
      Math.floor(progress * totalSlides),
      totalSlides - 1
    )
    setActiveIndex(newIndex)
  }, [camere.length])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (titleRef.current) {
        const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
        gsap.fromTo(titleSplit.chars,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power4.out',
            stagger: 0.02,
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Calculate proper dimensions
      const slides = gsap.utils.toArray('.room-slide')
      const totalSlides = slides.length

      // Create horizontal scroll
      const horizontalScroll = gsap.to(slidesContainerRef.current, {
        x: () => -(slidesContainerRef.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: () => `+=${slidesContainerRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update progress bar
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
            // Update active index
            updateActiveIndex(self.progress)
          }
        }
      })

      scrollTriggerRef.current = horizontalScroll.scrollTrigger

      // Animate content on each slide
      slides.forEach((slide, i) => {
        const content = slide.querySelector('.slide-content')
        const image = slide.querySelector('.room-image')

        if (content) {
          gsap.fromTo(content,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: slide,
                containerAnimation: horizontalScroll,
                start: 'left 80%',
                end: 'left 20%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }

        if (image) {
          gsap.fromTo(image,
            { scale: 1.2 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: slide,
                containerAnimation: horizontalScroll,
                start: 'left right',
                end: 'right left',
                scrub: true
              }
            }
          )
        }
      })

    }, sectionRef)

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', handleResize)
    }
  }, [updateActiveIndex])

  return (
    <section
      id="camere"
      ref={sectionRef}
      className="relative bg-[#1a1714] text-[#F5F0E8]"
    >
      {/* Wrapper for pinning */}
      <div ref={wrapperRef} className="relative overflow-hidden">
        {/* Fixed Header */}
        <div
          ref={headerRef}
          className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 pt-24 md:pt-32 pointer-events-none"
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-fluid-xs font-body tracking-[0.4em] uppercase text-[#C4A35A] block mb-4">
                Alloggi
              </span>
              <h2
                ref={titleRef}
                className="text-fluid-5xl md:text-fluid-hero font-display leading-[0.85]"
              >
                Le Stanze
              </h2>
            </div>

            {/* Room Counter */}
            <div className="text-right hidden md:block">
              <span
                className="text-fluid-hero font-display text-[#F5F0E8]/10 transition-all duration-300"
                key={activeIndex}
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-[#F5F0E8]/10">
          <div
            ref={progressRef}
            className="h-full bg-[#C4A35A] origin-left will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

        {/* Room Navigation Dots */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-4">
          {camere.map((camera, i) => (
            <button
              key={i}
              className="group flex items-center justify-end gap-3 cursor-pointer"
              onClick={() => {
                if (scrollTriggerRef.current) {
                  const progress = i / (camere.length - 1)
                  const scrollTo = scrollTriggerRef.current.start +
                    (scrollTriggerRef.current.end - scrollTriggerRef.current.start) * progress
                  gsap.to(window, {
                    scrollTo: scrollTo,
                    duration: 1,
                    ease: 'power2.inOut'
                  })
                }
              }}
            >
              <span className={`
                text-fluid-xs font-body tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100
                ${i === activeIndex ? '!opacity-100 text-[#C4A35A]' : 'text-[#F5F0E8]/50'}
              `}>
                {camera.name}
              </span>
              <span className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${i === activeIndex
                  ? 'bg-[#C4A35A]'
                  : 'bg-[#F5F0E8]/30 group-hover:bg-[#F5F0E8]/50'
                }
              `} />
            </button>
          ))}
        </div>

        {/* Horizontal Slides Container */}
        <div className="h-screen">
          <div
            ref={slidesContainerRef}
            className="flex h-full will-change-transform"
          >
            {camere.map((camera, i) => (
              <div
                key={camera.name}
                className="room-slide relative h-full flex-shrink-0"
                style={{ width: '100vw' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={camera.image}
                    alt={camera.name}
                    title={`Camera ${camera.name} - Agriturismo Donec`}
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="room-image w-full h-full object-cover will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714] via-[#1a1714]/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-transparent to-[#1a1714]/20" />
                </div>

                {/* Large Background Number */}
                <span className="absolute bottom-0 left-6 md:left-12 text-[25vw] md:text-[18vw] font-display text-[#F5F0E8]/[0.03] leading-none pointer-events-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="slide-content relative h-full flex items-end px-6 md:px-12 pb-24 md:pb-32">
                  <div className="grid grid-cols-12 gap-8 w-full items-end">
                    {/* Room Info */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-5">
                      <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-4">
                        Camera {String(i + 1).padStart(2, '0')}
                      </span>

                      <h3 className="text-fluid-4xl md:text-fluid-5xl font-display leading-[0.9] mb-6">
                        {camera.name}
                      </h3>

                      <p className="text-fluid-lg text-[#F5F0E8]/70 mb-8 max-w-md">
                        {camera.desc}
                      </p>

                      <ul className="flex flex-wrap gap-3 mb-10">
                        {camera.features.map((feature, j) => (
                          <li
                            key={j}
                            className="text-fluid-sm text-[#F5F0E8]/60 border border-[#F5F0E8]/10 px-4 py-2 bg-[#1a1714]/30 backdrop-blur-sm"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-end gap-6 md:gap-10">
                        <div>
                          <span className="text-fluid-xs text-[#F5F0E8]/40 block mb-1">
                            A partire da
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-fluid-3xl md:text-fluid-4xl font-display text-[#C4A35A]">
                              €{camera.price}
                            </span>
                            <span className="text-fluid-sm text-[#F5F0E8]/50">/notte</span>
                          </div>
                        </div>

                        <a
                          href="#contatti"
                          className="inline-flex items-center gap-3 text-[#F5F0E8] text-fluid-sm font-body tracking-wide group"
                        >
                          <span className="link-hover">Prenota ora</span>
                          <span className="w-12 h-12 border border-[#F5F0E8]/20 rounded-full flex items-center justify-center group-hover:border-[#C4A35A] group-hover:bg-[#C4A35A] transition-all duration-300">
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Decorative Elements on specific slides */}
                    {i === 1 && (
                      <div className="hidden lg:block col-span-3 col-start-10">
                        <div className="aspect-[3/4] overflow-hidden opacity-70">
                          <img
                            src={bagno}
                            alt="Dettaglio bagno"
                            title="Bagno in pietra naturale - Agriturismo Donec"
                            loading="lazy"
                            width={400}
                            height={533}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-3 text-fluid-xs text-[#F5F0E8]/40">
                          Bagni in pietra naturale
                        </p>
                      </div>
                    )}

                    {i === 3 && (
                      <div className="hidden lg:block col-span-3 col-start-10">
                        <div className="aspect-square overflow-hidden opacity-70">
                          <img
                            src={dettaglio}
                            alt="Dettaglio"
                            title="Dettagli di design - Agriturismo Donec"
                            loading="lazy"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="mt-3 text-fluid-xs text-[#F5F0E8]/40">
                          Cura dei dettagli
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vertical Text Decoration */}
                <div className="absolute right-20 md:right-32 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
                  <span
                    className="text-fluid-2xl font-display text-[#F5F0E8]/[0.04] leading-none whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    {camera.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Bar - Fixed at bottom right */}
        <div className="absolute bottom-24 md:bottom-32 right-20 md:right-32 z-20 hidden lg:block">
          <div className="bg-[#0a0908]/70 backdrop-blur-md p-6 border border-[#F5F0E8]/5">
            <span className="text-fluid-xs text-[#C4A35A] tracking-[0.2em] uppercase block mb-4">
              In ogni camera
            </span>
            <ul className="space-y-2 text-fluid-xs text-[#F5F0E8]/60">
              <li>• Vista panoramica</li>
              <li>• Wi-Fi gratuito</li>
              <li>• Prodotti bio</li>
            </ul>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 text-[#F5F0E8]/40 text-fluid-xs">
          <span>Scorri per esplorare</span>
          <div className="flex items-center gap-1">
            <span className="w-6 h-[1px] bg-[#F5F0E8]/40" />
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
