import React, { useRef, useState } from "react";
import { Users, Calendar, Award, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeadershipItem {
  role: string;
  organization: string;
  institution: string;
  duration: string;
  description: string[];
  image?: { src: string; caption: string };
}

const leadershipData: LeadershipItem[] = [
  {
    role: "Secretary",
    organization: "Naatiya Dance Club",
    institution: "PSNA College of Engineering and Technology",
    duration: "2023 - 2024",
    description: [
      "Served as the Secretary of the Naatiya Dance Club, overseeing club administration and core decision-making.",
      "Coordinated club activities, major dance productions, annual college events, and team initiatives.",
      "Managed communication, planning, and collaborative rehearsals among club members, promoting a vibrant cultural atmosphere.",
    ],
    image: {
      src: "naatiya_club_secretary.jpg",
      caption: "Medal Ceremony",
    },
  },
];

const LeadershipCard = ({
  item,
  onImageClick,
}: {
  item: LeadershipItem;
  onImageClick: (img: { src: string; caption: string }) => void;
}) => {
  return (
    <div className="bg-[#121212]/75 border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 hover:border-purple-500/20 transition-all duration-300 shadow-xl space-y-8">
      {/* TOP SECTION: Details */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div className="flex items-start gap-3">
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-400 mt-0.5">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {item.role}
            </h3>
            <p className="text-purple-300 text-sm font-medium">
              {item.organization}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">
              {item.institution}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm self-start md:self-center flex-shrink-0 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span>{item.duration}</span>
        </div>
      </div>

      {/* MID SECTION: Responsibilities */}
      <div>
        <h4 className="text-xs font-bold tracking-wider text-purple-400 uppercase mb-4">
          Key Responsibilities
        </h4>
        <ul className="space-y-3.5 text-gray-300 text-base leading-relaxed">
          {item.description.map((desc, dIdx) => (
            <li key={dIdx} className="flex items-start gap-2.5">
              <span className="mt-1 flex-shrink-0">
                <Award className="w-4 h-4 text-purple-400" />
              </span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* BOTTOM SECTION: Full-Width Image Showcase */}
      {item.image && (
        <div className="flex flex-col pt-6 border-t border-white/5">
          <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            Activities &amp; Induction Media
          </h4>
          
          <div
            onClick={() => onImageClick(item.image!)}
            className="group relative w-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-purple-500/40 bg-black/40 transition-all duration-300 shadow-xl flex justify-center"
          >
            <img
              src={item.image.src}
              alt={item.image.caption}
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
            {item.image.caption}
          </p>
        </div>
      )}
    </div>
  );
};

const Leadership = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section
      id="leadership"
      className="relative pt-8 pb-24 bg-transparent overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 circle-decoration rounded-full opacity-20" />
      <div className="absolute bottom-20 left-10 w-80 h-80 circle-decoration rounded-full opacity-20" />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Leadership &amp; Activities
        </h2>
        <div className="flex items-center justify-center mb-16 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">Co-curricular Roles</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto">
          {leadershipData.map((item, index) => (
            <LeadershipCard
              key={index}
              item={item}
              onImageClick={(img) => setActiveImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Image Viewer Modal */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveImage(null)}
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
                src={activeImage.src}
                alt={activeImage.caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-gray-300 font-medium text-sm text-center">
                {activeImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Leadership;
