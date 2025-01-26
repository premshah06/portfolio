import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#f4f1ea] flex items-center">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-col justify-center h-full text-[#2e2d2b] font-sans">
        {/* Greeting */}
        <p className="text-[#b56576] text-lg sm:text-xl tracking-wide animate-fadeIn font-medium">
          Hello, I am
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-[#2e2d2b] mt-2 sm:mt-4 leading-tight animate-slideIn">
          Prem Shah
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold text-[#355070] mt-2 sm:mt-4 animate-fadeIn">
          Data Analytics Graduate Student | Developer | ML Enthusiast
        </h2>

        {/* Summary */}
        <p className="text-[#2e2d2b] py-6 max-w-3xl text-lg sm:text-xl leading-relaxed justify-between text-justify animate-fadeIn">
          Pursuing a Master’s in Data Analytics at <b>San Jose State University</b>, I specialize in deriving insights 
          from complex datasets and developing solutions in machine learning, analytics, and database management. 
          With hands-on experience in AWS Redshift, AWS Glue, Athena, PowerBI, Tableau, SQL, Power Platform, Django and Neo4j. I build scalable solutions to 
          address challenging business needs.
        </p>

        {/* Call to Actions */}
        <div className="flex space-x-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white border-2 border-[#b56576] px-6 py-3 flex items-center bg-[#b56576] hover:bg-[#355070] hover:border-[#355070] transition duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg">
              View Work
              <span className="ml-3">
                <HiArrowNarrowRight className="text-white" />
              </span>
            </button>
          </Link>
          {/* Updated Contact Me Button with Email Link */}
          <a href="mailto:prem.shah@sjsu.edu">
            <button className="text-white border-2 border-[#355070] px-6 py-3 flex items-center bg-[#355070] hover:bg-[#b56576] hover:border-[#b56576] transition duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg">
              Contact Me
              <span className="ml-3">
                <HiArrowNarrowRight className="text-white" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
