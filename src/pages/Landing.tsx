import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;