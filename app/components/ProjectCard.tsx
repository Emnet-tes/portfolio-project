
import Image from "next/image"; 

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
  
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full bg-gray-700 group  rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
      >
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>
      </a>
   
  );
};

export default ProjectCard;