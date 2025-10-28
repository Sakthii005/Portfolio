import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Groundwater Level Predictor",
    description:
      "This project focuses on predicting groundwater levels for the next 5 to 10 years by utilizing time series, environmental, and satellite data. Advanced machine learning algorithms like LSTM and Random Forest are used to analyze trends and forecast groundwater availability.",
    image: "Project.jpg",
    tags: ["Machine Learning", "HTML", "CSS"],
    features: [
      "Groundwater Level Predictions",
      "Time Series Data Analysis",
      "Interactive Web Interface",
      "Interactive Map Interface",
      "Flood and Scarcity Prevention",
      "Promotes Water Conservation",
    ],
  },
  {
    title: "Artificial Intelligence and Data Science Resource and Planning",
    description:
      "Developed a full-stack web application to streamline academic workflows with role-based login access for Admin, Faculty, and Students. The project’s core objective is to enable students to securely enter their internal marks through a centralized digital portal.",
    image: "ADRAP.png",
    tags: ["React.js", "Node.js", "MySQL"],
    features: [
      "Role-Based Authentication",
      "Subject Management",
      "CO Mapping & Max Marks Entry",
      "Excel File Handling",
      "Student Marks Entry",
      "SQL Database Integration",
    ],
  },
  {
    title: "Hostel Management System",
    description:
      "A full-stack web application to automate hostel administration, including student registration, room allocation, fee tracking, and record management, reducing manual effort and enhancing transparency.",
    image: "Hostel.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Student Registration Management",
      "Room Allocation System",
      "Fee Tracking & Reports",
      "Database-Driven Record Management",
      "Admin Dashboard",
      "Improved Efficiency & Transparency",
    ],
  },
];

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  features: string[];
}

const ProjectCard = ({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 w-full mb-8">
      <div
        onClick={onToggle}
        className="cursor-pointer p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
      >
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            {isOpen ? "Show Less" : "Show More"}
            {isOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-6 md:p-10 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-5 gradient-text">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
            <p className="text-purple-300 font-medium">What I've Built</p>
            <span className="w-16 h-[1px] bg-gradient-to-l from-purple-500 to-transparent" />
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isOpen={openProject === index}
              onToggle={() =>
                setOpenProject(openProject === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
