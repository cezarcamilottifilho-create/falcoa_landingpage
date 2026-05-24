'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const bullets = [
  {
    label: 'Transição já em curso',
    text: 'O IBS e a CBS entram em vigência plena a partir de 2026. O período de adaptação — com créditos de transição disponíveis — é agora.',
  },
  {
    label: 'Regimes diferenciados',
    text: 'Setores de saúde, educação, agronegócio e tecnologia têm tratamentos específicos no IS. Identificar e peticionar esses benefícios exige antecedência.',
  },
  {
    label: 'Janela de oportunidade',
    text: 'Empresas que se antecipam capturam créditos do regime anterior que não estarão disponíveis após o período de transição. O tempo corre.',
  },
]

export default function TaxReform() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reform-headline',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
      gsap.fromTo('.reform-sub',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
      gsap.fromTo('.reform-bullet',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: '.reform-bullets', start: 'top 70%' } }
      )
      gsap.fromTo('.reform-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6,
          scrollTrigger: { trigger: '.reform-bullets', start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="reforma" className="py-24 relative overflow-hidden"
      style={{ background: '#1C2B3A' }}>

      {/* Borda esquerda dourada */}
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C 20%, #C9A84C 80%, transparent)' }} />

      {/* Decoração de fundo */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at right center, #C9A84C 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Esquerda: Headline + subtítulo */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-montserrat text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Reforma Tributária
              </span>
            </div>

            <h2 className="reform-headline font-alexandria font-bold text-white leading-tight mb-6 opacity-0"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              A Reforma Tributária já está em vigor.<br />
              <span style={{ color: '#C9A84C' }}>Sua empresa está preparada?</span>
            </h2>

            <p className="reform-sub font-montserrat text-white/60 leading-relaxed mb-8 opacity-0"
              style={{ fontSize: '1rem' }}>
              A EC 132/2023, a LC 214/2025 e a LC 215/2025 redesenharam o sistema tributário
              brasileiro. Setores inteiros terão sua carga alterada. Há oportunidades expressivas —
              mas também armadilhas para quem não se preparar com antecedência.
            </p>

            {/* Leis referenciadas */}
            <div className="flex flex-wrap gap-3">
              {['EC 132/2023', 'LC 214/2025', 'LC 215/2025'].map((lei) => (
                <span key={lei}
                  className="font-montserrat text-xs font-semibold px-3 py-1.5 rounded"
                  style={{ background: 'rgba(201,168,76,0.15)', color: '#E8C97A', border: '1px solid rgba(201,168,76,0.25)' }}>
                  {lei}
                </span>
              ))}
            </div>
          </div>

          {/* Direita: Bullets + CTA */}
          <div className="reform-bullets">
            <div className="space-y-6 mb-10">
              {bullets.map((bullet, i) => (
                <div key={i} className="reform-bullet opacity-0 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(201,168,76,0.20)', border: '1px solid rgba(201,168,76,0.5)' }}>
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="font-montserrat font-semibold text-[#E8C97A] text-sm block mb-1">
                      {bullet.label}
                    </span>
                    <p className="font-montserrat text-white/55 text-sm leading-relaxed">
                      {bullet.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contato"
              className="reform-cta opacity-0 inline-block px-8 py-4 rounded font-montserrat font-semibold text-[#1C2B3A] text-sm tracking-wide transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', boxShadow: '0 4px 24px rgba(201,168,76,0.30)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(201,168,76,0.50)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(201,168,76,0.30)' }}
            >
              Quero o diagnóstico da Reforma
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
