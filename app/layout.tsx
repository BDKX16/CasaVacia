import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vaciaestudios.com'),
  title: {
    default: 'Casa Vacía Estudio | Productora de Cine de Autor y Género',
    template: '%s | Casa Vacía Estudio'
  },
  description: 'Casa Vacía es un estudio creativo dedicado al desarrollo de cine de autor y género. Acompañamos proyectos desde su gestación, explorando su universo narrativo y estético con profundidad.',
  keywords: ['productora de cine', 'cine de autor', 'cine de género', 'cine independiente', 'producción audiovisual', 'desarrollo de proyectos', 'cine argentino', 'horror', 'fantasía', 'Nekyia', 'Lujuria', 'Casa Vacía'],
  authors: [{ name: 'Casa Vacía Estudio' }],
  creator: 'Casa Vacía Estudio',
  publisher: 'Casa Vacía Estudio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://vaciaestudios.com',
    title: 'Casa Vacía Estudio | Productora de Cine de Autor y Género',
    description: 'Más que producir imágenes, buscamos crear mundos. Estudio creativo dedicado al desarrollo de cine de autor y género.',
    siteName: 'Casa Vacía Estudio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa Vacía Estudio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Vacía Estudio | Productora de Cine de Autor y Género',
    description: 'Más que producir imágenes, buscamos crear mundos. Estudio creativo dedicado al desarrollo de cine de autor y género.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vaciaestudios.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1008',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={cormorant.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
