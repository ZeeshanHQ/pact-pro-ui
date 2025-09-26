import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center mesh-gradient overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Floating Status Indicators */}
        <div className="float-element -top-8 left-4 lg:left-8 animate-bounce" style={{animationDelay: '1s'}}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">Trusted by 10,000+ legal professionals</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 slide-up-stagger" style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary mr-2" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI-Powered Legal Platform
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Legal Services</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
                  Simplified
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Streamline your legal practice with <strong className="text-foreground">AI-powered contract drafting</strong>, 
                e-signatures, client management, and billing - all in one professional platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-up-stagger" style={{animationDelay: '0.4s'}}>
              <Button className="btn-hero group text-lg px-8 py-4">
                <Zap className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="group text-lg px-8 py-4 hover:bg-card hover:shadow-legal-md">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground slide-up-stagger" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-foreground">4.9</span>
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span className="font-medium">No credit card required</span>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span className="font-medium">Setup in 2 minutes</span>
            </div>
          </div>
          
          {/* Enhanced Image Section */}
          <div className="relative slide-up-stagger" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-legal-xl hover:shadow-glow transition-all duration-500 group">
                <img 
                  src={heroImage} 
                  alt="Legal Services Dashboard" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20"></div>
              </div>
              
              {/* Floating Elements with Better Contrast */}
              <div className="float-element -top-6 -right-6 bg-card/95 border border-success/30 shadow-legal-lg backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-success">Contract Signed</span>
                </div>
              </div>
              
              <div className="float-element -bottom-6 -left-6 bg-card/95 border border-primary/30 shadow-legal-lg backdrop-blur-md" style={{animationDelay: '2s'}}>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground font-medium">AI Assistant</div>
                  <div className="text-lg font-bold text-primary">Ready to help</div>
                </div>
              </div>
              
              {/* Additional floating element */}
              <div className="float-element top-1/2 -right-4 bg-card/95 border border-accent/30 shadow-legal-lg backdrop-blur-md" style={{animationDelay: '4s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Documents</div>
                    <div className="text-sm font-bold text-foreground">124 Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;