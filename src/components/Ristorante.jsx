import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ristoranteSala from '../assets/foto/foto-32.webp'
import vinoRosso from '../assets/foto/foto-17.webp'
import piatto1 from '../assets/foto/foto-23.webp'
import piatto2 from '../assets/foto/foto-15.webp'
import piatto3 from '../assets/foto/foto-18.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Ristorante() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const horizontalRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(titleRef.current, { types: 'lines, words' })

      titleSplit.lines.forEach((line, i) => {
        gsap.fromTo(line,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      const horizontalSection = horizontalRef.current
      const scrollWidth = horizontalSection.scrollWidth - window.innerWidth

      gsap.to(horizontalSection, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.parentElement,
          start: 'top top',
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const piatti = [
    { img: piatto1, name: 'Casoncelli', desc: 'della tradizione camuna' },
    { img: piatto2, name: 'Tagliatelle', desc: 'con ragù locale' },
    { img: piatto3, name: 'Trota', desc: 'della valle affumicata' },
  ]

  return (
    <section
      id="ristorante"
      ref={sectionRef}
      className="relative bg-[#F5F0E8] overflow-hidden"
    >
      <div className="py-24 md:py-40 px-6 md:px-12">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20 md:mb-32">
          <div className="col-span-12 md:col-span-6">
            <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-8">
              Sapori autentici
            </span>

            <h2
              ref={titleRef}
              className="text-fluid-4xl font-display text-[#1a1714] leading-[0.95]"
            >
              La nostra
              <br />
              <span className="font-accent text-[#C4A35A]">Cucina</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <div>
              <p className="text-fluid-lg text-[#4A3F35] leading-relaxed mb-8">
                Ingredienti dalla natura circostante.
                Cucina tipica locale con vista sulle Alpi.
              </p>

              <a
                href="tel:+393473994451"
                className="inline-flex items-center gap-3 text-[#1a1714] text-fluid-sm font-body tracking-wide link-hover"
              >
                <span className="w-8 h-[1px] bg-current" />
                Prenota +39 347 399 4451
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-7 relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={ristoranteSala}
                alt="Sala ristorante"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-[#1a1714] p-6 md:p-8 max-w-xs">
              <p className="text-fluid-lg font-accent text-[#C4A35A] mb-2">
                "Dal nostro orto
              </p>
              <p className="text-fluid-lg font-accent text-[#F5F0E8]">
                alla vostra tavola"
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-16 md:mt-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={vinoRosso}
                alt="Vino della Valcamonica"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-fluid-sm text-[#6B5D4D]">
              Selezione di vini della Valcamonica
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen overflow-hidden">
        <div
          ref={horizontalRef}
          className="h-full flex items-center gap-8 md:gap-16 px-6 md:px-12"
          style={{ width: 'max-content' }}
        >
          <div className="flex-shrink-0 w-[40vw] md:w-[25vw]">
            <h3 className="text-fluid-3xl font-display text-[#1a1714] mb-4">
              I nostri
              <br />
              <span className="font-accent text-[#C4A35A]">piatti</span>
            </h3>
          </div>

          {piatti.map((piatto, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[70vw] md:w-[40vw] group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={piatto.img}
                  alt={piatto.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-fluid-xl font-display text-[#1a1714]">
                    {piatto.name}
                  </h4>
                  <p className="text-fluid-sm text-[#6B5D4D]">{piatto.desc}</p>
                </div>
                <span className="text-fluid-4xl font-display text-[#1a1714]/10">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-[50vw] md:w-[30vw] bg-[#1a1714] p-8 md:p-12 h-[80%] flex flex-col justify-between">
            <div>
              <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-6">
                Prodotti tipici
              </span>
              <ul className="space-y-3 text-[#F5F0E8]/70 text-fluid-sm">
                <li>Formaggio Silter DOP</li>
                <li>Formaggi di capra</li>
                <li>Vini Valcamonica</li>
                <li>Casoncelli</li>
                <li>Gnocchi verdi</li>
                <li>Minestra d'orzo</li>
              </ul>
            </div>

            <p className="text-fluid-xl font-accent text-[#C4A35A]">
              Km 0
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
