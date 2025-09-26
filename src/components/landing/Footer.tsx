import { Button } from "@/components/ui/button";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 mr-3" />
              <span className="text-2xl font-bold">LegalFlow</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Professional legal services platform that helps small businesses and solo lawyers 
              streamline their practice with modern tools and AI-powered automation.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent-hover">
              Start Free Trial
            </Button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 LegalFlow. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-primary-foreground/60">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@legalflow.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>1-800-LEGAL-01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;