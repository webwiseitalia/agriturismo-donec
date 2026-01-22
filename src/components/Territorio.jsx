import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import panoramaInverno from '../assets/foto/foto-2.webp'
import panoramaEstate from '../assets/foto/foto-30.webp'
import stradaMontagna from '../assets/foto/foto-35.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Territorio() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const parallaxRef = useRef(null)
  const statsRef = useRef(null)
  const invernoBloccoRef = useRef(null)
  const estateBloccoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
        gsap.fromTo(titleSplit.chars,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.02,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Parallax hero image
      gsap.to(parallaxRef.current, {
        yPercent: -25,
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      // Stats animation
      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      statItems?.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
          }
        )
      })

      // Season blocks animation
      const blocks = [invernoBloccoRef.current, estateBloccoRef.current]
      blocks.forEach((block, i) => {
        if (!block) return
        const img = block.querySelector('img')
        const content = block.querySelector('.season-content')

        gsap.fromTo(img,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        gsap.fromTo(content,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: content,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: 0.2
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="territorio"
      ref={sectionRef}
      className="relative bg-[#2D3A2D] text-[#F5F0E8] overflow-hidden"
    >
      {/* Hero Parallax */}
      <div className="relative h-[80vh] overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
        >
          <img
            src={stradaMontagna}
            alt="Strada alpina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3A2D] via-transparent to-[#2D3A2D]" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 w-full items-center">
            <div className="col-span-12 md:col-span-7">
              <span className="text-fluid-xs font-body tracking-[0.4em] uppercase text-[#C4A35A] block mb-6">
                Il territorio
              </span>
              <h2
                ref={titleRef}
                className="text-fluid-5xl md:text-fluid-hero font-display leading-[0.85]"
              >
                Pontedilegno
                <br />
                <span className="font-accent text-[#C4A35A] ml-4 md:ml-12">Tonale</span>
              </h2>
              <p className="mt-8 text-fluid-lg text-[#F5F0E8]/70 max-w-lg">
                A cavallo tra Lombardia e Trentino.
                Un paradiso per ogni stagione.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-9 hidden md:block">
              <div className="text-right">
                <span className="text-fluid-xs text-[#F5F0E8]/50 block mb-3 tracking-wider uppercase">Altitudine</span>
                <div className="flex items-baseline justify-end gap-3">
                  <span className="text-fluid-4xl font-display">1.121</span>
                  <span className="text-fluid-lg text-[#C4A35A]">—</span>
                  <span className="text-fluid-4xl font-display">3.016</span>
                  <span className="text-fluid-lg text-[#F5F0E8]/50">m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-16 md:py-24 px-6 md:px-12 border-b border-[#F5F0E8]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="stat-item text-center md:text-left">
            <span className="text-fluid-4xl md:text-fluid-5xl font-display text-[#C4A35A] block">46</span>
            <span className="text-fluid-sm text-[#F5F0E8]/60">piste da sci</span>
          </div>
          <div className="stat-item text-center md:text-left">
            <span className="text-fluid-4xl md:text-fluid-5xl font-display text-[#C4A35A] block">1000+</span>
            <span className="text-fluid-sm text-[#F5F0E8]/60">km di sentieri</span>
          </div>
          <div className="stat-item text-center md:text-left">
            <span className="text-fluid-4xl md:text-fluid-5xl font-display text-[#C4A35A] block">4</span>
            <span className="text-fluid-sm text-[#F5F0E8]/60">ski area</span>
          </div>
          <div className="stat-item text-center md:text-left">
            <span className="text-fluid-4xl md:text-fluid-5xl font-display text-[#C4A35A] block">2</span>
            <span className="text-fluid-sm text-[#F5F0E8]/60">siti UNESCO</span>
          </div>
        </div>
      </div>

      {/* Inverno - Immagine a sinistra, testo a destra */}
      <div ref={invernoBloccoRef} className="py-20 md:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-12 px-6 md:px-12 items-center">
          <div className="col-span-12 md:col-span-6 relative">
            <span className="absolute -top-8 -left-4 md:-left-8 text-[10rem] md:text-[14rem] font-display text-[#C4A35A]/[0.07] leading-none pointer-events-none select-none z-0">
              01
            </span>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={panoramaInverno}
                alt="Inverno a Ponte di Legno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="season-content">
              <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-4">
                Dicembre — Aprile
              </span>
              <h3 className="text-fluid-3xl md:text-fluid-4xl font-display mb-6 leading-[0.95]">
                Inverno
              </h3>
              <p className="text-fluid-base text-[#F5F0E8]/70 mb-8 leading-relaxed">
                Il comprensorio Pontedilegno-Tonale offre 100 km di piste perfettamente innevate,
                dal ghiacciaio Presena fino alle aree family friendly.
              </p>
              <ul className="space-y-3 text-[#F5F0E8]/70 text-fluid-sm mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  46 piste (13 blu, 25 rosse, 8 nere)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  Ghiacciaio Presena fino a maggio
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  Snowpark, ciaspole, fat bike
                </li>
              </ul>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#C4A35A]/10 border border-[#C4A35A]/30">
                <svg className="w-5 h-5 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-fluid-sm text-[#C4A35A]">Navetta gratuita per le piste</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estate - Testo a sinistra, immagine a destra */}
      <div ref={estateBloccoRef} className="py-20 md:py-32 bg-[#243024]">
        <div className="grid grid-cols-12 gap-6 md:gap-12 px-6 md:px-12 items-center">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <div className="season-content">
              <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-4">
                Maggio — Ottobre
              </span>
              <h3 className="text-fluid-3xl md:text-fluid-4xl font-display mb-6 leading-[0.95]">
                Estate
              </h3>
              <p className="text-fluid-base text-[#F5F0E8]/70 mb-8 leading-relaxed">
                Oltre 1000 km di sentieri attraversano paesaggi mozzafiato,
                tra vette alpine, laghi cristallini e testimonianze della Grande Guerra.
              </p>
              <ul className="space-y-3 text-[#F5F0E8]/70 text-fluid-sm mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  Sentiero dei Fiori (ferrata WWI)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  Rafting sul fiume Noce
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  Golf a 1.530m di quota
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A35A]">—</span>
                  MTB e e-bike trails
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 relative order-1 md:order-2">
            <span className="absolute -top-8 -right-4 md:-right-8 text-[10rem] md:text-[14rem] font-display text-[#C4A35A]/[0.07] leading-none pointer-events-none select-none z-0">
              02
            </span>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={panoramaEstate}
                alt="Estate in valle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Parchi Naturali */}
      <div className="py-20 md:py-32 px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-4">
              Natura protetta
            </span>
            <h3 className="text-fluid-3xl md:text-fluid-4xl font-display leading-[0.95]">
              Parchi
              <br />
              <span className="font-accent text-[#C4A35A]">Naturali</span>
            </h3>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-[#F5F0E8]/10 hover:border-[#C4A35A]/30 transition-colors duration-300">
                <h4 className="text-fluid-lg font-display mb-2">Parco dello Stelvio</h4>
                <p className="text-fluid-sm text-[#F5F0E8]/50">Il più grande parco alpino italiano</p>
              </div>
              <div className="p-6 border border-[#F5F0E8]/10 hover:border-[#C4A35A]/30 transition-colors duration-300">
                <h4 className="text-fluid-lg font-display mb-2">Parco dell'Adamello</h4>
                <p className="text-fluid-sm text-[#F5F0E8]/50">Ghiacciai e natura incontaminata</p>
              </div>
              <div className="p-6 border border-[#F5F0E8]/10 hover:border-[#C4A35A]/30 transition-colors duration-300">
                <h4 className="text-fluid-lg font-display mb-2">Geoparco UNESCO</h4>
                <p className="text-fluid-sm text-[#F5F0E8]/50">Patrimonio geologico mondiale</p>
              </div>
              <div className="p-6 border border-[#F5F0E8]/10 hover:border-[#C4A35A]/30 transition-colors duration-300">
                <h4 className="text-fluid-lg font-display mb-2">Incisioni Rupestri</h4>
                <p className="text-fluid-sm text-[#F5F0E8]/50">Arte preistorica UNESCO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A35A]/30 to-transparent" />
      </div>
    </section>
  )
}
