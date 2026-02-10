import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const codeExample = `curl -X POST "https://pawx.ai/api/v1/keywordMonitors" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR-API-KEY" \\
  -d '{"name":"uxlink tweets","keywords":["@uxlink"]}'`;

const wsEvents = [
  { event: "Profile & historical tweets", color: "bg-green-500" },
  { event: "Tweets filters", color: "bg-blue-500" },
  { event: "Keywords engagement records", color: "bg-purple-500" },
  { event: "KoL dataset (~10K)", color: "bg-pink-500" },
  { event: "Low-latency stream / webhooks (~500ms)", color: "bg-yellow-500" },
  { event: "Tweets metrics", color: "bg-orange-500" },
  { event: "X's Real-time Tweet data", color: "bg-red-500" },
];

const ApiSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
          {/* Left - Text */}
          <div>
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary mb-4 inline-block">
              DATA API
            </span>
            <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              <span className="gradient-text">DATA API</span>
              <br />
              SERVICE
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-semibold">
              Compared to building in-house, our API offers more complete and real-time data at lower cost and with far less engineering overhead.
            </p>

            {/* WebSocket Events */}
            <div className="flex flex-wrap gap-4 mb-8">
              {wsEvents.map((item, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-card rounded-xl text-base font-semibold flex items-center gap-3 shadow-soft"
                >
                  <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  {item.event}
                </span>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/abcd5251/pawx_api" target="_blank" rel="noreferrer">
                Read API Docs
              </a>
            </Button>
          </div>

          {/* Right - Code Block */}
          <div className="relative mt-[180px]">
            <div className="glass-card overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              
              {/* Code */}
              <pre className="p-5 overflow-x-auto h-[280px] flex items-start pt-8">
                <code className="text-sm font-mono">
                  <span className="text-primary">curl</span>
                  <span className="text-muted-foreground"> -X POST </span>
                  <span className="text-green-600">"https://pawx.ai/api/v1/keywordMonitors"</span>
                  <span className="text-muted-foreground"> \</span>
                  <br />
                  <span className="text-muted-foreground">  -H </span>
                  <span className="text-green-600">"Content-Type: application/json"</span>
                  <span className="text-muted-foreground"> \</span>
                  <br />
                  <span className="text-muted-foreground">  -H </span>
                  <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
                  <br />
                  <span className="text-muted-foreground">  -d </span>
                  <span className="text-yellow-600">{'{"name":"uxlink tweets","keywords":'}</span>
                  <br />
                  <span className="text-muted-foreground">  Low-latency stream / webhooks (~300ms)</span>
                  <br />
                  <span className="text-yellow-600">{'["@uxlink"]}\''}</span>
                </code>
              </pre>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-orange rounded-2xl rotate-12 opacity-20 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
