'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Diagnóstico inicial',
    description: 'Reunião exploratória gratuita para entender o perfil tributário da empresa — setor, regime de tributação, histórico de obrigações e pontos de atenção identificados pelo cliente.',
  },
  {
    number: '02',
    title: 'Mapeamento',
    description: 'Análise documental e fiscal detalhada: EFD, ECF, SPED, DARFs e obrigações acessórias. Cruzamento de dados para identificar inconsistências, créditos não aproveitados e riscos latentes.',
  },
  {
    number: '03',
    title: 'Relatório de oportunidades',
    description: 'Entrega de parecer técnico com créditos identificados, riscos mensurados e recomendações priorizadas. O cliente vê exatamente quanto pode recuperar e o que precisa ser corrigido.',
  },
  {
    number: '04',
    title: 'Execução',
    description: 'Implementação das teses aprovadas, acompanhamento processual e monitoramento de resultados. A Falcoa permanece ao lado do cliente durante todo o ciclo de aproveitamento.',
  },
]

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Linha da timeline "desenha" da esquerda para a direita
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 2.0, ease: 'power3.inOut',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      )

      // Cada step aparece em sequência
      gsap.fromTo('.method-step',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="metodologia" className="py-24" style={{ background: '#F4F5F7' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="font-montserrat text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#C9A84C' }}>
              Como trabalhamos
            </span>
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
          </div>
          <h2 className="font-alexandria font-bold leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1A1A2E' }}>
            Um processo estruturado,<br />do diagnóstico à execução
          </h2>
        </div>

        {/* Timeline desktop */}
        <div className="hidden lg:block">
          {/* Linha horizontal */}
          <div className="relative mb-12">
            <div className="h-px w-full" style={{ background: '#E2E8F0' }} />
            <div ref={lineRef} className="absolute top-0 left-0 h-px w-full"
              style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A)', transformOrigin: 'left' }} />
          </div>

          {/* Steps em linha */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="method-step opacity-0 relative">
                {/* Ponto na linha */}
                <div className="absolute -top-[52px] left-0 w-5 h-5 rounded-full border-2 border-[#C9A84C] bg-[#F4F5F7]"
                  style={{ boxShadow: '0 0 0 4px rgba(201,168,76,0.15)' }} />

                <span className="font-alexandria font-bold text-[#C9A84C] text-3xl block mb-3">
                  {step.number}
                </span>
                <h3 className="font-alexandria font-semibold mb-3"
                  style={{ fontSize: '1.05rem', color: '#1A1A2E' }}>
                  {step.title}
                </h3>
                <p className="font-montserrat leading-relaxed"
                  style={{ fontSize: '0.88rem', color: '#64748B' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline mobile — vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="method-step opacity-0 flex gap-6">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] flex items-center justify-center"
                  style={{ background: '#F4F5F7' }}>
                  <span className="font-alexandria font-bold text-[#C9A84C] text-sm">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px mt-2" style={{ background: '#C9A84C', opacity: 0.3 }} />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-alexandria font-semibold mb-2"
                  style={{ fontSize: '1.05rem', color: '#1A1A2E' }}>
                  {step.title}
                </h3>
                <p className="font-montserrat leading-relaxed"
                  style={{ fontSize: '0.9rem', color: '#64748B' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
