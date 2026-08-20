import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Limperial Luxury | Premium Furniture & Lighting Cambodia',
  description: 'Timeless Luxury, Crafted to Perfection. Discover premium furniture and lighting for your home in Cambodia.',
  keywords: ['luxury furniture', 'premium lighting', 'Cambodia furniture', 'high-end home decor', 'Limperial'],
  openGraph: {
    title: 'Limperial Luxury | Premium Furniture & Lighting',
    description: 'Timeless Luxury, Crafted to Perfection',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
