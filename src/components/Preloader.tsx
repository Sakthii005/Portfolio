import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const NAME = "Piramma Sakthi";
const LETTERS = NAME.split("");

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    // Auto-dismiss after animation completes
    const timer = setTimeout(onComplete, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center gap-6 select-none"
    >
      {/* Glowing background blob */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Animated name — letter by letter */}
      <div className="relative flex items-center flex-wrap justify-center gap-[2px] overflow-hidden">
        {LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1 + i * 0.055,
              duration: 0.55,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Cinzel Decorative', cursive",
              background:
                "linear-gradient(135deg, #e879f9 0%, #a78bfa 45%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(167,139,250,0.45))",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5, ease: "easeOut" }}
        className="text-purple-300 text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold"
      >
        Portfolio
      </motion.p>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="w-48 sm:w-64 h-[2px] rounded-full bg-white/10 overflow-hidden"
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.9, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, #a855f7, #ec4899, #60a5fa)",
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
