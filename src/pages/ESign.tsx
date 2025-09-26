import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Upload, 
  FileText, 
  User, 
  Mail, 
  Plus,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

const ESign = () => {
  const signatureRequests = [
    {
      id: 1,
      document: "Service Agreement - ABC Corp",
      signers: [
        { name: "John Smith", email: "john@abccorp.com", status: "signed" },
        { name: "Sarah Johnson", email: "sarah@lawfirm.com", status: "pending" }
      ],
      created: "2024-01-15",
      deadline: "2024-01-22"
    },
    {
      id: 2,
      document: "NDA - Tech Startup",
      signers: [
        { name: "Mike Wilson", email: "mike@techstartup.com", status: "pending" }
      ],
      created: "2024-01-12",
      deadline: "2024-01-19"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">E-Signatures</h1>
            <p className="text-muted-foreground">Send documents for signature and track their status</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload & Send Section */}
          <div className="space-y-6">
            <div className="card-feature">
              <h3 className="text-lg font-semibold text-foreground mb-4">Send Document for Signature</h3>
              
              {/* Upload Area */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6 hover:border-primary/50 transition-colors">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Drop your document here</p>
                <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
                <Button variant="outline">
                  Choose File
                </Button>
              </div>

              {/* Document Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="docTitle">Document Title</Label>
                  <Input 
                    id="docTitle" 
                    placeholder="e.g., Service Agreement - ABC Corp"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message to Signers (optional)</Label>
                  <textarea
                    id="message"
                    className="w-full mt-2 p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    rows={3}
                    placeholder="Please review and sign this document..."
                  />
                </div>
              </div>
            </div>

            {/* Signers Section */}
            <div className="card-feature">
              <h4 className="font-semibold text-foreground mb-4">Add Signers</h4>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="signerName">Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="signerName" placeholder="Signer name" className="pl-10" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="signerEmail">Email</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="signerEmail" type="email" placeholder="signer@email.com" className="pl-10" />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-6 btn-cta">
                Send for Signature
              </Button>
            </div>
          </div>

          {/* Signature Requests Status */}
          <div className="card-feature">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Signature Requests</h3>
            
            <div className="space-y-4">
              {signatureRequests.map((request) => (
                <div key={request.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-foreground">{request.document}</h4>
                        <p className="text-sm text-muted-foreground">Created {request.created}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due {request.deadline}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {request.signers.map((signer, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                            {signer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium">{signer.name}</div>
                            <div className="text-muted-foreground">{signer.email}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          {signer.status === 'signed' ? (
                            <>
                              <CheckCircle className="h-4 w-4 text-success mr-1" />
                              <span className="text-success">Signed</span>
                            </>
                          ) : (
                            <>
                              <Clock className="h-4 w-4 text-warning mr-1" />
                              <span className="text-warning">Pending</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
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

export default ESign;