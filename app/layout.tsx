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
  title: 'Casa Vacia Estudio | Productora de Cine',
  description: 'Desarrollamos cine desde los espacios que permanecen. Productora de cine independiente especializada en narrativas oscuras y atmosfericas.',
  generator: 'v0.app',
  icons: {
    icon: '/hero-house.jpg',
    apple: '/hero-house.jpg',
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
