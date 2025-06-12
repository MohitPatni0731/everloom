
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden relative">
      {/* Ambient background elements */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-br from-muted/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-3xl border-b border-border/10 z-50 shadow-elegant">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extralight tracking-[0.2em] text-foreground hover:text-primary transition-all duration-700 cursor-pointer relative group">
              Radius
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-all duration-700 group-hover:w-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg -m-2"></div>
            </h1>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-500 font-light tracking-wider text-sm backdrop-blur-sm">
                Login
              </Button>
              <Button size="sm" className="rounded-full px-8 py-2.5 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/95 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-500 font-medium tracking-wider hover:scale-105 text-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-10">
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/8 via-primary/4 to-transparent border border-primary/15 text-primary text-sm font-medium mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <MapPin className="w-4 h-4 mr-2.5" />
                Hyper-local community platform
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-extralight tracking-[-0.025em] mb-10 text-foreground leading-[0.88] relative">
              Your neighborhood,
              <br />
              <span className="text-muted-foreground relative bg-gradient-to-r from-muted-foreground via-foreground/70 to-muted-foreground bg-clip-text">
                simplified.
                <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              Connect with neighbors for life's small moments. Borrow, share, and help within your radius—
              <span className="text-foreground font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text">beautifully simple</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/95 hover:to-primary text-primary-foreground px-16 py-6 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group font-medium tracking-wide relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                Get Started
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground px-10 py-6 rounded-full text-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-accent/15 hover:to-accent/8 backdrop-blur-sm border border-transparent hover:border-border/20 tracking-wide hover:scale-105"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/3 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h3 className="text-5xl font-extralight tracking-[-0.015em] text-foreground relative">
                About Radius
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mt-8 tracking-wide">
              Radius reimagines neighborhood connections for the digital age. We believe the best help comes from those closest to you—
              <span className="text-foreground font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text">literally next door</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/30 backdrop-blur-xl hover:shadow-2xl transition-all duration-700 group hover:scale-[1.02] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-light mb-6 text-foreground tracking-wide">Hyper-Local</h4>
                <p className="text-muted-foreground leading-relaxed text-base font-light tracking-wide">
                  Connect only with neighbors in your immediate area. Tasks are for people just next door or in your building.
                </p>
              </div>
            </Card>
            
            <Card className="p-10 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/30 backdrop-blur-xl hover:shadow-2xl transition-all duration-700 group hover:scale-[1.02] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-light mb-6 text-foreground tracking-wide">Instant Help</h4>
                <p className="text-muted-foreground leading-relaxed text-base font-light tracking-wide">
                  Get help with small tasks in minutes. From borrowing tools to quick favors, neighbors are ready to assist.
                </p>
              </div>
            </Card>
            
            <Card className="p-10 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/30 backdrop-blur-xl hover:shadow-2xl transition-all duration-700 group hover:scale-[1.02] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-light mb-6 text-foreground tracking-wide">Community</h4>
                <p className="text-muted-foreground leading-relaxed text-base font-light tracking-wide">
                  Build genuine connections through small acts of kindness. Foster a real sense of neighborhood community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6 bg-gradient-to-br from-muted/15 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"></div>
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-12">
            <h3 className="text-5xl font-extralight tracking-[-0.015em] text-foreground relative">
              Our Mission
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </h3>
          </div>
          <div className="space-y-8">
            <p className="text-2xl text-foreground font-light leading-relaxed tracking-wide">
              We're bringing back the village mentality to modern urban living.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              In a world where neighbors are strangers, Radius creates genuine connections through simple, everyday interactions. 
              Our platform is designed for the small moments that matter—borrowing a cup of sugar, getting help with groceries, 
              or finding someone to water your plants.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
              These micro-interactions build the foundation of strong communities, one small favor at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h3 className="text-5xl font-extralight tracking-[-0.015em] text-foreground relative">
                Get in Touch
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mt-8 tracking-wide">
              Have questions about Radius? We'd love to hear from you and help you connect with your community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/30 backdrop-blur-xl text-center hover:shadow-2xl transition-all duration-700 group hover:scale-[1.02] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-18 h-18 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-5 text-foreground tracking-wide">Email</h4>
                <p className="text-muted-foreground text-base font-light tracking-wide">hello@radius.app</p>
              </div>
            </Card>
            
            <Card className="p-10 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/30 backdrop-blur-xl text-center hover:shadow-2xl transition-all duration-700 group hover:scale-[1.02] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-18 h-18 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-5 text-foreground tracking-wide">Support</h4>
                <p className="text-muted-foreground text-base font-light tracking-wide">Live chat support</p>
              </div>
            </Card>
            
            <Card className="p-10 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/30 backdrop-blur-xl text-center hover:shadow-2xl transition-all duration-700 group hover:scale-[1.02] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-18 h-18 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-5 text-foreground tracking-wide">Phone</h4>
                <p className="text-muted-foreground text-base font-light tracking-wide">Coming soon</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary/6 via-background to-accent/6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/6 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-extralight tracking-[-0.015em] mb-10 text-foreground leading-tight">
            Ready to connect with your neighbors?
          </h3>
          <p className="text-lg text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Join Radius today and discover how easy it is to build community, one small favor at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/95 hover:to-primary text-primary-foreground px-16 py-6 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 font-medium tracking-wide relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              Sign Up Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-16 py-6 rounded-full text-lg border-border/30 hover:bg-gradient-to-r hover:from-accent/15 hover:to-accent/8 transition-all duration-500 hover:scale-105 font-light tracking-wide backdrop-blur-sm hover:border-border/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-16 px-6 bg-gradient-to-br from-muted/8 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h4 className="text-2xl font-extralight tracking-[0.2em] mb-6 text-foreground">Radius</h4>
          <p className="text-muted-foreground font-light text-base tracking-wide">
            © 2024 Radius. Building community, one neighbor at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
