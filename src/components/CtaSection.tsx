import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";

const CtaSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Logo */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-3xl overflow-hidden shadow-card animate-pulse-glow">
          <img src={logo} alt="PawX AI" className="w-full h-full object-cover" />
        </div>

        <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
          LET'S MAKE
          <br />
          <span className="gradient-text">CRYPTO TWITTER</span>
          <br />
          WORK FOR YOU,
          <br />
          NOT AGAINST YOU
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-semibold">
          Stop missing alpha. Start tracking the signals that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="group" asChild>
            <a href="https://x.com/pawx_ai" target="_blank" rel="noreferrer">
              <Twitter className="mr-2 w-5 h-5" />
              Follow @PawXAI
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
