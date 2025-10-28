import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Piramma Sakthi";
  const typingSpeed = 100;
  const pauseDuration = 3000;

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const typeText = () => {
      interval = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            i = 0;
            typeText();
          }, pauseDuration);
        }
      }, typingSpeed);
    };
    typeText();
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-auto bg-[#0A0A0A] flex items-center overflow-hidden pt-32 pb-10">
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 circle-decoration rounded-full"></div>
      <div className="container mx-auto px-1 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="space-y-8 px-7 md:px-20 pt-20 md:pt-28">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl gradient-text font-semibold">
                {text} <span className="text-purple-1000">|</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg leading-[2]">
                Creative thinker and web developer passionate about crafting innovative digital experiences. Explore my work and see creativity in action!.....
              </p>
            </div>
            
            {/* Social Icons Section */}
            <div className="flex gap-10 pt-1">
              {/* GitHub Icon */}
              <motion.a
                href="https://github.com/Sakthii005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: -10, filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))" }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="transition-all duration-300 hover:text-white"
              >
                <Github className="w-7 h-7 text-gray-300 transition-all duration-300 hover:text-[#ffcc00]" />
              </motion.a>

              {/* LinkedIn Icon */}
              <motion.a
                href="https://www.linkedin.com/in/piramma-sakthi-s-766836265/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10, filter: "drop-shadow(0px 0px 10px rgba(10, 102, 194, 0.8))" }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="transition-all duration-300 hover:text-white"
              >
                <Linkedin className="w-7 h-7 text-gray-300 transition-all duration-300 hover:text-[#0077B5]" />
              </motion.a>

              {/* Email Icon */}
              <motion.a
                href="mailto:pirammasakthi42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -5, filter: "drop-shadow(0px 0px 10px rgba(255, 50, 50, 0.8))" }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="transition-all duration-300 hover:text-white"
              >
                <Mail className="w-7 h-7 text-gray-300 transition-all duration-300 hover:text-[#ff3333]" />
              </motion.a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end px-6 md:px-20 py-10">
            <motion.div className="relative rounded-3xl overflow-hidden max-w-xs sm:max-w-md md:max-w-lg bg-white/10 backdrop-blur-lg shadow-lg p-2 mb-8 md:mb-0" whileHover={{ scale: 1.1 }}>
              <motion.div className="relative rounded-3xl" whileHover={{ filter: "drop-shadow(0px 0px 20px rgba(142, 85, 241, 0.8))" }} transition={{ duration: 0.3 }}>
                <motion.img src="Hero.png" alt="Creative Developer" className="w-full h-auto object-cover rounded-3xl" whileTap={{ boxShadow: "0 0 30px rgba(255, 255, 255, 0.9)" }} transition={{ duration: 0.3 }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
