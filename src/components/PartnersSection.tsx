import { Quote } from "lucide-react";
import logo1 from "@/assets/logo1.jpg";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";

const testimonials = [
  {
    company: "UXLINK",
    logo: logo1,
    quote: "PawX removes the pain of scraping and cleaning Twitter data ourselves. PawX's Data API gives us clean, production-ready Crypto Twitter data. PawX is our default choice.",
    highlight: "Production-ready data",
  },
  {
    company: "TrueNorth",
    logo: logo2,
    quote: "PawX's Data API has become a core layer in our market research stack. PawX ships fast, listens to feedback. The historical depth and filters in PawX's API save our team hours of manual work.",
    highlight: "Research powerhouse",
  },
  {
    company: "Pyth",
    logo: logo3,
    quote: "Latency on PawX's feed is low enough for us to use it in production systems. PawX is the most dependable Twitter data provider we've worked with so far. PawX is a no-brainer.",
    highlight: "Ultra-low latency",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="gradient-text">BACKERS &</span>
            <br />
            <span className="text-foreground">PARTNERS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            PawX is already trusted by more than 10+ Web3 projects, including UXLINK, TrueNorth, and Pyth, demonstrating real-world traction
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground text-lg font-medium mb-6 leading-relaxed flex-grow">
                "{item.quote}"
              </p>

              {/* Bottom section with logo+company name on left, highlight on right */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-primary/20"
                  />
                  <span className="text-xl font-bold text-foreground">
                    {item.company}
                  </span>
                </div>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
