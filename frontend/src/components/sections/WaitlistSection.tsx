import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations"

export function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitted(true)
      toast.success(`Welcome aboard, ${data.firstName}!`)
      reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white text-black rounded-3xl p-8 shadow-xl border border-gray-100 backdrop-blur-sm">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Check className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-black">You're In!</h3>
              <p className="text-gray-600 mb-6">
                We'll notify you when Everloom is ready.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                variant="outline" 
                className="border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-300"
              >
                Add Another Person
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be the first to experience Virtual Memory. We're launching soon.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-md mx-auto">
            <div className="bg-white text-black rounded-3xl p-8 shadow-xl border border-gray-100 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">Reserve Your Spot</h3>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    error={errors.firstName?.message}
                    className="bg-gray-50/80 border-gray-200 text-black rounded-xl focus:bg-white transition-all duration-300"
                    {...register("firstName")}
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email?.message}
                    className="bg-gray-50/80 border-gray-200 text-black rounded-xl focus:bg-white transition-all duration-300"
                    {...register("email")}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Joining...</span>
                    </motion.div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll notify you when we launch. No spam, promise.
                </p>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 