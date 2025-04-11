'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="bg-transparent bg-gradient-to-b backdrop-blur-2xl  text-white py-4 px-6 fixed w-full hrefp-0 z-50">
      <div className="container mx-auhref flex justify-between items-center">
      <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white cursor-pointer"
          >
           Emnet Teshome
           
          </button>
        
        <div className="flex items-center space-x-8 bg-black p-3 rounded-full">
         
          <button 
              onClick={() => scrollToSection('home')}
              
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Home
            </button>
          <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
          <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Skills
            </button>
          <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Emnet-tes" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-black transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/emnet-teshome-b16107265/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-black transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;