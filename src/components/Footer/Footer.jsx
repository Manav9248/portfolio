import React from "react";
import {FaTwitter, FaLinkedin, FaInstagram,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialMedia } from "../../constants";

const Footer = () => {

// smooth scroll function
const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
}

  return (
    <footer className="text-white py-8 px-[9vw] md:px-[7vw] ">
      <div className="container md:mx-auto text-center  w-full">
        <h2 className="text-xl font-semibold text-purple-500">Manav Pal</h2>

        {/* Navigation Link */}
        <nav className="flex flex-wrap justify-center md:space-x-6 space-x-[0.6rem] mt-4 sm:w-full">
          {[
            { id: "about", name: "About" },
            { id: "skills", name: "Skills" },
            { id: "experience", name: "Experience" },
            { id: "work", name: "Projects" },
            { id: "education", name: "Education" },
          ].map((item,index)=>(
            <button key={index}
            onClick={()=>handleScroll(item.id)}
            className="hover:text-purple-500 text-sm sm:text-base my-1">
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {icon: <FaLinkedin />, link:socialMedia.linkedin},
            {icon: <FaTwitter />, link:socialMedia.twitter},
            {icon: <FaInstagram />, link:socialMedia.instagram},
            {icon: <FaGithub />, link:socialMedia.github},
            {icon: <SiLeetcode />, link:socialMedia.leetcode},


          ].map((item,index)=>(
            <a key={index} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">
                  {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">&#169; 2025 Manv Pal. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
