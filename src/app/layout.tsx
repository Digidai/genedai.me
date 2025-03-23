import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Gene Dai - Software Engineer & Developer',
  description: 'Personal website of Gene Dai - Software Engineer, Developer, and Technology Enthusiast',
  keywords: 'Gene Dai, Software Engineer, Developer, Technology, Programming',
  authors: [{ name: 'Gene Dai' }],
  openGraph: {
    title: 'Gene Dai - Software Engineer & Developer',
    description: 'Personal website of Gene Dai - Software Engineer, Developer, and Technology Enthusiast',
    url: 'https://genedai.me',
    siteName: 'Gene Dai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gene Dai - Software Engineer & Developer',
    description: 'Personal website of Gene Dai - Software Engineer, Developer, and Technology Enthusiast',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
} 