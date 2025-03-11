import React from "react";
import { Helmet } from "react-helmet-async";
import studentimg from "../assets/images/Driven.jpg";

const PopularProducts = () => {
  return (
    <>
      <Helmet>
        <title>Driven to Lead - LITWITS</title>
        <meta
          name="description"
          content="LITWITS transforms education by fostering intellectual exploration and leadership."
        />
        <meta
          name="keywords"
          content="LITWITS, leadership, critical thinking, education, debating, public speaking"
        />
        <meta property="og:title" content="Driven to Lead - LITWITS" />
        <meta
          property="og:description"
          content="Empowering students with intellectual exploration and critical thinking."
        />
        <meta property="og:image" content={studentimg} />
        <meta
          property="og:url"
          content="https://litwits.com/popular-products"
        />
        <link rel="canonical" href="https://litwits.com/popular-products" />
      </Helmet>

      <section>
        {/* <div className="bg-red-800 container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="w-full max-w-[1499px] p-6 lg:p-12 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg text-white leading-relaxed lg:text-xl mb-6">
                Driven by a mission to build leaders, LITWITS has transformed
                the educational landscape by empowering students with a rigorous
                commitment to intellectual exploration and critical thinking.
              </p>
              <p className="text-lg text-white leading-relaxed lg:text-xl">
                LITWITS students’ ability to think critically, formulate deep
                and effective questions has led to LITWITS being home to the
                best speakers, debaters, and writers who become leaders with a
                conscience.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 mx-auto max-w-full relative">
              <img
                src={studentimg}
                alt="Student"
                className="object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full h-auto"
              />
            </div>
          </div>
        </div> */}

<div className="bg-red-800 w-full container mx-auto px-4 py-16 flex items-center justify-center">
  <div className="w-full  p-6 lg:p-12 flex flex-col gap-8">
    {/* Text Content */}
    <div className="text-center lg:text-left">
      <p className="text-lg text-white leading-relaxed text-left lg:text-xl mb-6">
        Driven by a mission to build leaders, LITWITS has transformed the educational landscape by empowering students with a rigorous commitment to intellectual exploration and critical thinking.
      </p>
      <p className="text-lg text-white leading-relaxed text-left lg:text-xl">
        LITWITS students’ ability to think critically, formulate deep and effective questions has led to LITWITS being home to the best speakers, debaters, and writers who become leaders with a conscience.
      </p>
    </div>
    {/* Image */}
    <div className="mt-8 mx-auto max-w-full relative">
      <img
        src={studentimg}
        alt="Student"
        className="object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full h-auto"
      />
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default PopularProducts;
