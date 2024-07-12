import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
      
      {/* menu */}
      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='mx-4'>
            <Link to={item} smooth={true} duration={500} className='cursor-pointer'>
              <span className='text-2xl font-bold transition duration-300 ease-in-out hover:text-blue-400 hover:underline'>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
         !nav
           ? 'hidden'
           : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='py-6 text-4xl'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              <span className='text-4xl font-bold transition duration-300 ease-in-out hover:text-blue-400'>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white font-bold text-1xl'
              href='https://www.linkedin.com/in/prem-shah-9a5076219/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white font-bold text-1xl'
              href='https://github.com/premshah06'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-white font-bold text-1xl'
              href='mailto:premshah0602@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-white font-bold text-1xl'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
