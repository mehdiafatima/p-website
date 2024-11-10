'use client'
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  

const HeroSection = () => {
    return (
        <section>
            <div className=" bg-black grid grid-cols-1 lg:grid-cols-12 gap-9 px-4 sm:px-6 lg:px-10 lg:ml-[35px] lg:mr-[90px] lg:ml[80px] lg:mt-13 lg:mb-3">
              
                <div className="col-span-1 lg:col-span-7 place-self-center text-center sm:text-left lg:ml-20 lg:mt-10 ">
                    <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600">
                            Hello, I&apos;m 
                        </span>
                        <div className="min-h-[75px] lg:min-h-[70px] flex items-center justify-center"> 
                            <TypeAnimation 
                                sequence={[
                                    'Mehdia Fatima Faizi',
                                    2000,  
                                    'Front-end Developer',
                                    2000,
                                    'UI Designer',
                                    2000
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>

                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-7 font-semibold">
                        I&apos;m a passionate front-end developer and UI designer, 
                        dedicated to creating visually stunning and user-friendly web interfaces. 
                        With a focus on clean design and responsive layouts, I strive to bring ideas to life that enhance user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 sm:mt-0">
                        <div className="flex items-center gap-3 justify-center sm:justify-start">
                          
                            <a 
                                href="https://www.linkedin.com/in/mehdia-fatima-884506289/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-blue-600 p-3 rounded-full text-white text-3xl hover:bg-blue-700 transition duration-300"
                            >
                                <FaLinkedin />
                            </a>
                          
                            <a 
                                href="https://github.com/mehdiafatima" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-gray-900 p-3 rounded-full text-white text-3xl hover:bg-gray-800 transition duration-300"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div className="mt-3 text-gray-400 text-sm sm:text-base lg:text-xl font-mono">
                            <p>Follow me or check out my profiles</p>
                        </div>
                    </div>
                </div>


                <div className="col-span-1 lg:col-span-5 flex justify-center items-center mt-3 sm:mt-0 lg:ml-[130px]">
                    <div className="relative w-[200px] h-[200px] sm:w-[330px] sm:h-[300px] lg:w-[450px] lg:h-[450px] lg:mt-0">
                        <Image
                            src="/pic1.png"
                            alt="Image"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:mt-0"
                            width={300}
                            height={250}
                        />
                    </div>
                </div>
            </div>

          
        </section>
    );
};

export default HeroSection;
