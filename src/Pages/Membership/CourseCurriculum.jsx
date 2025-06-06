import React, { useState } from "react";

const GroupSessions = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-96 flex flex-col items-center px-4 py-4 md:px-4 lg:px-12 font-Nato">
      

      {/* Main Content */}
      <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-2 sm:p-4 rounded-xl text-white flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">GROUP SESSIONS</h2>
          <p className="text-base text-start md:text-base font-normal mb-8 max-w-3xl leading-relaxed">
    &nbsp;  As a member of the group sessions, the student may attend any of &nbsp; &nbsp; &nbsp;the following sessions:
</p>

          <ul className="space-y-3 mb-6">
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
              <li key={index} className="flex items-start text-white text-sm sm:text-base">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Course Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-4 rounded-xl text-white flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center lg:text-left text-white">
            Monday to Sunday: 08:00 to 9:30 p.m.
          </h2>
          <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col h-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt="Course Thumbnail"
              className="rounded-lg mb-4 sm:mb-6 w-full h-40 sm:h-48 object-cover"
            />
            <h3 className="text-sm sm:text-base font-semibold mb-3">
              - Exclusive access to a curated list of competitions
            </h3>
            <h3 className="text-sm sm:text-base font-semibold mb-3">
              - Competition registration guidance
            </h3>
            <h3 className="text-sm sm:text-base font-semibold mb-3">
              - Team formation is offered for various competitions to members who require a team.
            </h3>
            <button className="mt-auto w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg text-base font-semibold">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSessions;
