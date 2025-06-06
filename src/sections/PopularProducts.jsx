import React from "react";
import studentimg from "/assets/litwits-leaders.avif";

const PopularProducts = () => {
  return (
    <>
      <section>
        <div className="bg-red-800 w-full mx-auto px-4 py-16 flex items-center justify-center">
          <div className="w-full  p-6 lg:p-12 flex flex-col gap-8">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-lg text-white leading-relaxed text-left lg:text-xl mb-6">
                Driven by a mission to build leaders, LITWITS has redefined the
                education landscape by fostering critical thinking, and the
                power of inquiry.
              </p>
              <p className="text-lg text-white leading-relaxed text-left lg:text-xl mb-6">
                For over a decade, LITWITS has empowered more than 10,000
                students to engage in reflective inquiry, deepen their
                perspectives and become catalysts for meaningful change.
              </p>
              <p className="text-lg text-white leading-relaxed text-left mb-4 lg:text-xl">
                LITWITS students' ability to think critically, formulate deep
                and effective questions has led to LITWITS being home to the
                best speakers, debaters, and writers who become leaders with a
                conscience.
              </p>
              <p className="text-lg text-white leading-relaxed text-left lg:text-xl">
                With a legacy of excellence, LITWITS students have consistently
                excelled at leading global competitions, including the Harvard
                Online Debate, Harvard International Review, Edinburgh BP World
                Cup, Yale University, and the Stanford Invitational. At the
                World Scholar’s Cup, our delegations have repeatedly ranked
                among the top, with notable performances across India, Beijing,
                Dubai, Doha, Melbourne, The Hague, Bangkok, Vietnam, Kuala
                Lumpur, and Yale. Students from around the world turn to the
                LITWITS platform as they shape themselves into the next
                generation of thoughtful, visionary leaders.
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
