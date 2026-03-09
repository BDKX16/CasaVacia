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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con el código real de Google Search Console
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
  category: 'entertainment',
  classification: 'Film Production Studio',
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
        alt: 'Casa Vacía Estudio - Productora de Cine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Vacía Estudio | Productora de Cine de Autor y Género',
    description: 'Más que producir imágenes, buscamos crear mundos. Estudio creativo dedicado al desarrollo de cine de autor y género.',
    images: ['/og-image.jpg'],
    creator: '@casavacia_estudio',
  },
  alternates: {
    canonical: 'https://vaciaestudios.com',
    languages: {
      'es-AR': 'https://vaciaestudios.com',
      'es': 'https://vaciaestudios.com',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Casa Vacía',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1008',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={cormorant.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="author" href="/humans.txt" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1a1008" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta property="og:site_name" content="Casa Vacía Estudio" />
        <meta property="og:locale" content="es_AR" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
