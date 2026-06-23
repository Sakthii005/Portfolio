import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-transparent relative flex items-center justify-center overflow-hidden px-2 py-16 md:py-20"
    >
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 circle-decoration rounded-full"></div>

      <motion.div
        className="container mx-auto max-w-[95%] relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-5 gradient-text">About Me</h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-1xl font-semibold mb-8 text-purple-300 flex items-center justify-center">
              <span className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
              <p className="text-purple-300 font-medium">Who am I</p>
              <span className="w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
            </h3>

            <p className="text-gray-400 mb-8 px-2">
              I am a passionate Full Stack Web Developer with a strong interest in web development, AI, and modern technologies. I specialize in building responsive, scalable, and user-friendly applications using frontend and backend technologies. A problem solver with strong adaptability and quick learning skills, I enjoy working in collaborative environments where I can create innovative solutions and continuously improve my technical expertise. My goal is to develop seamless applications that combine clean design, efficient backend systems, and impactful user experiences through every project I build.
            </p>

            {/* Info Box */}
            <div className="bg-[#151515]/60 border border-white/5 p-6 rounded-2xl w-full backdrop-blur-md">
              <div className="flex flex-col md:flex-row gap-6 md:gap-2 text-center justify-around items-center w-full">
                <div className="px-4 py-2 flex flex-col items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Location</span>
                  <span className="text-gray-200 text-sm">Dindigul, Tamil Nadu, India</span>
                </div>
                <div className="px-6 py-2 border-y md:border-y-0 md:border-x border-white/10 flex flex-col items-center w-full md:w-auto">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Email</span>
                  <span className="text-gray-200 text-sm">pirammasakthi42@gmail.com</span>
                </div>
                <div className="px-4 py-2 flex flex-col items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Education</span>
                  <span className="text-gray-200 text-sm font-medium">B.Tech - AI &amp; Data Science</span>
                  <span className="text-gray-400 text-[11px] mt-0.5">PSNA College of Engineering &amp; Technology</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
