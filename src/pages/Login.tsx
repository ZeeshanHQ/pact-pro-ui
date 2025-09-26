import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Scale, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
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
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your legal workspace</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="mt-2"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link to="/reset-password" className="text-sm text-primary hover:text-primary-hover">
                Forgot password?
              </Link>
            </div>
            
            <Button className="w-full btn-hero">
              Sign In
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/signup" className="text-primary hover:text-primary-hover font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;