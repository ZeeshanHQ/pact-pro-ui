import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Partner, Chen & Associates",
    content: "LegalFlow transformed our practice. We've reduced document preparation time by 70% and our clients love the seamless e-signature process.",
    avatar: "SC",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Solo Practitioner",
    content: "The AI drafting feature is incredible. It creates professional contracts that would take me hours in just minutes. Game changer for solo lawyers.",
    avatar: "MR",
    rating: 5
  },
  {
    name: "Jennifer Walsh",
    role: "Managing Partner, Walsh Legal Group",
    content: "Client management and billing automation saved us 15+ hours per week. The ROI was immediate and our team productivity has never been higher.",
    avatar: "JW",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by legal professionals worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of lawyers who have streamlined their practice with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6 shadow-legal-md hover:shadow-legal-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;