// import React from "react";
// import { Link } from "react-router-dom";

// const PopularProducts = () => {
//   return (
//     <>
//       <section>
//         <div className="bg-red-800 w-full mx-auto px-4 py-16 flex items-center justify-center">
//           <div className="w-full  p-6 lg:p-12 flex flex-col gap-8">
//             {/* Text Content */}
//             <div className="text-center lg:text-left">
//               <p
//                 className=" text-white leading-relaxed text-left  mb-6"
//                 style={{ fontSize: "15px" }}
//               >
//                 Driven by a mission to build leaders, LITWITS has redefined the
//                 education landscape by championing critical thinking, and the
//                 power of inquiry.
//               </p>
//               <p
//                 className=" text-white leading-relaxed text-left  mb-6"
//                 style={{ fontSize: "15px" }}
//               >
//                 For over a decade, LITWITS has empowered more than 10,000
//                 students to engage in meaningful discourse, broadening
//                 perspectives and cultivating a nuanced understanding of the
//                 world.
//               </p>
//               <p
//                 className=" text-white leading-relaxed text-left  mb-6"
//                 style={{ fontSize: "15px" }}
//               >
//                 LITWITS students' ability to think critically and formulate deep
//                 and effective questions has led to LITWITS being home to the
//                 best speakers and debaters.
//               </p>
//               <p
//                 className=" text-white leading-relaxed text-left mb-6"
//                 style={{ fontSize: "15px" }}
//               >
//                 With a legacy of excellence, LITWITS students have consistently
//                 shone at leading global competitions, including the Harvard
//                 Online Debate, Harvard International Review, Edinburgh BP World
//                 Cup, Yale University, and the Stanford Invitational. At the
//                 World Scholar’s Cup, our delegations have repeatedly ranked
//                 among the top, with notable performances across India, Beijing,
//                 Dubai, Doha, Melbourne, The Hague, Bangkok, Vietnam, Kuala
//                 Lumpur, and Yale.
//               </p>
//               <p
//                 className=" text-white leading-relaxed text-left "
//                 style={{ fontSize: "15px" }}
//               >
//                 LITWITS has helped shape students into catalysts for the change
//                 they want to create in the world.
//               </p>
//             </div>
//             <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center">
//               {/* Left Text Content */}

//               <div className="relative">
//                 <div className="bg-gray-200 w-full md:w-[90%] mx-auto">
//                   {/* <img
//                     src={studentimg}
//                     alt="LITWITS mentors guiding students for academic success."
//                     title="LITWITS Mentors - Expert Guidance"
//                     aria-label="LITWITS Mentors - Expert Guidance"
//                     aria-describedby="Experienced mentors from Yale, Harvard, Oxford, and Cambridge provide expert coaching for students."
//                     className="w-full h-auto object-contain shadow-lg"
//                   /> */}
//                 </div>
//               </div>

//               {/* Right Image */}
//               <div className="space-y-6 bg-opacity-50 p-8 rounded-lg">
//                 <h2 className="text-3xl font-bold text-white uppercase text-start mb-4">
//                   WORLD SCHOLAR'S CUP
//                 </h2>
//                 <p
//                   className="leading-8 text-white"
//                   style={{ fontSize: "15px" }}
//                 >
//                   LITWITS' legacy at the World Scholar's Cup includes the Coach
//                   of the Year award - a testament to the academy's excellence in
//                   mentoring and academic leadership.
//                 </p>
//                 <p
//                   className="leading-8 text-white"
//                   style={{ fontSize: "15px" }}
//                 >
//                   This award reflects our continued dedication to delivering
//                   high-impact training and fostering global achievers through a
//                   structured, expert-led approach.
//                 </p>
//                 <Link
//                   to="/membership"
//                   className="text-white no-underline uppercase bg-blue-950 px-6 py-3 rounded-md text-base font-medium transition text-center mt-10 block w-fit ml-0"
//                   style={{
//                     fontFamily: "Noto Sans",
//                   }}
//                 >
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PopularProducts;
import React from "react";
// import studentimg from "/assets/litwits-leaders.avif";
import TestimonialCarousel from "./Testimonial";

const PopularProducts = () => {
  return (
    <>
      <section>
        <div className="bg-red-900 w-full mx-auto px-4 py-16 flex items-center justify-center">
          <div className="w-full  p-6 lg:p-12 flex flex-col gap-8">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-lg text-white leading-relaxed text-left  mb-3">
                Driven by a mission to build leaders, LITWITS has redefined the
                education landscape by championing critical thinking, and the
                power of inquiry.
              </p>
              <p className="text-lg text-white leading-relaxed text-left  mb-3">
                For over a decade, LITWITS has been dedicated to shaping
                leaders, empowering more than 10,000 students to think
                critically and drive meaningful change in their own lives, in
                their communities and the world.
                {/* For over a decade, LITWITS has empowered more than 10,000 students to engage in meaningful discourse, broadening perspectives and cultivating a nuanced understanding of the world.  */}
              </p>
              <p className="text-lg text-white leading-relaxed text-left  mb-3">
                LITWITS students' ability to think critically and formulate deep
                and effective questions has led to LITWITS being home to the
                best speakers and debaters.
              </p>
              <p className="text-lg text-white leading-relaxed text-left mb-3">
                With a legacy of excellence, LITWITS students have consistently
                shone at leading global competitions, including the Harvard
                Online Debate, Harvard International Review, Edinburgh BP World
                Cup, Yale University, and the Stanford Invitational. At the
                World Scholar’s Cup, our delegations have repeatedly ranked
                among the top, with notable performances across India, Beijing,
                Dubai, Doha, Melbourne, The Hague, Bangkok, Vietnam, Kuala
                Lumpur, and Yale.
              </p>
              <p className="text-lg text-white leading-relaxed text-left ">
                LITWITS has helped shape students into catalysts for the change
                they want to create in the world.
              </p>
            </div>
            {/* Image */}
            {/* <div className="mt-8 mx-auto max-w-full relative">
              <img
                src={studentimg}
                alt="LITWITS - Empowering students to become global leaders."
                title="LITWITS - Building Future Leaders"
                aria-label="LITWITS - Building Future Leaders"
                aria-describedby="LITWITS transforms education with critical thinking, debate, and writing programs to build strong leaders."
                className="object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full h-auto"
              />
            </div> */}
         
          </div>
        </div>
           <section>
              <TestimonialCarousel />
            </section>
      </section>
    </>
  );
};

export default PopularProducts;
