import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  FileText, 
  Plus, 
  MoreHorizontal,
  Eye,
  Edit,
  Share,
  Trash2,
  Calendar,
  User,
  Filter
} from "lucide-react";

const documents = [
  {
    id: 1,
    title: "Service Agreement - ABC Corp",
    type: "Contract",
    status: "Signed",
    client: "ABC Corporation",
    createdDate: "2024-01-15",
    lastModified: "2024-01-18",
    statusColor: "bg-success text-success-foreground"
  },
  {
    id: 2,
    title: "NDA - Tech Startup",
    type: "NDA",
    status: "Pending",
    client: "Tech Innovations LLC",
    createdDate: "2024-01-12",
    lastModified: "2024-01-14",
    statusColor: "bg-warning text-warning-foreground"
  },
  {
    id: 3,
    title: "Employment Contract - Jane Smith",
    type: "Employment",
    status: "Draft",
    client: "Internal",
    createdDate: "2024-01-10",
    lastModified: "2024-01-13",
    statusColor: "bg-muted text-muted-foreground"
  },
  {
    id: 4,
    title: "Privacy Policy - Website Update",
    type: "Policy",
    status: "Review",
    client: "E-commerce Client",
    createdDate: "2024-01-08",
    lastModified: "2024-01-11",
    statusColor: "bg-primary text-primary-foreground"
  },
  {
    id: 5,
    title: "Lease Agreement - Downtown Office",
    type: "Real Estate",
    status: "Negotiating",
    client: "Downtown Properties",
    createdDate: "2024-01-05",
    lastModified: "2024-01-09",
    statusColor: "bg-secondary text-secondary-foreground"
  }
];

const Documents = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Documents</h1>
            <p className="text-muted-foreground">Manage all your legal documents in one place</p>
          </div>
          
          <Button className="btn-cta mt-4 lg:mt-0">
            <Plus className="mr-2 h-4 w-4" />
            New Document
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              className="pl-10"
            />
          </div>
          
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Documents Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-medium text-foreground">Document</th>
                  <th className="text-left p-4 font-medium text-foreground">Type</th>
                  <th className="text-left p-4 font-medium text-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-foreground">Client</th>
                  <th className="text-left p-4 font-medium text-foreground">Modified</th>
                  <th className="text-left p-4 font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={doc.id} className={`border-b border-border hover:bg-muted/20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/10'}`}>
                    <td className="p-4">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <div className="font-medium text-foreground">{doc.title}</div>
                          <div className="text-sm text-muted-foreground flex items-center mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            Created {doc.createdDate}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm">
                        {doc.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-md text-sm font-medium ${doc.statusColor}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-foreground">{doc.client}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {doc.lastModified}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-5 of 47 documents
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Documents;