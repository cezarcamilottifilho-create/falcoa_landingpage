'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo('.about-visual',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: 'expo.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sobre" className="py-24" style={{ background: '#F4F5F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div className="about-text opacity-0">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-px w-8" style={{ background: '#C9A84C' }} />
              <span className="font-montserrat text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#C9A84C' }}>
                Sobre a Falcoa
              </span>
            </div>

            <h2 className="font-alexandria font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1A1A2E' }}>
              Mais do que consultoria.<br />
              <span style={{ color: '#1C2B3A' }}>Inteligência a serviço<br />do seu crescimento.</span>
            </h2>

            <div className="space-y-4 font-montserrat leading-relaxed" style={{ color: '#64748B', fontSize: '1.05rem' }}>
              <p>
                A Falcoa nasceu da convicção de que empresas pagam mais imposto do que deveriam —
                não por falta de diligência, mas por ausência de inteligência tributária especializada.
                Somos uma consultoria de nova geração, criada para ir além do cumprimento de obrigações.
              </p>
              <p>
                Nossa equipe é formada exclusivamente por tributaristas especializados. Não há generalistas
                aqui. Cada mandato começa com o entendimento profundo do negócio do cliente — seu setor,
                seu modelo operacional, sua estrutura societária — antes de qualquer análise fiscal.
              </p>
              <p>
                O resultado é um trabalho que entrega o que toda empresa de médio e grande porte precisa:
                <strong style={{ color: '#1C2B3A' }}> clareza, oportunidade e segurança fiscal.</strong>
              </p>
            </div>
          </div>

          {/* Visual / Card de destaque */}
          <div className="about-visual opacity-0">
            <div className="relative rounded-lg overflow-hidden p-8"
              style={{ background: '#1C2B3A', boxShadow: '0 24px 80px rgba(28,43,58,0.25)' }}>

              {/* Accent gold top */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C)' }} />

              <p className="font-alexandria font-semibold text-white leading-snug mb-8"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)' }}>
                "A Falcoa é uma consultoria tributária de nova geração — nascida para ir além do
                cumprimento de obrigações e entregar o que toda empresa precisa: clareza,
                oportunidade e segurança fiscal."
              </p>

              {/* Métricas de confiança */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                {[
                  { n: '100%', label: 'Equipe tributarista' },
                  { n: 'B2B', label: 'Exclusivamente empresas' },
                  { n: 'Nacional', label: 'Atuação em todo o Brasil' },
                  { n: '2024', label: 'Fundação da Falcoa' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="font-alexandria font-bold text-[#C9A84C] text-xl mb-1">{item.n}</div>
                    <div className="font-montserrat text-white/50 text-xs tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
