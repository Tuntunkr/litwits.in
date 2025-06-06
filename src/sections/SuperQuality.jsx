import React from "react";
import heroimage from "/assets/educational-journey.avif";

const SuperQuality = () => {
  return (
    <div
      className="w-full relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${heroimage})` }}
      role="img"
      aria-label="Partners in Educational Journey - LITWITS"
      aria-describedby="partners-educational-journey-description"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex items-center justify-center h-full px-4 md:px-8 lg:px-16">
        <div className="text-center text-white space-y-8 max-w-3xl mx-auto font-serif py-8 sm:py-12 md:py-16 lg:py-20">
          <h3 className="text-lg sm:text-xl font-nato md:text-2xl lg:text-3xl font-semibold leading-relaxed">
            WE ARE PARTNERS IN OUR STUDENT'S EDUCATIONAL JOURNEY
          </h3>

          <p className="text-lg md:text-xl text-white  text-left font-nato">
            Nurtured by a group of diverse knowledge professionals, LITWITS
            empowers students to build powerful profiles through an extensive
            range of diverse and dynamic opportunities. These include Debating,
            Writing, Model United Nations, TED-Ed Talks, Entrepreneurship, AP
            courses, SAT and ACT Preparations, Financial Literacy, Research and
            Policy Papers, Academic Prep sessions for IB and IGCSE, and tailored
            preparation for Ivy League and prestigious academic endeavours to
            foster intellectual rigour and a pursuit of excellence. We offer
            comprehensive college counseling guidance providing students with a
            clear roadmap through every step of the journey.
          </p>

          <p className="text-lg md:text-xl text-white  text-left font-nato">
            LITWITS prides itself on its adaptive teaching methodologies
            designed to cater to diverse learning styles and abilities.
            Dedicated mentors help students identify their core strengths—their
            passion, talent, and aspirations through various instructional
            strategies that encourage students to critically and creatively
            explore and analyze real-world challenges, equipping them with the
            skills to navigate an ever-evolving world thoughtfully.
          </p>
        </div>
      </div>
      {/* Descriptive Content for Accessibility */}
      <p id="partners-educational-journey-description" className="sr-only">
        LITWITS empowers students with research, creative writing, debating, and
        MUN preparation for Ivy League success.
      </p>
    </div>
  );
};

export default SuperQuality;
