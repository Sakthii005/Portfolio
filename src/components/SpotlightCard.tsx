import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

/**
 * SpotlightCard - Wraps any card with a radial cursor-following glow effect.
 * The glow follows the mouse position inside the card boundary.
 *
 * @param glowColor - rgba color string for the glow, defaults to purple
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(168, 85, 247, 0.15)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-999);
    mouseY.set(-999);
  };

  const background = useMotionTemplate`radial-gradient(
    350px circle at ${mouseX}px ${mouseY}px,
    ${glowColor},
    transparent 80%
  )`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {/* Spotlight glow layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
