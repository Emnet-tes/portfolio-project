
import { projects } from "@/constants";
import { Project } from "@/constants"; // Make sure this import exists
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen text-white px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center"> MyProjects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
