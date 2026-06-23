import React, { useRef } from "react";
import {
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaBrain,
  FaHandshake,
  FaComments,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaRobot,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaChartBar,
  FaPlug,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVscodium,
  SiJsonwebtokens,
  SiNpm,
  SiScikitlearn,
  SiTailwindcss,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

/* ===================== DATA ===================== */
interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  label: string;
  color: string;      // Primary color for icons and accents
  bgColor: string;    // Light tint for hover backgrounds
  borderColor: string; // Vibrant border color on hover
  items: SkillItem[];
}

const techCategories: TechCategory[] = [
  {
    label: "Frontend Technologies",
    color: "#22d3ee",       // Cyan
    bgColor: "rgba(34,211,238,0.06)",
    borderColor: "rgba(34,211,238,0.3)",
    items: [
      { name: "HTML5",        icon: <FaHtml5 /> },
      { name: "CSS3",         icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React.js",     icon: <FaReact /> },
    ],
  },
  {
    label: "Backend Technologies",
    color: "#34d399",       // Emerald
    bgColor: "rgba(52,211,153,0.06)",
    borderColor: "rgba(52,211,153,0.3)",
    items: [
      { name: "Node.js",         icon: <FaNodeJs /> },
      { name: "Express.js",      icon: <SiExpress /> },
      { name: "JWT Auth",        icon: <SiJsonwebtokens /> },
      { name: "API Integration", icon: <FaPlug /> },
    ],
  },
  {
    label: "Databases",
    color: "#fb923c",       // Orange
    bgColor: "rgba(251,146,60,0.06)",
    borderColor: "rgba(251,146,60,0.3)",
    items: [
      { name: "MySQL",   icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL",     icon: <FaDatabase /> },
    ],
  },
  {
    label: "Programming Languages",
    color: "#a78bfa",       // Purple
    bgColor: "rgba(167,139,250,0.06)",
    borderColor: "rgba(167,139,250,0.3)",
    items: [
      { name: "Java",       icon: <FaJava /> },
      { name: "Python",     icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    label: "Machine Learning & AI",
    color: "#f472b6",       // Pink
    bgColor: "rgba(244,114,182,0.06)",
    borderColor: "rgba(244,114,182,0.3)",
    items: [
      { name: "ML Algorithms",        icon: <FaRobot /> },
      { name: "Predictive Analytics", icon: <SiScikitlearn /> },
      { name: "Data Preprocessing",   icon: <FaBrain /> },
      { name: "Feature Engineering",  icon: <FaLightbulb /> },
      { name: "Model Evaluation",     icon: <FaCogs /> },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#fbbf24",       // Amber
    bgColor: "rgba(251,191,36,0.06)",
    borderColor: "rgba(251,191,36,0.3)",
    items: [
      { name: "Git",     icon: <FaGitAlt /> },
      { name: "GitHub",  icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <SiVscodium /> },
      { name: "Power BI",icon: <FaChartBar /> },
      { name: "NPM",     icon: <SiNpm /> },
    ],
  },
];

const softSkills: (SkillItem & { color: string; bgColor: string; borderColor: string })[] = [
  { name: "Leadership",        icon: <FaUsers />,     color: "#a78bfa", bgColor: "rgba(167,139,250,0.06)", borderColor: "rgba(167,139,250,0.3)" },
  { name: "Creativity",        icon: <FaLightbulb />, color: "#f472b6", bgColor: "rgba(244,114,182,0.06)", borderColor: "rgba(244,114,182,0.3)" },
  { name: "Problem Solving",   icon: <FaCogs />,      color: "#34d399", bgColor: "rgba(52,211,153,0.06)",  borderColor: "rgba(52,211,153,0.3)" },
  { name: "Critical Thinking", icon: <FaBrain />,     color: "#60a5fa", bgColor: "rgba(96,165,250,0.06)",  borderColor: "rgba(96,165,250,0.3)" },
  { name: "Teamwork",          icon: <FaHandshake />, color: "#fb923c", bgColor: "rgba(251,146,60,0.06)",  borderColor: "rgba(251,146,60,0.3)" },
  { name: "Interaction",       icon: <FaComments />,  color: "#f9a8d4", bgColor: "rgba(249,168,212,0.06)",  borderColor: "rgba(249,168,212,0.3)" },
];

/* ===================== SKILL CARD ===================== */
const SkillCard = ({
  name,
  icon,
  color,
  bgColor,
  borderColor,
  delay,
  isInView,
}: SkillItem & { color: string; bgColor: string; borderColor: string; delay: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay, duration: 0.4, ease: "easeOut" }}
    whileHover={{ y: -3, scale: 1.02 }}
    className="group relative flex items-center gap-3 px-4 py-2.5 rounded-lg
      bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm cursor-default
      transition-all duration-300 hover:border-transparent"
    style={{
      boxShadow: "0 4px 20px -10px rgba(0,0,0,0.3)",
    }}
  >
    {/* Clean gradient background on hover */}
    <div
      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `linear-gradient(135deg, ${bgColor} 0%, rgba(255,255,255,0.01) 100%)`,
        border: `1px solid ${borderColor}`,
      }}
    />

    {/* Subtle inner glowing point */}
    <div
      className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full m-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: color,
        boxShadow: `0 0 8px ${color}`,
      }}
    />

    {/* Icon Container with subtle background badge */}
    <div
      className="flex items-center justify-center w-8 h-8 rounded-md bg-white/[0.04] 
        group-hover:bg-white/[0.08] transition-all duration-300 text-lg z-10"
      style={{ color: "rgba(255,255,255,0.6)" }}
    >
      <span className="group-hover:scale-110 transition-transform duration-300" style={{ color: color }}>
        {icon}
      </span>
    </div>

    {/* Name */}
    <span className="text-gray-300 group-hover:text-white text-base font-medium z-10 transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

/* ===================== CATEGORY BLOCK ===================== */
const CategoryBlock = ({
  cat,
  isInView,
  baseDelay,
}: {
  cat: TechCategory;
  isInView: boolean;
  baseDelay: number;
}) => (
  <div className="mb-8">
    {/* Category label with sleek under-line */}
    <div className="mb-4">
      <h4
        className="text-xs sm:text-sm font-semibold tracking-wider uppercase inline-block pb-1 border-b"
        style={{
          color: cat.color,
          borderColor: `${cat.color}33`,
        }}
      >
        {cat.label}
      </h4>
    </div>

    {/* Cards grid — Horizontal boxes */}
    <div className="grid grid-cols-2 gap-3">
      {cat.items.map((skill, i) => (
        <SkillCard
          key={skill.name}
          {...skill}
          color={cat.color}
          bgColor={cat.bgColor}
          borderColor={cat.borderColor}
          delay={baseDelay + i * 0.05}
          isInView={isInView}
        />
      ))}
    </div>
  </div>
);

/* ===================== MAIN ===================== */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-transparent flex flex-col items-center justify-center overflow-hidden pt-12 pb-20 sm:pb-24"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-20 w-60 h-60 sm:w-72 sm:h-72 circle-decoration rounded-full opacity-30" />
      <div className="absolute bottom-40 right-20 w-72 h-72 sm:w-96 sm:h-96 circle-decoration rounded-full opacity-30" />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Skills &amp; Expertise
        </h2>
        <div className="flex items-center justify-center mb-16 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">What I Know</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        {/* ── TECHNICAL SKILLS ── */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h3>

          {/* Two-column split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
            {techCategories.map((cat, idx) => (
              <CategoryBlock
                key={cat.label}
                cat={cat}
                isInView={isInView}
                baseDelay={idx * 0.05}
              />
            ))}
          </div>
        </div>

        {/* ── SOFT SKILLS ── */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Soft Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {softSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                bgColor={skill.bgColor}
                borderColor={skill.borderColor}
                delay={index * 0.05}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
