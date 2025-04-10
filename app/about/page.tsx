import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Bio */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <h3 className="text-2xl text-blue-400 mb-6">Front-end Developer, based in Ethiopia</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                As a software developer, I have worked on various projects that span different industries and technologies.
              </p>
              <p className="text-lg">
                From real-time messaging platforms to job search applications, my experience includes building responsive, 
                user-centric solutions using modern web technologies.
              </p>
              <p className="text-lg">
                My work is driven by the goal of creating intuitive and functional digital experiences, 
                always focusing on clean code, performance, and scalability.
              </p>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
              <Image
                src="/Emenet Teshome.jpg"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-40"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;