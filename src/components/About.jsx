import React from 'react';

const experiencesData = [
  {
    title: "Power Platform Developer (Intern) at Linde",
    period: "January 2024 – April 2024",
    description:
      "Developed 'RAPPIT' on PowerApps to streamline IT service requests. Enhanced user accessibility and implemented real-time status tracking, ensuring efficient project folder management.",
  },
  {
    title: "Full Stack Web Developer (Intern) at Schneider Electric (L&T E&A)",
    period: "May 2023 – June 2023",
    description:
      "Built a Django-based web application, 'Manual Screen,' for managing and tracking test records associated with specific request numbers. Improved data accuracy and accessibility for operational efficiency.",
  },
  {
    title: "Django Developer (Intern) at Schneider Electric (L&T E&A)",
    period: "May 2022 – July 2022",
    description:
      "Created 'STL,' a Django-based digital platform for managing I-Scheduling Test Labs records. Centralized test bench locations and scheduling for enhanced testing workflows.",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-[#f4f1ea] to-[#e1ded6] text-[#2e2d2b] pt-20"
    >
      <div className="max-w-[1000px] mx-auto px-6 py-12 flex flex-col justify-center h-full">
        {/* Header */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-600 h-full"></div>
          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="w-10 h-10 bg-pink-600 rounded-full z-10 relative flex items-center justify-center">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Content Card */}
              <div
                className={`bg-[#1a1e2e] rounded-lg shadow-lg p-6 w-full sm:w-5/12 ${
                  index % 2 === 0 ? 'sm:ml-8' : 'sm:mr-8'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-300 mb-2">{experience.title}</h3>
                <p className="text-gray-400 italic mb-4">{experience.period}</p>
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
