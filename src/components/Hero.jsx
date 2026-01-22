import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import heroImage from '../assets/foto/foto-34.webp'
import colazioneImg from '../assets/foto/foto-1.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const claimRef = useRef(null)
  const imageRef = useRef(null)
  const secondImageRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
      const subtitleSplit = new SplitType(subtitleRef.current, { types: 'chars' })

      gsap.set(titleSplit.chars, { y: 120, opacity: 0, rotateX: -40 })
      gsap.set(subtitleSplit.chars, { y: 40, opacity: 0 })

      const tl = gsap.timeline({ delay: 0.8 })

      tl.to(titleSplit.chars, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: { amount: 0.6, from: 'start' }
      })
      .to(subtitleSplit.chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: { amount: 0.4 }
      }, '-=0.6')
      .fromTo(claimRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(imageRef.current,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.4, ease: 'power4.inOut' },
        '-=1.2'
      )
      .fromTo(secondImageRef.current,
        { y: 100, opacity: 0, scale: 1.1 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(statsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        '-=0.6'
      )

      gsap.to(imageRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      gsap.to(secondImageRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F5F0E8] pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <div className="grid grid-cols-12 gap-4 px-6 md:px-12">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 relative z-10">
          <p className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#6B5D4D] mb-6 md:mb-10">
            Vacanza a Ponte di Legno
          </p>

          <h1
            ref={titleRef}
            className="text-fluid-hero font-display text-[#1a1714] leading-[0.85] mb-8"
            style={{ perspective: '1000px' }}
          >
            Donec
          </h1>

          <p
            ref={subtitleRef}
            className="text-fluid-3xl font-accent text-[#4A3F35] ml-4 md:ml-12 mb-12"
          >
            Agriturismo
          </p>

          <div
            ref={claimRef}
            className="max-w-md ml-0 md:ml-8"
          >
            <p className="text-fluid-xl font-accent text-[#C4A35A] mb-6">
              "Recuperare se stessi"
            </p>
            <p className="text-fluid-base text-[#6B5D4D] leading-relaxed">
              Nel cuore delle Alpi, a 10 minuti da Ponte di Legno.
              Dove il tempo si ferma e la natura vi abbraccia.
            </p>
          </div>

          <div
            ref={statsRef}
            className="flex flex-wrap gap-6 md:gap-10 mt-16 md:mt-24"
          >
            <div className="group">
              <span className="block text-fluid-3xl font-display text-[#1a1714]">90K</span>
              <span className="text-fluid-xs text-[#6B5D4D] tracking-wide">Instagram</span>
            </div>
            <div className="group">
              <span className="block text-fluid-3xl font-display text-[#1a1714]">9.3</span>
              <span className="text-fluid-xs text-[#6B5D4D] tracking-wide">Booking</span>
            </div>
            <div className="group">
              <span className="block text-fluid-3xl font-display text-[#1a1714]">100%</span>
              <span className="text-fluid-xs text-[#6B5D4D] tracking-wide">Green</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-6 relative mt-12 md:mt-0">
          <div
            ref={imageRef}
            className="relative md:absolute md:right-0 md:top-0 md:-mr-12 lg:-mr-24 w-full md:w-[110%] lg:w-[120%] aspect-[3/4] md:aspect-auto md:h-[85vh]"
          >
            <img
              src={heroImage}
              alt="Vista Chalet Étoile"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={secondImageRef}
            className="hidden md:block absolute bottom-12 left-0 md:-left-24 lg:-left-40 w-48 lg:w-64 aspect-[4/5] shadow-2xl"
          >
            <img
              src={colazioneImg}
              alt="Colazione in camera"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#1a1714] text-[#F5F0E8] px-4 py-2">
              <span className="text-fluid-xs font-body tracking-wider">Colazione in camera</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4">
        <span className="block w-12 h-[1px] bg-[#1a1714]" />
        <a
          href="#chi-siamo"
          className="text-fluid-xs tracking-[0.2em] uppercase text-[#1a1714] link-hover"
        >
          Scopri
        </a>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12 text-fluid-xs text-[#6B5D4D] tracking-wider">
        46°15'N 10°30'E
      </div>
    </section>
  )
}
