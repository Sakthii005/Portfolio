import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ZoomIn, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ExperienceImage {
  src: string;
  caption: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
  skills: string[];
  images: ExperienceImage[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Junior Software Trainee Intern",
    company: "Eagle-HiTech Softclou Pvt Ltd",
    location: "Hybrid",
    duration: "June 2025 - July 2025",
    type: "Internship",
    description: [
      "Gained hands-on experience in building responsive, scalable front-end interfaces using React.js and modern styling solutions like Tailwind CSS.",
      "Designed, tested, and optimized RESTful APIs and backend services using Node.js and Express.js.",
      "Collaborated on structuring and querying databases (MySQL, MongoDB) to ensure efficient data management.",
      "Implemented secure user authentication workflows using JSON Web Tokens (JWT) and integrated various third-party API integrations.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MySQL", "MongoDB", "JWT", "REST APIs"],
    images: [
      { src: "internship_office_photo.png", caption: "Internship Office Collaboration" },
    ],
  },
];

const Experience = () => {
  const [lightboxImg, setLightboxImg] = useState<ExperienceImage | null>(null);
  const exp = experiences[0];

  return (
    <section
      id="experience"
      className="relative py-24 bg-transparent overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 circle-decoration rounded-full opacity-20" />
      <div className="absolute bottom-10 left-10 w-96 h-96 circle-decoration rounded-full opacity-20" />

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Featured Experience
        </h2>
        <div className="flex items-center justify-center mb-16 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">Professional Practice</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        {/* Unique Card Dashboard Layout - Stacked Form */}
        <div className="bg-[#121212]/75 border border-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:border-purple-500/20 transition-colors duration-500 p-6 md:p-8 space-y-8">
          
          {/* TOP SECTION: Details & Responsibilities */}
          <div className="flex flex-col justify-between">
            {/* Meta details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {exp.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  {exp.role}
                </h3>
                <p className="text-purple-300 font-semibold text-base mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="text-gray-400 text-xs md:text-sm flex flex-row gap-4 bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl self-start md:self-center">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="font-medium text-gray-300">{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="font-medium text-gray-300">{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description bullet points */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase">
                Core Work &amp; Learning
              </h4>
              <ul className="space-y-3 text-gray-300 text-xs sm:text-sm md:text-base">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-1 text-purple-400 font-bold select-none">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MIDDLE SECTION: Large Full-Width Image Showcase */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
              Experience Media
            </h4>
            
            <div 
              onClick={() => setLightboxImg(exp.images[0])}
              className="group relative w-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-purple-500/40 bg-black/40 transition-all duration-300 shadow-xl flex justify-center"
            >
              <img
                src={exp.images[0].src}
                alt={exp.images[0].caption}
                className="w-full h-auto max-h-[550px] object-contain group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white font-medium text-sm shadow-xl">
                  <ZoomIn className="w-4 h-4" />
                  <span>View Larger</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs text-center mt-3 font-medium italic">
              {exp.images[0].caption}
            </p>
          </div>

          {/* BOTTOM SECTION: Technology Tags */}
          <div className="pt-6 border-t border-white/5">
            <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
              Acquired Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox / Fullscreen Image Viewer Modal */}
      <AnimatePresence>
        {lightboxImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImg(null)}
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
              className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4"
            >
              <img
                src={lightboxImg.src}
                alt={lightboxImg.caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-gray-300 font-medium text-sm text-center">
                {lightboxImg.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
