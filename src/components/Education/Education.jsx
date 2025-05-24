import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section id="education"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="uppercase font-bold text-4xl text-white">Education</h2>
              {/* underline */}
              <div className="w-52 h-1 bg-purple-500 mx-auto mt-1"></div>
              <p className="text-gray-400 mt-4 text-lg font-semibold">My education has been a journey of learning and development. Here are the details of my academic background.</p>
            </div>
    
    
            {/* Education Timeline */}
            <div className="relative">
             
              {/* Vertical Line */}
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
              
              {/* Educataion Entries */}
              {education.map((edu,index)=>(
                
                <div key={edu.id}
                className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
    
                  {/* Timeline Circle */}
                  <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 hide-circle:hidden">
                    <img src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
    
                    {/* Content Section */}
                    <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-red-700  bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]  transform transition-transform duration-300 hover:scale-105`}>
    
                    {/* Flex container for image and text */}
                    <div className="flex items-center space-x-6">
                     
                      {/* School Logo */}
                      <div className="w-24 h-20 bg-white rounded-md overflow-hidden">
                      <img src={edu.img}
                       alt={edu.school}
                       className="w-full h-full object-cover" />
                      </div>
    
                      {/* Degree School name and Date */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                          <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                        </div>
    
                        {/* Date */}
                        <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                      </div>
                    </div>
                          {/*Grade and Description  */}
                     <p className="mt-4 text-gray-300 font-bold">Grade: {edu.grade}</p>
                    <p className="text-gray-400 mt-4">{edu.desc}</p>
                    
                  </div>
    
                </div>
              ))}
            </div>
        </section>
  )
}

export default Education