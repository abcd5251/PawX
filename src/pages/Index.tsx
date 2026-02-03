import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AlertBotSection from "@/components/AlertBotSection";
import WebSocketSection from "@/components/WebSocketSection";
import ApiSection from "@/components/ApiSection";
import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AnimatedPaw from "@/components/AnimatedPaw";
import FootprintLabel from "@/components/FootprintLabel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <HeroSection />

      {/* Animated Paw - Dashboard */}
      <AnimatedPaw
        label="Dashboard"
        className="top-[15vh] right-[8%] hidden lg:block"
        rotate={-25}
      />

      {/* Animated Paw - Alert Bot */}
      <AnimatedPaw
        label="Alert Bot"
        className="top-[45vh] left-[5%] hidden lg:block"
        flip
        rotate={35}
      />

      {/* Animated Paw - WebSocket */}
      <AnimatedPaw
        label="WebSocket"
        className="top-[75vh] right-[10%] hidden lg:block"
        rotate={15}
      />

      {/* Footprint Label - Telegram */}
      <div className="absolute top-[30vh] left-[15%] hidden lg:block z-10">
        <FootprintLabel text="Telegram Bot" />
      </div>

      {/* Footprint Label - Real-time */}
      <div className="absolute top-[60vh] right-[20%] hidden lg:block z-10">
        <FootprintLabel text="Real-time Data" />
      </div>

      <FeaturesSection />
      <AlertBotSection />
      <WebSocketSection />
      <ApiSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
