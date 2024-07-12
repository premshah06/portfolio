import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mx-auto'>
          <div className='text-left mb-8'>
            <h2 className='text-4xl font-bold inline border-b-4 border-pink-600 '>
              About
            </h2>
          </div>
          <p className='text-lg sm:text-2xl text-center mb-4'>
         <b> Hi! I'm Prem Shah, nice to meet you. Please take a look around.</b>
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div className='text-lg sm:text-xl'>
              <div className='bg-opacity-50 hover:bg-opacity-100 transition duration-300 rounded-lg p-4'>
                <p className='mb-4'>
                Welcome to my portfolio. Here's a glimpse of who I am:
                </p>
              </div>
            </div>
            <div className='text-lg sm:text-xl'>
              <div className='bg-opacity-50 hover:bg-opacity-100 transition duration-300 rounded-lg p-4'>
                <p className='mb-4'>
                  Self-motivated, always eager to learn new technologies, and prepared to embrace new challenges!
                </p>
              </div>
            </div>
            <div className='text-lg sm:text-xl'>
              <div className='bg-opacity-50 hover:bg-opacity-100 transition duration-300 rounded-lg p-4'>
                <p className='mb-4'>
                  Describe yourself here. Highlight your strengths and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
