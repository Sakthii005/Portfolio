import React from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const NAV_SECTIONS = [
  "about", "skills", "experience", "projects",
  "workshops", "certificates", "leadership", "resume", "contact",
];

const SECTION_LABELS: Record<string, string> = {
  about: "About",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  workshops: "Workshops",
  certificates: "Certificates",
  leadership: "Leadership",
  resume: "Resume",
  contact: "Contact",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const { scrollYProgress } = useScroll();

  /* ── Scroll Spy ── */
  React.useEffect(() => {
    const SECTIONS_WITH_HOME = ["home", ...NAV_SECTIONS];

    const handleScroll = () => {
      const scrollY = window.scrollY + 80; // offset for header height
      let current = "home";
      for (const id of SECTIONS_WITH_HOME) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Smooth scroll with header offset ── */
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 72;
      const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative group text-sm font-medium pb-0.5 transition-colors duration-200 ${
                    isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {SECTION_LABELS[section]}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 origin-left ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-2">
            {NAV_SECTIONS.map((section) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative w-fit text-sm font-medium pb-0.5 transition-colors duration-200 ${
                    isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {SECTION_LABELS[section]}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
