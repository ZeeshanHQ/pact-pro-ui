import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  PenTool, 
  Upload, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Users,
  Bot
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Documents Created",
      value: "124",
      change: "+12%",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Pending Signatures",
      value: "8",
      change: "-5%",
      icon: PenTool,
      color: "text-warning"
    },
    {
      title: "Revenue This Month",
      value: "$12,450",
      change: "+18%",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Active Clients",
      value: "47",
      change: "+3%",
      icon: Users,
      color: "text-secondary"
    }
  ];

  const recentActivity = [
    {
      action: "Contract signed",
      description: "Service Agreement - ABC Corp",
      time: "2 hours ago",
      status: "completed"
    },
    {
      action: "Document created",
      description: "NDA Template - XYZ Inc",
      time: "4 hours ago",
      status: "active"
    },
    {
      action: "Invoice sent",
      description: "Legal Services - June 2024",
      time: "1 day ago",
      status: "pending"
    },
    {
      action: "Template updated",
      description: "Employment Contract v2.1",
      time: "2 days ago",
      status: "completed"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John</h1>
            <p className="text-muted-foreground">Here's what's happening with your legal practice today.</p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <Button className="btn-cta">
              <FileText className="mr-2 h-4 w-4" />
              New Document
            </Button>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="card-feature">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="card-feature">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Create New Document
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload for Review
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <PenTool className="mr-2 h-4 w-4" />
                Send for Signature
              </Button>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="card-feature bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold text-foreground">AI Assistant</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Ask me to draft clauses, review contracts, or suggest legal language.
            </p>
            <div className="bg-background/50 rounded-lg p-3 mb-4">
              <p className="text-sm text-muted-foreground">Try asking:</p>
              <p className="text-sm font-medium">"Draft a non-disclosure agreement for a software project"</p>
            </div>
            <Button className="w-full">
              <Bot className="mr-2 h-4 w-4" />
              Start Chat
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="card-feature">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'completed' ? 'bg-success' :
                    activity.status === 'active' ? 'bg-primary' :
                    'bg-warning'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;