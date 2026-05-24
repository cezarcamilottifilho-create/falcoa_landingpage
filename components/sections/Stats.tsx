'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Quatro dados de impacto: promessa de entrega, tamanho de mercado,
// complexidade do ambiente e urgência da Reforma.
// Nenhum dado de credencial de equipe — o número fala pelo resultado.
const items = [
  {
    value: '20',
    unit: 'dias',
    category: 'Diagnóstico',
    label: 'para entrega do diagnóstico tributário completo — créditos mapeados, riscos identificados, relatório fundamentado',
    featured: true,   // card de destaque: promessa diferenciadora da Falcoa
    note: 'Prazo contado a partir da entrega da documentação',
  },
  {
    value: 'R$ 250Bi+',
    unit: '',
    category: 'Mercado',
    label: 'em créditos tributários não aproveitados anualmente pelas empresas brasileiras — a oportunidade que a Falcoa mapeia',
    featured: false,
    note: 'Estimativa baseada em dados da Receita Federal e estudos setoriais',
  },
  {
    value: '+12.000',
    unit: '',
    category: 'Complexidade',
    label: 'normas tributárias publicadas por ano no Brasil — um labirinto técnico que exige especialização exclusiva para ser navegado',
    featured: false,
    note: 'Fonte: IBPT — Instituto Brasileiro de Planejamento e Tributação',
  },
  {
    value: '2026',
    unit: '',
    category: 'Reforma Tributária',
    label: 'início da vigência do IBS e do CBS — o prazo para se posicionar estrategicamente é agora',
    featured: false,
    note: 'EC 132/2023 · LC 214/2025 · LC 215/2025',
  },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow
      gsap.fromTo('.stats-eyebrow',
        { y: -16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      )

      // Card destaque (20 dias) — entra primeiro, com impacto maior
      gsap.fromTo('.stat-featured',
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )

      // Três cards de contexto — entram em stagger após o destaque
      gsap.fromTo('.stat-context',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', stagger: 0.13,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 74%' },
          delay: 0.25,
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featuredItem = items.find(it => it.featured)!
  const contextItems = items.filter(it => !it.featured)

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ background: '#1C2B3A' }}
    >
      {/* Linha dourada superior */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45) 20%, rgba(201,168,76,0.45) 80%, transparent)',
      }} />

      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">

        {/* Eyebrow — posicionamento editorial da seção */}
        <div className="stats-eyebrow opacity-0 mb-12 flex items-center gap-4">
          <div className="h-px flex-1 max-w-[40px]" style={{ background: 'rgba(201,168,76,0.4)' }} />
          <span className="font-montserrat text-[10px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: 'rgba(201,168,76,0.65)' }}>
            O que a Falcoa entrega
          </span>
        </div>

        {/* Layout: card destaque (esquerda) + 3 cards de contexto (direita) */}
        <div className="flex flex-col lg:flex-row gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>

          {/* Card destaque — promessa diferenciadora */}
          <div
            className="stat-featured opacity-0 flex flex-col justify-between gap-8 px-10 py-12 lg:w-72 xl:w-80 flex-shrink-0"
            style={{
              background: '#2E4057',
              borderLeft: '3px solid rgba(201,168,76,0.65)',
            }}
          >
            <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(201,168,76,0.8)' }}>
              {featuredItem.category}
            </span>

            <div className="flex flex-col gap-4">
              {/* Valor + unidade em linha, tipografia dominante */}
              <div className="flex items-baseline gap-2">
                <span
                  className="font-alexandria font-bold text-white"
                  style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', lineHeight: 1.0 }}
                >
                  {featuredItem.value}
                </span>
                {featuredItem.unit && (
                  <span className="font-alexandria font-semibold"
                    style={{ color: '#C9A84C', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', paddingBottom: '4px' }}>
                    {featuredItem.unit}
                  </span>
                )}
              </div>

              {/* Traço gold pleno */}
              <div className="h-px w-10" style={{ background: '#C9A84C', opacity: 0.65 }} />

              <p className="font-montserrat text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.62)' }}>
                {featuredItem.label}
              </p>
            </div>

            <span className="font-montserrat text-[10px] tracking-wide"
              style={{ color: 'rgba(201,168,76,0.38)' }}>
              {featuredItem.note}
            </span>
          </div>

          {/* Bloco de contexto — 3 colunas iguais */}
          <div className="flex flex-col sm:flex-row flex-1 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {contextItems.map((item, i) => (
              <div
                key={i}
                className="stat-context opacity-0 flex flex-col gap-4 px-8 py-10 flex-1"
                style={{ background: '#1C2B3A' }}
              >
                {/* Categoria */}
                <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: 'rgba(201,168,76,0.55)' }}>
                  {item.category}
                </span>

                {/* Valor */}
                <span
                  className="font-alexandria font-bold text-white"
                  style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', lineHeight: 1.05 }}
                >
                  {item.value}
                </span>

                {/* Traço separador */}
                <div className="h-px w-8" style={{ background: 'rgba(201,168,76,0.4)' }} />

                {/* Descrição */}
                <p className="font-montserrat text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '220px' }}>
                  {item.label}
                </p>

                {/* Fonte — rodapé sutil */}
                <span className="font-montserrat text-[9px] tracking-wide mt-auto pt-2"
                  style={{ color: 'rgba(201,168,76,0.28)' }}>
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Linha dourada inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45) 20%, rgba(201,168,76,0.45) 80%, transparent)',
      }} />
    </section>
  )
}
