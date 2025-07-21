import { motion } from "framer-motion"
import { logoVariants } from "@/lib/animations"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Brand Name */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Everloom" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-wide text-black bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
              everloom
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#concept" 
              className="text-gray-700 hover:text-black transition-colors duration-200 relative group text-sm font-medium"
            >
              How it Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#waitlist" 
              className="text-gray-700 hover:text-black transition-colors duration-200 relative group text-sm font-medium"
            >
              Join Waitlist
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-black transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
} 