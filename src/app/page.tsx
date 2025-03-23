import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to GeneDai</h1>
      <p className="text-xl text-gray-600">AI Gene Analysis Platform</p>
    </main>
  )
} 