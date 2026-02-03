import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
      <div className="glass-card px-6 py-2.5 flex items-center gap-6 hover:shadow-[0_8px_40px_-8px_hsl(24_95%_53%/0.25)] transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <img
              src={logo}
              alt="PawX AI"
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
            />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
          <span className="text-base font-black text-foreground tracking-tight">PawX AI</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          <a href="#features" className="px-3 py-1.5 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-bold text-sm">
            Features
          </a>
          <a href="#api" className="px-3 py-1.5 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-bold text-sm">
            API
          </a>
          <a href="#partners" className="px-3 py-1.5 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-bold text-sm">
            Partners
          </a>
        </div>

        {/* CTA Button */}
        <Button variant="hero" size="sm" className="group shadow-[0_6px_20px_-4px_hsl(24_95%_53%/0.4)] hover:shadow-[0_8px_30px_-4px_hsl(24_95%_53%/0.6)]">
          <Sparkles className="w-3 h-3 mr-1.5 group-hover:rotate-12 transition-transform" />
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
