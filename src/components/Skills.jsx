import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import Powerapps from '../assests/powerapps.png';
import Powerauto from '../assests/powerautomate.png';
import github from '../assests/github.png';
import mss from '../assests/mssql.png';
import FireBase from '../assests/firebase.png';
import sharepoint from '../assests/sharepoint.png';
import javascript from '../assests/javacript.png';
import python from '../assests/python.png';
import android from '../assests/andriod.png';


const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center sm:text-left'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'> These are the technologies I've worked with</p>
          </div>
  
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={HTML} alt="HTML icon" />
              <p className='my-4'><b>HTML</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={CSS} alt="CSS icon" />
              <p className='my-4'><b>CSS</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={javascript} alt="Javascript icon" />
              <p className='my-4'><b>Javascript</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={python} alt="Python icon" />
              <p className='my-4'><b>Python</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={Powerapps} alt="Powerapps icon" />
              <p className='my-4'><b>Powerapps</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={Powerauto} alt="Power Automate icon" />
              <p className='my-4'><b>Power Automate</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={sharepoint} alt="SharePoint icon" />
              <p className='my-4'><b>SharePoint</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={github} alt="GitHub icon" />
              <p className='my-4'><b>GitHub</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={mss} alt="MSSQL icon" />
              <p className='my-4'><b>MSSQL</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={android} alt="Firebase icon" />
              <p className='my-4 black'><b>Android</b></p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:shadow-lg hover:scale-110 hover:bg-gradient-to-r hover:from-[#a5adb5] hover:to-[#a5adb5] duration-500 bg-white bg-opacity-20'>
              <img className='w-24 mx-auto mt-4' src={FireBase} alt="Firebase icon" />
              <p className='my-4 black'><b>Firebase</b></p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  

export default Skills;