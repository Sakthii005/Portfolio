import React, { useEffect, useRef, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";

const Resume = () => {
  const resumeUrl = "PIRAMMA SAKTHI.pdf";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleView = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  // 👇 Detect when the section is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-20 bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 circle-decoration rounded-full"></div>

      {/* Main content */}
      <div
        className={`container mx-auto px-1 relative z-10 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-4xl font-bold text-center mb-5 gradient-text transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Resume
        </h2>

        <h3
          className={`text-1xl font-semibold mb-0 text-purple-300 flex items-center justify-center transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium">Career Summary</p>
          <span className="w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </h3>

        {/* Resume Card */}
        <div
          className={`max-w-3xl mx-auto bg-lavender/10 rounded-2xl p-10 min-h-64 hover-card transition-all duration-1000 delay-300 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          } border-animation flex flex-col justify-center items-center relative`}
        >
          <div className="w-full flex items-center justify-between mb-10 border-b border-dashed border-lavender-light pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-lavender/20 rounded-xl">
                <FileText className="w-8 h-8 text-lavender-light" />
              </div>
              <h3 className="text-xl font-semibold text-gradient">My Resume</h3>
            </div>
            <button
              onClick={handleView}
              className="flex items-center gap-2 px-12 py-3 bg-lavender/20 text-gradient rounded-lg hover:bg-lavender/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View
            </button>
          </div>

          <div className="w-full px-4 sm:px-6 py-5 border border-dashed border-lavender-light rounded-lg">
            <ul className="list-disc list-inside text-gray-400 space-y-5 text-lg">
              <li>Proficient in Java, Python, and web technologies (HTML, CSS)</li>
              <li>Hands-on experience in React, IoT, and Machine Learning</li>
              <li>Recognized for excellence in robotics and AI-based competitions</li>
              <li>Strong leadership, problem-solving, and organizational skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
