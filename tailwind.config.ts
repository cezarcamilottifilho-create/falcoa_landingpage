import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'falcoa-navy':       '#1C2B3A',
        'falcoa-slate':      '#2E4057',
        'falcoa-gold':       '#C9A84C',
        'falcoa-gold-light': '#E8C97A',
        'falcoa-gray-bg':    '#F4F5F7',
        'falcoa-white':      '#FFFFFF',
        'falcoa-text':       '#1A1A2E',
        'falcoa-muted':      '#64748B',
      },
      fontFamily: {
        alexandria: ['var(--font-alexandria)', 'Alexandria', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'falcoa-card': '0 4px 24px rgba(28, 43, 58, 0.10)',
      },
      borderRadius: {
        'falcoa-card':   '8px',
        'falcoa-button': '4px',
      },
    },
  },
}

export default config
