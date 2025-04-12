"use client";

import Image from "next/image";
import Projects from "../components/Projects";
import About from "@/app/components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white pt-20 relative">
      <section
        id="home"
        className="md:pt-20 bg-gradient-to-b from-blue-500 to-black"
      >
        {/* Hero Section */}
        <div className="container mx-auto md:px-6">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl p-4 md:p-20">
              <h1 className="text-5xl font-bold mb-6">
                Crafting <span className="text-blue-400">impactful</span>{" "}
                digital solutions.
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                I&apos;m Emnet Teshome, a passionate Frontend Developer. Explore
                my work to see how I bring ideas to life through clean code and
                modern design.
              </p>
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => scrollToSection("projects")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-30 right-20 min-w-2/7 h-92 rounded-3xl hidden md:block">
          <Image
            src="/Emenet Teshome.jpg"
            alt="Profile Photo"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-40"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
        </div>
      </section>

      <section
        id="projects"
        className="pt-20 bg-gradient-to-t from-blue-500 to-black"
      >
        <Projects />
      </section>
      <section
        id="about"
        className="pt-20 bg-gradient-to-b from-blue-500 to-black"
      >
        <About />
      </section>
      <section
        id="skills"
        className="pt-20 bg-gradient-to-t from-blue-500 to-black"
      >
        <Skills />
      </section>
      <section
        id="contact"
        className="pt-20 bg-gradient-to-b from-blue-500 to-black"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
