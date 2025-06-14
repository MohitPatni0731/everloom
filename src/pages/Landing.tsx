
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 border border-gray-200 rounded-full animate-spin-slow opacity-40"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-gray-300 rounded-full animate-spin-reverse opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gray-100 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border border-gray-400 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border-l-2 border-t-2 border-gray-200 rounded-tl-full animate-spin-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-black rounded-full bg-white animate-spin-slow"></div>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">RADIUS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-50">
                Sign In
              </Button>
              <Button size="sm" className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                  Connect with
                  <span className="block text-gray-600">
                    your neighbors
                  </span>
                </h1>
                
                <div className="w-20 h-1 bg-black"></div>
                
                <p className="text-xl leading-relaxed text-gray-600 max-w-lg">
                  Discover, share, and connect with people in your immediate neighborhood. 
                  From borrowing sugar to finding workout partners.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg group">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Unique Spinning Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Central Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full animate-pulse"></div>
                </div>
                
                {/* Orbiting Rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-gray-300 rounded-full animate-spin-slow">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gray-200 rounded-full animate-spin-reverse">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gray-100 rounded-full animate-spin-slow">
                  <div className="absolute -top-1 left-1/4 w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="absolute top-1/4 -right-1 w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="absolute -bottom-1 right-1/4 w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="absolute bottom-1/4 -left-1 w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              How It Works
            </h2>
            <div className="w-12 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Discover",
                description: "Find neighbors, local events, and services within walking distance of your home.",
                icon: <MapPin className="w-6 h-6" />
              },
              {
                number: "02", 
                title: "Connect",
                description: "Send messages, make requests, or offer help to people in your immediate area.",
                icon: <Users className="w-6 h-6" />
              },
              {
                number: "03",
                title: "Build Community",
                description: "Create lasting relationships and a stronger sense of belonging in your neighborhood.",
                icon: <Heart className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-3xl font-black text-gray-300">{feature.number}</span>
                    <div className="text-gray-600 group-hover:text-black transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black leading-none tracking-tight mb-8">
            Bringing back the
            <span className="block text-gray-600">
              neighborhood spirit
            </span>
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            In a world where we know more about strangers online than the people next door, 
            Radius helps you rediscover the joy of local community and meaningful connections.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Get in Touch
            </h2>
            <div className="w-12 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Mail className="w-8 h-8" />, title: "Email", desc: "hello@radius.com" },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Support", desc: "24/7 Help Center" },
              { icon: <Phone className="w-8 h-8" />, title: "Phone", desc: "Coming Soon" },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {contact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black tracking-tight mb-6">
            Ready to meet
            <span className="block">your neighbors?</span>
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of people already connecting in their neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-semibold">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg font-semibold">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-white rounded-full bg-gray-900"></div>
              </div>
              <span className="text-xl font-bold">RADIUS</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Radius. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
