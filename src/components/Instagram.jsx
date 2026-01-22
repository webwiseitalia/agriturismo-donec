import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Instagram() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const eventRef = useRef(null)

  // Post Instagram - sostituisci con le tue immagini
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      link: 'https://www.instagram.com/agriturdonec/',
      likes: '2.4K'
    },
    {
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop',
      link: 'https://www.instagram.com/agriturdonec/',
      likes: '1.8K'
    },
    {
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop',
      link: 'https://www.instagram.com/agriturdonec/',
      likes: '3.1K'
    },
    {
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&h=600&fit=crop',
      link: 'https://www.instagram.com/agriturdonec/',
      likes: '2.9K'
    },
    {
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop',
      link: 'https://www.instagram.com/agriturdonec/',
      likes: '1.5K'
    },
    {
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=600&fit=crop',
      link: 'https://www.instagram.com/agriturdonec/',
      likes: '2.2K'
    }
  ]

  // Evento in evidenza - collegabile via CMS
  const evento = {
    titolo: 'Cena sotto le Stelle',
    data: '15 Febbraio 2025',
    descrizione: 'Una serata magica con menù degustazione e i migliori vini locali, accompagnati dalla vista mozzafiato delle Alpi illuminate.',
    immagine: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    link: '#'
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animazione titolo
      gsap.fromTo(titleRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animazione griglia post
      const posts = gridRef.current.children
      Array.from(posts).forEach((post, i) => {
        gsap.fromTo(post,
          {
            y: 60,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: post,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.08
          }
        )
      })

      // Animazione evento
      gsap.fromTo(eventRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: eventRef.current,
            start: 'top 85%',
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
      id="instagram"
      className="relative bg-[#1a1714] py-24 md:py-40 overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#C4A35A] to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-[#C4A35A] to-transparent blur-3xl" />
      </div>

      {/* Header sezione */}
      <div className="relative px-6 md:px-12 mb-16 md:mb-24">
        <div ref={titleRef} className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </div>
              <span className="text-fluid-xs font-body tracking-[0.3em] uppercase text-[#C4A35A]">
                @agriturdonec
              </span>
            </div>
            <h2 className="text-fluid-4xl md:text-fluid-5xl font-display text-[#F5F0E8] leading-[0.95]">
              Seguici su
              <br />
              <span className="font-accent text-[#C4A35A]">Instagram</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 flex md:justify-end mt-6 md:mt-0">
            <div className="text-left md:text-right">
              <span className="text-fluid-hero font-display text-[#F5F0E8] leading-none block">
                90K
              </span>
              <span className="text-fluid-sm text-[#F5F0E8]/60 block mt-2">
                Followers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Griglia principale: Post + Evento */}
      <div className="relative px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-8">

          {/* Griglia Post Instagram - 2 colonne su mobile, 3 su desktop */}
          <div className="col-span-12 lg:col-span-8">
            <div
              ref={gridRef}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            >
              {posts.map((post, i) => (
                <a
                  key={i}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden bg-[#2a2520]"
                >
                  <img
                    src={post.image}
                    alt={`Post Instagram ${i + 1}`}
                    title={`Post Instagram Agriturismo Donec - ${post.likes} likes`}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm font-body">{post.likes}</span>
                    </div>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </div>

                  {/* Bordo gradient su hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C4A35A]/50 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Segui */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/agriturdonec/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-body tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#e6683c]/30"
              >
                <span>Segui @agriturdonec</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card Evento in Evidenza */}
          <div
            ref={eventRef}
            className="col-span-12 lg:col-span-4 mt-8 lg:mt-0"
          >
            <div className="relative h-full min-h-[500px] lg:min-h-0 bg-[#F5F0E8] overflow-hidden group">
              {/* Badge Evento */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4A35A] text-[#1a1714] text-xs font-body tracking-[0.2em] uppercase">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Evento
                </span>
              </div>

              {/* Immagine evento */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={evento.immagine}
                  alt={evento.titolo}
                  title={`Evento: ${evento.titolo} - ${evento.data} - Agriturismo Donec`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-transparent to-transparent" />
              </div>

              {/* Contenuto evento */}
              <div className="p-6 lg:p-8">
                <span className="text-fluid-xs font-body tracking-[0.2em] uppercase text-[#C4A35A] block mb-3">
                  {evento.data}
                </span>
                <h3 className="text-fluid-xl font-display text-[#1a1714] mb-4 leading-tight">
                  {evento.titolo}
                </h3>
                <p className="text-fluid-sm font-body text-[#6B5D4D] leading-relaxed mb-6">
                  {evento.descrizione}
                </p>

                <a
                  href={evento.link}
                  className="inline-flex items-center gap-3 text-[#1a1714] font-body tracking-wide group/link"
                >
                  <span className="link-hover">Scopri di più</span>
                  <span className="w-8 h-8 border border-[#1a1714] rounded-full flex items-center justify-center group-hover/link:bg-[#1a1714] group-hover/link:text-[#F5F0E8] transition-colors duration-300">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Decorazione angolo */}
              <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C4A35A]/10 rotate-45 translate-x-16 translate-y-16" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hashtag decorativi */}
      <div className="relative px-6 md:px-12 mt-16 md:mt-24">
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
          {['#agriturismo', '#pontedilegno', '#adamello', '#valcamonica', '#trentino', '#alpinestyle'].map((tag, i) => (
            <span
              key={i}
              className="text-fluid-sm font-body text-[#F5F0E8]/30 hover:text-[#C4A35A] transition-colors duration-300 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
