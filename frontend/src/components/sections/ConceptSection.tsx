import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { ArrowRight, User, MessageCircle, Brain, Save } from "lucide-react"

export function ConceptSection() {
  return (
    <section id="concept" className="py-24 bg-gradient-to-b from-gray-50 to-white text-black">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Virtual Memory transforms your digital experiences into intelligent conversations
            </p>
          </div>
        </ScrollReveal>

        {/* Main Flow */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Step 1 */}
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Save className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Browse & Save</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shop, browse, or explore online. Click the Everloom extension to save your choices and preferences.
                </p>
              </motion.div>

              {/* Arrow */}
              <div className="hidden lg:flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 2 */}
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Brain className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Learns</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our AI analyzes your saved choices, understanding your preferences and building your unique memory profile.
                </p>
              </motion.div>

              {/* Arrow */}
              <div className="hidden lg:flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 3 */}
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <MessageCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Friends Chat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Share your memory ID. Friends can chat with your AI memory and get personalized recommendations.
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Example Conversation */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
              <p className="text-gray-600">Here's how a friend might chat with Sarah's shopping memory</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: User Profile */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                                          <div className="ml-4">
                        <h4 className="text-xl font-bold">Sarah's Memory</h4>
                        <p className="text-gray-600 text-sm">Shopping Preferences</p>
                      </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                    <h5 className="font-semibold mb-2">Saved Purchases:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 4x Tommy Hilfiger jeans (Amazon)</li>
                      <li>• 2x Jack & Jones jeans (Myntra)</li>
                      <li>• 1x Levi's jeans (Flipkart)</li>
                    </ul>
                  </div>
                </div>

                {/* Right: Chat Interface */}
                <div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-inner">
                                          <div className="text-sm text-gray-400 mb-4 text-center">
                        💬 Chat with Sarah's Memory
                      </div>
                    
                    <div className="space-y-4">
                      <motion.div 
                        className="text-right"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                                                  <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl max-w-xs shadow-sm">
                            "Hey! I'm looking for good jeans. What would Sarah recommend?"
                          </div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-left"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                                                  <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-3 rounded-2xl max-w-xs shadow-sm">
                            "Based on Sarah's preferences, she'd definitely recommend Tommy Hilfiger jeans! She's bought them 4 times and always from Amazon. Great quality and fit! 👍"
                          </div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-right"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        viewport={{ once: true }}
                      >
                        <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl max-w-xs shadow-sm">
                          "Perfect! Thanks 😊"
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Use Cases */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-12">Works For Everything</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="group text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h4 className="font-semibold mb-2">Shopping</h4>
                <p className="text-sm text-gray-600">Clothes, gadgets, books - anything you buy online</p>
              </motion.div>

              <motion.div
                className="group text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h4 className="font-semibold mb-2">Travel</h4>
                <p className="text-sm text-gray-600">Hotels, destinations, restaurants you've loved</p>
              </motion.div>

              <motion.div
                className="group text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍕</span>
                </div>
                <h4 className="font-semibold mb-2">Food & Life</h4>
                <p className="text-sm text-gray-600">Restaurants, recipes, movies, music, and more</p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 