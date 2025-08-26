import React, { useState } from "react";

const GroupSessions = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-96 flex flex-col items-center  font-Noto mt-4">
    <div className="bg-white p-3 rounded-xl shadow-lg w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Side */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8 rounded-xl text-white flex flex-col items-start min-h-[400px] text-left">
        <div className="mt-2">
          <h3 className="text-lg md:text-xl font-bold mb-3 text-white font-noto">
            GROUP SESSIONS
          </h3>
          <p className="text-sm md:text-base font-normal mb-3 leading-relaxed">
            As a member of the group sessions, the student may attend any of
            the following sessions:
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              "Core Debate Sessions",
              "Core Writing Sessions",
              "Core Discussion Sessions",
              "World Scholar’s Cup Prep sessions",
              "Ivy League Competitions-related prep sessions",
              "Financial Literacy Sessions",
              "Entrepreneurship Sessions",
              "MUN Prep Sessions",
            ].map((item, index) => (
              <li key={index} className="flex items-start text-white">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      {/* Right Side */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4  rounded-xl text-white flex flex-col">
        <h2 className="text-lg md:text-xl font-bold mb-3 mt-2 text-center lg:text-left text-white font-noto">
          Monday to Sunday: 08:00 to 9:30 p.m
        </h2>
        <div className=" p-4 rounded-lg shadow-md flex flex-col h-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="Course Thumbnail"
            className="rounded-lg mb-4 w-full h-40 sm:h-48 object-cover"
          />
          <h3 className="text-sm sm:text-base font-semibold mb-2">
            - Exclusive access to a curated list of competitions
          </h3>
          <h3 className="text-sm sm:text-base font-semibold mb-2">
            - Competition registration guidance
          </h3>
          <h3 className="text-sm sm:text-base font-semibold mb-4">
            - Team formation is offered for various competitions to members
            who require a team.
          </h3>
          <button className="mt-auto w-full bg-red-800 hover:bg-red-900 transition text-white py-3 rounded-lg text-base font-semibold">
            Check Out 
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default GroupSessions;
