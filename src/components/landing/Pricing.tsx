import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "5 documents per month",
      "Basic templates library",
      "Email support",
      "Standard security"
    ],
    cta: "Start Free",
    variant: "outline" as const
  },
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "For small practices and solo lawyers",
    features: [
      "50 documents per month",
      "All templates + AI drafting",
      "E-signature workflow",
      "Priority support",
      "Client management",
      "Basic analytics"
    ],
    cta: "Start Trial",
    variant: "default" as const
  },
  {
    name: "Pro",
    price: "$89",
    period: "per month",
    description: "For growing legal teams",
    features: [
      "Unlimited documents",
      "Advanced AI features",
      "Custom templates",
      "Automated billing",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "White-label options"
    ],
    cta: "Start Trial",
    variant: "default" as const,
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your practice. All plans include our core features 
            with no hidden fees or setup costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`card-pricing relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'btn-cta' : ''}`}
                variant={plan.variant}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • Cancel anytime • No setup fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;