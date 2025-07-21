import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Target } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { useCounter } from "@/hooks/useCounter"
import { useIntersection } from "@/hooks/useIntersection"
import { useAppStore } from "@/store/useAppStore"
import { formatNumber } from "@/lib/utils"

const milestones = [
  {
    icon: CheckCircle,
    title: "Core Architecture",
    description: "Chrome extension foundation and security framework",
    status: "completed" as const,
    date: "December 2024"
  },
  {
    icon: CheckCircle,
    title: "Memory Capture",
    description: "Screenshot and metadata extraction system",
    status: "completed" as const,
    date: "January 2025"
  },
  {
    icon: Clock,
    title: "AI Memory Agent",
    description: "RAG-powered personal AI assistant",
    status: "in-progress" as const,
    date: "February 2025"
  },
  {
    icon: Target,
    title: "Beta Launch",
    description: "Public beta with 5,000 early users",
    status: "upcoming" as const,
    date: "March 2025"
  }
]

export function ProgressSection() {
  const { developmentProgress, waitlistCount } = useAppStore()
  const { ref, isVisible } = useIntersection()
  
  const progressCounter = useCounter({
    end: developmentProgress,
    duration: 2500,
    delay: 500
  })
  
  const waitlistCounter = useCounter({
    end: waitlistCount,
    duration: 2000,
    delay: 1000
  })

  useEffect(() => {
    if (isVisible) {
      progressCounter.startAnimation()
      waitlistCounter.startAnimation()
    }
  }, [isVisible])

  return (
    <section id="progress" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Development Progress
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Your <span className="text-gradient">Digital Memory</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're making incredible progress on Everloom. Track our journey as we build 
              the future of personal AI memory systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress Stats */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Development Progress */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-muted-foreground">
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  ref={ref as any}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  {progressCounter.current}%
                </motion.div>
                <Progress 
                  value={progressCounter.current} 
                  animated 
                  gradient 
                  className="mb-4" 
                />
                <p className="text-sm text-muted-foreground">
                  Core features implemented
                </p>
              </CardContent>
            </Card>

            {/* Waitlist Count */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-muted-foreground">
                  Waitlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="text-4xl font-bold text-primary mb-4">
                  {formatNumber(waitlistCounter.current)}
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  Early adopters ready to test
                </p>
              </CardContent>
            </Card>

            {/* Beta Launch */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-muted-foreground">
                  Beta Launch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-4">
                  March
                </div>
                <p className="text-sm text-muted-foreground">
                  Expected public beta
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Development Milestones */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">
              Development Roadmap
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hoverable className="h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <milestone.icon 
                          className={`w-6 h-6 ${
                            milestone.status === 'completed' 
                              ? 'text-green-500' 
                              : milestone.status === 'in-progress'
                              ? 'text-blue-500'
                              : 'text-muted-foreground'
                          }`} 
                        />
                        <Badge
                          variant={
                            milestone.status === 'completed'
                              ? 'success'
                              : milestone.status === 'in-progress'
                              ? 'default'
                              : 'secondary'
                          }
                          className="text-xs"
                        >
                          {milestone.status === 'completed' && 'Done'}
                          {milestone.status === 'in-progress' && 'Building'}
                          {milestone.status === 'upcoming' && 'Planned'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {milestone.description}
                      </p>
                      <p className="text-xs font-medium text-primary">
                        {milestone.date}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 