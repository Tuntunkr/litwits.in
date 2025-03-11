import React from "react";
import { Helmet } from "react-helmet-async";
import heroimage from "../assets/images/second.png";

const SuperQuality = () => {
  return (
    <div
      className="w-full relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <Helmet>
        <title>Super Quality Education - LITWITS</title>
        <meta name="description" content="LITWITS partners with students on their educational journey, offering diverse learning opportunities and tailored mentorship." />
        <meta name="keywords" content="LITWITS, education, mentorship, critical thinking, debating, public speaking, Ivy League prep" />
        <meta property="og:title" content="Super Quality Education - LITWITS" />
        <meta property="og:description" content="Empowering students with critical thinking, research, and public speaking skills for a bright future." />
        <meta property="og:image" content={heroimage} />
        <meta property="og:url" content="https://litwits.com/super-quality" />
        <link rel="canonical" href="https://litwits.com/super-quality" />
      </Helmet>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex items-center justify-center h-full px-4 md:px-8 lg:px-16">
        <div className="text-center text-white space-y-8 max-w-3xl mx-auto font-serif py-8 sm:py-12 md:py-16 lg:py-20">
          <p className="text-lg sm:text-xl font-nato md:text-2xl lg:text-3xl font-semibold leading-relaxed">
            WE ARE PARTNERS IN OUR STUDENT’S EDUCATIONAL JOURNEY
          </p>

          <p className="text-lg md:text-xl text-white  text-left">
            Nurtured by a group of diverse knowledge professionals, LITWITS empowers students to build powerful profiles through an extensive range of diverse and dynamic opportunities. These include Research and Policy Papers, Creative Writing, Debating, Model United Nations, TED-Ed Talks, Entrepreneurship, Advanced Placement courses and tailored preparation for Ivy League and prestigious academic endeavours to foster intellectual rigour and a pursuit of excellence.  
          </p>

          <p className="text-lg md:text-xl text-white  text-left">
            LITWITS prides itself on its adaptive teaching methodologies designed to cater to diverse learning styles and abilities. Dedicated mentors help students identify their core strengths—their passion, talent, and aspirations through various instructional strategies that encourage students to critically and creatively explore and analyze real-world challenges, equipping them with the skills to navigate an ever-evolving world thoughtfully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperQuality;
