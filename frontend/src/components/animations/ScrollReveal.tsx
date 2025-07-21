import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/useIntersection"
import { scrollRevealVariants } from "@/lib/animations"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useIntersection({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref as any}
      className={className}
      variants={scrollRevealVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
} 