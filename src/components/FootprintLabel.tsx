import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FootprintLabelProps {
  text: string;
  className?: string;
}

const FootprintLabel = ({ text, className = "" }: FootprintLabelProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const footprints = [
    { size: 10, bottom: 12, left: -8, delay: 0.2, flip: false },
    { size: 8, bottom: 20, left: -16, delay: 0.1, flip: true },
    { size: 6, bottom: 28, left: -12, delay: 0, flip: false },
  ];

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Label Text */}
      <div
        className={`text-sm md:text-base font-bold transition-all duration-300 cursor-pointer ${
          isHovered ? "text-[#FF751F]" : "text-white/70"
        }`}
        style={{
          textShadow: isHovered
            ? "0 0 8px #FF751F, 0 0 16px #FF751F"
            : "none",
        }}
      >
        {text}
      </div>

      {/* Animated Footprints */}
      <AnimatePresence>
        {isHovered &&
          footprints.map((footprint, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                bottom: `${footprint.bottom}px`,
                left: `${footprint.left}px`,
                width: `${footprint.size}px`,
                height: `${footprint.size}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: footprint.delay }}
            >
              <img
                src="/paw.png"
                alt="footprint"
                className={`w-full h-full object-contain ${
                  footprint.flip ? "scale-x-[-1]" : ""
                }`}
                style={{
                  filter: "brightness(1.2) saturate(1.5) hue-rotate(-10deg)",
                }}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default FootprintLabel;
