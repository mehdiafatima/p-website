'use client';  // Mark this file as a client component

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string;
  previewLink: string;
  codeLink: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: 'Resume Generator',
    description: 'A user-friendly tool that streamlines the resume creation process...',
    techStack: 'HTML, CSS, JavaScript',
    previewLink: 'https://hackathon1-m3-mff.vercel.app/',
    codeLink: 'https://github.com/mehdiafatima/Hackathon1-M3',
    imageUrl: '/p1.png',
  },
  {
    title: 'Pixel-Perfect Figma Website',
    description: 'This is a pixel-perfect Figma to web project showcasing a clean layout.',
    techStack: 'Next.js, Tailwind CSS',
    previewLink: 'https://figmawebdesign.vercel.app/',
    codeLink: 'https://github.com/mehdiafatima/figmawebdesign',
    imageUrl: '/p2.png',
  },
  {
    title: 'Spotify Clone',
    description: 'A clone of the Spotify interface, built to replicate the design and features.',
    techStack: 'HTML, CSS, JavaScript',
    previewLink: 'https://spotifyclone-by-mehdiafatimafaizi.vercel.app/',
    codeLink: 'https://github.com/mehdiafatima/Spotify-Clone',
    imageUrl: '/p3.png',
  },
  {
    title: 'Travel Website',
    description: 'A travel planning site with destination guides, tips, and booking features.',
    techStack: 'Next.js, Tailwind CSS',
    previewLink: 'https://my-nextjsweb.vercel.app/',
    codeLink: 'https://github.com/mehdiafatima/nextjsweb',
    imageUrl: '/p4.png',
  },
  {
    title: 'Garden Haven Website',
    description: 'A serene website offering gardening tips, plant care guides, and ideas.',
    techStack: 'Next.js, Tailwind CSS',
    previewLink: 'https://garden-web-by-mehdiafatimafaizi.vercel.app/',
    codeLink: 'https://github.com/mehdiafatima/Garden-Web',
    imageUrl: '/p5.png',
  },
  {
    title: 'The Study Matrix Website!',
    description: 'A site focused on effective study techniques, the importance of education.',
    techStack: 'Next.js, CSS',
    previewLink: 'https://the-study-matrix-by-mehdiafatimafaizi.vercel.app/',
    codeLink: 'https://github.com/mehdiafatima/The-Study-Matrix',
    imageUrl: '/p6.png',
  },
];

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section

    
      ref={projectsRef}
      id="projects"  
      className="text-center lg:mt-16 sm:mt-0 mx-auto max-w-screen-xl px-4 py-12 mb-18 relative"
    >
      
      <div className="text-center mb-8 bg-black mt-0 px-10 py-14 mb-0 ">
        <h2 className="text-4xl font-bold text-white w-full h-full mt-0 ">Projects</h2>
        <div className="w-24 mx-auto border-b-4 border-purple-500 mb-2"></div>
        <p className="mt-5 sm:text-xl lg:text-lg font-semibold text-gray-300">Things I’ve built so far</p>
      </div>
    


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 relative z-10">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 transform"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-purple-600 mt-2">{project.description}</p>
              <p className="text-sm text-white mt-4">
                Tech stack: <span className="text-gray-200 font-medium">{project.techStack}</span>
              </p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-900 hover:text-blue-700 transition-colors duration-200 transform hover:scale-110"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Preview
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 transform hover:scale-110"
                >
                  <FaGithub className="mr-2" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/moreprojects"
          className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 hover:bg-slate-800 text-white mt-3 sm:mt-0"
        >
          Explore More Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
