import React, { useState } from "react";
import { Award, Calendar, ShieldCheck, MapPin, ZoomIn, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface WorkshopImage {
  src: string;
  caption: string;
}

interface WorkshopItem {
  title: string;
  provider: string;
  location: string;
  date: string;
  description: string[];
  images: WorkshopImage[];
  badgeColor: string;
}

const workshopData: WorkshopItem[] = [
  {
    title: "Sixth Sense Robotics – Hands-on Workshop",
    provider: "Genesis EduTech & Centre of Excellence in Robotics and Automation, PSNA College of Engineering and Technology",
    location: "PSNA College of Engineering and Technology, Dindigul",
    date: "November 2023",
    description: [
      "Successfully completed a hands-on workshop on Sixth Sense Robotics covering robotics concepts and automation technologies.",
      "Participated in the Robotics Championship conducted as part of the workshop and secured 2nd Prize.",
    ],
    images: [
      { src: "robotics_cert_completion.jpg", caption: "Certificate of Completion" },
      { src: "robotics_cert_merit.jpg", caption: "Certificate of Merit (2nd Prize)" },
      { src: "robotics_award_group.jpg", caption: "Award Ceremony Group Photo" },
    ],
    badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-300",
  },
  {
    title: "Industrial Internet of Robotic Things (IIoRT) – Hands-on Training",
    provider: "Centre of Excellence in Robotics and Automation, PSNA College of Engineering and Technology & Genesis EduTech",
    location: "PSNA College of Engineering and Technology, Dindigul",
    date: "September 2024",
    description: [
      "Successfully completed hands-on training on Industrial Internet of Robotic Things (IIoRT).",
      "Gained practical exposure to robotics, automation, IoT concepts, and industrial applications.",
    ],
    images: [
      { src: "iiort_cert_completion.jpg", caption: "Certificate of Completion" },
      { src: "iiort_lab_photo.jpg", caption: "IIoRT Hands-on Lab Practice" },
    ],
    badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  },
];

const Workshops = () => {
  const [lightboxImg, setLightboxImg] = useState<WorkshopImage | null>(null);

  return (
    <section
      id="workshops"
      className="relative py-24 bg-transparent overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 circle-decoration rounded-full opacity-20" />
      <div className="absolute bottom-20 right-10 w-80 h-80 circle-decoration rounded-full opacity-20" />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 gradient-text">
          Workshops &amp; Training
        </h2>
        <div className="flex items-center justify-center mb-16 gap-3">
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
          <p className="text-purple-300 font-medium text-sm sm:text-base">Hands-on Practice</p>
          <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
        </div>

        {/* Workshops List */}
        <div className="max-w-4xl mx-auto space-y-16">
          {workshopData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121212]/75 border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 hover:border-purple-500/20 transition-all duration-300 shadow-xl space-y-8"
            >
              {/* Header details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                      Workshop
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-purple-400/80" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-purple-300 text-xs sm:text-sm font-semibold mt-2 flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{item.provider}</span>
                  </p>
                </div>
              </div>

              {/* Achievements list */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase">
                  Achievements &amp; Activities
                </h4>
                <ul className="space-y-3.5 text-gray-300 text-xs sm:text-sm md:text-base list-none pl-0">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="mt-1 flex-shrink-0">
                        {idx === 0 && dIdx === 1 ? (
                          <Award className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_4px_rgba(234,179,8,0.4)]" />
                        ) : (
                          <ShieldCheck className="w-4 h-4 text-purple-400" />
                        )}
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Large Media Gallery - All Visible At Once */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold tracking-widest text-purple-400 uppercase">
                  Media &amp; Documentation
                </h4>
                
                <div className={`grid grid-cols-1 ${item.images.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-4`}>
                  {item.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="flex flex-col"
                    >
                      <div
                        onClick={() => setLightboxImg(img)}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-purple-500/40 bg-black/60 transition-all duration-300 shadow-lg"
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white font-medium text-xs shadow-xl">
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>View Larger</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-[11px] text-center mt-2.5 font-medium italic">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Image Viewer Modal */}
      <AnimatePresence>
        {lightboxImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImg(null)}
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
                src={lightboxImg.src}
                alt={lightboxImg.caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-gray-300 font-medium text-sm text-center">
                {lightboxImg.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Workshops;
