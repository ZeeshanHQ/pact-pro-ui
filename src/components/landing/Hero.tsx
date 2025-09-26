import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-secondary/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Trusted by 10,000+ legal professionals
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Legal Services
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Streamline your legal practice with AI-powered contract drafting, e-signatures, 
              client management, and billing - all in one professional platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-hero group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <div className="ml-1 flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Setup in 2 minutes</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="slide-in-right relative">
            <div className="relative rounded-2xl overflow-hidden shadow-legal-xl">
              <img 
                src={heroImage} 
                alt="Legal Services Dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-legal-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Contract Signed</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-legal-lg">
              <div className="text-sm text-muted-foreground">AI Assistant</div>
              <div className="text-lg font-semibold">Ready to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;