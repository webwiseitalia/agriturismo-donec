import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import cavalliImg from '../assets/foto/foto-31.webp'
import panoramaImg from '../assets/foto/foto-30.webp'
import colazioneImg from '../assets/foto/foto-1.webp'
import logoImg from '../assets/foto/foto-28.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const sectionRef = useRef(null)
  const curtainLeftRef = useRef(null)
  const curtainRightRef = useRef(null)
  const heroImageRef = useRef(null)
  const titleRef = useRef(null)
  const floatingImg1Ref = useRef(null)
  const floatingImg2Ref = useRef(null)
  const counterRefs = useRef([])
  const textBlocksRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Curtain reveal effect
      const curtainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1.2
        }
      })

      curtainTl
        .fromTo(curtainLeftRef.current,
          { xPercent: 0 },
          { xPercent: -100, ease: 'power2.inOut' },
          0
        )
        .fromTo(curtainRightRef.current,
          { xPercent: 0 },
          { xPercent: 100, ease: 'power2.inOut' },
          0
        )
        .fromTo(heroImageRef.current,
          { scale: 1.4 },
          { scale: 1, ease: 'power2.out' },
          0
        )

      // Title animation
      const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
      gsap.fromTo(titleSplit.chars,
        { y: 120, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power4.out',
          stagger: { amount: 0.8, from: 'start' },
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Floating images parallax
      gsap.to(floatingImg1Ref.current, {
        y: -80,
        rotation: -5,
        scrollTrigger: {
          trigger: floatingImg1Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      })

      gsap.to(floatingImg2Ref.current, {
        y: 60,
        rotation: 3,
        scrollTrigger: {
          trigger: floatingImg2Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      // Counter animation
      counterRefs.current.forEach((counter) => {
        if (!counter) return
        const target = parseInt(counter.dataset.target)
        const suffix = counter.dataset.suffix || ''

        gsap.fromTo(counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            onUpdate: function() {
              counter.innerText = Math.round(this.targets()[0].innerText) + suffix
            }
          }
        )
      })

      // Text blocks staggered reveal
      const blocks = textBlocksRef.current?.querySelectorAll('.text-block')
      blocks?.forEach((block, i) => {
        gsap.fromTo(block,
          {
            y: 100,
            opacity: 0,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
          },
          {
            y: 0,
            opacity: 1,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.15
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="chi-siamo"
      ref={sectionRef}
      className="relative bg-[#0a0908] text-[#F5F0E8] overflow-hidden"
    >
      {/* Curtain Reveal Hero */}
      <div className="relative h-[100vh] overflow-hidden">
        {/* Main Image Behind Curtains */}
        <div className="absolute inset-0">
          <img
            ref={heroImageRef}
            src={cavalliImg}
            alt="I cavalli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0908]/40" />
        </div>

        {/* Curtains */}
        <div
          ref={curtainLeftRef}
          className="absolute top-0 left-0 w-1/2 h-full bg-[#0a0908] z-10"
        />
        <div
          ref={curtainRightRef}
          className="absolute top-0 right-0 w-1/2 h-full bg-[#0a0908] z-10"
        />

        {/* Centered Title Over Image */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <div className="text-center">
            <span className="text-fluid-xs font-body tracking-[0.5em] uppercase text-[#C4A35A] block mb-6 opacity-80">
              Il signore del luogo
            </span>
            <h2
              ref={titleRef}
              className="text-fluid-hero font-display leading-[0.85]"
              style={{ perspective: '1000px' }}
            >
              Donec
            </h2>
            <p className="mt-8 text-fluid-lg font-accent text-[#C4A35A] italic">
              dal latino antico
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C4A35A] to-transparent animate-pulse" />
        </div>
      </div>

      {/* Collage Section */}
      <div className="relative py-32 md:py-48">
        {/* Background Large Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none hidden lg:block">
          <span
            className="text-[30vw] font-display text-[#F5F0E8]/[0.02] leading-none whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            Storia
          </span>
        </div>

        <div className="relative px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">

            {/* Left Column - Floating Images */}
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="relative h-[80vh] lg:h-[120vh]">
                {/* Main floating image */}
                <div
                  ref={floatingImg1Ref}
                  className="absolute top-0 left-0 w-[80%] aspect-[3/4] z-10"
                >
                  <img
                    src={panoramaImg}
                    alt="Panorama"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C4A35A]/20 -z-10" />
                </div>

                {/* Secondary floating image */}
                <div
                  ref={floatingImg2Ref}
                  className="absolute bottom-0 right-0 w-[60%] aspect-square z-20"
                >
                  <img
                    src={colazioneImg}
                    alt="Colazione"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Logo watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 z-0">
                  <img src={logoImg} alt="" className="w-48 h-48 invert" />
                </div>
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div
              ref={textBlocksRef}
              className="col-span-12 lg:col-span-6 lg:col-start-7 pt-12 lg:pt-32"
            >
              <div className="text-block mb-16">
                <p className="text-fluid-2xl font-display leading-tight mb-4">
                  Il nome deriva dall'antico termine latino che indicava il
                </p>
                <p className="text-fluid-3xl font-accent text-[#C4A35A] leading-none">
                  "signore del luogo"
                </p>
              </div>

              <div className="text-block mb-16 ml-0 md:ml-16">
                <p className="text-fluid-lg text-[#F5F0E8]/70 leading-relaxed">
                  È questo spirito che abbiamo voluto portare qui:
                  farvi sentire padroni di un angolo di paradiso alpino,
                  dove il tempo assume un ritmo diverso.
                </p>
              </div>

              <div className="text-block mb-16">
                <p className="text-fluid-lg text-[#F5F0E8]/70 leading-relaxed">
                  Situati a <strong className="text-[#F5F0E8]">Villa Dalegno</strong>,
                  a soli 10 minuti a piedi da Ponte di Legno,
                  offriamo un'esperienza dove design contemporaneo
                  e tradizione montana si fondono.
                </p>
              </div>

              {/* Quote */}
              <div className="text-block relative mt-24 md:mt-32 p-8 md:p-12 bg-[#F5F0E8]/[0.03]">
                <span className="absolute -top-12 left-8 text-[10rem] font-display text-[#C4A35A]/10 leading-none">
                  "
                </span>
                <blockquote className="text-fluid-xl font-accent text-[#F5F0E8] italic leading-relaxed">
                  Recuperare se stessi, circondati dalla bellezza delle Alpi.
                </blockquote>
                <cite className="block mt-6 text-fluid-sm text-[#C4A35A] not-italic tracking-wide">
                  — La nostra filosofia
                </cite>
              </div>

              {/* Counters */}
              <div className="text-block mt-20 grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center md:text-left">
                  <span
                    ref={el => counterRefs.current[0] = el}
                    data-target="90"
                    data-suffix="K"
                    className="text-fluid-4xl font-display text-[#C4A35A] block"
                  >
                    0
                  </span>
                  <span className="text-fluid-xs text-[#F5F0E8]/40 uppercase tracking-wider">
                    Followers
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span
                    ref={el => counterRefs.current[1] = el}
                    data-target="9"
                    data-suffix=".3"
                    className="text-fluid-4xl font-display text-[#C4A35A] block"
                  >
                    0
                  </span>
                  <span className="text-fluid-xs text-[#F5F0E8]/40 uppercase tracking-wider">
                    Booking
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span
                    ref={el => counterRefs.current[2] = el}
                    data-target="100"
                    data-suffix="%"
                    className="text-fluid-4xl font-display text-[#C4A35A] block"
                  >
                    0
                  </span>
                  <span className="text-fluid-xs text-[#F5F0E8]/40 uppercase tracking-wider">
                    Green
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A35A]/30 to-transparent" />
      </div>
    </section>
  )
}
