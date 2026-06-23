import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <InteractiveParticles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <section id="projects">
          <Projects />
        </section>
        <Workshops />
        <Certificates />
        <Leadership />
        <Resume />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
