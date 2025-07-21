import { useEffect, useState } from 'react'

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  easing?: (t: number) => number
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  easing = (t: number) => t * t * (3 - 2 * t), // smooth step
}: UseCounterOptions) {
  const [current, setCurrent] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const startTime = Date.now() + delay
    const range = end - start

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      if (elapsed < duration) {
        const progress = elapsed / duration
        const easedProgress = easing(progress)
        const value = start + range * easedProgress
        setCurrent(Math.round(value))
        requestAnimationFrame(animate)
      } else {
        setCurrent(end)
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(animate)
  }

  return {
    current,
    startAnimation,
    isAnimating,
  }
} 