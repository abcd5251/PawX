import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Shield } from "lucide-react";
import logo from "@/assets/logo.jpg";

// 猫爪印 SVG 组件
const PawPrint = ({
  className,
  style
}: {
  className?: string;
  style?: React.CSSProperties;
}) => <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor">
    {/* 主肉垫 */}
    <ellipse cx="50" cy="65" rx="25" ry="20" />
    {/* 上方小肉垫 */}
    <ellipse cx="30" cy="35" rx="12" ry="10" />
    <ellipse cx="70" cy="35" rx="12" ry="10" />
    <ellipse cx="20" cy="55" rx="10" ry="8" />
    <ellipse cx="80" cy="55" rx="10" ry="8" />
  </svg>;
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 渐变光晕 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        {/* 装饰性猫爪印 */}
        <PawPrint className="absolute top-20 left-[8%] w-16 h-16 text-primary/15 rotate-[-20deg] animate-float" />
        <PawPrint className="absolute top-[35%] right-[5%] w-20 h-20 text-primary/10 rotate-[15deg] animate-float" style={{
        animationDelay: '1.5s'
      }} />
        <PawPrint className="absolute bottom-[25%] left-[3%] w-14 h-14 text-primary/12 rotate-[-35deg] animate-float" style={{
        animationDelay: '2.5s'
      }} />
        <PawPrint className="absolute top-[60%] right-[12%] w-12 h-12 text-primary/8 rotate-[30deg] animate-float" style={{
        animationDelay: '0.5s'
      }} />
        <PawPrint className="absolute bottom-[15%] right-[25%] w-10 h-10 text-primary/10 rotate-[-10deg] animate-float hidden lg:block" style={{
        animationDelay: '3s'
      }} />
        <PawPrint className="absolute top-[15%] right-[30%] w-8 h-8 text-primary/8 rotate-[45deg] animate-float hidden lg:block" style={{
        animationDelay: '2s'
      }} />
        
        {/* 浮动代码片段 */}
        <div className="absolute top-32 left-10 code-block text-xs opacity-60 animate-float hidden lg:block">
          <code className="text-primary">curl -X POST</code>
        </div>
        <div className="absolute top-48 right-16 code-block text-xs opacity-60 animate-float hidden lg:block" style={{
        animationDelay: '1s'
      }}>
          <code className="text-primary">"X-API-Key"</code>
        </div>
        <div className="absolute bottom-40 left-20 code-block text-xs opacity-60 animate-float hidden lg:block" style={{
        animationDelay: '2s'
      }}>
          <code className="text-muted-foreground">WebSocket</code>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* 标签滚动条 */}
        <div className="mb-8 overflow-hidden">
          <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
            {[...Array(2)].map((_, i) => <div key={i} className="flex gap-4">
                <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  🐾 Real-Time Tweet
                </span>
                <span className="px-4 py-2 bg-secondary rounded-full text-sm font-semibold text-secondary-foreground">
                  ⚡ Low Latency
                </span>
                <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  🔗 WebSocket API
                </span>
                <span className="px-4 py-2 bg-secondary rounded-full text-sm font-semibold text-secondary-foreground">
                  📊 KOL Dataset
                </span>
                <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  🤖 Telegram Bot
                </span>
              </div>)}
          </div>
        </div>

        {/* 主标题 - MetaMask 风格超大圆润字体 */}
        <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl text-foreground mb-6">
          <span className="block">FOLLOW</span>
          <span className="block gradient-text">PAWX AI</span>
          <span className="block">TO ALPHA</span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-semibold">
          Pawx Through Social Data to Crypto Insights
        </p>

        {/* CTA 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl">
            View API Docs
          </Button>
        </div>

        {/* 特性标签 */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold">300ms Latency</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe className="w-5 h-5 text-primary" />
            <span className="font-semibold">10K+ KOL Dataset</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Production Ready</span>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;