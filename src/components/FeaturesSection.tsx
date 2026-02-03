import { BarChart3, Filter, Users, Zap, Hash, Radio } from "lucide-react";

const dashboardFeatures = [
  {
    icon: BarChart3,
    title: "Tweets metrics",
    number: "01"
  },
  {
    icon: Filter,
    title: "Tweets filters",
    number: "02"
  },
  {
    icon: Users,
    title: "KOL dataset (~10K)",
    number: "03"
  },
  {
    icon: Zap,
    title: "Low-latency stream / webhooks",
    number: "04"
  },
  {
    icon: Hash,
    title: "Keywords engagement records",
    number: "05"
  },
  {
    icon: Radio,
    title: "X's Real-time Tweet data",
    number: "06"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="text-foreground">PAWX OFFERS</span>
            <br />
            <span className="gradient-text">THE BEST</span>
            <br />
            <span className="text-foreground">DASHBOARD</span>
          </h2>
        </div>

        {/* Dashboard Features - Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:shadow-card transition-all duration-300 group hover:border-primary/30 border border-transparent"
            >
              <div className="flex flex-col gap-4">
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                    {feature.number}
                  </span>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
