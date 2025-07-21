import { motion, AnimatePresence } from "framer-motion"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { ConceptSection } from "@/components/sections/ConceptSection"
import { WaitlistSection } from "@/components/sections/WaitlistSection"
import { pageVariants } from "@/lib/animations"

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen bg-white text-black relative overflow-x-hidden"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection />

          {/* Concept Section */}
          <ConceptSection />

          {/* Waitlist Section */}
          <WaitlistSection />
        </main>

        {/* Simple Footer */}
        <footer className="bg-gray-100 text-center py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="/logo.png" alt="Everloom" className="h-6 w-auto" />
              <span className="text-lg font-bold text-black">Everloom</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 Everloom. Virtual Memory AI.
            </p>
          </div>
        </footer>

        {/* Toast Notifications */}
        <Toaster />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
