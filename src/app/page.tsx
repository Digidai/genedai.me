import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gene Dai - AI Startup Co-Founder & Product Leader',
  description: 'AI entrepreneur and product leader with expertise in platform development, user growth strategies, and innovative product solutions across tech-enabled industries.',
  keywords: 'AI Startup, Product Leadership, Platform Products, User Growth Strategy, Tech Entrepreneur, Product Innovation',
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
    title: 'Gene Dai - AI Startup Co-Founder & Product Leader',
    description: 'AI entrepreneur and product leader with expertise in platform development, user growth strategies, and innovative product solutions across tech-enabled industries.',
    url: 'https://genedai.me',
    siteName: 'Gene Dai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gene Dai - AI Startup Co-Founder & Product Leader',
    description: 'AI entrepreneur and product leader with expertise in platform development, user growth strategies, and innovative product solutions across tech-enabled industries.',
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
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
            <span className="text-lg sm:text-xl text-gray-600">AI Startup Co-Founder</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-lg sm:text-xl text-gray-600">Platform Strategy</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-lg sm:text-xl text-gray-600">Product Leadership</span>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            Building intelligent platforms that transform industries. Expertise in developing AI-driven products with a focus on growth strategy, user experience, and scalable architecture across recruitment, e-commerce, and sharing economy sectors.
          </p>
        </header>
      </div>
    </main>
  )
} 