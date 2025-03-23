import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GeneDai - AI Gene Analysis Platform',
  description: 'Advanced AI-powered gene analysis platform for genetic research and analysis',
  keywords: 'AI, Gene Analysis, Genetics, Bioinformatics, Machine Learning, DNA Analysis',
  authors: [{ name: 'GeneDai Team' }],
  creator: 'GeneDai',
  publisher: 'GeneDai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://genedai.me'),
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">GeneDai</h1>
        <p className="text-lg text-gray-600">AI Gene Analysis Platform</p>
      </header>
      <section className="mt-8 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Genetic Analysis</h2>
        <p className="text-gray-600">
          Leveraging artificial intelligence to provide cutting-edge genetic analysis and insights.
        </p>
      </section>
    </main>
  )
} 