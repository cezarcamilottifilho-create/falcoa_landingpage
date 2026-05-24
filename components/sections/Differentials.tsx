'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const differentials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'Profundidade técnica',
    description: 'Equipe formada exclusivamente por tributaristas especializados. Cada profissional atua em ramos específicos do direito tributário — sem generalistas, sem risco de orientação superficial.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
    title: 'Visão estratégica',
    description: 'Cada mandato começa com o entendimento do negócio — setor, modelo operacional, estrutura societária. O diagnóstico tributário segue a lógica do negócio, não o inverso.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Transparência total',
    description: 'Honorários claros desde a proposta, escopo definido por escrito e entregas documentadas. O cliente sabe exatamente o que está contratando, o que será entregue e quando.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Monitoramento da Reforma',
    description: 'Acompanhamento contínuo das mudanças do IBS, CBS e IS para antecipar impactos setoriais. A Reforma Tributária é dinâmica — a Falcoa mantém o cliente sempre um passo à frente.',
  },
]

// 5º diferencial — IA como diferenciador estrutural
const aiDifferential = {
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
      <circle cx="12" cy="12" r="2"/>
      <path d="M12 8v1m0 6v1M8 12h1m6 0h1"/>
    </svg>
  ),
  tag: 'Diferencial estrutural',
  title: 'Inteligência Artificial aplicada ao tributário',
  description: 'A Falcoa incorpora IA e sistemas de análise avançada ao núcleo do seu trabalho técnico. Grandes volumes de dados fiscais — EFD, ECF, SPED, DARFs, notas fiscais — são processados com velocidade e precisão que análises manuais não alcançam: padrões de crédito ignorados emergem, riscos latentes são sinalizados antes de virarem autuações e o relatório final chega fundamentado em evidência, não em estimativa.',
  highlights: [
    'Identificação de oportunidades em bases de dados de anos anteriores',
    'Mapeamento de risco com rastreabilidade documental completa',
    'Análises que levariam semanas são concluídas em dias',
  ],
}

export default function Differentials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards do grid 2×2 — alternância diagonal
      gsap.fromTo('.diff-odd',
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.0, ease: 'expo.out', stagger: 0.15,
          scrollTrigger: { trigger: '.diff-grid', start: 'top 72%' },
        }
      )
      gsap.fromTo('.diff-even',
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.0, ease: 'expo.out', stagger: 0.15,
          scrollTrigger: { trigger: '.diff-grid', start: 'top 72%' },
        }
      )

      // Card de IA — entra de baixo com delay, como conclusão dramática
      gsap.fromTo('.diff-ai',
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: '.diff-ai', start: 'top 82%' },
        }
      )

      // Highlights do card de IA em stagger
      gsap.fromTo('.ai-highlight',
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.diff-ai', start: 'top 78%' },
          delay: 0.3,
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="diferenciais" className="py-24 relative overflow-hidden"
      style={{ background: '#1C2B3A' }}>

      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" aria-hidden>
          <defs>
            <pattern id="diff-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#C9A84C"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diff-dots)"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span className="font-montserrat text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
              Por que a Falcoa
            </span>
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="font-alexandria font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
            Cinco razões para escolher<br />uma consultoria de nova geração
          </h2>
        </div>

        {/* Grid 2×2 — quatro diferenciais clássicos */}
        <div className="diff-grid grid md:grid-cols-2 gap-8 mb-8">
          {differentials.map((item, i) => (
            <div
              key={i}
              className={`${i % 2 === 0 ? 'diff-odd' : 'diff-even'} opacity-0 group rounded-lg p-8 border border-white/10 transition-all duration-300`}
              style={{ background: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.35)'
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.06)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.10)'
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0 text-[#C9A84C]">{item.icon}</div>
                <div>
                  <h3 className="font-alexandria font-semibold text-white mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-white/55 leading-relaxed text-[0.93rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card de IA — largura total, tratamento premium */}
        <div
          className="diff-ai opacity-0 rounded-lg border transition-all duration-300 overflow-hidden"
          style={{
            background: 'rgba(201,168,76,0.05)',
            borderColor: 'rgba(201,168,76,0.25)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.5)'
            ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.09)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.25)'
            ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.05)'
          }}
        >
          {/* Faixa dourada superior */}
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.7) 30%, rgba(201,168,76,0.7) 70%, transparent)' }} />

          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:gap-12">

              {/* Coluna esquerda — ícone, tag, título */}
              <div className="flex flex-col gap-4 lg:w-80 xl:w-96 flex-shrink-0 mb-6 lg:mb-0">
                <div className="flex items-center gap-3">
                  <div style={{ color: '#C9A84C' }}>{aiDifferential.icon}</div>
                  <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: 'rgba(201,168,76,0.65)' }}>
                    {aiDifferential.tag}
                  </span>
                </div>
                <h3 className="font-alexandria font-bold text-white"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.2 }}>
                  {aiDifferential.title}
                </h3>
                {/* Traço dourado */}
                <div className="h-px w-12" style={{ background: '#C9A84C', opacity: 0.5 }} />
              </div>

              {/* Coluna direita — descrição + highlights */}
              <div className="flex flex-col gap-6 flex-1">
                <p className="font-montserrat leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.58)', fontSize: '0.95rem' }}>
                  {aiDifferential.description}
                </p>

                {/* Highlights em lista minimalista */}
                <ul className="flex flex-col gap-3">
                  {aiDifferential.highlights.map((h, i) => (
                    <li key={i} className="ai-highlight opacity-0 flex items-start gap-3">
                      {/* Marcador em ouro */}
                      <span className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full"
                        style={{ background: '#C9A84C', opacity: 0.7 }} />
                      <span className="font-montserrat text-sm"
                        style={{ color: 'rgba(255,255,255,0.65)' }}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
