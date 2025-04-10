"use client";

import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Tech Compass",
    description: "A platform designed to provide users with a tailored tech learning path based on their interests, problem-solving abilities, and preferred learning styles.",
    image: "/compass.png",
    link: "https://tech-compass.vercel.app"
  },
  {
    title: "Tadiyas AASTU",
    description: "A digital magazine created to highlight and celebrate student creativity, achievements, and talents at AASTU.",
    image: "/tadiyas.png",
    link: "https://tadiyas-aastu.vercel.app"
  },
  {
    title: "Salire - Job Search Platform",
    description: "A responsive job-search platform using React, Next.js, and TypeScript. Includes features like job bookmarking, optimized search, and end-to-end testing with Jest and Cypress.",
    image: "/salire.png",
    link: "https://salire.vercel.app/"
  },
  {
    title: "Academia Hub",
    description: "An academic platform for accessing course materials, submitting assignments, and managing learning resources.",
    image: "/acadamiaHub.png",
    link: "https://academia-hub-39ze.onrender.com/"
  },
  {
    title: "Bank Dashboard",
    description: "Built a dashboard to monitor transactions and present statistical insights. Focused on clean data visualization and user-friendly layouts.",
    image: "/dashImage.png",
    link: "https://deploy-preview-2250--aastu-web-g1-bankdash.netlify.app/landing"
  },
  {
    title: "Toki - Real-time Messaging App",
    description: "A chat application featuring group messaging, real-time communication with Socket.IO, and secure user authentication. Built with React, Node.js, Express, and MongoDB.",
    image: "/toki.png",
    link: "https://toki-qk79.onrender.com/"
  },
  {
    title: "Smart Ride",
    description: "Collaborated on UI/UX and mobile development. The app helps users book and share rides efficiently with a smooth interface and intuitive experience.",
    image: "/smartride.png",
    link: "https://www.figma.com/design/k62DZtapO3Kd67IzXhc7RT/Smart-Ride-UI-Ux--Copy-?node-id=0-1&p=f&t=p6Wd0Vf7pv5uIynu-0"
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex items-center text-blue-400">
          <span className="mr-2">View Project</span>
          <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;