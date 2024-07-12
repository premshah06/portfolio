import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0a192f] '>
      {/* Container */}
      <div className='max-w-screen-xl mx-auto px-8 flex flex-col justify-center h-full text-white font-serif'>
        <p className='text-pink-600 text-lg sm:text-xl'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold mt-2 sm:mt-4 text-gray-300'>
          Prem Shah
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-gray-400 leading-tight mt-2 sm:mt-4'>
          I'm a Data Analyst.
        </h2>
        <p className='text-gray-400 py-4 max-w-lg'>
          Specializing in creating insightful charts and occasionally designing Power-Apps applications, delivering exceptional digital experiences.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white border-2 border-gray-600 px-6 py-3 my-2 flex items-center bg-blue-600 hover:bg-pink-600 hover:border-pink-600 transition duration-300 ease-in-out'>
              View Work
              <span className='ml-3'>
                <HiArrowNarrowRight className='text-white group-hover:text-gray-300 transition duration-300' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
