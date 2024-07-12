import React from 'react';
import { data } from "../data/data";

const Work = () => {
  // Projects data
  const projects = data;

  return (
    <div id='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my work</p>
        </div>

        {/* Grid container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Individual project cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md overflow-hidden relative"
            >
              {/* Image */}
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-bold bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 m-2 hover:bg-blue-600 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-bold bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 m-2 hover:bg-pink-600 transition duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Project details */}
              <div className="p-4 bg-[#1a1e2e]">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center">
                  {/* Skills used */}
                  {project.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white text-gray-700 font-bold text-sm rounded-full px-3 py-1 m-1"
                    >
                      {skill}
                    </div>
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
