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
  Bot,
  ChevronRight,
  Sparkles,
  Calendar,
  Target,
  Award,
  Zap,
  Timer
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Documents Created",
      value: "124",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Pending Signatures", 
      value: "8",
      change: "-5%",
      trend: "down",
      icon: PenTool,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Revenue This Month",
      value: "$12,450",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Active Clients",
      value: "47",
      change: "+3%",
      trend: "up",
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  const recentActivity = [
    {
      action: "Contract signed",
      description: "Service Agreement - ABC Corp",
      time: "2 hours ago",
      status: "completed",
      avatar: "AB",
      color: "bg-success"
    },
    {
      action: "Document created",
      description: "NDA Template - XYZ Inc",
      time: "4 hours ago",
      status: "active",
      avatar: "XY",
      color: "bg-primary"
    },
    {
      action: "Invoice sent",
      description: "Legal Services - June 2024",
      time: "1 day ago",
      status: "pending",
      avatar: "IN",
      color: "bg-warning"
    },
    {
      action: "Template updated",
      description: "Employment Contract v2.1",
      time: "2 days ago",
      status: "completed",
      avatar: "EC",
      color: "bg-secondary"
    }
  ];

  const quickActions = [
    {
      title: "Create New Document",
      description: "Start with templates or from scratch",
      icon: FileText,
      color: "bg-primary",
      action: "create"
    },
    {
      title: "Upload for Review",
      description: "Get AI-powered legal analysis",
      icon: Upload,
      color: "bg-secondary", 
      action: "upload"
    },
    {
      title: "Send for Signature",
      description: "E-sign workflow in minutes",
      icon: PenTool,
      color: "bg-accent",
      action: "sign"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Enhanced Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <h1 className="text-4xl font-bold text-foreground">Welcome back, John</h1>
              <div className="px-3 py-1 bg-success/10 text-success text-sm rounded-full font-medium">
                Pro Plan
              </div>
            </div>
            <p className="text-muted-foreground text-lg">Here's what's happening with your legal practice today.</p>
          </div>
          
          <div className="flex items-center space-x-3 mt-6 lg:mt-0">
            <Button className="btn-cta group">
              <Sparkles className="mr-2 h-4 w-4" />
              New Document
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="group hover:shadow-legal-md transition-all duration-300">
              <Upload className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Upload
            </Button>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.title} 
              className="card-feature group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center text-sm font-medium px-2 py-1 rounded-md ${
                  stat.trend === 'up' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                }`}>
                  <TrendingUp className={`h-3 w-3 mr-1 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  {stat.change}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">vs last month</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Enhanced Quick Actions */}
          <div className="lg:col-span-4">
            <div className="card-feature">
              <div className="flex items-center mb-6">
                <Zap className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
              </div>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <div 
                    key={action.title}
                    className="group p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-legal-md cursor-pointer"
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${action.color} text-white mr-4 group-hover:scale-110 transition-transform`}>
                        <action.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced AI Assistant */}
          <div className="lg:col-span-4">
            <div className="card-feature bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/20 rounded-xl mr-3">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">AI Legal Assistant</h3>
                    <p className="text-sm text-muted-foreground">Powered by GPT-4</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ask me to draft clauses, review contracts, suggest legal language, or analyze documents for compliance issues.
                </p>
                
                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">💡 Try asking:</p>
                  <p className="text-sm font-medium text-foreground">
                    "Draft a confidentiality clause for a software development contract"
                  </p>
                </div>
                
                <Button className="w-full btn-hero group">
                  <Bot className="mr-2 h-4 w-4" />
                  Start AI Chat
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Recent Activity */}
          <div className="lg:col-span-4">
            <div className="card-feature">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Recent Activity</h3>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`w-8 h-8 ${activity.color} text-white rounded-lg flex items-center justify-center text-xs font-semibold`}>
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                      <div className="flex items-center mt-1">
                        <Timer className="h-3 w-3 text-muted-foreground mr-1" />
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'completed' ? 'bg-success' :
                      activity.status === 'active' ? 'bg-primary' :
                      'bg-warning'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* New Performance Overview Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-feature">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-foreground">This Month's Goals</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Documents Created</span>
                <span className="text-sm font-medium">124 / 150</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-4/5 transition-all duration-500"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Revenue Target</span>
                <span className="text-sm font-medium">$12.4K / $15K</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full w-5/6 transition-all duration-500"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                <span className="text-sm font-medium">96%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          <div className="card-feature">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-secondary mr-3" />
              <h3 className="text-xl font-semibold text-foreground">Recent Achievements</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-success/10 rounded-lg">
                <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center mr-3">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Contract Expert</p>
                  <p className="text-xs text-muted-foreground">Created 100+ documents</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-primary/10 rounded-lg">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Client Champion</p>
                  <p className="text-xs text-muted-foreground">Served 50+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;