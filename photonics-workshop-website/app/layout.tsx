import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PHOTOMAT 2026 - International Workshop on Photonics and Optical Materials',
  description: 'International Workshop on Photonics and Optical Materials (PHOTOMAT 2026). October 7-9, 2026 at DIAT, Pune. Register now for this premier conference on photonics research, optical materials, and advanced technologies.',
  keywords: 'photonics, optical materials, workshop, research conference, DIAT, photonics materials, laser, optics',
  authors: [{ name: 'DIAT OPTICA Student Chapter' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://photomat26.com',
    siteName: 'PHOTOMAT 2026',
    title: 'PHOTOMAT 2026 - International Workshop on Photonics and Optical Materials',
    description: 'Join us for an international workshop on photonics and optical materials. October 7-9, 2026.',
    images: [
      {
        url: 'https://photomat26.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PHOTOMAT 2026 Workshop',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
