import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black overflow-hidden relative">
      {/* Sophisticated Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-12 w-40 h-40 bg-gradient-to-br from-gray-100/30 to-gray-200/20 rounded-full animate-float-gentle blur-sm"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-tl from-gray-200/40 to-transparent rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-gray-200/50 rounded-full animate-spin-ultra-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-gray-300/20 to-gray-100/30 rounded-full animate-drift"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-gray-300/30 rounded-full animate-rotate-reverse"></div>
        <div className="absolute top-1/4 left-1/5 w-8 h-8 bg-gray-400/20 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Ultra-Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 z-50 shadow-luxury">
        <div className="max-w-8xl mx-auto px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <img 
                  src="/logo.png" 
                  alt="EVERLOOM Logo" 
                  className="w-20 h-20 group-hover:scale-105 transition-all duration-500 filter contrast-125 brightness-110"
                />
              </div>
              <h1 className="text-5xl font-medium italic tracking-[0.05em] text-black relative" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <span className="relative">
                  everloom
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"></div>
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-8">
              <SignedOut>
                <SignInButton mode="redirect">
                  <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50/50 font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-md">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="redirect">
                  <Button size="lg" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 px-10 py-3 rounded-xl shadow-luxury hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                      userButtonPopoverCard: "shadow-2xl border-0 bg-white/90 backdrop-blur-sm",
                      userButtonPopoverActionButton: "hover:bg-gray-50"
                    }
                  }}
                  userProfileUrl="/profile"
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered */}
      <section className="relative pt-40 pb-32 px-12 lg:px-16 z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <div className="space-y-16">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="w-32 h-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 rounded-full shadow-md mx-auto"></div>
                <h1 className="text-6xl lg:text-7xl font-black leading-[0.8] tracking-tighter">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
                    Connect
                  </span>
                  <span className="block text-gray-400 italic font-light text-5xl lg:text-6xl mt-6">
                    with neighbors
                  </span>
                </h1>
              </div>
              
              <p className="text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-light tracking-wide">
                Discover meaningful connections in your immediate neighborhood. 
                From sharing resources to building friendships — create a community that matters.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <SignedOut>
                <SignUpButton mode="redirect">
                  <Button
                    onClick={() => {
                      try {
                        // Handle navigation without logging
                        window.location.href = '/dashboard';
                      } catch (error) {
                        // Silent error handling for production
                      }
                    }}
                    size="lg" 
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 px-16 py-6 text-lg font-semibold shadow-luxury hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:scale-105"
                  >
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 px-16 py-6 text-lg font-semibold group shadow-luxury hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:scale-105"
                  onClick={() => {
                    try {
                      navigate('/dashboard');
                    } catch (error) {
                      // Fallback to window.location if navigate fails
                      window.location.href = '/dashboard';
                    }
                  }}
                >
                  Go to Dashboard
                  <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </SignedIn>
              <Button size="lg" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 px-16 py-6 text-lg font-semibold shadow-luxury hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Luxury Design */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-25/30 to-transparent"></div>
        <div className="max-w-8xl mx-auto px-12 lg:px-16 relative z-10">
          <div className="text-center mb-24">
            <div className="w-20 h-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 mx-auto mb-8 rounded-full shadow-md"></div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Three elegant steps to transform your neighborhood experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: "Discover",
                description: "Find neighbors, local events, and services within walking distance of your home.",
                icon: <MapPin className="w-8 h-8" />
              },
              {
                number: "02", 
                title: "Connect",
                description: "Send messages, make requests, or offer help to people in your immediate area.",
                icon: <Users className="w-8 h-8" />
              },
              {
                number: "03",
                title: "Build Community",
                description: "Create lasting relationships and a stronger sense of belonging in your neighborhood.",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((feature, index) => (
              <div key={index} className="group relative h-full">
                <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-gray-200/80 relative overflow-hidden transform hover:scale-105 h-full flex flex-col">
                  {/* Luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-transparent to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-10">
                      <span className="text-4xl font-black text-gray-200 group-hover:text-gray-300 transition-colors duration-500">{feature.number}</span>
                      <div className="text-gray-400 group-hover:text-white transition-all duration-500 p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-900 shadow-md group-hover:shadow-xl">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-gray-900 transition-colors duration-500 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-lg flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - Ultra Premium */}
      <section className="py-40 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-25/50 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-gray-200/30 to-transparent rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-12 lg:px-16 text-center relative z-10">
          <div className="w-24 h-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 mx-auto mb-12 rounded-full shadow-md"></div>
          <h2 className="text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter mb-16">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Bringing back the
            </span>
            <span className="block text-gray-400 italic font-light text-5xl lg:text-6xl mt-6">
              neighborhood spirit
            </span>
          </h2>
          <p className="text-2xl leading-relaxed text-gray-600 max-w-5xl mx-auto font-light tracking-wide">
            In a world where we know more about strangers online than the people next door, 
            EVERLOOM helps you rediscover the joy of local community and meaningful connections.
          </p>
        </div>
      </section>

      {/* Contact Section - Luxury */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-8xl mx-auto px-12 lg:px-16">
          <div className="text-center mb-24">
            <div className="w-20 h-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 mx-auto mb-8 rounded-full shadow-md"></div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 font-light">
              We're here to help you connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Mail className="w-9 h-9" />, title: "Email", desc: "mohitpatni786@gmail.com", link: "mailto:mohitpatni786@gmail.com" },
              { icon: <Linkedin className="w-9 h-9" />, title: "Linkedin", desc: "Connect with us", link: "https://www.linkedin.com/company/ever-loom/" },
              { icon: <Phone className="w-9 h-9" />, title: "Phone", desc: "Coming Soon", link: null },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-gray-200/80 transform hover:scale-105">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl mb-8 group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-900 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl">
                        {contact.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 tracking-tight">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 font-light text-lg">
                        {contact.desc}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-gray-200/80 transform hover:scale-105">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl mb-8 group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-900 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl">
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 tracking-tight">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 font-light text-lg">
                      {contact.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Masterpiece */}
      <section className="py-40 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-24 left-16 w-56 h-56 border border-gray-100/30 rounded-full animate-orbit-ultra-slow opacity-20 blur-sm"></div>
          <div className="absolute bottom-24 right-16 w-40 h-40 border border-gray-200/40 rounded-full animate-orbit-reverse-slow opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-gray-100/20 to-transparent rounded-full blur-xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-12 lg:px-16 text-center relative z-10">
          <div className="w-24 h-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 mx-auto mb-12 rounded-full shadow-md"></div>
          <h2 className="text-6xl lg:text-7xl font-black tracking-tighter mb-12">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Ready to meet
            </span>
            <span className="block italic font-light text-gray-400 text-5xl lg:text-6xl mt-6">your neighbors?</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-20 font-light max-w-4xl mx-auto leading-relaxed">
            Join thousands of people already connecting in their neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <SignedOut>
              <SignUpButton mode="redirect">
                <Button size="lg" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 px-20 py-8 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl transform hover:scale-105">
                  Get Started Free
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 px-20 py-8 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl transform hover:scale-105"
                onClick={() => window.location.href = '/dashboard'}
              >
                Go to Dashboard
              </Button>
            </SignedIn>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-20 py-8 text-xl font-medium transition-all duration-500 rounded-2xl hover:shadow-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Premium */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-3">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-3 md:mb-0">
              <div className="relative group">
                <img 
                  src="/logo.png" 
                  alt="EVERLOOM Logo" 
                  className="w-10 h-10 group-hover:scale-105 transition-all duration-500 filter contrast-125 brightness-110"
                />
              </div>
              <span className="text-xl font-medium italic tracking-[0.05em] bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>everloom</span>
            </div>
            <div className="flex space-x-5 text-gray-400 font-light text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
