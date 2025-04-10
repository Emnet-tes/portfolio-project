import Link from 'next/link';
// Update imports to only include used icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-7xl font-bold mb-20">Let&apos;s get in touch!</h1>

        <div className="max-w-6xl mx-auto bg-gray-900/50 rounded-2xl p-12 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">Work Inquiry</h2>
              <p className="text-xl text-gray-300">Let&apos;s work together.</p>
            </div>
            <Link
              href="mailto:teshomeemnet255@gmail.com"
              className="mt-6 md:mt-0 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-xl font-semibold transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="mailto:teshomeemnet255@gmail.com"
            className="text-2xl text-gray-300 hover:text-white transition-colors"
          >
            teshomeemnet255@gmail.com
          </Link>

          <div className="flex justify-center gap-8 mt-12 mb-16">
            <Link
              href="https://github.com/Emnet-tes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emnet-teshome-b16107265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={32} />
            </Link>
            
          </div>

          <p className="text-gray-400">
            This project is coded by Emnet, and it is{' '}
            <Link
              href="https://github.com/Emnet-tes/portfolio-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              open-sourced
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;