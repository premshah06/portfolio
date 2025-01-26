import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = ['home', 'experience', 'skills', 'work', 'certificates'];
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/prem-shah-9a5076219/',
      label: 'LinkedIn',
      bg: 'bg-blue-600',
      icon: <FaLinkedin size={30} />,
    },
    {
      href: 'https://github.com/premshah06',
      label: 'GitHub',
      bg: 'bg-[#333333]',
      icon: <FaGithub size={30} />,
    },
    {
      href: 'mailto:prem.shah@sjsu.edu',
      label: 'Email',
      bg: 'bg-[#6fc2b0]',
      icon: <HiOutlineMail size={30} />,
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f4f1ea] text-[#2e2d2b] z-50 transition-all duration-300">
      {/* Logo */}
      
      
      <div>
  <h1
    className="text-5xl font-thin tracking-tight text-black relative inline-block font-[Cormorant]"
    style={{
      letterSpacing: '-0.10em', // Slight overlap between letters
      color: '#1f1f1f', // Soft black for sophistication
    }}
  >
    <span  style={{ zIndex: 1 }}>P</span>
    <span  style={{ zIndex: 0 }}>S</span>
  </h1>
</div>




      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-[Nunito] text-lg">
        {navLinks.map((item) => (
          <li
            key={item}
            className="relative group transition-all duration-500 hover:text-[#355070]"
          >
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg font-medium transition-all duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#355070] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer transition-transform duration-500"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#f4f1ea] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          nav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {navLinks.map((item) => (
          <li
            key={item}
            className="py-6 text-3xl transition-all duration-500 transform hover:scale-110 font-[Nunito]"
          >
            <Link
              to={item}
              smooth={true}
              duration={500}
              onClick={handleClick}
              className="text-2xl font-semibold hover:text-[#355070] transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-6">
  <ul>
    {socialLinks.map((item, index) => (
      <li
        key={index}
        className={`w-[160px] h-[60px] flex justify-between items-center -ml-[140px] hover:ml-0 duration-300 ease-out ${item.bg} transform hover:scale-105`}
      >
        <a
          href={item.href}
          className="flex justify-between items-center w-full text-white font-medium"
          aria-label={item.label}
        >
          {item.label} {item.icon}
        </a>
      </li>
    ))}
  </ul>
</div>



      {/* Social Icons for Mobile */}
      <div className="lg:hidden fixed bottom-0 w-full bg-[#f4f1ea] flex justify-around items-center p-4 z-25">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-[#2e2d2b] hover:text-[#355070] transition-all duration-500 ease-in-out transform hover:scale-125"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
