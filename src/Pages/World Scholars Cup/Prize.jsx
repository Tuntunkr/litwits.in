import React, { useEffect, useState } from "react";
// import Prize1 from "/public/WSCimages/1.png";
import Prize2 from "/public/WSCimages/2.png";
import Prize3 from "/public/WSCimages/3.png";
import Prize4 from "/public/WSCimages/4.png";
import Prize5 from "/public/WSCimages/5.png";
import Prize6 from "/public/WSCimages/6.png";
import Prize7 from "/public/WSCimages/7.png";
import Prize8 from "/public/WSCimages/8.png";
import Prize9 from "/public/WSCimages/9.png";
import Prize10 from "/public/WSCimages/10.png";
// import Prize11 from "/public/WSCimages/11.png";
import Prize12 from "/public/WSCimages/12.png";
import Prize13 from "/public/WSCimages/13.png";
import Prize14 from "/public/WSCimages/14.png";
import Prize15 from "/public/WSCimages/15.png";
import Prize16 from "/public/WSCimages/16.png";
import Prize17 from "/public/WSCimages/17.png";
import Prize18 from "/public/WSCimages/18.png";
import Prize19 from "/public/WSCimages/19.png";
import Prize20 from "/public/WSCimages/20.png";
import Prize21 from "/public/WSCimages/21.png";
import Prize22 from "/public/WSCimages/22.png";
// import Prize23 from "/public/WSCimages/23.png";
import Prize24 from "/public/WSCimages/24.png";
import Prize25 from "/public/WSCimages/25.png";
import Prize26 from "/public/WSCimages/26.png";


const PrizeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const items = [
    // {
    //   id: 1,
    //   image: Prize1,
    //   title: "Grand Champion Trophy",
    //   alt: "A golden champion trophy",
    // },
    {
      id: 2,
      image: Prize2,
      title: "Gold Medal Achievement",
      alt: "A shiny gold medal",
    },
    {
      id: 3,
      image: Prize3,
      title: "Excellence Award",
      alt: "Award recognition certificate",
    },
    {
      id: 4,
      image: Prize4,
      title: "Winning Cup",
      alt: "A silver winning cup",
    },
    {
      id: 5,
      image: Prize5,
      title: "Victory Celebration",
      alt: "Team celebrating victory",
    },
    {
      id: 6,
      image: Prize6,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 7,
      image: Prize7,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 8,
      image: Prize8,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 9,
      image: Prize9,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 10,
      image: Prize10,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    // {
    //   id: 11,
    //   image: Prize11,
    //   title: "Success Recognition",
    //   alt: "Success and recognition moment",
    // },
    {
      id: 12,
      image: Prize12,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 13,
      image: Prize13,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 14,
      image: Prize14,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 15,
      image: Prize15,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 16,
      image: Prize16,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 17,
      image: Prize17,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 18,
      image: Prize18,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 19,
      image: Prize19,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 20,
      image: Prize20,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 21,
      image: Prize21,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 22,
      image: Prize22,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    // {
    //   id: 23,
    //   image: Prize23,
    //   title: "Success Recognition",
    //   alt: "Success and recognition moment",
    // },
    {
      id: 24,
      image: Prize24,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 25,
      image: Prize25,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
    {
      id: 26,
      image: Prize26,
      title: "Success Recognition",
      alt: "Success and recognition moment",
    },
  ];

  // triple set for infinite scroll
  const tripleItems = [...items, ...items, ...items];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsPerSlide(1);
      else if (window.innerWidth <= 768) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createSlides = (items) => {
    const slides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      slides.push(items.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const slides = createSlides(tripleItems);

  const getAdjustedIndex = () => {
    return activeIndex % Math.ceil(items.length / itemsPerSlide);
  };

  const handleDotClick = (index) => {
    const middleSetOffset = Math.ceil(items.length / itemsPerSlide);
    setIsTransitioning(true);
    setActiveIndex(middleSetOffset + index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const middleSetStart = Math.ceil(items.length / itemsPerSlide);
    const middleSetEnd = Math.ceil((items.length * 2) / itemsPerSlide);

    if (activeIndex >= middleSetEnd) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(middleSetStart);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
      }, 1000);
    } else if (activeIndex < middleSetStart) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(middleSetEnd - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
      }, 1000);
    }
  }, [activeIndex, items.length, itemsPerSlide, tripleItems.length]);

  return (
    <div className="relative overflow-hidden py-8 bg-gray-50 mt-3">
      <div
        className={`flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={`slide-${slideIndex}`}
            className="shrink-0 w-full flex justify-around"
          >
            {slide.map((item, index) => (
              <div
                key={`${item.id}-${slideIndex}-${index}`}
                className="relative px-2"
                style={{ width: `${100 / itemsPerSlide}%` }}
              >
               <div className="rounded-xl overflow-hidden h-[280px] md:h-[380px] lg:h-[380px] shadow hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    className="w-full h-full object-cover bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: Math.ceil(items.length / itemsPerSlide) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === getAdjustedIndex()
                  ? "bg-blue-600 scale-125 ring-2 ring-blue-400/40"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PrizeSlider;
