import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small projects",
    features: [
      "Real-time tweet stream",
      "1,000 API calls/day",
      "Basic KOL dataset",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/month",
    description: "For growing Web3 teams",
    features: [
      "Everything in Starter",
      "Unlimited API calls",
      "Full KOL dataset (10K+)",
      "WebSocket access",
      "Priority support",
      "Custom webhooks",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "Custom integrations",
      "SLA guarantee",
      "24/7 support",
      "On-boarding assistance",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary mb-4 inline-block">
            PRICING
          </span>
          <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="gradient-text">UNLIMITED</span>
            <br />
            ACCESS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold">
            Monthly subscription — no per-request pricing. The best value in the market.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative ${
                plan.highlighted
                  ? "border-2 border-primary shadow-button scale-105"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-orange rounded-full text-sm font-bold text-white">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
