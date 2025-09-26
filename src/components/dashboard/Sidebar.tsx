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
  X
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Templates", href: "/dashboard/templates", icon: FileText },
  { name: "Documents", href: "/dashboard/documents", icon: File },
  { name: "E-Signatures", href: "/dashboard/esign", icon: PenTool },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-legal-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
        transition-transform duration-300 ease-in-out
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
            <Scale className="h-8 w-8 text-sidebar-primary mr-3" />
            <span className="text-xl font-bold text-sidebar-foreground">LegalFlow</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-sidebar-accent text-sidebar-primary border border-sidebar-primary/20' 
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                JD
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
                <p className="text-xs text-sidebar-foreground/60">john@lawfirm.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;