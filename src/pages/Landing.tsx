
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden relative">
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-8 w-32 h-32 border border-gray-100 rounded-full animate-spin-slow opacity-60"></div>
        <div className="absolute top-1/4 right-16 w-20 h-20 border-2 border-gray-200 rounded-full animate-spin-reverse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full animate-float shadow-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border-l-2 border-t-2 border-gray-300 rotate-45 animate-gentle-pulse"></div>
        <div className="absolute bottom-24 right-12 w-24 h-24 border-l-3 border-t-3 border-gray-200 rounded-tl-full animate-spin-slow opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-gray-200 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-1/2 left-8 w-8 h-8 border border-gray-300 rounded-full animate-pulse opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-black rounded-full shadow-lg"></div>
                <div className="absolute -top-1 -right-1 w-5 h-5 border-2 border-black rounded-full bg-white animate-spin-slow shadow-sm"></div>
              </div>
              <h1 className="text-3xl font-black tracking-tighter">RADIUS</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-black hover:bg-gray-50 font-medium px-6">
                Sign In
              </Button>
              <Button size="sm" className="bg-black text-white hover:bg-gray-800 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-28 px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="w-24 h-1.5 bg-gradient-to-r from-black to-gray-400 rounded-full"></div>
                  <h1 className="text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter">
                    Connect with
                    <span className="block text-gray-500 italic font-light">
                      your neighbors
                    </span>
                  </h1>
                </div>
                
                <p className="text-xl leading-relaxed text-gray-600 max-w-xl font-light">
                  Discover, share, and connect with people in your immediate neighborhood. 
                  From borrowing sugar to finding workout partners — build real relationships.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-5 text-lg font-semibold group shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-12 py-5 text-lg font-medium transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Enhanced Spinning Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-96 h-96">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black rounded-full shadow-2xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full animate-gentle-pulse shadow-inner"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
                
                {/* Inner Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-gray-300 rounded-full animate-spin-slow shadow-sm">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Middle Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-gray-200 rounded-full animate-spin-reverse">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full shadow-md"></div>
                  <div className="absolute top-1/4 -right-2 transform w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="absolute -bottom-2 right-1/3 transform w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-3/4 left-1/4 transform w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                
                {/* Outer Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-100 rounded-full animate-spin-slow opacity-80">
                  <div className="absolute -top-1.5 left-1/5 w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
                  <div className="absolute top-1/5 -right-1.5 w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="absolute -bottom-1.5 right-1/4 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="absolute bottom-1/5 -left-1.5 w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-1/3 left-1/6 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                </div>

                {/* Ultra Outer Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-50 rounded-full animate-spin-reverse opacity-60">
                  <div className="absolute -top-1 left-1/8 w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-1/8 -right-1 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                  <div className="absolute -bottom-1 right-1/8 w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="absolute bottom-1/8 -left-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-gradient-to-b from-gray-25 to-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-1.5 bg-gradient-to-r from-black to-gray-400 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-5xl font-black tracking-tighter mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Three simple steps to transform your neighborhood experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Discover",
                description: "Find neighbors, local events, and services within walking distance of your home.",
                icon: <MapPin className="w-7 h-7" />
              },
              {
                number: "02", 
                title: "Connect",
                description: "Send messages, make requests, or offer help to people in your immediate area.",
                icon: <Users className="w-7 h-7" />
              },
              {
                number: "03",
                title: "Build Community",
                description: "Create lasting relationships and a stronger sense of belonging in your neighborhood.",
                icon: <Heart className="w-7 h-7" />
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-4xl font-black text-gray-200 group-hover:text-gray-300 transition-colors duration-300">{feature.number}</span>
                      <div className="text-gray-400 group-hover:text-black transition-colors duration-300 p-2 bg-gray-50 rounded-xl group-hover:bg-black group-hover:text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-25 to-transparent opacity-50"></div>
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <div className="w-20 h-1.5 bg-gradient-to-r from-black to-gray-400 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-12">
            Bringing back the
            <span className="block text-gray-500 italic font-light">
              neighborhood spirit
            </span>
          </h2>
          <p className="text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-light">
            In a world where we know more about strangers online than the people next door, 
            Radius helps you rediscover the joy of local community and meaningful connections.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 bg-gradient-to-b from-gray-25 to-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-16 h-1.5 bg-gradient-to-r from-black to-gray-400 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-5xl font-black tracking-tighter mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 font-light">
              We're here to help you connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Mail className="w-8 h-8" />, title: "Email", desc: "hello@radius.com" },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Support", desc: "24/7 Help Center" },
              { icon: <Phone className="w-8 h-8" />, title: "Phone", desc: "Coming Soon" },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-2xl mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {contact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 border border-gray-100 rounded-full animate-spin-slow opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border border-gray-100 rounded-full animate-spin-reverse opacity-40"></div>
        </div>
        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <div className="w-20 h-1.5 bg-gradient-to-r from-black to-gray-400 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-6xl lg:text-7xl font-black tracking-tighter mb-8">
            Ready to meet
            <span className="block italic font-light text-gray-500">your neighbors?</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-16 font-light max-w-3xl mx-auto">
            Join thousands of people already connecting in their neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-16 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-16 py-6 text-xl font-medium transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full shadow-lg"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-white rounded-full bg-gray-900 shadow-md"></div>
              </div>
              <span className="text-2xl font-black tracking-tight">RADIUS</span>
            </div>
            <div className="flex space-x-8 text-gray-400 font-light">
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Contact</a>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 font-light text-lg">
              © 2024 Radius. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
