import React from 'react';
import { data } from '../data/data';

const Work = () => {
  const projects = data;

  return (
    <div
      id="work"
      className="w-full min-h-screen bg-gradient-to-br from-[#f7f3eb] via-[#e8e3db] to-[#d7d1c7] text-[#2e2d2b] md:pt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 text-[#2e2d2b] border-[#4a5568]">
            Work
          </h2>
          <p className="py-6 text-lg text-[#4a4a4a]">
            Explore some of my projects showcasing my skills and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group container shadow-lg rounded-lg overflow-hidden relative bg-[#ffffff] transition-transform duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col justify-center items-center h-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.name}`}
                      className="text-white text-lg font-semibold bg-[#4a5568] bg-opacity-90 rounded-lg px-4 py-2 m-2 hover:bg-[#355070] transition duration-300"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-[#2e2d2b] mb-3">{project.name}</h3>
                <p className="text-[#4a4a4a] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Skills Section */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-[#4a5568] text-white font-medium rounded-full px-3 py-1 hover:opacity-80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
