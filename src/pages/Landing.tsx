
import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border/40 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-tight text-foreground">
              Radius
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
              <Button size="sm" className="rounded-full px-6">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-light tracking-tight mb-6 text-foreground leading-tight">
              Your neighborhood,
              <br />
              <span className="text-muted-foreground">simplified.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Connect with neighbors for life's small moments. Borrow, share, and help within your radius.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-full text-lg shadow-sm transition-all duration-200 hover:shadow-md group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light tracking-tight mb-6 text-foreground">
              About Radius
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Radius reimagines neighborhood connections for the digital age. We believe the best help comes from those closest to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-4 text-foreground">Hyper-Local</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Connect only with neighbors in your immediate area. Tasks are for people just next door or in your building.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-4 text-foreground">Instant Help</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Get help with small tasks in minutes. From borrowing tools to quick favors, neighbors are ready to assist.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-4 text-foreground">Community</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Build genuine connections through small acts of kindness. Foster a real sense of neighborhood community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-light tracking-tight mb-8 text-foreground">
            Our Mission
          </h3>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p className="text-xl mb-8">
              We're bringing back the village mentality to modern urban living. In a world where neighbors are strangers, 
              Radius creates genuine connections through simple, everyday interactions.
            </p>
            <p className="text-lg">
              Our platform is designed for the small moments that matter – borrowing a cup of sugar, getting help with groceries, 
              or finding someone to water your plants. These micro-interactions build the foundation of strong communities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light tracking-tight mb-6 text-foreground">
              Get in Touch
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about Radius? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-foreground">Email</h4>
              <p className="text-muted-foreground">hello@radius.app</p>
            </Card>
            
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-foreground">Support</h4>
              <p className="text-muted-foreground">Live chat support</p>
            </Card>
            
            <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm text-center hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-foreground">Phone</h4>
              <p className="text-muted-foreground">Coming soon</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-light tracking-tight mb-6 text-foreground">
            Ready to connect with your neighbors?
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Radius today and discover how easy it is to build community, one small favor at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-full text-lg shadow-sm transition-all duration-200 hover:shadow-md"
            >
              Sign Up Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-4 rounded-full text-lg border-border/40 hover:bg-accent transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-xl font-light tracking-tight mb-4 text-foreground">Radius</h4>
          <p className="text-muted-foreground text-sm">
            © 2024 Radius. Building community, one neighbor at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
