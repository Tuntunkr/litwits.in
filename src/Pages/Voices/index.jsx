import React from 'react'

const index = () => {
  return (
    <div><div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
    {/* Animated Header */}
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-bounce">
      Coming Soon
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl mb-8 text-center">
      We are working hard to bring you something amazing!
    </p>

    {/* Countdown Animation */}
    <div className="flex space-x-6">
      {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-white text-black p-4 rounded-lg shadow-lg animate-pulse"
        >
          <span className="text-3xl md:text-5xl font-bold">00</span>
          <span className="text-sm md:text-lg">{unit}</span>
        </div>
      ))}
    </div>

    {/* Footer Section */}
    <p className="mt-12 text-center">
      Stay tuned! Follow us for updates.
    </p>
  </div></div>
  )
}

export default index