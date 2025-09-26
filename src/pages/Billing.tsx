import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Crown, 
  Check, 
  Star,
  Calendar,
  DollarSign,
  Download
} from "lucide-react";

const Billing = () => {
  const billingHistory = [
    {
      id: 1,
      date: "2024-01-15",
      description: "LegalFlow Pro - Monthly Subscription",
      amount: "$89.00",
      status: "Paid",
      invoice: "INV-001234"
    },
    {
      id: 2,
      date: "2023-12-15",
      description: "LegalFlow Pro - Monthly Subscription",
      amount: "$89.00",
      status: "Paid",
      invoice: "INV-001233"
    },
    {
      id: 3,
      date: "2023-11-15",
      description: "LegalFlow Pro - Monthly Subscription",
      amount: "$89.00",
      status: "Paid",
      invoice: "INV-001232"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Billing & Subscription</h1>
          <p className="text-muted-foreground">Manage your subscription and billing information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Plan */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-feature bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Crown className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Pro Plan</h3>
                    <p className="text-muted-foreground">Current subscription</p>
                  </div>
                </div>
                <Button variant="outline" className="btn-cta">
                  Manage Plan
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Monthly Cost</p>
                  <p className="text-2xl font-bold text-foreground">$89.00</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Next Billing Date</p>
                  <p className="text-lg font-semibold text-foreground">February 15, 2024</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-foreground">Plan Features</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  {[
                    "Unlimited documents",
                    "Advanced AI features",
                    "Custom templates",
                    "Automated billing",
                    "Team collaboration",
                    "Advanced analytics",
                    "API access",
                    "White-label options"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-4 h-4 text-success mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline">
                  Change Plan
                </Button>
                <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Cancel Subscription
                </Button>
              </div>
            </div>

            {/* Billing History */}
            <div className="card-feature">
              <h3 className="text-lg font-semibold text-foreground mb-4">Billing History</h3>
              
              <div className="space-y-4">
                {billingHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.description}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date} • {item.invoice}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{item.amount}</p>
                        <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-md">
                          {item.status}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Method & Usage */}
          <div className="space-y-6">
            {/* Payment Method */}
            <div className="card-feature">
              <h3 className="font-semibold text-foreground mb-4">Payment Method</h3>
              
              <div className="border border-border rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="font-medium">•••• 4242</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
              
              <Button variant="outline" className="w-full">
                Add Payment Method
              </Button>
            </div>

            {/* Usage Stats */}
            <div className="card-feature">
              <h3 className="font-semibold text-foreground mb-4">This Month's Usage</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Documents Created</span>
                    <span className="font-medium">124 / Unlimited</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">AI Generations</span>
                    <span className="font-medium">89 / Unlimited</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">E-Signatures</span>
                    <span className="font-medium">47 / Unlimited</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Billing;