import { motion } from "framer-motion"
import { Camera, Brain, Share2, Shield, Search, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const features = [
  {
    icon: Camera,
    title: "Instant Capture",
    description: "Save any digital moment with one click. Screenshots, URLs, and metadata automatically captured and organized.",
    status: "Ready",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "AI Memory Agent",
    description: "Your personal AI that knows your preferences, remembers your choices, and answers questions about your digital life.",
    status: "Building",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Share2,
    title: "Social Memory",
    description: "Share your memories with friends. Let them chat with your AI to get personalized recommendations.",
    status: "Coming Soon",
    gradient: "from-green-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Zero-knowledge encryption ensures your memories stay private. You own your data, always.",
    status: "Ready",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find anything from your digital past with natural language. Ask questions, get instant answers.",
    status: "Building",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    description: "Works everywhere you browse. Chrome, Edge, Safari - capture memories across all your devices.",
    status: "Coming Soon",
    gradient: "from-yellow-500 to-orange-500"
  }
]

export function FeaturesPreview() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              What's Coming
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Digital <span className="text-gradient">Memory Vault</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everloom transforms how you interact with your digital experiences. 
              Capture, remember, and share your online moments with AI-powered intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <Card hoverable className="h-full group relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </motion.div>
                    <Badge
                      variant={
                        feature.status === 'Ready'
                          ? 'success'
                          : feature.status === 'Building'
                          ? 'default'
                          : 'secondary'
                      }
                      className="text-xs"
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Use Cases Section */}
        <ScrollReveal delay={0.8}>
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold mb-12">
              Perfect for Everyone
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Online Shoppers</h4>
                <p className="text-sm text-muted-foreground">
                  Compare products across stores, remember preferences, and get AI recommendations based on your history.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Professionals</h4>
                <p className="text-sm text-muted-foreground">
                  Research, save articles, and build a knowledge base that grows smarter with every interaction.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Social Sharers</h4>
                <p className="text-sm text-muted-foreground">
                  Let friends ask your AI for recommendations and discover new things through shared memories.
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 