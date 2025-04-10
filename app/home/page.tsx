import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";
import Link from 'next/link';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white pt-20 relative">
      {/* Hero Section */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl p-20">
          <h1 className="text-5xl font-bold mb-6">
            Crafting <span className="text-blue-400">impactful</span> digital
            solutions.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            I&apos;m Emnet Teshome, a passionate Frontend Developer. Explore my work
            to see how I bring ideas to life through clean code and modern
            design.
          </p>
          <Link href="/about">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="tech-icons-container">
        <div className="tech-icon icon-1">
          <FaReact className="text-blue-400" />
        </div>
        <div className="tech-icon icon-2">
          <SiJavascript className="text-yellow-400" />
        </div>
        <div className="tech-icon icon-3">
          <SiTypescript className="text-blue-500" />
        </div>
        <div className="tech-icon icon-4">
          <FaNode className="text-orange-400" />
        </div>
        <div className="tech-icon icon-5">
          <FaGithub className="text-white" />
        </div>
        <div className="tech-icon icon-6">
          <SiMongodb className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
