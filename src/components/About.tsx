import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#0A0A0A] relative flex items-center justify-center min-h-screen overflow-hidden px-2 pb-12 md:pb-0"
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
              I am a passionate Java Developer and Front-End Innovator, who loves AI, machine
              learning, and web development. A natural problem solver with strong leadership skills
              and a knack for quick learning, I thrive in collaborative environments where
              boundaries are pushed further and further. My aim is to craft seamless, intuitive
              applications that combine technical precision with creative solutions to make a
              meaningful impact through every project I take on.
            </p>

            {/* Info Box */}
            <div className="space-y-6 bg-[#151515] p-6 rounded-2xl w-full">
              <div className="flex flex-col items-center md:flex-row gap-4 justify-center">
                <span className="text-sm font-medium text-purple-300">Location:</span>
                <span className="text-gray-300">Dindigul, Tamil Nadu, India</span>
              </div>
              <div className="flex flex-col items-center md:flex-row gap-4 justify-center">
                <span className="text-sm font-medium text-purple-300">Email:</span>
                <span className="text-gray-300">pirammasakthi42@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
