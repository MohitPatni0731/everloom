import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fieldVariants } from "@/lib/animations"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
      props.onBlur?.(e)
    }

    if (label) {
      return (
        <motion.div 
          className="relative"
          variants={fieldVariants}
          animate={isFocused ? "focused" : "blurred"}
        >
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-md border border-input bg-background px-3 pt-4 pb-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          <motion.label
            className={cn(
              "absolute left-3 text-sm text-muted-foreground pointer-events-none transition-all duration-200",
              (isFocused || hasValue) 
                ? "top-2 text-xs text-primary" 
                : "top-1/2 -translate-y-1/2"
            )}
            initial={false}
            animate={{
              fontSize: (isFocused || hasValue) ? "0.75rem" : "0.875rem",
              y: (isFocused || hasValue) ? 0 : "-50%",
              color: error ? "hsl(var(--destructive))" : 
                     (isFocused || hasValue) ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"
            }}
          >
            {label}
          </motion.label>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-destructive mt-1"
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      )
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input } 