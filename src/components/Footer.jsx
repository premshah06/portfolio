import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/prem-shah-9a5076219/', icon: <FaLinkedin size={25} />, label: 'LinkedIn' },
    { href: 'https://github.com/premshah06', icon: <FaGithub size={25} />, label: 'GitHub' },
    //{ href: 'https://twitter.com', icon: <FaTwitter size={25} />, label: 'Twitter' },
    { href: 'mailto:prem.shah@sjsu.edu', icon: <HiOutlineMail size={25} />, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <footer className="bg-[#2e2d2b] text-[#f4f1ea] py-10">
      <div className="max-w-[1200px] mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#f4f1ea]">Prem Shah</h3>
          <p className="text-[#d3d3d3]">
            A passionate developer who loves crafting creative solutions. Feel free to connect or explore my projects.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-medium text-[#f4f1ea]">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-[#f4f1ea] hover:text-[#355070] transition-colors duration-300 transform hover:scale-105"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-medium text-[#f4f1ea]">Connect with Me</h4>
          <ul className="flex space-x-6">
            {socialLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4f1ea] hover:text-[#355070] transition-colors duration-300 transform hover:scale-110"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#4a4a4a] py-4 mt-8">
        <p className="text-center text-sm text-[#d3d3d3]">
          © {new Date().getFullYear()} Prem Shah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
