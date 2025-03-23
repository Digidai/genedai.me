import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Gene Dai</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Software Engineer & Developer</h2>
        
        <p className="text-lg text-gray-700 mb-8">
          Hi! I'm Gene, a passionate software engineer focused on building elegant, 
          efficient, and user-friendly applications. I specialize in full-stack development 
          and love exploring new technologies.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Connect with me</h3>
          <div className="flex justify-center space-x-6">
            <Link 
              href="https://github.com/digidai" 
              target="_blank"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-8 h-8" />
            </Link>
            <Link 
              href="https://linkedin.com/in/genedai" 
              target="_blank"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-8 h-8" />
            </Link>
            <Link 
              href="https://twitter.com/genedai" 
              target="_blank"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 