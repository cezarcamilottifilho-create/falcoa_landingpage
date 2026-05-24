'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    nome: '', empresa: '', cargo: '', email: '', telefone: '',
    faturamento: '', interesse: '', mensagem: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-text',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo('.contact-form',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: 'expo.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! Gostaria de solicitar um diagnóstico tributário gratuito.\n\n` +
      `Nome: ${formData.nome}\nEmpresa: ${formData.empresa}\nCargo: ${formData.cargo}\n` +
      `E-mail: ${formData.email}\nTelefone: ${formData.telefone}\n` +
      `Faturamento anual: ${formData.faturamento}\nInteresse: ${formData.interesse}\n` +
      (formData.mensagem ? `\nMensagem: ${formData.mensagem}` : '')
    )
    window.open(`https://wa.me/5519999331213?text=${msg}`, '_blank')
  }

  const inputClass = `w-full font-montserrat text-sm px-4 py-3 rounded border bg-transparent text-white placeholder-white/30 outline-none transition-all duration-200`
  const inputStyle = { borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }

  return (
    <section ref={sectionRef} id="contato" className="py-24 relative overflow-hidden"
      style={{ background: '#0D1B29' }}>

      {/* Bloom dourado */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Texto */}
          <div className="contact-text opacity-0">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-montserrat text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Fale com a Falcoa
              </span>
            </div>

            <h2 className="font-alexandria font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              Solicite seu diagnóstico<br />
              <span style={{ color: '#C9A84C' }}>tributário gratuito</span>
            </h2>

            <p className="font-montserrat text-white/55 leading-relaxed mb-10"
              style={{ fontSize: '1rem' }}>
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas para
              agendar uma reunião exploratória sem compromisso. Sem taxa, sem letra miúda.
            </p>

            {/* Contatos diretos */}
            <div className="space-y-4">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
                  label: 'contato@falcoatax.com',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
                  label: '+55 19 99933-1213',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
                  label: 'São Paulo, SP — Atendimento nacional',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[#C9A84C]">{item.icon}</span>
                  <span className="font-montserrat text-white/60 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="contact-form opacity-0">
            <form onSubmit={handleSubmit} className="rounded-lg p-8 space-y-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <input name="nome" value={formData.nome} onChange={handleChange} required
                    placeholder="Nome completo *"
                    className={inputClass} style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>
                <input name="empresa" value={formData.empresa} onChange={handleChange} required
                  placeholder="Empresa *" className={inputClass} style={inputStyle}
                  onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <input name="cargo" value={formData.cargo} onChange={handleChange} required
                  placeholder="Cargo *" className={inputClass} style={inputStyle}
                  onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <input name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="E-mail corporativo *" className={inputClass} style={inputStyle}
                  onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <input name="telefone" type="tel" value={formData.telefone} onChange={handleChange} required
                  placeholder="WhatsApp *" className={inputClass} style={inputStyle}
                  onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <div className="col-span-2">
                  <select name="faturamento" value={formData.faturamento} onChange={handleChange} required
                    className={inputClass} style={{ ...inputStyle, color: formData.faturamento ? 'white' : 'rgba(255,255,255,0.30)' }}>
                    <option value="" disabled>Faturamento anual aproximado *</option>
                    <option value="Até R$ 5M" style={{ background: '#1C2B3A' }}>Até R$ 5 milhões</option>
                    <option value="R$ 5M–R$ 20M" style={{ background: '#1C2B3A' }}>R$ 5M a R$ 20 milhões</option>
                    <option value="R$ 20M–R$ 100M" style={{ background: '#1C2B3A' }}>R$ 20M a R$ 100 milhões</option>
                    <option value="Acima de R$ 100M" style={{ background: '#1C2B3A' }}>Acima de R$ 100 milhões</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <select name="interesse" value={formData.interesse} onChange={handleChange} required
                    className={inputClass} style={{ ...inputStyle, color: formData.interesse ? 'white' : 'rgba(255,255,255,0.30)' }}>
                    <option value="" disabled>Principal interesse *</option>
                    <option value="Recuperação de créditos" style={{ background: '#1C2B3A' }}>Recuperação de créditos</option>
                    <option value="Planejamento tributário" style={{ background: '#1C2B3A' }}>Planejamento tributário</option>
                    <option value="Reforma Tributária" style={{ background: '#1C2B3A' }}>Diagnóstico da Reforma Tributária</option>
                    <option value="Compliance" style={{ background: '#1C2B3A' }}>Compliance tributário</option>
                    <option value="Outro" style={{ background: '#1C2B3A' }}>Outro</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <textarea name="mensagem" value={formData.mensagem} onChange={handleChange}
                    placeholder="Mensagem (opcional)"
                    rows={3}
                    className={`${inputClass} resize-none`} style={inputStyle}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 rounded font-montserrat font-semibold text-[#1C2B3A] text-sm tracking-wide transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', boxShadow: '0 4px 24px rgba(201,168,76,0.30)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(201,168,76,0.50)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(201,168,76,0.30)' }}
              >
                Solicitar diagnóstico gratuito
              </button>

              <p className="font-montserrat text-white/30 text-xs text-center">
                Ao enviar, você concorda com nossa{' '}
                <a href="/privacidade" className="underline hover:text-white/50 transition-colors">
                  Política de Privacidade
                </a>
                . Sem spam, sem compromisso.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
