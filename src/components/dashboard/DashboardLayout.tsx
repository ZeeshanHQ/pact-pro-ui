import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, User } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 lg:ml-0">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents, clients..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
            </Button>
            
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;