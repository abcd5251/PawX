import { Sparkles, Zap, Radio, BarChart3, MessageSquare } from "lucide-react";

const RollUpBanner = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      {/* 易拉宝容器 - 标准比例 80cm x 200cm (2:5) */}
      <div
        className="relative bg-background overflow-hidden shadow-2xl"
        style={{
          width: '800px',
          height: '2000px',
          maxWidth: '100%',
        }}
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        </div>

        {/* 内容区域 */}
        <div className="relative h-full flex flex-col py-8 px-10">
          {/* 顶部 Logo + 主标题区域 */}
          <div className="text-center mb-10">
            <div className="mb-6 flex justify-center">
              <img
                src="/logo_paw1.jpg"
                alt="PawX AI Logo"
                className="w-40 h-40 object-contain rounded-3xl shadow-xl"
              />
            </div>
            <h2 className="hero-title text-6xl text-foreground mt-4 leading-tight">
              <span className="gradient-text">Paw through</span> social data<br />
              <span className="gradient-text">to</span> crypto insights
            </h2>
          </div>

          {/* PawX 介绍 */}
          <div className="w-full text-center mb-10 px-8">
            <h2 className="hero-title text-4xl mb-6">
              <span className="gradient-text">INTRODUCTION</span>
            </h2>
            <p className="text-2xl text-foreground font-semibold leading-relaxed">
              We provide Web3 Twitter data APIs, real-time Telegram alert bots, profile intelligence, and customized AI solutions—powering news trading bots, InfoFi agents, KOL analytics, and automated workflows.
            </p>
          </div>

          {/* 核心特性标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-5 py-2 bg-primary/10 rounded-full text-lg font-bold text-primary">
              🐾 Real-Time
            </span>
            <span className="px-5 py-2 bg-primary/10 rounded-full text-lg font-bold text-primary">
              ⚡ Fast
            </span>
            <span className="px-5 py-2 bg-primary/10 rounded-full text-lg font-bold text-primary">
              🤖 Smart
            </span>
          </div>

          <p className="text-xl text-muted-foreground font-semibold text-center mb-3">
            Stop missing alpha. Start tracking signals.
          </p>

          <div className="flex justify-center items-center gap-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 140, 66, 0.15) 100%)', padding: '18px', borderRadius: '16px', border: '2px solid rgba(255, 107, 53, 0.3)' }}>
            <div className="flex items-center gap-4 rounded-2xl bg-background/80 px-5 py-3 shadow-lg">
              <img
                src="/X_logo.png"
                alt="X Logo"
                className="h-20 w-20 object-contain"
              />
              <div className="text-left">
                <div className="text-xl font-extrabold text-foreground">Follow X</div>
                <div className="text-lg font-bold text-foreground">@pawx_ai</div>
              </div>
              <img
                src="/x-qr.png"
                alt="X QR Code"
                className="h-24 w-24 object-contain"
              />
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-background/80 px-5 py-3 shadow-lg">
              <img
                src="/telegram_icon.png"
                alt="Telegram Logo"
                className="h-20 w-20 object-contain"
              />
              <div className="text-left">
                <div className="text-xl font-extrabold text-foreground">Follow TG</div>
                <div className="text-lg font-bold text-foreground">@pawx_ai</div>
              </div>
              <img
                src="/telegram.png"
                alt="Telegram QR Code"
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>

          {/* 核心功能展示 */}
          <div className="w-full mb-6">
            <h2 className="hero-title text-4xl text-center mb-4">
              <span className="gradient-text">CORE FEATURES</span>
            </h2>

            <p className="text-2xl text-muted-foreground mb-4 text-center leading-relaxed">
              Track X's live tweets, analyze KOL insights,<br />
              and get instant alerts for crypto alpha opportunities
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 hover:shadow-card transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Data API
                  </h3>
                </div>
                <div className="text-lg text-muted-foreground text-left leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tweet engagement tracking</li>
                    <li>10K KOL Label Data</li>
                    <li>Returns tweets referencing a tweet</li>
                    <li>Returns keyword-related tweets</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card p-4 hover:shadow-card transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Telegram Bot
                  </h3>
                </div>
                <div className="text-lg text-muted-foreground text-left leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Instant alerts (~300ms)</li>
                    <li>Quick trend summaries</li>
                    <li>KOL identification</li>
                    <li>Sentiment monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card p-4 hover:shadow-card transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center">
                    <Radio className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Customized AI
                  </h3>
                </div>
                <div className="text-lg text-muted-foreground text-left leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li>InfoFi project tracking</li>
                    <li>Auto summary bot</li>
                    <li>KOL performance labels</li>
                    <li>Automated email agent</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card p-4 hover:shadow-card transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Social Intelligence Platform
                  </h3>
                </div>
                <div className="text-lg text-muted-foreground text-left leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Identify key opinion leaders</li>
                    <li>Monitor competitive intelligence</li>
                    <li>Measure campaign effectiveness</li>
                    <li>Detect sentiment shifts early</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 合作伙伴 */}
          <div className="w-full text-center mb-6">
            <h2 className="hero-title text-4xl mb-6">
              <span className="gradient-text">Trusted by 10+ Web3 Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              PawX AI is already trusted by more than 10+ Web3 projects, including UXLINK, TrueNorth, and Padthai, demonstrating real-world traction
            </p>
            <div className="flex justify-center gap-4 items-center flex-wrap">
              <span className="px-6 py-3 bg-primary/10 rounded-full text-xl font-bold text-primary">
                UXLINK
              </span>
              <span className="px-6 py-3 bg-primary/10 rounded-full text-xl font-bold text-primary">
                TrueNorth
              </span>
              <span className="px-6 py-3 bg-primary/10 rounded-full text-xl font-bold text-primary">
                Padthai
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RollUpBanner;
