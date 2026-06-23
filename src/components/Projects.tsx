import React, { useState } from "react";
import { ExternalLink, Github, Zap, ZoomIn, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* ─────────────────────────── DATA ─────────────────────────── */
const projects = [
  {
    title: "SIPTRACK: SIPCOT Industrial Performance Tracking System",
    description:
      "Developed a full-stack web application for managing and monitoring industrial data within SIPCOT industrial parks. The system enables industries to update investment, employment, water usage, power consumption, turnover, and CSR activities through a centralized platform with role-based access control.",
    image: "SIPTRACK.png",
    accent: "#a855f7", // Purple
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MySQL", "AI & ML"],
    features: [
      "Role-Based Access Control",
      "Industry Data Management",
      "Deadline & Submission Tracking",
      "Performance Classification",
      "ROI Calculation & Analytics",
      "Admin Dashboard & Reports",
    ],
    github: "https://github.com/Sakthii005/SIPTRACK.git",
    live: "https://siptrack-portal.vercel.app/",
  },
  {
    title: "Hostel Management System",
    description:
      "A full-stack web application to automate hostel administration, including student registration, room allocation, fee tracking, and record management, reducing manual effort and enhancing transparency.",
    image: "Hostel.jpg",
    accent: "#06b6d4", // Cyan
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Student Registration Management",
      "Room Allocation System",
      "Fee Tracking & Reports",
      "Database-Driven Record Management",
      "Admin Dashboard",
      "Improved Efficiency & Transparency",
    ],
    github: "https://github.com/Sakthii005/Hostel_Management_System.git",
  },
  {
    title: "Artificial Intelligence and Data Science Resource and Planning (ADRAP)",
    description:
      "Developed a full-stack web application to streamline academic workflows with role-based login access for Admin, Faculty, and Students. The project's core objective is to enable students to securely enter their internal marks through a centralized digital portal.",
    image: "ADRAP.png",
    accent: "#10b981", // Emerald
    tags: ["React.js", "Node.js", "Tailwind CSS", "MySQL"],
    features: [
      "Role-Based Authentication",
      "Subject Management",
      "CO Mapping & Max Marks Entry",
      "Excel File Handling",
      "Student Marks Entry",
      "SQL Database Integration",
    ],
    github: "https://github.com/Sakthii005/ADRAP.git",
  },
  {
    title: "Groundwater Level Predictor",
    description:
      "This project focuses on predicting groundwater levels for the next 5 to 10 years by utilizing time series, environmental, and satellite data. Advanced machine learning algorithms like LSTM and Random Forest are used to analyze trends and forecast groundwater availability.",
    image: "Project.jpg",
    accent: "#f59e0b", // Amber
    tags: ["Machine Learning", "HTML", "CSS"],
    features: [
      "Groundwater Level Predictions",
      "Time Series Data Analysis",
      "Interactive Web Interface",
      "Interactive Map Interface",
      "Flood and Scarcity Prevention",
      "Promotes Water Conservation",
    ],
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 bg-transparent overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 circle-decoration rounded-full opacity-10 blur-[80px]" />
      <div className="absolute bottom-20 left-10 w-80 h-80 circle-decoration rounded-full opacity-10 blur-[80px]" />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Featured Projects
        </h2>
        <div className="flex items-center justify-center mb-16 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">What I've Built</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        {/* Unique Projects Layout: Fully Visible Image Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#121212]/75 border border-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:border-purple-500/25 transition-all duration-300 shadow-2xl flex flex-col h-full"
            >
              {/* Image Container: Full aspect ratio, covering the card fully */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm font-semibold text-xs transition-all shadow-lg"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>View Full Image</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-4">
                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-bold leading-snug transition-colors duration-350"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                      Key Features
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer block: Tags & Links */}
                <div className="space-y-6 pt-4 border-t border-white/5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold border"
                        style={{
                          backgroundColor: `${project.accent}0a`,
                          borderColor: `${project.accent}20`,
                          color: project.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-xs transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-semibold text-xs transition-all shadow-md hover:shadow-lg"
                        style={{
                          backgroundColor: project.accent,
                          boxShadow: `0 4px 12px ${project.accent}33`,
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh]"
            >
              <img
                src={selectedImage}
                alt="Fullscreen Project View"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
