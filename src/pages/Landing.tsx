
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle, Check, Circle, Square, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-white/5 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/20 rotate-12"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 border-l-2 border-t-2 border-white/10 rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rotate-45"></div>
              <h1 className="text-3xl font-bold tracking-tight">RADIUS</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 border-0">
                SIGN IN
              </Button>
              <Button size="sm" className="bg-white text-black hover:bg-white/90 px-8 py-3 font-bold tracking-wide">
                START NOW
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Revolutionary Hero Section */}
      <section className="relative pt-32 pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 px-6 py-3 border border-white/20 rounded-none bg-white/5">
                <div className="w-2 h-2 bg-white animate-pulse"></div>
                <span className="text-sm font-mono tracking-widest uppercase">NEIGHBORHOOD PROTOCOL</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                  YOUR
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    RADIUS
                  </span>
                  <span className="block text-4xl lg:text-5xl font-light tracking-normal mt-4">
                    REDEFINED
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-white"></div>
                
                <p className="text-xl leading-relaxed text-white/70 max-w-lg font-light">
                  Connect. Share. Thrive. The hyperlocal network that transforms strangers into neighbors through micro-interactions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-6 text-lg font-bold tracking-wider rounded-none group">
                  LAUNCH RADIUS
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-bold tracking-wider rounded-none">
                  VIEW PROTOCOL
                </Button>
              </div>
            </div>

            {/* Right Column - Abstract Visual */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white rounded-full animate-spin-slow">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full"></div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full animate-spin-reverse">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-white/60 rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/40 rounded-full"></div>
                  <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Corner Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-white/30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-r-2 border-t-2 border-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Features Grid */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-6">
              THE SYSTEM
            </h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "HYPERLOCAL",
                description: "Ultra-precise geographic targeting. Connect only with immediate neighbors within your defined radius.",
                icon: <MapPin className="w-8 h-8" />
              },
              {
                number: "02", 
                title: "INSTANT",
                description: "Real-time micro-interactions. Request, offer, connect - all within seconds of posting.",
                icon: <Users className="w-8 h-8" />
              },
              {
                number: "03",
                title: "COMMUNITY",
                description: "Transform anonymous proximity into meaningful neighborhood bonds through shared experiences.",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="border border-white/20 bg-white/5 p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/40">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl font-black text-white/30">{feature.number}</span>
                    <div className="text-white/60 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - Bold Typography */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-12">
            REBUILDING
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
              COMMUNITY
            </span>
            <span className="block text-3xl lg:text-4xl font-light mt-6 tracking-normal">
              ONE CONNECTION AT A TIME
            </span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          <p className="text-2xl leading-relaxed text-black/70 font-light max-w-4xl mx-auto">
            In an age of digital isolation, Radius creates authentic human connections through the simple act of neighboring. Every small interaction builds the foundation of stronger communities.
          </p>
        </div>
      </section>

      {/* Contact - Geometric Layout */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-6">
              CONNECT
            </h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Mail className="w-12 h-12" />, title: "EMAIL", desc: "radius@protocol.com", shape: "square" },
              { icon: <MessageCircle className="w-12 h-12" />, title: "CHAT", desc: "24/7 SUPPORT", shape: "circle" },
              { icon: <Phone className="w-12 h-12" />, title: "CALL", desc: "COMING SOON", shape: "triangle" },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className={`w-24 h-24 border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors ${
                    contact.shape === 'circle' ? 'rounded-full' : contact.shape === 'triangle' ? 'rotate-45' : ''
                  }`}>
                    <div className={contact.shape === 'triangle' ? '-rotate-45' : ''}>
                      {contact.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black tracking-wider mb-2">
                  {contact.title}
                </h3>
                <p className="text-white/60 font-mono text-sm">
                  {contact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Powerful and Direct */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-black tracking-tighter mb-8">
            READY TO
            <span className="block">ACTIVATE?</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          <p className="text-xl text-black/70 mb-16 font-light">
            Join the neighborhood revolution. No waiting lists. No gatekeepers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 px-16 py-8 text-xl font-black tracking-wider rounded-none">
              LAUNCH NOW
            </Button>
            <Button variant="outline" size="lg" className="border-black/30 text-black hover:bg-black hover:text-white px-16 py-8 text-xl font-black tracking-wider rounded-none">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-6 h-6 bg-white rotate-45"></div>
              <span className="text-2xl font-bold tracking-tight">RADIUS</span>
            </div>
            <div className="flex space-x-8 text-sm text-white/60 font-mono tracking-wider">
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">PROTOCOL</a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm font-mono">
              © 2024 RADIUS PROTOCOL. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
