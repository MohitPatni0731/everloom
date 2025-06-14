import { ArrowRight, MapPin, Users, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden relative font-sans">
      {/* Enhanced Ambient Elements */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-28 left-20 w-[300px] h-[300px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-[90px] animate-float"></div>
        <div className="absolute bottom-20 right-24 w-72 h-72 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-[90px] animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-44 h-44 bg-gradient-to-tr from-muted/35 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-3xl border-b border-border/10 z-50 shadow-elegant">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-playfair text-[1.45rem] md:text-2xl font-semibold tracking-[0.19em] text-foreground hover:text-primary transition-all duration-700 cursor-pointer relative group">
              Radius
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-all duration-700 group-hover:w-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-lg -m-2"></div>
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent/30 font-light tracking-wider text-[0.98rem] py-1.5 px-4 rounded-md">
                Login
              </Button>
              <Button size="sm" className="rounded-full px-6 py-2.5 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/95 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-500 font-semibold tracking-wider text-[0.99rem] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/15 text-primary/80 text-[0.97rem] font-medium mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <MapPin className="w-4 h-4 mr-2.5" />
                Hyper-local community platform
              </div>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-semibold tracking-[-0.018em] mb-8 text-foreground leading-[1] relative">
              Your neighborhood,
              <br />
              <span className="text-muted-foreground relative bg-gradient-to-r from-muted-foreground via-foreground/70 to-muted-foreground bg-clip-text text-4xl md:text-5xl">
                simplified.
                <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </span>
            </h2>
            <p className="text-[1.07rem] md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              Connect with neighbors for life's small moments. Borrow, share, and help within your radius—
              <span className="text-foreground font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text">beautifully simple</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/90 hover:to-primary text-primary-foreground px-12 py-6 rounded-full text-lg shadow-2xl hover:shadow-3xl group font-semibold tracking-wide relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                Get Started
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground px-8 py-6 rounded-full text-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-accent/15 hover:to-accent/8 backdrop-blur-sm border border-transparent hover:border-border/30 tracking-wide hover:scale-105"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 md:py-28 px-6 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <h3 className="font-playfair text-4xl md:text-5xl font-semibold tracking-[-0.014em] text-foreground relative">
                About Radius
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent rounded-full"></span>
              </h3>
            </div>
            <p className="text-[1.03rem] text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light mt-4 tracking-wide">
              Radius reimagines neighborhood connections for the digital age. We believe the best help comes from those closest to you—
              <span className="text-foreground font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text">literally next door</span>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
                icon: <MapPin className="w-10 h-10 text-primary" />,
                title: "Hyper-Local",
                desc: "Connect only with neighbors in your immediate area. Tasks are for people just next door or in your building.",
              }, {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Instant Help",
                desc: "Get help with small tasks in minutes. From borrowing tools to quick favors, neighbors are ready to assist.",
              }, {
                icon: <Heart className="w-10 h-10 text-primary" />,
                title: "Community",
                desc: "Build genuine connections through small acts of kindness. Foster a real sense of neighborhood community.",
              }].map((item, idx) => (
              <Card key={item.title}
                className={`relative p-8 pt-14 border-border/15 bg-gradient-to-br from-card/95 via-card/75 to-card/40 backdrop-blur-2xl rounded-2xl overflow-hidden group hover:scale-[1.025] hover:shadow-premium transition-all duration-700 ${idx % 2 === 1 ? "shadow-elegant" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/7 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/12 via-primary/5 to-transparent rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 shadow-lg animate-fade-in">
                    {item.icon}
                  </div>
                  <h4 className="font-playfair text-xl font-semibold mb-4 text-foreground tracking-wide">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-[0.98rem] font-light tracking-wide">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section id="mission" className="py-24 md:py-28 px-6 bg-gradient-to-br from-muted/15 via-background to-accent/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-9">
            <h3 className="font-playfair text-4xl md:text-5xl font-semibold tracking-[-0.013em] text-foreground relative">
              Our Mission
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent rounded-full"></span>
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground font-playfair font-light leading-relaxed tracking-wide">
              We're bringing back the village mentality to modern urban living.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              In a world where neighbors are strangers, Radius creates genuine connections through simple, everyday interactions. 
              Our platform is designed for the small moments that matter—borrowing a cup of sugar, getting help with groceries, 
              or finding someone to water your plants.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-light tracking-wide">
              These micro-interactions build the foundation of strong communities, one small favor at a time.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <h3 className="font-playfair text-4xl md:text-5xl font-semibold tracking-[-0.013em] text-foreground relative">
                Get in Touch
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent rounded-full"></span>
              </h3>
            </div>
            <p className="text-[1.01rem] text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mt-2 tracking-wide">
              Have questions about Radius? We'd love to hear from you and help you connect with your community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-9">
            {[
              { icon: <Mail className="w-8 h-8 text-primary" />, title: "Email", desc: "hello@radius.app" },
              { icon: <MessageCircle className="w-8 h-8 text-primary" />, title: "Support", desc: "Live chat support" },
              { icon: <Phone className="w-8 h-8 text-primary" />, title: "Phone", desc: "Coming soon" },
            ].map(item => (
              <Card key={item.title} className="p-8 border-border/15 bg-gradient-to-br from-card/90 via-card/60 to-card/35 backdrop-blur-xl text-center hover:shadow-3xl transition-all duration-700 group hover:scale-[1.025] rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/14 via-primary/8 to-transparent rounded-xl flex items-center justify-center mx-auto mb-7 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 shadow-lg">
                    {item.icon}
                  </div>
                  <h4 className="font-playfair text-lg font-semibold mb-3 text-foreground tracking-wide">{item.title}</h4>
                  <p className="text-muted-foreground text-[0.97rem] font-light tracking-wide">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 md:py-28 px-6 bg-gradient-to-br from-primary/7 via-background to-accent/7 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="font-playfair text-4xl md:text-5xl font-semibold tracking-[-0.013em] mb-8 text-foreground leading-tight">
            Ready to connect with your neighbors?
          </h3>
          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Join Radius today and discover how easy it is to build community, one small favor at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/90 hover:to-primary text-primary-foreground px-12 py-5 rounded-full text-lg shadow-2xl hover:shadow-premium font-semibold tracking-wide group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              Sign Up Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-5 rounded-full text-lg border-border/30 hover:bg-gradient-to-r hover:from-accent/15 hover:to-accent/8 transition-all duration-500 hover:scale-105 font-light tracking-wide backdrop-blur-sm hover:border-border/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-border/20 py-12 px-6 bg-gradient-to-br from-muted/8 to-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h4 className="font-playfair text-xl font-semibold tracking-[0.18em] mb-3 text-foreground">Radius</h4>
          <p className="text-muted-foreground font-light text-[0.95rem] tracking-wide">
            © 2024 Radius. Building community, one neighbor at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Landing;
