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
  FaProjectDiagram,
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";
import { motion, useInView } from "framer-motion";

/* ================= DATA ================= */
const skills = [
  {
    category: "Technical Skills",
    items: [
      { name: "HTML", proficiency: 90, icon: <FaHtml5 /> },
      { name: "CSS", proficiency: 62, icon: <FaCss3Alt /> },
      { name: "JavaScript", proficiency: 75, icon: <FaJs /> },
      { name: "React.js", proficiency: 60, icon: <FaReact /> },
      { name: "Node.js", proficiency: 50, icon: <FaNodeJs /> },
      { name: "Express.js", proficiency: 55, icon: <SiExpress /> },
      { name: "MongoDB", proficiency: 60, icon: <SiMongodb /> },
      { name: "Java", proficiency: 67, icon: <FaJava /> },
      { name: "Python", proficiency: 70, icon: <FaPython /> },
      { name: "SQL", proficiency: 60, icon: <FaDatabase /> },
      { name: "Machine Learning", proficiency: 65, icon: <FaRobot /> },
      { name: "DSA", proficiency: 65, icon: <FaProjectDiagram /> },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", icon: <FaUsers /> },
      { name: "Creativity", icon: <FaLightbulb /> },
      { name: "Problem Solving", icon: <FaCogs /> },
      { name: "Critical Thinking", icon: <FaBrain /> },
      { name: "Teamwork", icon: <FaHandshake /> },
      { name: "Interaction", icon: <FaComments /> },
    ],
  },
];

/* ================= FLOAT ANIMATION ================= */
const floating = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ================= PERFECT RESPONSIVE CIRCLE ================= */
const CircleSkill = ({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: number;
}) => {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
      <svg viewBox="0 0 80 80" className="w-full h-full rotate-[-90deg]">
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#f3e8ff" />
          </linearGradient>
        </defs>

        {/* Background */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#1f2937"
          strokeWidth="6"
          fill="transparent"
        />

        {/* Progress */}
        <motion.circle
          cx="40"
          cy="40"
          r={radius}
          stroke="url(#circleGradient)"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4 }}
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(147,51,234,0.5))",
          }}
        />
      </svg>

      {/* Icon + Percentage */}
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute inset-0 flex flex-col items-center justify-center text-xs"
      >
        <span className="text-purple-400 text-base sm:text-lg">{icon}</span>
        <span className="text-gray-300 text-[10px] sm:text-[11px]">
          {value}%
        </span>
      </motion.div>
    </div>
  );
};

/* ================= MAIN ================= */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-[100vh] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden pt-32 pb-32"
    >
      {/* Background Circles */}
      <div className="absolute top-40 left-20 w-60 h-60 sm:w-72 sm:h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 sm:w-96 sm:h-96 circle-decoration rounded-full"></div>

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Skills & Expertise
        </h2>

        <div className="flex items-center justify-center mb-12 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">
            What I Know
          </p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        {/* ===== TECHNICAL ===== */}
        <div className="mb-24">
          <h3 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10">
            {skills[0].items.map((skill, index) => {
              const technicalSkill = skill as {
                name: string;
                proficiency: number;
                icon: React.ReactNode;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    rotateX: 6,
                    rotateY: -6,
                    scale: 1.05,
                  }}
                  className="p-4 sm:p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition"
                >
                  <div className="flex flex-col items-center gap-3">
                    <CircleSkill
                      icon={technicalSkill.icon}
                      value={technicalSkill.proficiency}
                    />
                    <p className="text-gray-200 text-xs sm:text-sm font-medium text-center">
                      {technicalSkill.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===== SOFT ===== */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Soft Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
            {skills[1].items.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.07 }}
                whileHover={{
                  scale: 1.08,
                  rotateX: 8,
                  rotateY: -8,
                  boxShadow: "0px 0px 25px rgba(168,85,247,0.4)",
                }}
                className="p-4 sm:p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 cursor-pointer transition"
              >
                <motion.div
                  variants={floating}
                  animate="animate"
                  className="flex flex-col items-center gap-3"
                >
                  <span className="text-purple-400 text-2xl sm:text-3xl">
                    {skill.icon}
                  </span>

                  <span className="text-gray-200 text-xs sm:text-sm text-center">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
