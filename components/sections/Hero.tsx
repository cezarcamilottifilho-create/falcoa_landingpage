'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef    = useRef<HTMLElement>(null)
  const logoZoneRef   = useRef<HTMLDivElement>(null)
  const separatorRef  = useRef<HTMLDivElement>(null)
  const headlineRef   = useRef<HTMLHeadingElement>(null)
  const subtitleRef   = useRef<HTMLParagraphElement>(null)
  const ctasRef       = useRef<HTMLDivElement>(null)
  const scrollRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── ZONA 1: Logo entra de cima ────────────────────────────────────
      gsap.fromTo(logoZoneRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.1 }
      )

      // ── Separador: desenha da esquerda para a direita ─────────────────
      gsap.fromTo(separatorRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'expo.out', delay: 0.8 }
      )

      // ── ZONA 2: Headline word-split ───────────────────────────────────
      if (headlineRef.current) {
        const words = (headlineRef.current.textContent || '').split(' ')
        headlineRef.current.innerHTML = words
          .map(w =>
            `<span class="word inline-block overflow-hidden"><span class="word-inner inline-block">${w}</span></span>`
          )
          .join(' ')

        gsap.fromTo('.hero-headline .word-inner',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.08, delay: 0.9 }
        )
      }

      // ── Subtítulo ──────────────────────────────────────────────────────
      gsap.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 1.5 }
      )

      // ── CTAs ──────────────────────────────────────────────────────────
      gsap.fromTo(ctasRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.9 }
      )

      // ── Scroll indicator yoyo ─────────────────────────────────────────
      if (scrollRef.current) {
        gsap.to('.scroll-chevron', {
          y: 8, duration: 0.9, ease: 'power2.inOut', yoyo: true, repeat: -1,
        })
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '30% top',
          onUpdate: (self) => {
            gsap.to(scrollRef.current, { opacity: 1 - self.progress * 3, duration: 0.1 })
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#0D1B29' }}
    >
      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND LAYERS
      ══════════════════════════════════════════════════════════════════ */}

      {/* Layer 1: Gradiente radial central */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 45%, #1e3a52 0%, #0D1B29 65%)',
      }} />

      {/* Layer 2: Bloom dourado atrás do logo */}
      <div className="absolute pointer-events-none" style={{
        width: '1100px', height: '400px',
        top: '15%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.10) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      {/* Layer 3: Vinheta nas bordas */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 120% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* Layer 4: Noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none" aria-hidden>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Layer 5: Linhas diagonais em ouro */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="diagonal-lines" x="0" y="0" width="60" height="60"
            patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="#C9A84C" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
      </svg>

      {/* Layer 6: Barra dourada no topo */}
      <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none" style={{
        background: 'linear-gradient(90deg, transparent 0%, #C9A84C 30%, #E8C97A 50%, #C9A84C 70%, transparent 100%)',
        opacity: 0.7,
      }} />

      {/* Layer 7: Arco decorativo inferior esquerdo */}
      <svg className="absolute bottom-0 left-0 pointer-events-none opacity-[0.08]"
        width="420" height="420" viewBox="0 0 420 420" aria-hidden>
        <circle cx="0" cy="420" r="380" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="0" cy="420" r="280" fill="none" stroke="#C9A84C" strokeWidth="0.8" />
        <circle cx="0" cy="420" r="180" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      </svg>

      {/* Layer 8: Arco decorativo superior direito */}
      <svg className="absolute top-0 right-0 pointer-events-none opacity-[0.06]"
        width="360" height="360" viewBox="0 0 360 360" aria-hidden>
        <circle cx="360" cy="0" r="320" fill="none" stroke="#C9A84C" strokeWidth="1" />
        <circle cx="360" cy="0" r="220" fill="none" stroke="#C9A84C" strokeWidth="0.6" />
      </svg>

      {/* Layer 9: Pontos dourados */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]" aria-hidden>
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#C9A84C" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* ══════════════════════════════════════════════════════════════════
          ZONA 1 — LOGO SOBERANO
          O logo tem seu próprio espaço, fora de qualquer max-width.
          Pode ocupar até 90vw sem competir com nenhum outro elemento.
      ══════════════════════════════════════════════════════════════════ */}
      <div
        ref={logoZoneRef}
        className="relative z-10 w-full flex items-center justify-center opacity-0"
        style={{
          paddingTop: 'clamp(40px, 7vh, 80px)',
          paddingBottom: 'clamp(32px, 5vh, 60px)',
        }}
      >
        <Image
          src="/logo-falcoa-h.png"
          alt="Falcoa Inteligência Tributária"
          width={3905}
          height={692}
          priority
          style={{
            width: 'min(88vw, 860px)',
            height: 'auto',
            filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.45)) drop-shadow(0 2px 16px rgba(0,0,0,0.6))',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          SEPARADOR — linha dourada expandindo da esquerda
      ══════════════════════════════════════════════════════════════════ */}
      <div
        ref={separatorRef}
        className="relative z-10 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 10%, rgba(201,168,76,0.6) 35%, #C9A84C 50%, rgba(201,168,76,0.6) 65%, rgba(201,168,76,0.2) 90%, transparent 100%)',
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          ZONA 2 — CONTEÚDO
          Badge · Headline · Subtítulo · CTAs
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-1 max-w-4xl mx-auto w-full"
        style={{ paddingTop: 'clamp(28px, 4vh, 52px)', paddingBottom: 'clamp(60px, 8vh, 100px)' }}
      >

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/[0.08]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"
            style={{ boxShadow: '0 0 6px #C9A84C' }}
          />
          <span className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase font-montserrat">
            Consultoria Tributária Estratégica
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="hero-headline font-alexandria font-bold text-white leading-[1.1] tracking-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}
        >
          Sua empresa paga mais imposto do que deveria.
        </h1>

        {/* Linha dourada */}
        <div className="mb-5 h-[2px] w-20" style={{
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }} />

        {/* Subtítulo */}
        <p
          ref={subtitleRef}
          className="font-montserrat text-white/65 max-w-2xl leading-relaxed mb-10 opacity-0"
          style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.15rem)' }}
        >
          A Falcoa mapeia créditos ocultos, elimina riscos fiscais e prepara sua
          empresa para capturar as oportunidades da Reforma Tributária — com rigor
          técnico e clareza estratégica.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 items-center opacity-0">
          <a
            href="#contato"
            className="px-8 py-4 rounded font-montserrat font-semibold text-[#1C2B3A] text-sm tracking-wide transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              backgroundSize: '200% 200%',
              backgroundPosition: '100% 100%',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundPosition = '0% 0%'
              el.style.boxShadow = '0 8px 32px rgba(201,168,76,0.5), 0 0 0 4px rgba(201,168,76,0.15)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundPosition = '100% 100%'
              el.style.boxShadow = '0 4px 24px rgba(201,168,76,0.35)'
            }}
          >
            Solicitar diagnóstico gratuito
          </a>

          <a
            href="#servicos"
            className="group px-8 py-4 rounded font-montserrat font-medium text-white/75 text-sm tracking-wide border border-white/20 hover:border-[#C9A84C]/50 hover:text-white transition-all duration-300"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            Conheça nossos serviços
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Trust */}
        <div className="mt-10 flex items-center gap-3 opacity-40">
          <div className="h-px w-8 bg-white/40" />
          <span className="font-montserrat text-white/60 text-xs tracking-widest uppercase">
            Empresas em todo o Brasil
          </span>
          <div className="h-px w-8 bg-white/40" />
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="font-montserrat text-white/35 text-[10px] tracking-[0.3em] uppercase">Role</span>
        <svg
          className="scroll-chevron w-4 h-4 text-[#C9A84C]/50"
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* ── DIVISOR INFERIOR ─────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(13,27,41,0.6) 60%, #F4F5F7 100%)',
      }} />
    </section>
  )
}
