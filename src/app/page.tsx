import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GeneDai</h1>
        <p className="text-xl text-gray-600">AI Gene Analysis Platform</p>
      </header>
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Advanced Genetic Analysis</h2>
        <p className="text-gray-700">
          Leveraging artificial intelligence to provide cutting-edge genetic analysis and insights.
        </p>
      </section>
    </main>
  )
} 