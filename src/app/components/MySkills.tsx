'use client'; // This line marks the component as a Client Component

import { 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiGithub, 
  SiTypescript, 
  SiGit, 
  SiVisualstudiocode, 
  SiFigma 
} from 'react-icons/si';

const Skills = () => {
  return (
    <div id="skills" className="relative bg-black text-white py-10 px-4 max-w-6xl mx-auto mt-10 rounded-lg">
     
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold text-white mb-2 lg:mt-9 ">My Skills</h2>
        <div className="w-24 mx-auto border-b-4 border-purple-500 mb-4"></div>
        <p className="sm:text-xl lg:text-lg font-semibold text-gray-300">
          Here are the technologies I am proficient in:
        </p>
      </div>

     
      <div className="relative lg:mt-8 lg:mb-0 py-8 px-6 rounded-lg overflow-hidden">
      
        <div className=" absolute inset-0 "></div>

        <div className="relative z-10 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
         
          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiHtml5 size={38} className="text-orange-400 transition-all transform hover:text-red-400" />
            <p className="mt-2 text-sm font-bold">HTML</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiCss3 size={38} className="text-blue-500 transition-all transform hover:text-indigo-500" />
            <p className="mt-2 text-sm font-bold">CSS</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiJavascript size={38} className="text-yellow-500 transition-all transform hover:text-green-500" />
            <p className="mt-2 text-sm font-bold">JavaScript</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiReact size={38} className="text-cyan-500 transition-all transform hover:text-blue-500" />
            <p className="mt-2 text-sm font-bold">React</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiTailwindcss size={38} className="text-teal-500 transition-all transform hover:text-teal-700" />
            <p className="mt-2 text-sm font-bold">Tailwind CSS</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiGithub size={38} className="text-gray-800 transition-all transform hover:text-gray-600" />
            <p className="mt-2 text-sm font-bold">GitHub</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiTypescript size={38} className="text-blue-600 transition-all transform hover:text-blue-800" />
            <p className="mt-2 text-sm font-bold">TypeScript</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <img 
              src="/Logo (2).png" 
              alt="Next.js" 
              className=" h-8 transition-all transform hover:scale-110 hover:rotate-12 "
            />
            <p className="mt-2 text-sm font-bold">Next.js</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiGit size={38} className="text-red-500 transition-all transform hover:text-red-600" />
            <p className="mt-2 text-sm font-bold">Git</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiVisualstudiocode size={38} className="text-blue-500 transition-all transform hover:text-blue-700" />
            <p className="mt-2 text-sm font-bold">VS Code</p>
          </div>

          <div className="skill p-4 flex flex-col items-center transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out">
            <SiFigma size={38} className="text-pink-500 transition-all transform hover:text-pink-600" />
            <p className="mt-2 text-sm font-bold">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
