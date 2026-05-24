import Image from 'next/image'

const navLinks = [
  { label: 'Sobre a Falcoa', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Reforma Tributária', href: '#reforma' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#070F17' }}>
      {/* Linha dourada superior */}
      <div className="h-px w-full" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 20%, rgba(201,168,76,0.5) 80%, transparent)',
      }} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-14">

          {/* Coluna 1: Logo + tagline */}
          <div>
            <Image
              src="/logo-falcoa-h.png"
              alt="Falcoa Inteligência Tributária"
              width={3905}
              height={692}
              style={{ width: '200px', height: 'auto' }}
              className="mb-4 object-contain"
            />
            <p className="font-montserrat text-white/40 text-sm leading-relaxed max-w-xs">
              Consultoria tributária especializada em recuperação de créditos, planejamento
              fiscal e diagnóstico da Reforma Tributária.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-montserrat font-semibold text-white/80 text-xs tracking-widest uppercase mb-6">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="font-montserrat text-white/40 text-sm hover:text-[#C9A84C] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="font-montserrat font-semibold text-white/80 text-xs tracking-widest uppercase mb-6">
              Contato
            </h3>
            <div className="space-y-3">
              <p className="font-montserrat text-white/40 text-sm">contato@falcoatax.com</p>
              <p className="font-montserrat text-white/40 text-sm">+55 19 99933-1213</p>
              <p className="font-montserrat text-white/40 text-sm">São Paulo, SP</p>
              <p className="font-montserrat text-white/30 text-xs mt-2">Atendimento em todo o Brasil</p>
            </div>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-montserrat text-white/40 text-sm hover:text-[#C9A84C] transition-colors duration-200">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-white/25 text-xs">
            © {new Date().getFullYear()} Falcoa Inteligência Tributária. Todos os direitos reservados.
          </p>
          <a href="/privacidade"
            className="font-montserrat text-white/25 text-xs hover:text-white/40 transition-colors duration-200">
            Política de Privacidade (LGPD)
          </a>
        </div>
      </div>
    </footer>
  )
}
