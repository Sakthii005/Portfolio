import React from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <header className="fixed w-full bg-[#0A0A0A]/80 backdrop-blur-sm z-50">
      {/* Scroll Progress Indicator Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-purple-300 font-serif italic"
          >
            Portfolio
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {["about", "projects", "skills", "certificates", "resume", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            {["about", "projects", "skills", "certificates", "resume", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
