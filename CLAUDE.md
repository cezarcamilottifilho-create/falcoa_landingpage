# CLAUDE.md — Falcoa Inteligência Tributária · Landing Page

> Este arquivo é a referência canônica do projeto de landing page da Falcoa no Lovable.
> Toda sessão deve começar por aqui. Atualize este documento sempre que uma decisão de projeto for consolidada.

---

## 1. CONTEXTO DA EMPRESA

**Nome:** Falcoa Inteligência Tributária
**Segmento:** Consultoria tributária especializada — B2B
**Público-alvo:** Diretores financeiros, controllers, CEOs e sócios-administradores de empresas de médio e grande porte (faturamento anual acima de R$ 5 milhões), de qualquer setor, com especial atenção a indústria, comércio atacadista, serviços de saúde e tecnologia.
**Proposta de valor central:** A Falcoa entrega inteligência tributária — não apenas conformidade. A empresa alia profundidade técnica ao olhar estratégico, revelando créditos ocultos, eliminando riscos e posicionando o cliente para capturar as oportunidades abertas pela Reforma Tributária (EC 132/2023, LC 214/2025, LC 215/2025).
**Tom de voz:** Autoridade sem arrogância. Precisão técnica com clareza executiva. Direto, denso e confiável. Nunca genérico, nunca informal demais.

---

## 2. IDENTIDADE VISUAL

### 2.1 Paleta de cores

| Token              | Hex       | Uso principal                                   |
|--------------------|-----------|--------------------------------------------------|
| `--falcoa-navy`    | `#1C2B3A` | Fundo primário escuro, navbar, footer, CTAs      |
| `--falcoa-gold`    | `#C9A84C` | Accent do logotipo, ícones, bordas de destaque   |
| `--falcoa-gold-light` | `#E8C97A` | Hover states do gold, gradientes                |
| `--falcoa-slate`   | `#2E4057` | Cards secundários, seção alternada               |
| `--falcoa-gray-bg` | `#F4F5F7` | Fundo de seções claras                           |
| `--falcoa-white`   | `#FFFFFF` | Texto sobre fundo escuro, fundo de cards         |
| `--falcoa-text`    | `#1A1A2E` | Texto principal em fundo claro                   |
| `--falcoa-muted`   | `#64748B` | Texto secundário, labels, captions               |

**Regra de aplicação:** O contraste preferencial é navy escuro com texto branco (seções de impacto) alternado com fundo cinza claro com texto navy (seções informativas). O ouro é usado com parcimônia — exclusivamente para acentos, bordas de destaque e ícones decorativos.

### 2.2 Tipografia

| Fonte        | Papel                             | Pesos utilizados       |
|--------------|-----------------------------------|------------------------|
| **Alexandria** | Headings H1–H3, logotipo         | Regular, SemiBold, Bold |
| **Montserrat** | Body text, botões, labels, UI    | Regular (400), Medium (500), SemiBold (600), Bold (700) |

Ambas as fontes estão disponíveis no Google Fonts. No Lovable, importar via `@import` no CSS global:

```css
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
```

### 2.3 Logotipo

O ícone da Falcoa é um símbolo de asas estilizadas (três faixas horizontais em diagonal, evocando o voo do falcão). Aplicações:
- **Versão completa:** ícone + wordmark "FALCOA" + tagline "INTELIGÊNCIA TRIBUTÁRIA"
- **Versão reduzida:** somente o ícone (uso em favicon, navbar compacta)
- **Fundo escuro:** ícone em ouro + texto em branco
- **Fundo claro:** ícone em ouro + texto em navy

> **ATENÇÃO:** Os arquivos de logo em SVG/PNG devem ser importados manualmente no Lovable via upload de assets. Os arquivos originais estão em `/ARQUIVOS ID VISUAL - Falcoa/EPS/` e `/PDF/`.

### 2.4 Espaçamento e bordas

- Border-radius padrão: `8px` (cards), `4px` (botões e badges)
- Sombras: `box-shadow: 0 4px 24px rgba(28, 43, 58, 0.10)` para cards elevados
- Section padding: `padding: 96px 0` (desktop) / `padding: 64px 0` (mobile)

---

## 3. ARQUITETURA DA LANDING PAGE

A landing page é uma **single-page application** construída em React + TypeScript no Lovable, com âncoras de navegação para cada seção. A ordem das seções obedece à lógica de funil: atenção → interesse → desejo → ação.

### Seção 01 — HERO
**Objetivo:** Capturar atenção imediata e comunicar o posicionamento em < 5 segundos.
**Layout:** Fullscreen (100vh), fundo navy (`#1C2B3A`), logo centralizado ou alinhado à esquerda, headline grande, subtítulo, dois CTAs.
**Conteúdo sugerido:**
- H1: `"Sua empresa paga mais imposto do que deveria."` ou `"Inteligência tributária que transforma obrigação em vantagem competitiva."`
- Subtítulo: `"A Falcoa mapeia créditos ocultos, reduz riscos e prepara sua empresa para a Reforma Tributária — com rigor técnico e clareza estratégica."`
- CTA primário: `"Solicitar diagnóstico gratuito"` → âncora para formulário de contato
- CTA secundário: `"Conheça nossos serviços"` → âncora para seção de serviços
- Elemento visual: imagem abstrata de precisão/voo (opcional) ou padrão geométrico sutil em ouro

### Seção 02 — NÚMEROS / PROVA SOCIAL
**Objetivo:** Estabelecer credibilidade imediata com dados concretos.
**Layout:** Faixa horizontal (background navy ou slate), 3–4 stat cards em linha.
**Conteúdo sugerido (placeholders — substituir por dados reais):**
- `R$ [X] milhões` em créditos recuperados
- `[X]+` empresas atendidas
- `[X] anos` de experiência combinada da equipe
- `[X]%` de aproveitamento médio nos processos

> **NOTA DE DESENVOLVIMENTO:** Se os números reais não estiverem disponíveis no lançamento, substituir por diferenciais qualitativos ou remover a seção até ter dados.

### Seção 03 — SOBRE A FALCOA
**Objetivo:** Humanizar a empresa e consolidar o posicionamento.
**Layout:** Duas colunas (texto à esquerda, imagem/visual à direita), fundo cinza claro.
**Conteúdo sugerido:**
- Título: `"Mais do que consultoria. Inteligência a serviço do seu crescimento."`
- Corpo (2–3 parágrafos): origem da empresa, filosofia, diferencial humano e técnico, menção à equipe de tributaristas especializados.
- Destaque: `"A Falcoa é uma consultoria tributária de nova geração — nascida para ir além do cumprimento de obrigações e entregar o que toda empresa precisa: clareza, oportunidade e segurança fiscal."`

### Seção 04 — SERVIÇOS
**Objetivo:** Detalhar o portfólio de forma objetiva e orientada ao benefício.
**Layout:** Grid de cards (3 colunas no desktop, 1 no mobile), fundo branco.
**Cards de serviço:**

| Serviço | Ícone sugerido | Descrição resumida |
|---|---|---|
| **Recuperação de Créditos** | Seta para cima / moeda | Identificação e aproveitamento de créditos tributários não utilizados — PIS/Cofins, ICMS-ST, IRPJ/CSLL e outros. |
| **Planejamento Tributário** | Organograma / rota | Reestruturação do perfil tributário da empresa para redução lícita da carga fiscal, com segurança jurídica. |
| **Diagnóstico da Reforma Tributária** | Lupa / documento | Análise do impacto da EC 132/2023, LC 214/2025 e LC 215/2025 no seu setor — oportunidades e riscos mapeados. |
| **Levantamento de Oportunidades** | Mapa / radar | Varredura fiscal completa para identificar créditos, benefícios setoriais, regimes especiais e incentivos fiscais aplicáveis. |
| **Compliance Tributário** | Escudo / check | Adequação da empresa às obrigações acessórias e principais, com gestão preventiva de riscos de autuação. |
| **Contencioso Estratégico** | Balança / gavel | Defesa administrativa e judicial em matéria tributária — impugnações, recursos ao CARF e mandados de segurança. |

### Seção 05 — DIFERENCIAIS / POR QUE A FALCOA
**Objetivo:** Superar objeções e consolidar a escolha.
**Layout:** Fundo navy, ícones em ouro, lista de 4 diferenciais em grid 2×2.
**Conteúdo sugerido:**
1. **Profundidade técnica** — Equipe especializada exclusivamente em direito tributário. Nenhum generalista.
2. **Visão estratégica** — Cada trabalho começa com o entendimento do negócio, não apenas dos tributos.
3. **Transparência total** — Honorários claros, escopo definido, entregas documentadas.
4. **Acompanhamento da Reforma** — Monitoramento contínuo das mudanças do IBS, CBS e IS para antecipar impactos no seu setor.

### Seção 06 — METODOLOGIA / COMO FUNCIONA
**Objetivo:** Reduzir a fricção de contratar ao mostrar que o processo é simples e estruturado.
**Layout:** Timeline horizontal (desktop) / vertical (mobile), fundo cinza claro.
**Etapas:**
1. **Diagnóstico inicial** — Reunião exploratória gratuita para entender o perfil tributário da empresa.
2. **Mapeamento** — Análise documental e fiscal detalhada: EFD, ECF, SPED, DARFs e obrigações acessórias.
3. **Relatório de oportunidades** — Entrega de parecer técnico com créditos identificados, riscos e recomendações prioritárias.
4. **Execução** — Implementação das teses aprovadas, acompanhamento processual e monitoramento de resultados.

### Seção 07 — REFORMA TRIBUTÁRIA (DESTAQUE ESPECIAL)
**Objetivo:** Capitalizar o momento único da maior reforma fiscal do Brasil para gerar urgência qualificada.
**Layout:** Fundo navy com accent em ouro, headline impactante, 3 pontos de atenção.
**Conteúdo sugerido:**
- Título: `"A Reforma Tributária já está em vigor. Sua empresa está preparada?"`
- Subtítulo: `"A EC 132/2023, a LC 214/2025 e a LC 215/2025 redesenharam o sistema tributário brasileiro. Setores inteiros terão sua carga alterada. Há oportunidades — mas também armadilhas."`
- 3 bullets de urgência:
  - `"IBS e CBS entram em transição a partir de 2026 — o período de adaptação é agora."`
  - `"Regimes diferenciados e benefícios do IS devem ser pleiteados com antecedência."`
  - `"Empresas que se antecipam capturam créditos de transição que não estarão disponíveis mais tarde."`
- CTA: `"Quero o diagnóstico da Reforma para minha empresa"`

### Seção 08 — DEPOIMENTOS / CASES (opcional para lançamento)
**Objetivo:** Prova social qualificada.
**Layout:** Carrossel ou grid de 3 cards, fundo branco.
**Conteúdo:** Depoimentos reais de clientes (nome, cargo, empresa, setor). Placeholder até coleta.

### Seção 09 — CTA FINAL / FORMULÁRIO DE CONTATO
**Objetivo:** Converter o visitante em lead qualificado.
**Layout:** Fundo navy, formulário centralizado (ou 2 colunas: texto + form).
**Campos do formulário:**
- Nome completo (obrigatório)
- Empresa (obrigatório)
- Cargo (obrigatório)
- E-mail corporativo (obrigatório)
- Telefone / WhatsApp (obrigatório)
- Faturamento anual aproximado (dropdown): Até R$ 5M / R$ 5M–R$ 20M / R$ 20M–R$ 100M / Acima de R$ 100M
- Principal interesse (dropdown): Recuperação de créditos / Planejamento tributário / Reforma Tributária / Compliance / Outro
- Mensagem (opcional)
- Botão: `"Solicitar diagnóstico gratuito"`

> **INTEGRAÇÃO:** O formulário pode ser integrado ao WhatsApp Business (via link `wa.me/`) ou a um serviço de e-mail (Resend, EmailJS) diretamente pelo Lovable.

### Seção 10 — FOOTER
**Conteúdo:**
- Logo Falcoa (versão reduzida)
- Tagline: `"Inteligência Tributária"`
- Links de navegação (âncoras)
- Informações de contato (e-mail, telefone, cidade/estado)
- Redes sociais (LinkedIn principalmente)
- Copyright: `"© 2025 Falcoa Inteligência Tributária. Todos os direitos reservados."`
- Link para Política de Privacidade (LGPD)

---

## 4. CONFIGURAÇÃO DO PROJETO NO LOVABLE

### 4.1 Passo a passo de criação

**FASE 1 — Configuração inicial (Dia 1)**

1. Acesse [lovable.dev](https://lovable.dev) e crie um novo projeto.
2. No prompt inicial, use exatamente este texto como ponto de partida:

```
Create a professional single-page landing page for "Falcoa Inteligência Tributária", a Brazilian B2B tax consulting firm. 

Design system:
- Primary color (navy): #1C2B3A
- Accent color (gold): #C9A84C
- Background light: #F4F5F7
- Typography: Alexandria (headings) + Montserrat (body) from Google Fonts
- Border radius: 8px for cards, 4px for buttons
- Dark sections use white text; light sections use navy text

Page sections (in order):
1. Hero: fullscreen navy background, white headline, gold accent, two CTAs
2. Stats bar: 4 numbers showing credibility (navy background)
3. About section: 2-column layout, light background
4. Services: 6-card grid with icons, white background
5. Why Falcoa: 4 differentials, navy background with gold icons
6. Methodology: 4-step timeline, light background
7. Tax Reform spotlight: full-width navy section with urgency copy
8. Contact form: navy background, form with 7 fields
9. Footer: dark, with logo, links and contact info

All text in Brazilian Portuguese. Make it look premium and authoritative, not generic. No stock photography.
```

3. Após a geração inicial, revise a estrutura e confirme que todas as seções foram criadas.

**FASE 2 — Design system e tokens (Dia 1–2)**

4. Instale as fontes via prompt: `"Add Google Fonts import for Alexandria and Montserrat in the global CSS"`
5. Configure as variáveis CSS: `"Add CSS custom properties (--falcoa-navy, --falcoa-gold, etc.) to the :root selector"`
6. Ajuste o Tailwind config para incluir as cores da Falcoa como extensões da paleta.

**FASE 3 — Upload de assets (Dia 2)**

7. Exporte o logotipo em SVG ou PNG transparente a partir dos arquivos EPS originais (use Illustrator ou [cloudconvert.com](https://cloudconvert.com)).
8. No Lovable, faça upload do logo via "Assets" ou peça: `"Replace the text logo placeholder with the uploaded SVG file"`
9. Crie um favicon a partir do ícone de asas da Falcoa.

**FASE 4 — Conteúdo real (Dia 2–3)**

10. Preencha cada seção com o conteúdo definitivo usando prompts cirúrgicos: `"Update the hero headline to: [texto]"`
11. Configure o formulário de contato com integração de e-mail ou WhatsApp.
12. Adicione os metadados de SEO: title, description, og:image.

**FASE 5 — Revisão e publicação (Dia 3–4)**

13. Teste responsividade em mobile, tablet e desktop.
14. Verifique contraste de acessibilidade (WCAG AA).
15. Publique via Lovable (subdomínio gratuito) ou configure domínio customizado.

### 4.2 Prompts estratégicos para o Lovable

Use estes prompts como modelos ao longo do desenvolvimento. A precisão do prompt determina a qualidade da saída.

**Para ajustes visuais:**
```
"Change the hero section background to a subtle dark texture using the navy color #1C2B3A with a very faint diagonal pattern. Keep the text white and the CTA button with gold color #C9A84C."
```

**Para o componente de serviços:**
```
"Redesign the services section as a 3-column grid of cards. Each card should have: a gold icon at top, bold title in Alexandria font, 2-line description in Montserrat, and a subtle bottom border in gold on hover. Background white, card border-radius 8px, shadow on hover."
```

**Para a seção de Reforma Tributária:**
```
"Create a full-width section with navy background (#1C2B3A) and a left gold border accent. Title: 'A Reforma Tributária já está em vigor. Sua empresa está preparada?' in white Alexandria font, 3 bullet points with gold checkmarks, and a prominent CTA button in gold."
```

**Para o formulário:**
```
"Create a contact form with the following fields: Nome completo, Empresa, Cargo, E-mail corporativo, Telefone/WhatsApp, Faturamento anual (dropdown with 4 options), Principal interesse (dropdown with 5 options). Submit button in gold #C9A84C with text 'Solicitar diagnóstico gratuito'. Add form validation and on submit, open WhatsApp with a pre-filled message."
```

**Para o footer:**
```
"Design a dark footer with navy background. Left column: Falcoa logo + tagline 'Inteligência Tributária' + brief description. Center: navigation links. Right: contact info (email, phone, LinkedIn icon). Bottom bar with copyright and privacy policy link. All text in white/muted gray."
```

---

## 5. CONTEÚDO TEXTUAL (COPY DEFINITIVO)

### Headline principal (Hero)
> **"Sua empresa paga mais imposto do que deveria."**
> *A Falcoa mapeia créditos ocultos, reduz riscos e prepara você para a Reforma Tributária — com rigor técnico e clareza estratégica.*

### Headline alternativa (teste A/B)
> **"Inteligência tributária que transforma obrigação em vantagem competitiva."**

### Tagline de SEO / meta description
> "Falcoa Inteligência Tributária — consultoria especializada em recuperação de créditos, planejamento tributário e diagnóstico da Reforma Tributária (EC 132/2023). Atendemos empresas em todo o Brasil."

### CTA primário
> "Solicitar diagnóstico gratuito"

### CTA secundário / link
> "Conheça nossos serviços" · "Saiba mais" · "Ver metodologia"

---

## 6. SEO E METADADOS

```html
<title>Falcoa Inteligência Tributária | Recuperação de Créditos e Planejamento Fiscal</title>
<meta name="description" content="Consultoria tributária especializada em recuperação de créditos, planejamento tributário e diagnóstico da Reforma Tributária. A Falcoa atende empresas de médio e grande porte em todo o Brasil.">
<meta property="og:title" content="Falcoa Inteligência Tributária">
<meta property="og:description" content="Sua empresa paga mais imposto do que deveria. A Falcoa revela os créditos, elimina os riscos e prepara seu negócio para a nova ordem tributária.">
<meta property="og:image" content="/og-image-falcoa.png">
<meta name="keywords" content="consultoria tributária, recuperação de créditos tributários, planejamento tributário, reforma tributária, PIS Cofins, ICMS-ST, diagnóstico tributário">
```

---

## 7. INTEGRAÇÕES RECOMENDADAS

| Integração | Finalidade | Como configurar |
|---|---|---|
| **WhatsApp Business** | CTA direto e formulário | Link `wa.me/55[DDD][NÚMERO]?text=[mensagem pré-formatada]` |
| **Google Analytics 4** | Rastreamento de tráfego | Snippet GA4 no `<head>` via Lovable |
| **Meta Pixel** | Remarketing (futuro) | Snippet no `<head>` quando ads estiverem ativos |
| **EmailJS ou Resend** | Envio do formulário por e-mail | Configurar via variáveis de ambiente no Lovable |
| **Cal.com ou Calendly** | Agendamento de reunião inicial | Embed do widget ou link externo no CTA |

---

## 8. CHECKLIST DE LANÇAMENTO

- [ ] Logo em SVG/PNG exportado e carregado no Lovable
- [ ] Favicon configurado (ícone de asas da Falcoa)
- [ ] Todas as 9 seções renderizadas e revisadas
- [ ] Formulário de contato funcionando e enviando para o e-mail/WhatsApp correto
- [ ] Metadados de SEO preenchidos
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Contraste acessível verificado (mínimo WCAG AA)
- [ ] Domínio customizado configurado (ex: `falcoa.com.br`)
- [ ] Google Analytics instalado
- [ ] Política de Privacidade (LGPD) vinculada no footer
- [ ] Teste de velocidade (Lighthouse score ≥ 90)
- [ ] Open Graph image criada (1200×630px)

---

## 9. DECISÕES DE PROJETO TOMADAS

| Data | Decisão | Justificativa |
|---|---|---|
| 2026-05-23 | Paleta: navy #1C2B3A + gold #C9A84C | Extraído dos mockups oficiais da identidade visual |
| 2026-05-23 | Fontes: Alexandria (headings) + Montserrat (body) | Fontes do brand kit oficial |
| 2026-05-23 | 9 seções + footer | Cobre funil completo; seção de Reforma Tributária como diferencial estratégico |
| 2026-05-23 | CTA principal: diagnóstico gratuito | Menor fricção de entrada; qualifica lead antes do contato comercial |
| 2026-05-23 | Single-page application com âncoras | Melhor para conversão; evita navegação complexa |

---

## 10. DIRETRIZES DE ANIMAÇÃO E MOTION DESIGN

> Referência: metodologia de "sites cinematográficos" com GSAP + Lenis + ScrollTrigger.
> Princípio central: **lentidão com intenção**. Animações rápidas comunicam descuido. Animações calibradas comunicam autoridade.

### 10.1 Stack de animação

| Biblioteca | Papel | Instalação |
|---|---|---|
| **GSAP** | Motor de todas as animações | `npm install gsap` |
| **ScrollTrigger** | Plugin GSAP — amarra animações ao scroll | incluído no GSAP |
| **Lenis** | Scroll suavizado (smooth scroll) | `npm install @studio-freight/lenis` |

**Regra arquitetural:** toda animação usa GSAP. Nenhuma animação é feita com CSS `transition` ou `@keyframes` puro — exceto micro-interações de hover simples (ex: mudança de cor de botão).

### 10.2 Regras absolutas de timing

| Tipo de animação | Duração mínima | Duração recomendada |
|---|---|---|
| Entrada de elemento (fade + translate) | 0.7s | 0.9s–1.1s |
| Saída de elemento | 0.6s | 0.7s–0.8s |
| Reveal de texto (por linha) | 0.8s | 1.0s–1.2s |
| Transição de seção | 0.8s | 1.0s |
| Micro-interação (hover) | 0.25s | 0.3s |

**Delay entre elementos em sequência:** `stagger: 0.15` a `0.2` (nunca acima de 0.25 — o usuário não pode esperar).

### 10.3 Easing permitidos

```js
// PERMITIDOS — comunicam peso, precisão e controle
"power3.out"     // entrada suave com desaceleração forte — uso padrão
"power3.inOut"   // para elementos que entram e saem em sequência
"expo.out"       // para grandes movimentos de translate (hero, seções de impacto)
"expo.inOut"     // para transições de estado completo

// PROIBIDOS
"linear"         // parece mecânico, sem alma
"ease"           // genérico demais — CSS default disfarçado
"bounce"         // incompatível com o tom da marca
"elastic"        // idem
```

### 10.4 Padrões de animação por seção

**Hero (Seção 01) — text reveal cinematográfico**
```js
// As palavras da headline entram em stagger, de baixo para cima
// Cria tensão antes da primeira palavra aparecer (delay inicial de 0.3s)
gsap.fromTo(".hero-headline .word", 
  { y: 60, opacity: 0 },
  { 
    y: 0, opacity: 1, 
    duration: 1.1, ease: "expo.out",
    stagger: 0.08,
    delay: 0.3
  }
)
// O subtítulo entra depois, como uma respiração
gsap.fromTo(".hero-subtitle",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 1.0 }
)
// Os CTAs entram por último
gsap.fromTo(".hero-ctas",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.5 }
)
```

**Stats / Números (Seção 02) — contagem animada ao entrar no viewport**
```js
// Cada número conta de zero até o valor real ao entrar no viewport
ScrollTrigger.create({
  trigger: ".stats-section",
  onEnter: () => {
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 1.8,
      ease: "power3.out",
      snap: { textContent: 1 },
      stagger: 0.2
    })
  }
})
```

**Serviços (Seção 04) — pin scroll com entrada em sequência**
```js
// Os cards entram um a um enquanto o scroll avança (pin scroll)
// O usuário controla o ritmo — parece câmera
ScrollTrigger.create({
  trigger: ".services-section",
  pin: true,
  scrub: 1,
  onUpdate: (self) => { /* sequencia os cards pelo progresso */ }
})
gsap.fromTo(".service-card",
  { y: 50, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.9, ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: { trigger: ".services-section", start: "top 60%" }
  }
)
```

**Diferenciais / Por que a Falcoa (Seção 05) — entrada diagonal**
```js
// Itens entram em diagonal leve, alternando direção (par: esquerda, ímpar: direita)
gsap.fromTo(".differential-item:nth-child(odd)",
  { x: -40, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.0, ease: "expo.out",
    scrollTrigger: { trigger: ".differentials-section", start: "top 70%" },
    stagger: 0.15 }
)
gsap.fromTo(".differential-item:nth-child(even)",
  { x: 40, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.0, ease: "expo.out",
    scrollTrigger: { trigger: ".differentials-section", start: "top 70%" },
    stagger: 0.15 }
)
```

**Metodologia (Seção 06) — timeline revelada progressivamente**
```js
// A linha da timeline "desenha" da esquerda para a direita
// Cada etapa aparece quando a linha a alcança
gsap.fromTo(".timeline-line",
  { scaleX: 0, transformOrigin: "left center" },
  { scaleX: 1, duration: 2.0, ease: "power3.inOut",
    scrollTrigger: { trigger: ".methodology-section", start: "top 60%", scrub: 1 } }
)
```

**Reforma Tributária (Seção 07) — entrada de impacto**
```js
// Headline entra com translate vertical grande + fade
// Bullets aparecem em sequência após a headline
gsap.fromTo(".reform-headline",
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
    scrollTrigger: { trigger: ".reform-section", start: "top 65%" } }
)
gsap.fromTo(".reform-bullet",
  { x: -30, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.2,
    scrollTrigger: { trigger: ".reform-section", start: "top 55%" } }
)
```

### 10.5 Configuração do Lenis

```js
// Inicializar no layout.tsx (Next.js App Router) via Client Component
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.4,        // mais alto = scroll mais lento e cinematográfico
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo decay
  smoothWheel: true,
  syncTouch: false,     // desativar no touch para evitar conflito mobile
})

// Conectar ao ScrollTrigger do GSAP
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```

> **ATENÇÃO mobile:** `syncTouch: false` é obrigatório (no Lenis 1.3+ a antiga opção `smoothTouch` foi removida e substituída por `syncTouch`, com o mesmo significado). Lenis com scroll suavizado em touch gera conflito com ScrollTrigger e animações "pulando". No mobile, o scroll nativo é preservado; apenas as animações GSAP continuam funcionando.

> **Pacote:** o npm package `@studio-freight/lenis` foi renomeado para `lenis`. Sempre use `import Lenis from 'lenis'`.

### 10.6 Prompt de auditoria final (executar antes de publicar)

```
Review all GSAP animations in the project. Apply these rules without changing visual design:
1. Any duration below 0.6s → increase to 0.7s minimum
2. Any ease that is not power3 or expo → replace with power3.out
3. Any stagger above 0.25 → reduce to 0.2
4. Ensure Lenis has syncTouch: false (Lenis 1.3+ — replaces the old smoothTouch option)
5. Confirm ScrollTrigger.refresh() is called after all images load
Report what was changed.
```

---

## 11. STACK TÉCNICA E DEPLOY

### 11.1 Stack definitiva

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSG nativo, SEO excelente, padrão de mercado |
| Estilização | **Tailwind CSS** | Utility-first, tokens de design configuráveis |
| Animação | **GSAP + ScrollTrigger + Lenis** | Stack cinematográfica (ver seção 10) |
| Formulário | **React Hook Form + Zod** | Validação robusta sem dependência pesada |
| Deploy | **Vercel** | Deploy com um clique, plano gratuito, domínio customizado |
| Domínio | **www.falcoatax.com** | Domínio próprio já disponível |

### 11.2 Estrutura de pastas (Next.js App Router)

```
falcoa-landing/
├── app/
│   ├── layout.tsx          # Fontes, Lenis, metadados globais
│   ├── page.tsx            # Orquestrador das seções
│   └── globals.css         # Variáveis CSS + reset
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Differentials.tsx
│   │   ├── Methodology.tsx
│   │   ├── TaxReform.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── ServiceCard.tsx
│       └── SectionTitle.tsx
├── lib/
│   ├── animations.ts       # Funções GSAP reutilizáveis
│   └── lenis.ts            # Inicialização do Lenis
├── public/
│   ├── logo-falcoa.svg
│   ├── logo-falcoa-dark.svg
│   └── favicon.ico
├── tailwind.config.ts      # Tokens de cor e tipografia da Falcoa
└── CLAUDE.md               # Este arquivo
```

### 11.3 Tokens Tailwind (tailwind.config.ts)

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'falcoa-navy':    '#1C2B3A',
        'falcoa-slate':   '#2E4057',
        'falcoa-gold':    '#C9A84C',
        'falcoa-gold-light': '#E8C97A',
        'falcoa-gray-bg': '#F4F5F7',
        'falcoa-text':    '#1A1A2E',
        'falcoa-muted':   '#64748B',
      },
      fontFamily: {
        alexandria: ['Alexandria', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
}
export default config
```

### 11.4 Roteiro de deploy no Vercel

1. Criar conta gratuita em [vercel.com](https://vercel.com) com login via GitHub
2. No painel Vercel: "Add New Project" → importar repositório do projeto
3. Vercel detecta automaticamente que é Next.js — clique em "Deploy"
4. Após deploy: Settings → Domains → adicionar `www.falcoatax.com`
5. Vercel exibe dois registros DNS para configurar no painel do registrador do domínio:
   - Tipo `A` → IP fornecido pelo Vercel
   - Tipo `CNAME` → `cname.vercel-dns.com`
6. Propagação: 5–30 minutos. Site no ar.

**Custo total de infraestrutura: R$ 0/mês** (Vercel Hobby plan cobre landing pages com folga).

---

## 12. DECISÕES DE PROJETO TOMADAS (atualizado)

| Data | Decisão | Justificativa |
|---|---|---|
| 2026-05-23 | Paleta: navy #1C2B3A + gold #C9A84C | Extraído dos mockups oficiais da identidade visual |
| 2026-05-23 | Fontes: Alexandria (headings) + Montserrat (body) | Fontes do brand kit oficial |
| 2026-05-23 | 9 seções + footer | Cobre funil completo; seção de Reforma Tributária como diferencial estratégico |
| 2026-05-23 | CTA principal: diagnóstico gratuito | Menor fricção de entrada; qualifica lead antes do contato comercial |
| 2026-05-23 | Single-page application com âncoras | Melhor para conversão; evita navegação complexa |
| 2026-05-23 | Stack: Next.js + Tailwind + GSAP + Lenis | Resultado cinematográfico; controle total; superior ao Lovable para este projeto |
| 2026-05-23 | Deploy: Vercel + domínio www.falcoatax.com | Gratuito, confiável, configuração de domínio em minutos |
| 2026-05-23 | Timing mínimo de animação: 0.6s | Padrão cinematográfico; comunica autoridade e precisão alinhados à marca |

---

*Última atualização: 2026-05-23 · Projeto: Falcoa Landing Page · Stack: Next.js + Vercel*
