'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    title: 'Recuperação de Créditos',
    description: 'Identificação e aproveitamento de créditos tributários não utilizados — PIS/Cofins, ICMS-ST, IRPJ/CSLL e contribuições previdenciárias. Mapeamos o que a empresa deixou para trás.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Planejamento Tributário',
    description: 'Reestruturação do perfil tributário da empresa para redução lícita da carga fiscal. Análise de regime de tributação, estrutura societária e operacional com plena segurança jurídica.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        <circle cx="11" cy="11" r="3" strokeWidth="1.5"/>
        <path d="M20 20l-3-3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Diagnóstico da Reforma Tributária',
    description: 'Análise do impacto da EC 132/2023, LC 214/2025 e LC 215/2025 no seu setor. Mapeamento das oportunidades do IBS, CBS e IS com recomendações estratégicas de adaptação.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        <path d="M11 8v3l2 2"/>
      </svg>
    ),
    title: 'Levantamento de Oportunidades',
    description: 'Varredura fiscal completa para identificar créditos, benefícios setoriais, regimes especiais e incentivos fiscais aplicáveis ao perfil da empresa. O que pode ser aproveitado agora.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Compliance Tributário',
    description: 'Adequação da empresa às obrigações acessórias e principais com gestão preventiva de riscos. EFD, ECF, SPED e rotinas fiscais sob controle, com monitoramento contínuo de alterações normativas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    ),
    title: 'Contencioso Estratégico',
    description: 'Defesa administrativa e judicial em matéria tributária. Impugnações a autos de infração, recursos ao CARF e Tribunais Administrativos, mandados de segurança e execuções fiscais.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        <path d="M12 14v7"/>
      </svg>
    ),
    title: 'Treinamento para Contabilidades',
    description: 'Capacitação técnica de escritórios de contabilidade parceiros em teses tributárias atuais, oportunidades de recuperação de crédito e impactos da Reforma Tributária. Conhecimento para repassar valor aos seus clientes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: 'Treinamento In Company',
    description: 'Capacitação do setor contábil interno da empresa nas melhores práticas tributárias, novos regimes da Reforma Tributária e identificação ativa de oportunidades fiscais. Equipe interna mais técnica, resultados mais sólidos.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.services-grid', start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="servicos" className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="font-montserrat text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#C9A84C' }}>
              O que fazemos
            </span>
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
          </div>
          <h2 className="font-alexandria font-bold leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1A1A2E' }}>
            Soluções tributárias<br />para cada desafio do seu negócio
          </h2>
        </div>

        {/* Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group opacity-0 rounded-lg p-8 border transition-all duration-300 cursor-default"
              style={{
                borderColor: '#E2E8F0',
                background: '#FFFFFF',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(201,168,76,0.4)'
                el.style.boxShadow = '0 8px 40px rgba(28,43,58,0.10)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#E2E8F0'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Ícone */}
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded"
                style={{ background: 'rgba(201,168,76,0.10)', color: '#C9A84C' }}>
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="font-alexandria font-semibold mb-3"
                style={{ fontSize: '1.05rem', color: '#1A1A2E' }}>
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="font-montserrat leading-relaxed"
                style={{ fontSize: '0.9rem', color: '#64748B' }}>
                {service.description}
              </p>

              {/* Linha dourada no hover */}
              <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
