import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  FileText, 
  File, 
  PenTool, 
  CreditCard, 
  Settings, 
  Scale,
  Menu,
  X,
  Bot,
  BarChart3,
  Users,
  Briefcase,
  Calendar,
  Bell,
  LogOut,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { 
    name: "Dashboard", 
    href: "/dashboard", 
    icon: Home,
    badge: null
  },
  { 
    name: "Templates", 
    href: "/dashboard/templates", 
    icon: FileText,
    badge: "120+"
  },
  { 
    name: "Documents", 
    href: "/dashboard/documents", 
    icon: File,
    badge: "47"
  },
  { 
    name: "E-Signatures", 
    href: "/dashboard/esign", 
    icon: PenTool,
    badge: "8"
  },
  { 
    name: "Client Management", 
    href: "/dashboard/clients", 
    icon: Users,
    badge: null
  },
  { 
    name: "Analytics", 
    href: "/dashboard/analytics", 
    icon: BarChart3,
    badge: null
  },
  { 
    name: "Calendar", 
    href: "/dashboard/calendar", 
    icon: Calendar,
    badge: null
  },
  { 
    name: "Billing", 
    href: "/dashboard/billing", 
    icon: CreditCard,
    badge: null
  },
  { 
    name: "Settings", 
    href: "/dashboard/settings", 
    icon: Settings,
    badge: null
  },
];

const EnhancedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-legal-lg hover:shadow-legal-glow transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 bg-sidebar/95 backdrop-blur-xl border-r border-sidebar-border shadow-legal-xl transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'w-20' : 'w-72'}
        lg:translate-x-0 lg:static lg:inset-0
        transition-all duration-500 ease-in-out
      `}>
        <div className="flex flex-col h-full">
          {/* Logo & Collapse Button */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-sidebar-border/50">
            <div className={`flex items-center transition-all duration-300 ${isCollapsed ? 'justify-center w-full' : ''}`}>
              <div className="relative">
                <Scale className="h-8 w-8 text-sidebar-primary" />
                <div className="absolute -inset-1 bg-sidebar-primary/20 rounded-full scale-0 hover:scale-100 transition-transform duration-300"></div>
              </div>
              {!isCollapsed && (
                <span className="text-xl font-bold text-sidebar-foreground ml-3 animate-fade-in">
                  LegalFlow
                </span>
              )}
            </div>
            
            {!isOpen && (
              <Button
                variant="outline"
                size="sm"
                className="hidden lg:flex h-8 w-8 p-0 border-sidebar-border/50 hover:bg-sidebar-accent"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* AI Assistant Card */}
          {!isCollapsed && (
            <div className="mx-4 my-4">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-4 relative overflow-hidden group hover:shadow-legal-glow transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <Bot className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-semibold text-sidebar-foreground">AI Assistant</span>
                  </div>
                  <p className="text-xs text-sidebar-foreground/70 mb-3">
                    Ask me anything about contracts, legal documents, or regulations.
                  </p>
                  <Button size="sm" className="w-full text-xs bg-primary/90 hover:bg-primary">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`
                    group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden
                    ${isActive 
                      ? 'bg-sidebar-accent text-sidebar-primary shadow-legal-sm border border-sidebar-primary/20' 
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/70 hover:text-sidebar-primary'
                    }
                    ${isCollapsed ? 'justify-center' : ''}
                  `}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-sidebar-primary rounded-r-full"></div>
                  )}
                  
                  <div className="relative">
                    <item.icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-sidebar-primary' : ''}`} />
                    {item.badge && (
                      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  {!isCollapsed && (
                    <div className="ml-3 flex-1 flex items-center justify-between">
                      <span className="animate-fade-in">{item.name}</span>
                    </div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-sidebar-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </NavLink>
              );
            })}
          </nav>

          {/* Upgrade Banner */}
          {!isCollapsed && (
            <div className="mx-4 mb-4">
              <div className="bg-gradient-to-br from-accent/10 to-warning/10 border border-accent/30 rounded-xl p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-warning/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-4 w-4 text-accent mr-2" />
                    <span className="text-sm font-semibold text-sidebar-foreground">Upgrade to Pro</span>
                  </div>
                  <p className="text-xs text-sidebar-foreground/70 mb-3">
                    Unlock unlimited documents and advanced AI features.
                  </p>
                  <Button size="sm" className="w-full text-xs bg-accent hover:bg-accent-hover text-accent-foreground">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* User Profile */}
          <div className="p-4 border-t border-sidebar-border/50">
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white shadow-legal-md">
                  JD
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-sidebar-background"></div>
              </div>
              
              {!isCollapsed && (
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-sidebar-foreground">John Doe</p>
                      <p className="text-xs text-sidebar-foreground/60">Pro Plan</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="outline" size="sm" className="h-7 w-7 p-0 border-sidebar-border/50">
                        <Bell className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-7 w-7 p-0 border-sidebar-border/50">
                        <LogOut className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default EnhancedSidebar;