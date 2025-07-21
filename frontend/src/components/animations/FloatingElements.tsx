import { motion } from "framer-motion"
import { floatingVariants } from "@/lib/animations"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs */}
      <motion.div
        className="floating-orb"
        variants={floatingVariants}
        animate="animate"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
        }}
      />
      <motion.div
        className="floating-orb"
        variants={floatingVariants}
        animate="animate"
        style={{
          background: "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(239, 68, 68, 0.3))",
          animationDelay: "2s",
        }}
      />
      <motion.div
        className="floating-orb"
        variants={floatingVariants}
        animate="animate"
        style={{
          background: "linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))",
          animationDelay: "4s",
        }}
      />
      <motion.div
        className="floating-orb"
        variants={floatingVariants}
        animate="animate"
        style={{
          background: "linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(34, 197, 94, 0.3))",
          animationDelay: "6s",
        }}
      />

      {/* Gradient Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-50/10 to-transparent dark:via-pink-950/5" />
    </div>
  )
} 