
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extralight tracking-[0.1em] text-foreground hover:text-primary transition-colors duration-300">
              Radius
            </h1>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 font-light">
                Login
              </Button>
              <Button size="sm" className="rounded-full px-8 py-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                Hyper-local community platform
              </div>
            </div>
            <h2 className="text-7xl md:text-8xl font-extralight tracking-tight mb-8 text-foreground leading-[0.9] relative">
              Your neighborhood,
              <br />
              <span className="text-muted-foreground relative">
                simplified.
                <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto font-light">
              Connect with neighbors for life's small moments. Borrow, share, and help within your radius—
              <span className="text-foreground font-medium">beautifully simple</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group font-medium"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground px-8 py-6 rounded-full text-lg transition-all duration-300 hover:bg-accent/30"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h3 className="text-5xl font-extralight tracking-tight text-foreground relative">
                About Radius
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mt-8">
              Radius reimagines neighborhood connections for the digital age. We believe the best help comes from those closest to you—
              <span className="text-foreground font-medium">literally next door</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-10 border-border/30 bg-card/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-light mb-6 text-foreground tracking-wide">Hyper-Local</h4>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  Connect only with neighbors in your immediate area. Tasks are for people just next door or in your building.
                </p>
              </div>
            </Card>
            
            <Card className="p-10 border-border/30 bg-card/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-light mb-6 text-foreground tracking-wide">Instant Help</h4>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  Get help with small tasks in minutes. From borrowing tools to quick favors, neighbors are ready to assist.
                </p>
              </div>
            </Card>
            
            <Card className="p-10 border-border/30 bg-card/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-light mb-6 text-foreground tracking-wide">Community</h4>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  Build genuine connections through small acts of kindness. Foster a real sense of neighborhood community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6 bg-gradient-to-br from-muted/30 via-background to-accent/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block mb-12">
            <h3 className="text-5xl font-extralight tracking-tight text-foreground relative">
              Our Mission
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h3>
          </div>
          <div className="space-y-10">
            <p className="text-2xl text-foreground font-light leading-relaxed">
              We're bringing back the village mentality to modern urban living.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              In a world where neighbors are strangers, Radius creates genuine connections through simple, everyday interactions. 
              Our platform is designed for the small moments that matter—borrowing a cup of sugar, getting help with groceries, 
              or finding someone to water your plants.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              These micro-interactions build the foundation of strong communities, one small favor at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h3 className="text-5xl font-extralight tracking-tight text-foreground relative">
                Get in Touch
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light mt-8">
              Have questions about Radius? We'd love to hear from you and help you connect with your community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-10 border-border/30 bg-card/60 backdrop-blur-sm text-center hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-foreground tracking-wide">Email</h4>
              <p className="text-muted-foreground text-lg font-light">hello@radius.app</p>
            </Card>
            
            <Card className="p-10 border-border/30 bg-card/60 backdrop-blur-sm text-center hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-foreground tracking-wide">Support</h4>
              <p className="text-muted-foreground text-lg font-light">Live chat support</p>
            </Card>
            
            <Card className="p-10 border-border/30 bg-card/60 backdrop-blur-sm text-center hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-foreground tracking-wide">Phone</h4>
              <p className="text-muted-foreground text-lg font-light">Coming soon</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h3 className="text-5xl font-extralight tracking-tight mb-8 text-foreground leading-tight">
            Ready to connect with your neighbors?
          </h3>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Join Radius today and discover how easy it is to build community, one small favor at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-medium"
            >
              Sign Up Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-16 py-6 rounded-full text-lg border-border/40 hover:bg-accent/30 transition-all duration-300 hover:scale-105 font-light"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16 px-6 bg-gradient-to-br from-muted/20 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-2xl font-extralight tracking-[0.1em] mb-6 text-foreground">Radius</h4>
          <p className="text-muted-foreground font-light">
            © 2024 Radius. Building community, one neighbor at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
