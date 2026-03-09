import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cristobal Maier | Cybersecurity Student',
  description: 'Learning to think like an attacker to build stronger defenses. First-year cybersecurity student passionate about ethical hacking and penetration testing.',
  keywords: ['cybersecurity', 'pentesting', 'ethical hacking', 'security researcher', 'Buenos Aires'],
  authors: [{ name: 'Cristobal Maier' }],
  creator: 'Cristobal Maier',
  openGraph: {
    title: 'Cristobal Maier | Cybersecurity Student',
    description: 'Learning to think like an attacker to build stronger defenses.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
