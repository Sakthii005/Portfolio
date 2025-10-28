import React, { useState, useRef } from "react";
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
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "Technical Skills",
    items: [
      { name: "HTML", proficiency: 90, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", proficiency: 62, icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "React.js", proficiency: 60, icon: <FaReact className="text-cyan-500" /> },
      { name: "Java", proficiency: 67, icon: <FaJava className="text-red-600" /> },
      { name: "Python", proficiency: 70, icon: <FaPython className="text-yellow-500" /> },
      { name: "SQL", proficiency: 60, icon: <FaDatabase className="text-green-500" /> },
      { name: "Machine Learning", proficiency: 65, icon: <FaRobot className="text-purple-500" /> },
      { name: "Node.js", proficiency: 50, icon: <FaNodeJs className="text-gray-400" /> },
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

const getSkillColor = (proficiency: number) => {
  if (proficiency >= 95) return "bg-gradient-to-r from-blue-600 to-blue-400";
  if (proficiency >= 90) return "bg-gradient-to-r from-green-500 to-green-300";
  if (proficiency >= 85) return "bg-gradient-to-r from-purple-500 to-purple-300";
  if (proficiency >= 80) return "bg-gradient-to-r from-cyan-500 to-cyan-300";
  if (proficiency >= 75) return "bg-gradient-to-r from-yellow-500 to-yellow-300";
  if (proficiency >= 70) return "bg-gradient-to-r from-orange-500 to-orange-300";
  if (proficiency >= 65) return "bg-gradient-to-r from-pink-500 to-pink-300";
  if (proficiency >= 60) return "bg-gradient-to-r from-teal-500 to-teal-300";
  if (proficiency >= 55) return "bg-gradient-to-r from-indigo-500 to-indigo-300";
  if (proficiency >= 50) return "bg-gradient-to-r from-gray-500 to-gray-300";
  return "bg-gradient-to-r from-red-600 to-red-400";
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-50 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-50 right-20 w-96 h-96 circle-decoration rounded-full"></div>

      <motion.div
        className="container mx-auto px-6 sm:px-12 md:px-24"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-5 gradient-text">
          Skills & Expertise
        </h2>
        <h3 className="text-1xl font-semibold mb-12 text-purple-300 flex items-center justify-center">
          <span className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium">What I Know</p>
          <span className="w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {skills[0].items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="space-y-2"
                  onMouseEnter={() => setHoveredSkill(skillIndex)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 flex items-center gap-2">
                      {skill.icon} {skill.name}
                    </span>
                    {"proficiency" in skill && (
                      <span className="text-purple-300">
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>
                  <div className="h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ease-out ${
                        "proficiency" in skill
                          ? getSkillColor(skill.proficiency)
                          : ""
                      }`}
                      style={{
                        width:
                          "proficiency" in skill
                            ? hoveredSkill === skillIndex
                              ? `${skill.proficiency + 5}%`
                              : `${skill.proficiency}%`
                            : "0%",
                        transform:
                          hoveredSkill === skillIndex ? "scale(1.05)" : "scale(1)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {skills[1].items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center p-3 bg-[#1E1E1E] rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-200"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(0, 0, 0, 0.5), 0 0 1px 2px rgb(223, 121, 246), 0 0 2px 3px rgb(204, 214, 231)",
                  }}
                >
                  <div className="text-white text-3xl mb-2">{skill.icon}</div>
                  <span className="text-white text-lg font-semibold">
                    {skill.name}
                  </span>
                  <div className="mt-3 w-10 h-1 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
