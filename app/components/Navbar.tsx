"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu after click
  };

  return (
    <nav className="bg-transparent backdrop-blur-2xl text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-white cursor-pointer"
        >
          <p className="hidden md:block">Emnet Teshome</p>
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:hidden block"
          />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 bg-black p-3 rounded-full">
          {["home", "projects", "about", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer capitalize"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://github.com/Emnet-tes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-black transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/emnet-teshome-b16107265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-black transition-colors" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-gray-700 bg-opacity-90 rounded-xl p-6 space-y-4 text-center w-52 shadow-lg">
          {["home", "projects", "about", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-white hover:text-blue-400 transition-colors capitalize text-lg"
            >
              {section}
            </button>
          ))}
          <div className="flex justify-center space-x-6 pt-4">
            <Link
              href="https://github.com/Emnet-tes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emnet-teshome-b16107265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-white" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
