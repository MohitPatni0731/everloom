import { motion } from "framer-motion"
import { ArrowRight, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { containerVariants, itemVariants } from "@/lib/animations"

export function HeroSection() {
  const handleJoinWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 text-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgb(0,0,0) 2px, transparent 2px),
                           radial-gradient(circle at 80% 50%, rgb(0,0,0) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 60px 60px'
        }}></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-black/5 rounded-2xl blur-xl transform scale-110"></div>
              <img
                src="/logo.png"
                alt="Everloom Logo"
                className="relative h-16 w-auto drop-shadow-sm"
                loading="eager"
              />
            </div>
          </div>
          <Badge variant="outline" className="border-gray-300 text-gray-500 bg-white/50 backdrop-blur-sm shadow-sm">
            Virtual Memory AI
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent">
            Your Second
            <br />
            <span className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-clip-text text-transparent">Virtual Memory</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Save your digital moments. Let others chat with your memory.
            <br />
            <span className="text-black font-medium">AI remembers so you don't have to.</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-16">
          <Button
            size="lg"
            onClick={handleJoinWaitlist}
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Simple Visual Concept */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl">💾</span>
              </div>
              <p className="text-gray-800 font-medium mb-2">Save & Capture</p>
              <p className="text-sm text-gray-600">Click extension to save your digital choices</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <Brain className="w-8 h-8 text-black" />
              </div>
              <p className="text-gray-800 font-medium mb-2">AI Learns</p>
              <p className="text-sm text-gray-600">Your preferences become memory</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl">💬</span>
              </div>
              <p className="text-gray-800 font-medium mb-2">Friends Chat</p>
              <p className="text-sm text-gray-600">Others ask your memory for advice</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 