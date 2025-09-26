import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, Star, Clock, Users } from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Non-Disclosure Agreement",
    description: "Protect confidential information with customizable NDA templates",
    category: "Contracts",
    usage: 245,
    rating: 4.9,
    icon: "🔒"
  },
  {
    id: 2,
    title: "Employment Contract",
    description: "Comprehensive employment agreements for various positions",
    category: "Employment",
    usage: 189,
    rating: 4.8,
    icon: "👔"
  },
  {
    id: 3,
    title: "Service Agreement",
    description: "Professional service contracts for consultants and contractors",
    category: "Contracts",
    usage: 156,
    rating: 4.9,
    icon: "🤝"
  },
  {
    id: 4,
    title: "Privacy Policy",
    description: "GDPR and CCPA compliant privacy policies for websites",
    category: "Compliance",
    usage: 134,
    rating: 4.7,
    icon: "🛡️"
  },
  {
    id: 5,
    title: "Terms of Service",
    description: "Legal terms and conditions for web applications",
    category: "Compliance",
    usage: 98,
    rating: 4.8,
    icon: "📋"
  },
  {
    id: 6,
    title: "Lease Agreement",
    description: "Residential and commercial lease agreement templates",
    category: "Real Estate",
    usage: 87,
    rating: 4.6,
    icon: "🏠"
  }
];

const Templates = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Legal Templates</h1>
            <p className="text-muted-foreground">Professional legal document templates powered by AI</p>
          </div>
          
          <Button className="btn-cta mt-4 lg:mt-0">
            <FileText className="mr-2 h-4 w-4" />
            Create Custom Template
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">All Categories</Button>
            <Button variant="outline" size="sm">Contracts</Button>
            <Button variant="outline" size="sm">Employment</Button>
            <Button variant="outline" size="sm">Compliance</Button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="card-feature group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{template.icon}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-accent fill-current mr-1" />
                  {template.rating}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {template.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {template.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-md">
                  {template.category}
                </span>
                
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {template.usage} uses
                </div>
              </div>
              
              <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Use Template
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Templates;