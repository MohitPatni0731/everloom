
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extralight tracking-[0.15em] text-foreground hover:text-primary transition-all duration-500 cursor-pointer relative">
              Radius
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 hover:w-full"></div>
            </h1>
            <div className="flex items-center space-x-8">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-500 font-light tracking-wide">
                Login
              </Button>
              <Button size="sm" className="rounded-full px-10 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-500 font-medium tracking-wide hover:scale-105">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 text-primary text-sm font-medium mb-10 backdrop-blur-sm">
                <MapPin className="w-4 h-4 mr-3" />
                Hyper-local community platform
              </div>
            </div>
            <h2 className="text-8xl md:text-9xl font-extralight tracking-[-0.02em] mb-12 text-foreground leading-[0.85] relative">
              Your neighborhood,
              <br />
              <span className="text-muted-foreground relative bg-gradient-to-r from-muted-foreground via-foreground/80 to-muted-foreground bg-clip-text">
                simplified.
                <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-20 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              Connect with neighbors for life's small moments. Borrow, share, and help within your radius—
              <span className="text-foreground font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text">beautifully simple</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-20 py-8 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group font-medium tracking-wide"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-3 transition-transform duration-500" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground px-12 py-8 rounded-full text-xl transition-all duration-500 hover:bg-gradient-to-r hover:from-accent/20 hover:to-accent/10 backdrop-blur-sm border border-transparent hover:border-border/30 tracking-wide"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <h3 className="text-6xl font-extralight tracking-[-0.01em] text-foreground relative">
                About Radius
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
              </h3>
            </div>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light mt-12 tracking-wide">
              Radius reimagines neighborhood connections for the digital age. We believe the best help comes from those closest to you—
              <span className="text-foreground font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text">literally next door</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="p-12 border-border/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg hover:shadow-2xl transition-all duration-700 group hover:scale-105 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-3xl font-light mb-8 text-foreground tracking-wide">Hyper-Local</h4>
                <p className="text-muted-foreground leading-relaxed text-xl font-light tracking-wide">
                  Connect only with neighbors in your immediate area. Tasks are for people just next door or in your building.
                </p>
              </div>
            </Card>
            
            <Card className="p-12 border-border/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg hover:shadow-2xl transition-all duration-700 group hover:scale-105 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-3xl font-light mb-8 text-foreground tracking-wide">Instant Help</h4>
                <p className="text-muted-foreground leading-relaxed text-xl font-light tracking-wide">
                  Get help with small tasks in minutes. From borrowing tools to quick favors, neighbors are ready to assist.
                </p>
              </div>
            </Card>
            
            <Card className="p-12 border-border/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg hover:shadow-2xl transition-all duration-700 group hover:scale-105 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-3xl font-light mb-8 text-foreground tracking-wide">Community</h4>
                <p className="text-muted-foreground leading-relaxed text-xl font-light tracking-wide">
                  Build genuine connections through small acts of kindness. Foster a real sense of neighborhood community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-40 px-6 bg-gradient-to-br from-muted/20 via-background to-accent/15 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-16">
            <h3 className="text-6xl font-extralight tracking-[-0.01em] text-foreground relative">
              Our Mission
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
            </h3>
          </div>
          <div className="space-y-12">
            <p className="text-3xl text-foreground font-light leading-relaxed tracking-wide">
              We're bringing back the village mentality to modern urban living.
            </p>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-5xl mx-auto font-light tracking-wide">
              In a world where neighbors are strangers, Radius creates genuine connections through simple, everyday interactions. 
              Our platform is designed for the small moments that matter—borrowing a cup of sugar, getting help with groceries, 
              or finding someone to water your plants.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              These micro-interactions build the foundation of strong communities, one small favor at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <h3 className="text-6xl font-extralight tracking-[-0.01em] text-foreground relative">
                Get in Touch
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
              </h3>
            </div>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mt-12 tracking-wide">
              Have questions about Radius? We'd love to hear from you and help you connect with your community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="p-12 border-border/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg text-center hover:shadow-2xl transition-all duration-700 group hover:scale-105 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-medium mb-6 text-foreground tracking-wide">Email</h4>
                <p className="text-muted-foreground text-xl font-light tracking-wide">hello@radius.app</p>
              </div>
            </Card>
            
            <Card className="p-12 border-border/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg text-center hover:shadow-2xl transition-all duration-700 group hover:scale-105 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-medium mb-6 text-foreground tracking-wide">Support</h4>
                <p className="text-muted-foreground text-xl font-light tracking-wide">Live chat support</p>
              </div>
            </Card>
            
            <Card className="p-12 border-border/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg text-center hover:shadow-2xl transition-all duration-700 group hover:scale-105 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <Phone className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-medium mb-6 text-foreground tracking-wide">Phone</h4>
                <p className="text-muted-foreground text-xl font-light tracking-wide">Coming soon</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-gradient-to-br from-primary/8 via-background to-accent/8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-6xl font-extralight tracking-[-0.01em] mb-12 text-foreground leading-tight">
            Ready to connect with your neighbors?
          </h3>
          <p className="text-2xl text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Join Radius today and discover how easy it is to build community, one small favor at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-20 py-8 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 font-medium tracking-wide"
            >
              Sign Up Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-20 py-8 rounded-full text-xl border-border/40 hover:bg-gradient-to-r hover:from-accent/20 hover:to-accent/10 transition-all duration-500 hover:scale-105 font-light tracking-wide backdrop-blur-sm hover:border-border/60"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-20 px-6 bg-gradient-to-br from-muted/10 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h4 className="text-3xl font-extralight tracking-[0.15em] mb-8 text-foreground">Radius</h4>
          <p className="text-muted-foreground font-light text-lg tracking-wide">
            © 2024 Radius. Building community, one neighbor at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
