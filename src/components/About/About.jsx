import React from "react";
import {Typewriter} from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {/* Main Container */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
       
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Manav Pal
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            <Typewriter
            words={[
                "Software Engineer",
                "Fullstack Developer",
                "coder",
                ]}
                typeSpeed={90}
                deleteSpeed={55}
                delaySpeed={500}
                loop={true}
                cursor
                cursorStyle = "|" 
            />              
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer who builds scalable and user-friendly web applications. Skilled in both front-end and back-end development, I specialize in the <span className="font-bold underline">MERN Stack </span> and leverage modern technologies to create seamless user experiences and efficient, robust solutions. I also have a strong foundation in <span className="font-bold underline">Data Structures and Algorithms (DSA)</span> , regularly solving problems on platforms like <span className="font-bold underline">LeetCode</span> to sharpen my problem-solving skills and system design thinking.
          </p>

          </div>
      </div>
    </section>
  );
};

export default About;
