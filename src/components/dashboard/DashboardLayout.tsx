import { ReactNode } from "react";
import EnhancedSidebar from "./EnhancedSidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, User, Moon, Sun, Settings } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <EnhancedSidebar />
      
      <div className="flex-1 lg:ml-0">
        {/* Enhanced Top bar */}
        <header className="h-16 bg-card/90 backdrop-blur-md border-b border-border flex items-center justify-between px-6 shadow-legal-sm relative z-10">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search documents, clients, templates..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm hover:bg-background"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="relative group hover:shadow-legal-md transition-all duration-300">
              <Bell className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs animate-pulse"></span>
            </Button>
            
            <Button variant="outline" size="sm" className="group hover:shadow-legal-md transition-all duration-300">
              <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-500" />
            </Button>
            
            <Button variant="outline" size="sm" className="group hover:shadow-legal-md transition-all duration-300">
              <User className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </header>

        {/* Main content with enhanced styling */}
        <main className="p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2 pointer-events-none"></div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;