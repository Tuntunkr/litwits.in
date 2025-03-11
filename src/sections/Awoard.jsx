import React, { useEffect, useState } from "react";
import "./Award.css";
import award1 from "/award1.png";
import award2 from "/award2.png";
import award3 from "/award3.png";
import award4 from "/award4.png";
import award5 from "/award5.png";
import award6 from "/award6.png";
import award7 from "/award7.png";
import award8 from "/award8.png";
import award9 from "/award9.png";
import award10 from "/award10.png";
import award11 from "/award11.png";
import award12 from "/award12.png";

const AwardsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const items = [
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    award7,
    award8,
    award9,
    award10,
    award11,
    award12,
  ];

  // Responsive behavior: adjust itemsPerSlide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsPerSlide(1); // Small screens
      else if (window.innerWidth <= 768) setItemsPerSlide(2); // Medium screens
      else setItemsPerSlide(3); // Large screens
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group items into slides
  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    slides.push(items.slice(i, i + itemsPerSlide));
  }

  // Autoplay functionality with smooth reset
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === slides.length - 1) {
        // Disable transition for snap-back to the first slide
        setTimeout(() => {
          setTransitionEnabled(false);
          setActiveIndex(0);
        }, 500); // Matches the transition duration
      } else {
        setActiveIndex((prev) => prev + 1);
      }
      setTransitionEnabled(true);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex, slides.length]);

  return (
    <div className="relative overflow-hidden py-8 bg-gray-100">
      {/* Slider */}
      <div
        className={`flex transition-transform ${
          transitionEnabled ? "duration-1000 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="flex-shrink-0 w-full flex justify-around"
          >
            {slide.map((item, index) => (
              <div
                key={index}
                className="relative group px-2"
                style={{
                  width: `${100 / itemsPerSlide}%`,
                }}
              >
                <div className="rounded-xl overflow-hidden h-[300px] md:h-[350px] lg:h-[400px] hover:shadow-lg transition-all duration-500">
                  <img
                    src={item}
                    alt={`Award ${slideIndex * itemsPerSlide + index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
              index === activeIndex
                ? "bg-[#890C25] scale-125 ring-2 ring-[#890C25]/20"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setTransitionEnabled(true); // Enable smooth transitions on dot click
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsSlider;
