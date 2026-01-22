import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import chaletVista from '../assets/foto/foto-34.webp'
import chaletInterno from '../assets/foto/foto-21.webp'
import idromassaggio from '../assets/foto/foto-11.webp'
import sauna from '../assets/foto/foto-13.webp'
import saunaAcc from '../assets/foto/foto-14.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChaletEtoile() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const marqueeRef = useRef(null)
  const galleryRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(titleRef.current, { types: 'chars' })

      gsap.set(titleSplit.chars, { y: 150, opacity: 0, rotate: 10 })

      gsap.to(titleSplit.chars, {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.7,
        ease: 'power4.out',
        stagger: { amount: 0.4, from: 'random' },
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      })

      const images = galleryRef.current.querySelectorAll('.gallery-item')
      images.forEach((img, i) => {
        gsap.fromTo(img,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            scale: 1.2
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            scale: 1,
            duration: 0.8,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.08
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chalet"
      ref={sectionRef}
      className="relative bg-[#1a1714] text-[#F5F0E8] overflow-hidden py-32 md:py-48"
    >
      <div className="relative mb-16 md:mb-24 overflow-hidden">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[20vw] font-display text-[#F5F0E8]/[0.03] leading-none mx-8"
            >
              Chalet Étoile •
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-6 md:mb-8">
              Esperienza esclusiva
            </span>

            <h2
              ref={titleRef}
              className="text-fluid-5xl md:text-fluid-hero font-display leading-[0.85]"
            >
              Chalet
              <br />
              <span className="font-accent text-[#C4A35A] ml-[10%]">Étoile</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-0 flex items-end">
            <p className="text-fluid-lg text-[#F5F0E8]/70 leading-relaxed">
              Dormite sotto le stelle con una vista che toglie il fiato.
              Privacy totale, a 10 minuti da Ponte di Legno.
            </p>
          </div>
        </div>
      </div>

      <div ref={galleryRef} className="relative">
        <div className="grid grid-cols-12 gap-4 md:gap-6 px-6 md:px-12">
          <div className="gallery-item col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden">
            <img
              src={chaletVista}
              alt="Vista dallo Chalet"
              title="Vista panoramica dallo Chalet Étoile"
              loading="lazy"
              width={1600}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="gallery-item col-span-12 md:col-span-4 md:col-start-9 aspect-[3/4] overflow-hidden md:-mt-24">
            <img
              src={chaletInterno}
              alt="Interno Chalet"
              title="Interno lussuoso dello Chalet Étoile"
              loading="lazy"
              width={800}
              height={1067}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="gallery-item col-span-6 md:col-span-3 md:col-start-2 aspect-square overflow-hidden md:-mt-16">
            <img
              src={idromassaggio}
              alt="Idromassaggio"
              title="Idromassaggio esterno con vista panoramica"
              loading="lazy"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="gallery-item col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden">
            <img
              src={sauna}
              alt="Sauna panoramica"
              title="Sauna vetrata con vista sulle montagne"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="gallery-item col-span-12 md:col-span-3 aspect-[3/4] overflow-hidden md:mt-12">
            <img
              src={saunaAcc}
              alt="Dettagli sauna"
              title="Accessori e dettagli della sauna"
              loading="lazy"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <span
            className="text-[15vw] font-display text-[#C4A35A]/5 leading-none"
            style={{ writingMode: 'vertical-rl' }}
          >
            Wellness
          </span>
        </div>
      </div>

      <div className="px-6 md:px-12 mt-20 md:mt-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                { title: 'Idromassaggio', desc: 'Esterno con vista panoramica' },
                { title: 'Sauna', desc: 'Vetrata sulle montagne' },
                { title: 'Tinozza', desc: 'Riscaldata a legna' },
                { title: 'Privacy', desc: 'Riservatezza totale' },
              ].map((item, i) => (
                <div key={i} className="border-t border-[#F5F0E8]/10 pt-4">
                  <h4 className="text-fluid-lg font-display text-[#F5F0E8] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-fluid-sm text-[#F5F0E8]/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <blockquote className="relative">
              <span className="absolute -top-6 -left-4 text-[6rem] font-display text-[#C4A35A]/10 leading-none">"</span>
              <p className="text-fluid-xl font-accent text-[#F5F0E8] leading-relaxed pl-6 border-l border-[#C4A35A]">
                Un'esperienza indimenticabile andare a dormire con le stelle
              </p>
              <cite className="block mt-4 pl-6 text-fluid-sm text-[#F5F0E8]/50 not-italic">
                — Ospite su Booking.com
              </cite>
            </blockquote>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center gap-3 bg-[#C4A35A] text-[#1a1714] px-8 py-4 text-fluid-sm font-body tracking-wide hover:bg-[#F5F0E8] transition-colors duration-300"
              >
                Richiedi preventivo
              </a>
              <a
                href="https://wa.me/393757140148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#F5F0E8]/20 text-[#F5F0E8] px-8 py-4 text-fluid-sm font-body tracking-wide hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
