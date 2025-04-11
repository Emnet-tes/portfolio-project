'use client';
import { useFloating, offset, shift, flip, FloatingPortal, } from '@floating-ui/react';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { FaReact, FaNode, FaGithub, FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaGitSquare } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress, SiRedux, 
    SiSocketdotio, SiJest, SiFigma, SiBootstrap, SiInsomnia, SiCypress,
    SiMysql,
    SiFlutter,
    SiMui,
    SiPostman,
    SiSwagger } from 'react-icons/si';
// Define the type for all possible icons
type IconType = 
  | typeof FaReact
  | typeof FaNode
  | typeof FaGithub
  | typeof FaHtml5
  | typeof FaCss3Alt
  | typeof FaJava
  | typeof FaPython
  | typeof FaPhp
  | typeof FaGitSquare
  | typeof SiTypescript
  | typeof SiJavascript
  | typeof SiMongodb
  | typeof SiTailwindcss
  | typeof SiNextdotjs
  | typeof SiExpress
  | typeof SiRedux
  | typeof SiSocketdotio
  | typeof SiJest
  | typeof SiFigma
  | typeof SiBootstrap
  | typeof SiInsomnia
  | typeof SiCypress
  | typeof SiMysql
  | typeof SiFlutter
  | typeof SiMui
  | typeof SiPostman
  | typeof SiSwagger;






interface SkillIconProps {
    Icon: IconType;
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Foundation';
    color: string;
  }
  const SkillIcon: React.FC<SkillIconProps> = ({ Icon, name, level, color }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { refs, floatingStyles } = useFloating({
      placement: 'top',
      middleware: [offset(10), shift(), flip()],
      open: isOpen,
    });
    return (
        <div className="relative group">
          <div
            ref={refs.setReference}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Icon className={`w-12 h-12 ${color} hover:scale-110 transition-transform`} />
          </div>
          {isOpen && (
            <FloatingPortal>
              <div
                ref={refs.setFloating}
                style={floatingStyles}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-50"
              >
                {`${name} (${level})`}
              </div>
            </FloatingPortal>
          )}
        </div>
      );
    };
const Skills = () => {
    
  return (
   <>
    {/* Skills Section */}
    <div className=" container mx-auto px-6 py-20" >
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Expert Level */}
          <div className="space-y-4">

            <div className="flex flex-wrap justify-center gap-8">
              <SkillIcon Icon={FaHtml5} name="HTML" level="Expert" color="text-orange-500" />
              <SkillIcon Icon={FaCss3Alt} name="CSS" level="Expert" color="text-blue-500" />
              <SkillIcon Icon={SiJavascript} name="JavaScript" level="Expert" color="text-yellow-400" />
              <SkillIcon Icon={SiTypescript} name="TypeScript" level="Expert" color="text-blue-400" />
              <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" level="Expert" color="text-cyan-400" />
              <SkillIcon Icon={SiNextdotjs} name="Next.js" level="Expert" color="text-white" />
              <SkillIcon Icon={FaGithub} name="GitHub" level="Expert" color="text-gray-200" />
              <SkillIcon Icon={FaGitSquare} name="Git" level="Expert" color="text-orange-600" />
            </div>
          </div>

          {/* Advanced Level */}
          <div className="space-y-4">

            <div className="flex flex-wrap justify-center gap-8">
              <SkillIcon Icon={SiRedux} name="Redux" level="Advanced" color="text-purple-500" />
              <SkillIcon Icon={SiMui} name="Material UI" level="Advanced" color="text-blue-400" />
              <SkillIcon Icon={FaNode} name="Node.js" level="Advanced" color="text-green-500" />
              <SkillIcon Icon={SiExpress} name="Express" level="Advanced" color="text-gray-200" />
              <SkillIcon Icon={SiMongodb} name="MongoDB" level="Advanced" color="text-green-400" />
              <SkillIcon Icon={SiSocketdotio} name="Socket.io" level="Advanced" color="text-white" />
              <SkillIcon Icon={SiSwagger} name="Swagger" level="Advanced" color="text-green-400" />
            </div>
          </div>

          {/* Intermediate Level */}
          <div className="space-y-4">
     
            <div className="flex flex-wrap justify-center gap-8">
              <SkillIcon Icon={SiJest} name="Jest" level="Intermediate" color="text-red-600" />
              <SkillIcon Icon={SiCypress} name="Cypress" level="Intermediate" color="text-gray-200" />
              <SkillIcon Icon={SiBootstrap} name="Bootstrap" level="Intermediate" color="text-purple-500" />
              <SkillIcon Icon={SiInsomnia} name="Insomnia" level="Intermediate" color="text-purple-600" />
              <SkillIcon Icon={SiPostman} name="Postman" level="Intermediate" color="text-orange-500" />
              <SkillIcon Icon={SiFigma} name="Figma" level="Intermediate" color="text-purple-400" />
            </div>
          </div>

          {/* Foundation Level */}
          <div className="space-y-4">
           
            <div className="flex flex-wrap justify-center gap-8">
              <SkillIcon Icon={FaJava} name="Java" level="Foundation" color="text-red-500" />
              <SkillIcon Icon={FaPython} name="Python" level="Foundation" color="text-yellow-300" />
              <SkillIcon Icon={SiFlutter} name="Flutter" level="Foundation" color="text-blue-400" />
              <SkillIcon Icon={FaPhp} name="PHP" level="Foundation" color="text-indigo-400" />
              <SkillIcon Icon={SiMysql} name="MySQL" level="Foundation" color="text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip component must be rendered once */}
      <Tooltip 
        id="skill-tooltip" 
        place="top"
        style={{ 
          backgroundColor: '#1f2937',
          color: '#ffffff',
          borderRadius: '0.375rem',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          zIndex: 50
        }}
      />
   </>
  )
}

export default Skills