import React from "react";
import studentimg from "/assets/litwits-leaders.avif";

const PopularProducts = () => {
  return (
    <>
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

<div className="bg-red-800 w-full mx-auto px-4 py-16 flex items-center justify-center">
  <div className="w-full  p-6 lg:p-12 flex flex-col gap-8">
    {/* Text Content */}
    <div className="text-center lg:text-left">
      <p className="text-lg text-white leading-relaxed text-left lg:text-xl mb-6">
        Driven by a mission to build leaders, LITWITS has transformed the educational landscape by empowering students with a rigorous commitment to intellectual exploration and critical thinking.
      </p>
      <p className="text-lg text-white leading-relaxed text-left lg:text-xl">
        LITWITS students' ability to think critically, formulate deep and effective questions has led to LITWITS being home to the best speakers, debaters, and writers who become leaders with a conscience.
      </p>
    </div>
    {/* Image */}
    <div className="mt-8 mx-auto max-w-full relative">
    <img
      src={studentimg}
      alt="LITWITS - Empowering students to become global leaders."
      title="LITWITS - Building Future Leaders"
      aria-label="LITWITS - Building Future Leaders"
      aria-describedby="LITWITS transforms education with critical thinking, debate, and writing programs to build strong leaders."
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
