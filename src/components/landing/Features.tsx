import { FileText, Zap, PenTool, CreditCard, Users, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Templates",
    description: "Access 100+ legal document templates with AI-powered customization for contracts, NDAs, and agreements."
  },
  {
    icon: Zap,
    title: "AI Drafting",
    description: "Generate professional legal documents in minutes using our advanced AI that understands legal language."
  },
  {
    icon: PenTool,
    title: "E-Signatures",
    description: "Send documents for signature with legally binding e-signature workflow and real-time tracking."
  },
  {
    icon: CreditCard,
    title: "Automated Billing",
    description: "Streamline invoicing and payments with automated time tracking and client billing management."
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Organize client information, case notes, and communication history in one secure dashboard."
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Enterprise-grade encryption and compliance with GDPR, HIPAA, and legal industry standards."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need for modern legal practice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From contract creation to client management, our comprehensive platform 
            handles every aspect of your legal workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-feature group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;