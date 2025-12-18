import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viana Limpezas | Serviços de Limpeza Profissional em Viana do Castelo',
  description: 'Serviços de limpeza residencial e comercial com mais de 10 anos de experiência. Produtos eco-friendly, equipe profissional, 100% satisfação garantida.',
  keywords: 'limpeza, Viana do Castelo, serviços de limpeza, limpeza residencial, limpeza comercial, limpeza profissional, eco-friendly',
  authors: [{ name: 'Viana Limpezas', url: 'https://github.com/vianafjorge-commits' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Viana Limpezas | Limpeza Profissional de Excelência',
    description: 'Transformamos seus espaços em ambientes impecáveis com serviços de limpeza de qualidade superior.',
    url: 'https://viana-site.vercel.app',
    type: 'website',
    images: [
      {
        url: '/logo.svg',
        width: 120,
        height: 120,
        alt: 'Viana Limpezas Logo',
      }
    ]
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
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#667eea" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
