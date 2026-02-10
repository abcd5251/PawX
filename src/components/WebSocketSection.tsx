import { Radio, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const wsEventTypes = [
  { event: "tweet_create", color: "bg-green-500", label: "Tweet Create" },
  { event: "tweet_retweet", color: "bg-blue-500", label: "Retweet" },
  { event: "user_follow", color: "bg-purple-500", label: "Follow" },
  { event: "user_unfollow", color: "bg-orange-500", label: "Unfollow" },
  { event: "user_profile_change", color: "bg-pink-500", label: "Profile change" },
  { event: "tweet_reply", color: "bg-yellow-500", label: "Reply" },
];

const WebSocketSection = () => {
  return (
    <section id="websocket" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary mb-4 inline-block">
            REAL-TIME STREAMING
          </span>
          <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="gradient-text">TWITTER</span>
            <br />
            <span className="text-foreground">WEBSOCKET</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Description & Event Types */}
          <div>
            {/* Description Card */}
            <div className="glass-card p-6 mb-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center flex-shrink-0">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Real-Time Event Streaming</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    A lightweight WebSocket service that pushes live events for a target Twitter account: who they follow/unfollow, new tweets, retweets, profile changes, replies, and other interactions. Use it to power live dashboards, notifications, or automation that reacts instantly to an account's activity.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Activity className="w-8 h-8 text-primary" />
              Supported Events
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {wsEventTypes.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 hover:shadow-card transition-all duration-300 group hover:border-primary/30 border border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-125 transition-transform`} />
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features & Code Preview */}
          <div className="space-y-6">
            {/* Features */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Low-latency streaming (~300ms)",
                  "Real-time event notifications",
                  "Multiple account monitoring",
                  "Automatic reconnection",
                  "Event filtering & routing",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connection Example */}
            <div className="glass-card overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-foreground">WebSocket Connection</span>
                </div>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-xs font-mono">
                  <span className="text-primary">const</span>
                  <span className="text-foreground"> ws = </span>
                  <span className="text-primary">new</span>
                  <span className="text-foreground"> WebSocket(</span>
                  <br />
                  <span className="text-green-600">  'wss://pawx.ai/ws'</span>
                  <br />
                  <span className="text-foreground">);</span>
                  <br />
                  <br />
                  <span className="text-primary">ws</span>
                  <span className="text-foreground">.onmessage = (</span>
                  <span className="text-yellow-600">event</span>
                  <span className="text-foreground">) =&gt; {'{'}</span>
                  <br />
                  <span className="text-muted-foreground">  // Handle real-time events</span>
                  <br />
                  <span className="text-foreground">{'};'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/abcd5251/pawx_api/blob/main/WEBSOCKET.md" target="_blank" rel="noreferrer">
              View WebSocket Docs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebSocketSection;
