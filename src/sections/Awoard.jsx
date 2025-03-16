import React, { useEffect, useState } from "react";
import "./Award.css";
import award1 from "/assets/champion-team-debate.avif";
import award2 from "/assets/global-round-2022.avif";
import award3 from "/assets/champion-arts-science.avif";
import award4 from "/assets/tournament-of-champions.avif";
import award5 from "/assets/toc-qualifier.avif";
import award6 from "/assets/wsc-global-round-champions.avif";
import award7 from "/assets/global-round-doha.avif";
import award8 from "/assets/da-vinci-asimov-awards.avif";
import award9 from "/assets/team-debate-award.avif";
import award10 from "/assets/champion-scholars.avif";
import award11 from "/assets/champion-team-scholars-bowl.avif";
import award12 from "/assets/regional-toc-qualifier.avif";

const AwardsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const items = [
    {
      id: 1,
      image: award1,
      alt: "Champion Team in World Scholar's Cup debate and team bowl.",
      title: "World Scholar's Cup - Champion Team in Debate and Bowl",
      ariaLabel: "World Scholar's Cup - Champion Team in Debate and Bowl",
      ariaDescribedBy:
        "Outstanding team performance in the World Scholar's Cup, excelling in Team Debate and Team Bowl events.",
    },
    {
      id: 2,
      image: award2,
      alt: "World Scholar's Cup 2022 Global Round participants and winners.",
      title: "World Scholar's Cup - Global Round 2022",
      ariaLabel: "World Scholar's Cup - Global Round 2022",
      ariaDescribedBy:
        "Celebrating student achievements at the 2022 Global Round of the World Scholar's Cup.",
    },
    {
      id: 3,
      image: award3,
      alt: "Champion Scholar in Arts and Science at World Scholar's Cup.",
      title: "World Scholar's Cup - Champion Scholar in Arts and Science",
      ariaLabel: "World Scholar's Cup - Champion Scholar in Arts and Science",
      ariaDescribedBy:
        "Celebrating the Champion Scholar title in Arts and Science at the World Scholar's Cup.",
    },
    {
      id: 4,
      image: award4,
      alt: "Tournament of Champions success in World Scholar's Cup.",
      title: "World Scholar's Cup - Tournament of Champions",
      ariaLabel: "World Scholar's Cup - Tournament of Champions",
      ariaDescribedBy:
        "Honoring students who competed and excelled in the prestigious World Scholar's Cup Tournament of Champions.",
    },
    {
      id: 5,
      image: award5,
      alt: "World Scholar's Cup Tournament of Champions qualifiers.",
      title: "World Scholar's Cup - Tournament of Champions Qualifier",
      ariaLabel: "World Scholar's Cup - Tournament of Champions Qualifier",
      ariaDescribedBy:
        "Recognizing students who qualified for the prestigious Tournament of Champions through their outstanding performance.",
    },
    {
      id: 6,
      image: award6,
      alt: "World Scholar's Cup Global Round Champion Scholars.",
      title: "World Scholar's Cup - Global Round Champion Scholars",
      ariaLabel: "World Scholar's Cup - Global Round Champion Scholars",
      ariaDescribedBy:
        "Recognizing Champion Scholars in the World Scholar's Cup Global Round for their outstanding achievements.",
    },
    {
      id: 7,
      image: award7,
      alt: "World Scholar's Cup Global Round Doha achievements.",
      title: "World Scholar's Cup - Global Round Doha",
      ariaLabel: "World Scholar's Cup - Global Round Doha",
      ariaDescribedBy:
        "Celebrating achievements in the prestigious World Scholar's Cup Global Round held in Doha, where students showcased their knowledge and skills.",
    },
    {
      id: 8,
      image: award8,
      alt: "Da Vinci Award and Asimov Award winners at World Scholar's Cup.",
      title: "World Scholar's Cup - Da Vinci and Asimov Awards",
      ariaLabel: "World Scholar's Cup - Da Vinci and Asimov Awards",
      ariaDescribedBy:
        "Celebrating students who earned the prestigious Da Vinci Award and Asimov Award for their exceptional skills and knowledge.",
    },
    {
      id: 9,
      image: award9,
      alt: "Team Debate achievers at World Scholar's Cup.",
      title: "World Scholar's Cup - Team Debate Recognition",
      ariaLabel: "World Scholar's Cup - Team Debate Recognition",
      ariaDescribedBy:
        "Recognizing outstanding achievements in the World Scholar's Cup Team Debate event.",
    },
    {
      id: 10,
      image: award10,
      alt: "Champion Scholars recognized for their excellence at World Scholar's Cup.",
      title: "World Scholar's Cup - Champion Scholars",
      ariaLabel: "World Scholar's Cup - Champion Scholars",
      ariaDescribedBy:
        "Recognizing exceptional students who earned the prestigious Champion Scholars title.",
    },
    {
      id: 11,
      image: award11,
      alt: "Champion Team and Scholar's Bowl winners at World Scholar's Cup.",
      title: "World Scholar's Cup - Champion Team and Scholar's Bowl Winners",
      ariaLabel:
        "World Scholar's Cup - Champion Team and Scholar's Bowl Winners",
      ariaDescribedBy:
        "Recognizing the Champion Team and Scholar's Bowl winners for their exceptional academic performance.",
    },
    {
      id: 12,
      image: award12,
      alt: "Regional Round achievements and ToC qualification at World Scholar's Cup.",
      title: "World Scholar's Cup - Regional Round and ToC Qualifier",
      ariaLabel: "World Scholar's Cup - Regional Round and ToC Qualifier",
      ariaDescribedBy:
        "Celebrating achievements in the Regional Round and qualification for the Tournament of Champions.",
    },
  ];

  // Create triple items for infinite scroll
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

  // Group items into slides
  const createSlides = (items) => {
    const slides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      slides.push(items.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const slides = createSlides(tripleItems);

  // Calculate the actual slide position considering the triple set
  const getAdjustedIndex = () => {
    return activeIndex % Math.ceil(items.length / itemsPerSlide);
  };

  // Handle dot click with proper positioning
  const handleDotClick = (index) => {
    // Calculate the correct position in the middle set
    const middleSetOffset = Math.ceil(items.length / itemsPerSlide);
    setIsTransitioning(true);
    setActiveIndex(middleSetOffset + index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSlides = Math.ceil(tripleItems.length / itemsPerSlide);
    const middleSetEnd = Math.ceil((items.length * 2) / itemsPerSlide);
    const middleSetStart = Math.ceil(items.length / itemsPerSlide);

    if (activeIndex >= middleSetEnd) {
      // If we've reached the end of the second set
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(middleSetStart);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 1000);
    } else if (activeIndex < middleSetStart) {
      // If we've reached the start of the first set
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(middleSetEnd - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 1000);
    }
  }, [activeIndex, items.length, itemsPerSlide, tripleItems.length]);

  return (
    <div className="relative overflow-hidden py-8 bg-gray-100">
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
                className="relative group px-2"
                style={{
                  width: `${100 / itemsPerSlide}%`,
                }}
              >
                <div className="rounded-xl overflow-hidden h-[300px] md:h-[350px] lg:h-[400px] hover:shadow-lg transition-all duration-500">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.alt}
                    title={item.title}
                    aria-label={item.ariaLabel}
                    aria-describedby={item.ariaDescribedBy}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Updated pagination dots */}
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: Math.ceil(items.length / itemsPerSlide) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                index === getAdjustedIndex()
                  ? "bg-[#890C25] scale-125 ring-2 ring-[#890C25]/20"
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

export default AwardsSlider;
