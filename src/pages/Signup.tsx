import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Scale, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to home */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        
        <div className="bg-card border border-border rounded-2xl shadow-legal-lg p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Scale className="h-8 w-8 text-primary mr-3" />
            <span className="text-2xl font-bold text-foreground">LegalFlow</span>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Create your account</h1>
            <p className="text-muted-foreground">Start your free trial today</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input 
                  id="firstName" 
                  placeholder="John"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input 
                  id="lastName" 
                  placeholder="Doe"
                  className="mt-2"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@lawfirm.com"
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a strong password"
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="firmName">Law Firm / Organization</Label>
              <Input 
                id="firmName" 
                placeholder="Your Law Firm"
                className="mt-2"
              />
            </div>
            
            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1 mr-3" />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:text-primary-hover">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:text-primary-hover">Privacy Policy</Link>
              </label>
            </div>
            
            <Button className="w-full btn-hero">
              Create Account
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:text-primary-hover font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;