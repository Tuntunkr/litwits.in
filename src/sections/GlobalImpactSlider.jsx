import React, { useEffect, useState } from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/Harvard.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/Stanford.png";
import img9 from "../assets/images/img9.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/Warwick.png";
import img13 from "../assets/images/Columbia.png";
import img15 from "../assets/images/Brown.png";

const Glide3DSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  const items = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 15, image: img15 },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsPerSlide(1);
      else if (window.innerWidth <= 768) setItemsPerSlide(2);
      else if (window.innerWidth <= 1024) setItemsPerSlide(3);
      else setItemsPerSlide(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const calculateTranslateX = () => {
    const offset = Math.floor(itemsPerSlide / 2);
    return (activeIndex - offset) * (100 / itemsPerSlide);
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-[#890C25] uppercase mb-6 text-center">
          Building a Global Community of Leaders
        </h2>

        <div className="mb-12 max-w-3xl mx-auto ">
          <p className="text-base md:text-lg text-black leading-relaxed">
            LITWITS fosters a vibrant global community of students providing
            them with a compelling direction to collaborate, exchange
            perspectives, and forge lasting partnerships that enrich their
            academic and college journeys.
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${calculateTranslateX()}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 px-2 transition-all duration-500 ease-in-out
                  ${index === activeIndex ? "scale-100" : "scale-95"}
                  ${
                    itemsPerSlide === 1
                      ? "w-full"
                      : itemsPerSlide === 2
                      ? "w-1/2"
                      : itemsPerSlide === 3
                      ? "w-1/3"
                      : "w-1/4"
                  }`}
              >
                <div className="relative group">
                  <div
                    className={`
      rounded-xl overflow-hidden h-[300px] bg-white p-4 transition-all duration-500
      ${
        index === activeIndex
          ? "shadow-xl ring-2 ring-[#890C25]/20"
          : "shadow-md hover:shadow-lg"
      }
    `}
                  >
                    <img
                      src={item.image}
                      alt={`Slide ${item.id}`}
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {index !== activeIndex && (
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform
                  ${
                    index === activeIndex
                      ? "bg-[#890C25] scale-125 ring-2 ring-[#890C25]/20"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-[#890C25] uppercase mb-6 text-center">
            Competitive Edge for College Admissions
          </h2>

          <p className="text-lg md:text-xl text-black leading-relaxed ">
            Our team of seasoned experts in academia, consulting, writing,
            research, and the arts provides personalized, one-on-one mentorship
            tailored to each student's unique needs. From test preparation for
            SAT, AP exams, IELTS, ACT, LNAT, and other standardized assessments
            to crafting compelling Common App and supplementary essays; and
            building powerful profiles beyond academics, we ensure our students
            have the competitive edge to meet the expectations of leading
            institutions in the US, UK, Europe, Australia, and Singapore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glide3DSlider;
