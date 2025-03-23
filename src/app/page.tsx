import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GeneDai - AI Gene Analysis Platform',
  description: 'Advanced AI-powered gene analysis platform for genetic research and analysis',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">GeneDai</h1>
        <p className="text-lg text-gray-600">AI Gene Analysis Platform</p>
      </header>
    </main>
  )
} 