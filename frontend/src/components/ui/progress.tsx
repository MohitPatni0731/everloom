import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  animated?: boolean
  gradient?: boolean
  showValue?: boolean
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, animated = false, gradient = false, showValue = false, ...props }, ref) => {
  const [animatedValue, setAnimatedValue] = React.useState(0)

  React.useEffect(() => {
    if (animated && value !== undefined && value !== null) {
      const timeout = setTimeout(() => {
        setAnimatedValue(value)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [value, animated])

  const displayValue = animated ? animatedValue : value

  return (
    <div className="relative">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            gradient 
              ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" 
              : "bg-primary"
          )}
          style={{ 
            transform: `translateX(-${100 - (displayValue || 0)}%)`,
            transition: animated ? "transform 2.5s cubic-bezier(0.4, 0, 0.2, 1)" : undefined
          }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <motion.div
          className="absolute -top-6 right-0 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(displayValue || 0)}%
        </motion.div>
      )}
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress } 