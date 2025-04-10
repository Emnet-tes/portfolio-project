import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-2xl  text-white py-4 px-6 fixed w-full hrefp-0 z-50">
      <div className="container mx-auhref flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Emnet Teshome
        </Link>
        
        <div className="flex items-center space-x-8 bg-black p-3 rounded-full">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About me
          </Link>
          <Link href="/skills" scroll={true}  className="hover:text-blue-400 transition-colors">
            Skills
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
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