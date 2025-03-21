// import React, { useRef, useEffect, useState } from "react";
// import "./Collage.css"; // Ensure your CSS file has the necessary styles
// import bgimg from "/Professionals.jpg"; // Ensure the background image path is correct

// const AutoSliderSection = ({ cards = [] }) => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [cardWidth, setCardWidth] = useState(0);
//   const totalSlides = cards.length;

//   // Set card width dynamically on mount and window resize
//   useEffect(() => {
//     const updateCardWidth = () => {
//       if (sliderRef.current && sliderRef.current.children.length > 0) {
//         setCardWidth(sliderRef.current.children[0].offsetWidth);
//       }
//     };

//     updateCardWidth();
//     window.addEventListener("resize", updateCardWidth);

//     return () => window.removeEventListener("resize", updateCardWidth);
//   }, []);

//   // Auto-scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (totalSlides > 0) {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//       }
//     }, 3000); // Auto-scroll every 3 seconds

//     return () => clearInterval(interval); // Clear interval on unmount or re-render
//   }, [totalSlides]);

//   useEffect(() => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollTo({
//         left: currentSlide * cardWidth,
//         behavior: "smooth",
//       });
//     }
//   }, [currentSlide, cardWidth]);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section>
//       <div
//         className="bg-red-800 container-fluid mx-auto flex items-center justify-center py-8"
        
//       >
//         <div className="w-full max-w-[1499px] p-4 lg:p-8">
//           <h2 className="text-3xl uppercase font-nato font-bold text-center text-white mb-8">
//             Curated College List and Personalized Fit
//           </h2>
//           <p className="text-start font-nato text-white max-w-2xl mx-auto mb-12">
//             Choosing the right college is one of the most important decisions
//             you will make. At LITWITS, we take the guesswork out of this
//             process by curating a personalized list of colleges that best fit
//             your aspirations, strengths, and goals. Here's how we approach
//             this crucial step:
//           </p>

//           <section id="group-session" className="mb-8">
//             <div className="container mx-auto">
//               <div className="relative">
//                 <div
//                   ref={sliderRef}
//                   className="flex overflow-hidden scroll-smooth space-x-4 scrollbar-hide"
//                   style={{ width: "100%" }}
//                 >
//                   {totalSlides > 0 ? (
//                     cards.map((card, idx) => (
//                       <div
//                         key={idx}
//                         className="shrink-0 w-full sm:w-[75%] md:w-[50%] lg:w-[33%] bg-transparent rounded-lg shadow-lg p-4"
//                       >
//                         <img
//                           src={card.image}
//                           className="rounded-lg mb-4 w-full h-[300px] object-cover"
//                           alt={card.alt}
//                           title={card.imgTitle}
//                           aria-label={card.ariaLabel}
//                           aria-describedby={card.ariaDescribedby}
//                         />
//                         <h3 className="text-lg font-bold text-white mb-2">
//                           {card.title}
//                         </h3>
//                         <p className="text-white leading-relaxed">
//                           {card.description}
//                         </p>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-center text-white">No cards available</p>
//                   )}
//                 </div>
//                 <div className="flex justify-center mt-4 space-x-2">
//                   {Array.from({ length: totalSlides }, (_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => handleDotClick(idx)}
//                       className={`h-2 w-6 rounded-full ${
//                         currentSlide === idx ? "bg-white" : "bg-gray-400"
//                       } transition-all duration-300`}
//                       aria-label={`Go to slide ${idx + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AutoSliderSection;
import React, { useRef, useEffect, useState } from "react";

const AutoSliderSection = ({ cards = [] }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const totalSlides = cards.length;

  // Set card width dynamically
  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        setCardWidth(sliderRef.current.children[0].offsetWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Auto-scroll functionality with reverse logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (totalSlides > 0) {
        setCurrentSlide((prevSlide) => {
          let newSlide = prevSlide + direction;
          
          // Reverse the direction if we reach the last or first slide
          if (newSlide >= totalSlides - 1) {
            setDirection(-1); // Start moving backward
            newSlide = totalSlides - 2;
          } else if (newSlide <= 0) {
            setDirection(1); // Start moving forward
            newSlide = 1;
          }

          return newSlide;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides, direction]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide, cardWidth]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setDirection(index > currentSlide ? 1 : -1); // Update direction based on user click
  };

  return (
    <section>
      <div className="bg-red-800 container-fluid mx-auto flex items-center justify-center py-8">
        <div className="w-full max-w-[1499px] p-4 lg:p-8">
          <h2 className="text-3xl uppercase font-nato font-bold text-center text-white mb-8">
            Curated College List and Personalized Fit
          </h2>
          <p className="text-start font-nato text-white max-w-2xl mx-auto mb-12">
            Choosing the right college is one of the most important decisions
            you will make. At LITWITS, we take the guesswork out of this
            process by curating a personalized list of colleges that best fit
            your aspirations, strengths, and goals. Here's how we approach
            this crucial step:
          </p>

          <section id="group-session" className="mb-8">
            <div className="container mx-auto">
              <div className="relative">
                <div
                  ref={sliderRef}
                  className="flex overflow-hidden scroll-smooth space-x-4 scrollbar-hide"
                  style={{ width: "100%" }}
                >
                  {totalSlides > 0 ? (
                    cards.map((card, idx) => (
                      <div
                        key={idx}
                        className="shrink-0 w-full sm:w-[75%] md:w-[50%] lg:w-[33%] bg-transparent rounded-lg shadow-lg p-4"
                      >
                        <img
                          src={card.image}
                          className="rounded-lg mb-4 w-full h-[300px] object-cover"
                          alt={card.alt}
                          title={card.imgTitle}
                          aria-label={card.ariaLabel}
                          aria-describedby={card.ariaDescribedby}
                        />
                        <h3 className="text-lg font-bold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-white">No cards available</p>
                  )}
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: totalSlides }, (_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className={`h-2 w-6 rounded-full ${
                        currentSlide === idx ? "bg-white" : "bg-gray-400"
                      } transition-all duration-300`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AutoSliderSection;
