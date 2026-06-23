import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const certificates = [

  {
    title: 'Research Paper Presentation - ICSIE 2026',
    issuer: '17th International Conference on Science & Innovative Engineering',
    date: 'April 2026',
    description: 'Presented a research paper titled "SIPTRACK: SIPCOT Industrial Performance Tracking System" held at Prince Dr. K. Vasudevan College of Engineering & Technology, Chennai.',
    image: 'icsie_2026_presentation.jpg', // Local path
  },
  {
    title: 'Internship',
    issuer: 'Eagle-HiTech Softclou Pvt Ltd',
    date: 'June 2025',
    description: 'A Full Stack internship at Eagle-HiTech Softclou Pvt Ltd, gaining hands-on experience in web development and modern programming technologies!',
    image: 'Intern.jpg', // Local path
  },
  {
    title: 'Gold Contest with iAspire',
    issuer: 'Accenture',
    date: 'January 2025',
    description: 'Celebrating my journey to the Gold Level in the Go for Gold contest with iAspire, fueled by learning, growth, and inspiration!',
    image: 'Accenture.jpg', // Local path
  },
  {
    title: 'NPTEL Online Certification - Programming in Java',
    issuer: 'IIT Kharagpur (Funded by MoE, Govt. of India)',
    date: 'October 2024',
    description: 'Successfully completed the 12-week course "Programming in Java" with a consolidated score of 56% (proctored exam and online assignments).',
    image: 'nptel_java_cert.jpg', // Local path
  },
  {
    title: 'Generative AI',
    issuer: 'GUVI',
    date: 'September 2024',
    description: 'The SAWIT.AI Learnathon Program on Generative AI Fundamentals, gaining valuable skills for future projects!',
    image: 'GenAI.jpg', // Local path
  },
  {
    title: 'Java Fundamentals Certificate of Excellence',
    issuer: 'Scaler Topics',
    date: 'March 2024',
    description: 'Successfully completed the comprehensive "Java Course - Mastering the Fundamentals" covering 86 video tutorials, 12 modules, and 9 coding challenges.',
    image: 'java_scaler_cert.jpg', // Local path
  }
];

const CertificateItem = ({ certificate }: { certificate: typeof certificates[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#151515] rounded-2xl overflow-hidden border border-purple-600/20">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-[#1a1a1a] transition-colors"
      >
        <div>
          <h3 className="text-xl font-semibold text-purple-300">{certificate.title}</h3>
          <p className="text-gray-400 mt-1">{certificate.issuer} • {certificate.date}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-purple-300 w-6 h-6" />
        ) : (
          <ChevronDown className="text-purple-300 w-6 h-6" />
        )}
      </button>

      {isExpanded && (
        <div className="p-6 pt-0">
          <p className="text-gray-400 mb-4">{certificate.description}</p>
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="pt-8 pb-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 circle-decoration rounded-full"></div>
      <div className="absolute bottom-800 right-20 w-96 h-96 circle-decoration rounded-full"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-5 gradient-text">Certificates</h2>
        <h3 className="text-1xl font-semibold mb-10 text-purple-300 flex items-center justify-center">
          <span className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium">What I Did</p>
          <span className="w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </h3>
        <div className="space-y-4 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateItem key={index} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
