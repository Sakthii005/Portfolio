import React, { useRef } from "react";
import { FileText, Download, ExternalLink, Briefcase, Code2, Lightbulb, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "Full Stack Dev",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    label: "AI & ML",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.25)",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Internship Experience",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.25)",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    label: "Problem Solver",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.25)",
  },
];

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.06 });
  const resumeUrl = "PIRAMMA SAKTHI.pdf";

  return (
    <section
      id="resume"
      ref={ref}
      className="relative pt-8 pb-24 bg-transparent overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 circle-decoration rounded-full opacity-20" />
      <div className="absolute bottom-10 right-10 w-96 h-96 circle-decoration rounded-full opacity-20" />

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text"
        >
          My Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center mb-16 gap-3"
        >
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">Career Summary</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-[#121212]/80 border border-white/[0.07] backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899, #22d3ee)",
            }}
          />

          <div className="p-8 md:p-10 space-y-10">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Icon + title */}
              <div className="flex items-center gap-4">
                <div
                  className="p-4 rounded-2xl"
                  style={{
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <FileText className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Piramma Sakthi</h3>
                  <p className="text-purple-300 text-sm font-medium mt-0.5">
                    Full Stack Developer · AI & Data Science
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={resumeUrl}
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                    boxShadow: "0 4px 18px rgba(168,85,247,0.35)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
                <motion.button
                  onClick={() => window.open(resumeUrl, "_blank", "noopener,noreferrer")}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white border transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View PDF
                </motion.button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06]" />

            {/* Highlights row */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-4">
                Key Highlights
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default transition-all duration-300"
                    style={{
                      background: h.bg,
                      border: `1px solid ${h.border}`,
                    }}
                  >
                    <span style={{ color: h.color }}>{h.icon}</span>
                    <span className="text-gray-200 text-sm font-medium leading-tight">{h.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06]" />

            {/* Summary bullets */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-4">
                Career Summary
              </p>
              <ul className="space-y-3.5 text-gray-300 text-base">
                {[
                  "Proficient in Java, Python, and web technologies (HTML, CSS, React.js, Node.js).",
                  "Hands-on experience in full-stack development, IoT, and Machine Learning.",
                  "Recognized for excellence in robotics championships and AI-based competitions.",
                  "Strong leadership, problem-solving, and organizational skills demonstrated across multiple roles.",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#a855f7", boxShadow: "0 0 6px #a855f7" }}
                    />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
