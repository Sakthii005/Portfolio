import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { SiFiverr } from 'react-icons/si';

const Hero = () => {
  // Role rotating text
  const roles = ["Full Stack Web Developer", "Building Scalable Web Applications"];
  const [roleIndex, setRoleIndex] = useState(0);


  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden pt-32 pb-16"
    >
      {/* Decorative Circles */}
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 circle-decoration rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Availability Badge */}
        <div className="mb-6 px-4 py-1 rounded-full border border-green-400 text-green-400 text-sm">
          🟢 Available for Opportunities
        </div>

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] 
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow">

            <div className="bg-black rounded-full p-2 w-full h-full">
              <motion.img
                src="Hero.jpeg"
                alt="Piramma Sakthi"
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6 max-w-xl">
          {/* Greeting */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              letterSpacing: '0.15em',
              color: '#a78bfa',
            }}
          >
            Hi, I&apos;m
          </p>

          {/* Name with unique font & gradient */}
          <h1
            style={{
              fontFamily: "'Cinzel Decorative', cursive",
              fontSize: 'clamp(1.6rem, 5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #e879f9 0%, #a78bfa 35%, #60a5fa 65%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 18px rgba(167,139,250,0.45))',
            }}
          >
            Piramma Sakthi
          </h1>

          {/* Rotating Role */}
          <motion.h3
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-purple-400 font-medium"
          >
            {roles[roleIndex]}
          </motion.h3>

          <p className="text-gray-400 text-lg leading-[2]">
            Creative thinker and web developer passionate about crafting innovative
            digital experiences. Explore my work and see creativity in action!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 pt-2">
            <motion.a
              href="PIRAMMA SAKTHI.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-2 bg-purple-600 rounded-full text-white font-medium shadow-md hover:bg-purple-700 transition"
            >
              <Download size={18} /> Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 border border-purple-500 rounded-full text-purple-400 font-medium hover:bg-purple-500/10 transition"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-10 pt-6">
            <motion.a
              href="https://github.com/Sakthii005"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: -10 }}
            >
              <Github className="w-7 h-7 text-gray-300 hover:text-[#ffcc00]" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/piramma-sakthi-s-766836265/"
              target="_blank"
              whileHover={{ scale: 1.3, rotate: 10 }}
            >
              <Linkedin className="w-7 h-7 text-gray-300 hover:text-[#0077B5]" />
            </motion.a>

            <motion.a
              href="https://www.fiverr.com/s/2K35eRL"
              target="_blank"
              whileHover={{ scale: 1.3, y: -5 }}
            >
              <SiFiverr className="w-7 h-7 text-gray-300 hover:text-[#1dbf73]" />
            </motion.a>

            <motion.a
              href="mailto:pirammasakthi42@gmail.com"
              whileHover={{ scale: 1.3, y: -5 }}
            >
              <Mail className="w-7 h-7 text-gray-300 hover:text-[#ff3333]" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6"
      >
        <ChevronDown className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
