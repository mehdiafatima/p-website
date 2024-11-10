'use client';

import React, { useRef } from "react";

import Image from "next/image";
import { motion } from "framer-motion"; 

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null); 

  return (
    <section
      ref={sectionRef}
      className="bg-black sm:mt-0 mt-20 px-4 py-8 md:py-16 text-purple-500 relative"
      id="about"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between mt-0">
     
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex justify-center md:justify-start w-full md:w-1/2 mb-8 md:mb-0 mt-0 sm:mt-0"
        >
          <div className="ml-10 lg:ml-[30%]"> 
            <Image
              src="/about1.png" 
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-auto max-w-[200px] md:max-w-[300px] xl:max-w-[300px] object-cover rounded-lg shadow-lg lg:mt-0 sm:mt-0"
            />
          </div>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/2 text-center md:text-left lg:mt-36 "
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-purple-500 mb-4 lg:mr-[40%] sm:mt-0">
            About Me
          </h2>
        
          <div className="w-16 h-1 mx-auto md:mx-0 bg-gradient-to-r from-purple-500 to-indigo-500 mb-4"></div>

       
          <p className="text-base sm:text-lg lg:text-1xl text-white font-semibold leading-relaxed mb-4 lg:mr-40 lg:left-[40%] mt-10">
            Hi! I&#39;m Mehdia Fatima Faizi, a passionate web developer with skills in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. Currently an undergraduate student pursuing a BCom degree, I&#39;m dedicated to mastering the art of web development. I&#39;m always eager to learn, grow, and take on new challenges in this field.
          </p>

         
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
