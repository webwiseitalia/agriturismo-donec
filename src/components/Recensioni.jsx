import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Recensioni() {
  const sectionRef = useRef(null)
  const reviewsRef = useRef(null)
  const counterRef = useRef(null)

  const recensioni = [
    {
      text: "La struttura è fantastica, la vista dalla camera è veramente mozzafiato",
      author: "Marco",
      rating: 10
    },
    {
      text: "Il relax completo si chiama Donec. Un'esperienza indimenticabile",
      author: "Giulia",
      rating: 10
    },
    {
      text: "Proprietari super gentili. Il TOP è la colazione servita in camera",
      author: "Francesco",
      rating: 9
    },
    {
      text: "Una coccola immersi nella natura con un panorama stupendo",
      author: "Elena",
      rating: 10
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reviews = reviewsRef.current.children
      Array.from(reviews).forEach((review, i) => {
        gsap.fromTo(review,
          {
            opacity: 0,
            y: 60,
            rotate: i % 2 === 0 ? -3 : 3
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: review,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      gsap.fromTo(counterRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: counterRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F0E8] py-24 md:py-40 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
        <span
          className="text-[25vw] font-display text-[#1a1714]/[0.02] leading-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          Reviews
        </span>
      </div>

      <div className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7">
            <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A] block mb-6">
              Cosa dicono di noi
            </span>
            <h2 className="text-fluid-4xl font-display text-[#1a1714] leading-[0.95]">
              Le voci
              <br />
              <span className="font-accent text-[#C4A35A] ml-8 md:ml-16">dei nostri ospiti</span>
            </h2>
          </div>

          <div
            ref={counterRef}
            className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-end mt-8 md:mt-0"
          >
            <div className="text-right">
              <span className="text-fluid-hero font-display text-[#1a1714] leading-none block">
                9.3
              </span>
              <span className="text-fluid-sm text-[#6B5D4D] block mt-2">
                su Booking.com
              </span>
              <span className="text-fluid-xs text-[#6B5D4D]/60 block">
                228+ recensioni
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={reviewsRef}
        className="px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-8"
      >
        {recensioni.map((review, i) => (
          <div
            key={i}
            className={`
              relative
              ${i === 0 ? 'col-span-12 md:col-span-6 md:col-start-1' : ''}
              ${i === 1 ? 'col-span-12 md:col-span-5 md:col-start-8 md:-mt-16' : ''}
              ${i === 2 ? 'col-span-12 md:col-span-5 md:col-start-2' : ''}
              ${i === 3 ? 'col-span-12 md:col-span-6 md:col-start-7 md:-mt-12' : ''}
            `}
          >
            <div className={`
              p-8 md:p-10
              ${i % 2 === 0 ? 'bg-[#1a1714]' : 'bg-white border border-[#1a1714]/10'}
            `}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className={`text-xl ${
                      i % 2 === 0 ? 'text-[#C4A35A]' : 'text-[#C4A35A]'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className={`
                text-fluid-lg font-accent leading-relaxed mb-8
                ${i % 2 === 0 ? 'text-[#F5F0E8]' : 'text-[#1a1714]'}
              `}>
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <span className={`
                  text-fluid-sm font-body
                  ${i % 2 === 0 ? 'text-[#F5F0E8]/60' : 'text-[#6B5D4D]'}
                `}>
                  — {review.author}
                </span>
                <span className={`
                  text-fluid-2xl font-display
                  ${i % 2 === 0 ? 'text-[#C4A35A]' : 'text-[#1a1714]/10'}
                `}>
                  {review.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-12 mt-20 md:mt-32">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-[#1a1714]/10 pt-12">
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <span className="text-fluid-3xl font-display text-[#1a1714]">90K</span>
              <span className="block text-fluid-xs text-[#6B5D4D] mt-1">Followers Instagram</span>
            </div>
            <div>
              <span className="text-fluid-3xl font-display text-[#1a1714]">#10</span>
              <span className="block text-fluid-xs text-[#6B5D4D] mt-1">a Ponte di Legno</span>
            </div>
            <div>
              <span className="text-fluid-3xl font-display text-[#1a1714]">9.7</span>
              <span className="block text-fluid-xs text-[#6B5D4D] mt-1">Pulizia</span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/agriturdonec/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[#1a1714] text-fluid-sm font-body tracking-wide group"
          >
            <span className="link-hover">@agriturdonec</span>
            <span className="w-10 h-10 border border-current rounded-full flex items-center justify-center group-hover:bg-[#1a1714] group-hover:text-[#F5F0E8] transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
