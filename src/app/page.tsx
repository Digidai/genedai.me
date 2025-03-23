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
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Gene Dai</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-xl text-gray-600">User Growth</span>
            <span className="text-gray-400">•</span>
            <span className="text-xl text-gray-600">Platform Product</span>
            <span className="text-gray-400">•</span>
            <span className="text-xl text-gray-600">User Product</span>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Specializes in platform and tool products, experienced in Recruitment, Fitness & Sports, E-commerce, and Sharing Economy fields.
          </p>
        </header>

        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">Professional Experience</h2>
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Head of Platform Product @ Zuoyebang
              </h3>
            </div>
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Head of User Product @ Liepin
              </h3>
            </div>
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Product Director @ SMZDM
              </h3>
            </div>
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Head of Community & Social Product @ BOSS Zhipin
              </h3>
            </div>
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Head of Product & Business @ Kanzhun
              </h3>
            </div>
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Head of Product @ Duola Printing
              </h3>
            </div>
            <div className="group">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Product Partner & CPO @ Feel
              </h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 