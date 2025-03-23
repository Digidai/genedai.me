import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GeneDai - AI Gene Analysis Platform',
  description: 'Advanced AI-powered gene analysis platform for genetic research and analysis',
  keywords: 'AI, Gene Analysis, Genetics, Bioinformatics, Machine Learning',
  authors: [{ name: 'GeneDai Team' }],
  openGraph: {
    title: 'GeneDai - AI Gene Analysis Platform',
    description: 'Advanced AI-powered gene analysis platform for genetic research and analysis',
    url: 'https://genedai.me',
    siteName: 'GeneDai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeneDai - AI Gene Analysis Platform',
    description: 'Advanced AI-powered gene analysis platform for genetic research and analysis',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
} 