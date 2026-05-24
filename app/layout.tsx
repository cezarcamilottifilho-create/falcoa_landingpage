import type { Metadata } from 'next'
import { Alexandria, Montserrat } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/layout/LenisProvider'

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-alexandria',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Falcoa Inteligência Tributária | Recuperação de Créditos e Planejamento Fiscal',
  description:
    'Consultoria tributária especializada em recuperação de créditos, planejamento tributário e diagnóstico da Reforma Tributária. A Falcoa atende empresas de médio e grande porte em todo o Brasil.',
  keywords: [
    'consultoria tributária',
    'recuperação de créditos tributários',
    'planejamento tributário',
    'reforma tributária',
    'PIS Cofins',
    'ICMS-ST',
    'diagnóstico tributário',
    'IBS CBS',
    'EC 132 2023',
    'LC 214 2025',
  ],
  authors: [{ name: 'Falcoa Inteligência Tributária' }],
  metadataBase: new URL('https://www.falcoatax.com'),
  alternates: {
    canonical: 'https://www.falcoatax.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.falcoatax.com',
    title: 'Falcoa Inteligência Tributária',
    description:
      'Sua empresa paga mais imposto do que deveria. A Falcoa revela os créditos, elimina os riscos e prepara seu negócio para a nova ordem tributária.',
    siteName: 'Falcoa Inteligência Tributária',
    images: [
      {
        url: '/og-image-falcoa.png',
        width: 1200,
        height: 630,
        alt: 'Falcoa Inteligência Tributária',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falcoa Inteligência Tributária',
    description:
      'Consultoria tributária especializada em recuperação de créditos e diagnóstico da Reforma Tributária.',
    images: ['/og-image-falcoa.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${alexandria.variable} ${montserrat.variable}`}>
      <body className="font-montserrat bg-falcoa-white text-falcoa-text antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
