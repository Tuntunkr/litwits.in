import React, { useState } from "react";

const GroupSessions = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col items-center p-6 font-sans">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-8">
        GROUP<span className="text-red-500">.</span> SESSIONS<span className="text-red-500">.</span>
      </h1>
      <p className="text-base font-bold text-center mb-8">Duration of each group session will be 90 minutes</p>

      {/* Main Content */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-6">GROUP SESSIONS</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Duration: 2.5 Months",
              "Each session lasts 90 minutes",
              "Price: ₹12,000",
              "Introduction To The Course - 03:53",
              "What Makes You Happy? - 18:19",
              "Balancing Your Life - 08:02",
              "The Ultimate Dream - 11:03",
              "Goal Creation - 05:00",
              "Homework - 02:14",
              "Worksheet (1 Of 4) - 9 pgs",
            ].map((item, index) => (
              <li key={index} className="flex text-white items-center">
                <span className="mr-2">✅</span> {item}
              </li>
            ))}
          </ul>
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((unit, index) => (
              <div key={index} className="bg-red-600 p-4 rounded-lg text-center">
                <span className="block text-2xl font-bold">00</span>
                <span className="text-sm">{unit}</span>
              </div>
            ))}
          </div>
          {/* Join Button */}
          {/* <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-300">
            Join GROUP SESSIONS
          </button> */}
        </div>

        {/* Right Side - Course Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-6">Exclusive Course Access</h2>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt="Course Thumbnail"
              className="rounded-lg mb-6 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">Complete Group Sessions Package</h3>
            <p className="text-gray-300 mb-6">
              Get access to all group sessions with expert guidance.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-300">
              Checkout Now
            </button>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="bg-white p-8 mt-8 rounded-xl shadow-lg max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
        {[
          {
            title: "Building Your Dream Life",
            lessons: [
              "Introduction To The Course",
              "What Makes You Happy?",
              "Balancing Your Life",
              "The Ultimate Dream",
              "Goal Creation",
              "Homework",
              "Worksheet (1 of 4)",
            ],
          },
          { title: "The Illusion of Time", lessons: [] },
          { title: "Maximizing Your Productivity", lessons: [] },
          { title: "Stopping Procrastination Forever", lessons: [] },
        ].map((module, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left bg-gray-100 hover:bg-gray-200 p-6 rounded-lg font-semibold flex justify-between items-center transition duration-300"
              onClick={() => toggleModule(index)}
            >
              <span>{module.title}</span>
              <span className="text-xl">{openModule === index ? "▲" : "▼"}</span>
            </button>
            {openModule === index && (
              <ul className="bg-gray-50 p-6 rounded-lg mt-2 space-y-3">
                {module.lessons.length > 0 ? (
                  module.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">📺</span> {lesson}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">No lessons available</li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupSessions;