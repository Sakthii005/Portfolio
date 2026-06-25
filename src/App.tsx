import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Workshops from './components/Workshops';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveParticles from './components/InteractiveParticles';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Preloader — unmounts after onComplete fires */}
      <AnimatePresence>
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content — fades in once preloader is gone */}
      <motion.div
        className="min-h-screen bg-[#0A0A0A] text-white relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <InteractiveParticles />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Workshops />
          <Certificates />
          <Leadership />
          <Resume />
        </main>
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
