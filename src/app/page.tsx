import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gene Dai - Product Leader',
  description: 'Product leader specializing in platform and tool products, with extensive experience in Recruitment, Fitness & Sports, E-commerce, and Sharing Economy fields.',
  keywords: 'Product Management, Platform Product, User Growth, Recruitment, Fitness, E-commerce, Sharing Economy',
  authors: [{ name: 'Gene Dai' }],
  creator: 'Gene Dai',
  publisher: 'Gene Dai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://genedai.me'),
  openGraph: {
    title: 'Gene Dai - Product Leader',
    description: 'Product leader specializing in platform and tool products, with extensive experience in Recruitment, Fitness & Sports, E-commerce, and Sharing Economy fields.',
    url: 'https://genedai.me',
    siteName: 'Gene Dai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gene Dai - Product Leader',
    description: 'Product leader specializing in platform and tool products, with extensive experience in Recruitment, Fitness & Sports, E-commerce, and Sharing Economy fields.',
  },
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
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://genedai.me',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Gene Dai
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <span className="text-lg sm:text-xl text-gray-600">User Growth</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-lg sm:text-xl text-gray-600">Platform Product</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-lg sm:text-xl text-gray-600">User Product</span>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            Specializes in platform and tool products, experienced in Recruitment, Fitness & Sports, E-commerce, and Sharing Economy fields.
          </p>
        </header>
      </div>
    </main>
  )
} 