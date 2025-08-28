import React, { useRef, useEffect, useState } from "react";

const AutoSliderSection = ({ cards = [] }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [direction, setDirection] = useState(1); // 1 → forward, -1 → backward
  const totalSlides = cards.length;

  // Set card width dynamically
  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const firstCard = sliderRef.current.children[0];
        setCardWidth(firstCard.offsetWidth);

        // visible slides count detect
        const containerWidth = sliderRef.current.offsetWidth;
        setVisibleSlides(Math.round(containerWidth / firstCard.offsetWidth));
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
        setCurrentSlide((prev) => {
          let newSlide = prev + direction;

          // Reverse when reaching bounds
          if (newSlide > totalSlides - visibleSlides) {
            setDirection(-1);
            newSlide = totalSlides - visibleSlides - 1;
          } else if (newSlide < 0) {
            setDirection(1);
            newSlide = 1;
          }

          return newSlide;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides, direction, visibleSlides]);

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
    setDirection(index > currentSlide ? 1 : -1);
  };

  return (
    <section>
      <div className="bg-red-800 container-fluid mx-auto flex items-center justify-center py-8">
        <div className="w-full max-w-[1499px] p-4 lg:p-8">
          <h2 className="uppercase font-noto text-center fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-white  ">
            Curated College List and Personalized Fit
          </h2>
          <p
            className="text-start font-noto text-white max-w-5xl mx-auto mb-12"
            style={{ fontSize: "15px" }}
          >
            Choosing the right college is one of the most important decisions
            you will make. At LITWITS, we take the guesswork out of this process
            by curating a personalized list of colleges that best fit your
            aspirations, strengths, and goals. Here's how we approach this
            crucial step:
          </p>

          <section id="group-session" className="mb-8">
            <div className="container mx-auto">
              <div className="relative">
                <div
                  ref={sliderRef}
                  className="flex overflow-hidden scroll-smooth scrollbar-hide"
                  style={{ width: "100%" }}
                >
                  {totalSlides > 0 ? (
                    cards.map((card, idx) => (
                      <div
                        key={idx}
                        className="shrink-0 w-full sm:w-[75%] md:w-[50%] lg:w-[33%] 
                   bg-transparent rounded-lg shadow-lg p-4"
                      >
                        <div className="w-full aspect-[16/9]">
                          <img
                            src={card.image}
                            className="w-full h-[250px] rounded-lg object-cover"
                            alt={card.alt}
                            title={card.imgTitle}
                            aria-label={card.ariaLabel}
                            aria-describedby={card.ariaDescribedby}
                          />
                        </div>

                        {/* <img
                          src={card.image}
                          className="rounded-lg mb-4 w-full h-[300px] object-cover bg-red-800"
                          alt={card.alt}
                          title={card.imgTitle}
                          aria-label={card.ariaLabel}
                          aria-describedby={card.ariaDescribedby}
                        /> */}
                        <h3 className="text-lg font-bold text-white mb-2 mt-1">
                          {card.title}
                        </h3>
                        <p
                          className="text-white leading-relaxed"
                          style={{ fontSize: "15px" }}
                        >
                          {card.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-white">No cards available</p>
                  )}
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from(
                    { length: Math.max(totalSlides - visibleSlides + 1, 0) },
                    (_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-2 w-6 rounded-full ${
                          currentSlide === idx ? "bg-white" : "bg-gray-400"
                        } transition-all duration-300`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    )
                  )}
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
