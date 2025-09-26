import React, { useEffect, useState } from "react";
import img1 from "/assets/world-scholars-cup.avif";
import img2 from "/assets/harvard-crimson.avif";
import img3 from "/assets/princeton-diplomatic-invitational.avif";
import img4 from "/assets/harvard-international-review.avif";
import img5 from "/assets/oxford-union-society.avif";
import img6 from "/assets/yale-university.avif";
import img7 from "/assets/queens-commonwealth.avif";
import img8 from "/assets/stanford-university.avif";
import img9 from "/assets/john-locke-institute.avif";
import img11 from "/assets/oxford-summer-school.avif";
import img12 from "/assets/warwick-university.avif";
import img13 from "/assets/columbia-university.avif";
import img15 from "/assets/brown-university.avif";

const Glide3DSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const items = [
    {
      id: 1,
      image: img1,
      alt: "World Scholar's Cup training for academic excellence and teamwork.",
      title: "World Scholar's Cup (WSC) at Litwits",
      ariaLabel: "World Scholar's Cup (WSC) at Litwits",
      ariaDescribedBy:
        "Comprehensive coaching for the World Scholar's Cup, preparing students for debate, collaborative writing, and analytical challenges, fostering critical thinking and teamwork.",
    },
    {
      id: 2,
      image: img2,
      alt: "Harvard Crimson - Oldest Daily College Newspaper.",
      title: "Harvard Crimson",
      ariaLabel: "Harvard Crimson",
      ariaDescribedBy:
        "Founded in 1873, Harvard Crimson is the oldest continuously published college newspaper, distributed across Harvard and beyond.",
    },
    {
      id: 3,
      image: img3,
      alt: "Princeton Diplomatic Invitational - International diplomacy experience.",
      title: "Princeton Diplomatic Invitational (PDI)",
      ariaLabel: "Princeton Diplomatic Invitational (PDI)",
      ariaDescribedBy:
        "A renowned conference by Princeton University, fostering international diplomacy and crisis management skills.",
    },
    {
      id: 4,
      image: img4,
      alt: "Harvard International Review - Insights on global issues.",
      title: "Harvard International Review - Global Affairs",
      ariaLabel: "Harvard International Review - Global Affairs",
      ariaDescribedBy:
        "A renowned journal covering global developments in politics, business, science, and culture.",
    },
    {
      id: 5,
      image: img5,
      alt: "The Oxford Union - Historic platform for debates and discussions.",
      title: "The Oxford Union - Debate Society",
      ariaLabel: "The Oxford Union - Debate Society",
      ariaDescribedBy:
        "The Oxford Union is a prestigious debating society with a rich history of discussions and discourse.",
    },
    {
      id: 6,
      image: img6,
      alt: "Yale University - Leading institution for academic growth.",
      title: "Yale University - Academic Excellence",
      ariaLabel: "Yale University - Academic Excellence",
      ariaDescribedBy:
        "Yale University provides top-tier education in various disciplines for aspiring global leaders.",
    },
    {
      id: 7,
      image: img7,
      alt: "Queen's Commonwealth Essay Competition - Writing excellence since 1883.",
      title: "Queen's Commonwealth Essay Competition",
      ariaLabel: "Queen's Commonwealth Essay Competition",
      ariaDescribedBy:
        "The world's oldest international writing competition for school students.",
    },
    {
      id: 8,
      image: img8,
      alt: "Stanford University - A hub for global innovation and research.",
      title: "Stanford University - Innovation Hub",
      ariaLabel: "Stanford University - Innovation Hub",
      ariaDescribedBy:
        "Stanford University is a globally recognized research institution known for innovation and academic excellence.",
    },
    {
      id: 9,
      image: img9,
      alt: "John Locke Institute - Academic growth through learning.",
      title: "John Locke Institute - Academic Excellence",
      ariaLabel: "John Locke Institute - Academic Excellence",
      ariaDescribedBy:
        "The John Locke Institute empowers students through courses and competitions in Philosophy, Politics, and more.",
    },
    {
      id: 11,
      image: img11,
      alt: "Oxford Summer School - Inspired by elite universities.",
      title: "Oxford Summer School - Global Student Hub",
      ariaLabel: "Oxford Summer School - Global Student Hub",
      ariaDescribedBy:
        "Welcoming students from 170+ countries for intensive learning inspired by Oxford and Cambridge.",
    },
    {
      id: 12,
      image: img12,
      alt: "University of Warwick - Leading UK university.",
      title: "University of Warwick - Top UK University",
      ariaLabel: "University of Warwick - Top UK University",
      ariaDescribedBy:
        "Warwick University, part of the Russell Group, offers world-class degrees and a vibrant academic environment.",
    },
    {
      id: 13,
      image: img13,
      alt: "Columbia University - Leading research institution.",
      title: "Columbia University - Ivy League Institution",
      ariaLabel: "Columbia University - Ivy League Institution",
      ariaDescribedBy:
        "Columbia University is a prestigious Ivy League research university in New York City.",
    },
    {
      id: 15,
      image: img15,
      alt: "Brown University - Renowned Ivy League institution.",
      title: "Brown University - Ivy League Research Institution",
      ariaLabel: "Brown University - Ivy League Research Institution",
      ariaDescribedBy:
        "Highlighting Brown University as a prestigious Ivy League research university, renowned for its academic excellence.",
    },
  ];

  // Create a triple set of items for infinite scroll
  const tripleItems = [...items, ...items, ...items];

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
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex >= items.length * 2) {
      // If we've reached the third set, quickly reset to the second set
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex - items.length);
        // Re-enable transitions after the reset
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 1000); // Match this with your transition duration
    }
  }, [activeIndex, items.length]);

  const calculateTranslateX = () => {
    return -(activeIndex * (100 / itemsPerSlide));
  };

  return (
    <div className="w-full bg-gray-50 mt-3">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-red-700  uppercase mb-3 text-center ">
          Competitive Edge for College Admissions
        </h2>
        <p
          className=" md:text-xl text-black leading-relaxed  max-w-[1075px] mx-auto"
          style={{ fontSize: "15px" }}
        >
          Our team of seasoned experts in academia, consulting, writing,
          research, and the arts provides personalized, one-on-one mentorship
          tailored to each student's unique needs. From test preparation for
          SAT, AP exams, IELTS, ACT, LNAT, and other standardized assessments to
          crafting compelling Common App and supplementary essays; and building
          powerful profiles beyond academics, we ensure our students have the
          competitive edge to meet the expectations of leading institutions in
          the US, UK, Europe, Australia, and Singapore.
        </p>
        {/* <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-red-700 mb-2 text-center">
          BUILDING A GLOBAL COMMUNITY OF LEADERS
        </h2>

        <div className="mb-6 flex justify-center">
          <p className="text-start md:text-lg text-black text-base leading-8"style={{ fontSize: "15px" }}>
            <span className="uppercase font-semibold text-l">LITWITS</span>{" "}
            fosters a vibrant global community of students providing them with a
            compelling direction to collaborate, exchange <br />
            perspectives, and forge lasting partnerships that enrich their
            academic and college journeys.
          </p> */}
      </div>

      <div className="relative overflow-hidden py-8">
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(${calculateTranslateX()}%)`,
          }}
        >
          {tripleItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`shrink-0 px-2 transition-all duration-500 ease-in-out
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
                    alt={item.alt}
                    title={item.title}
                    aria-label={item.ariaLabel}
                    aria-describedby={item.ariaDescribedBy}
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
                    index === activeIndex % items.length
                      ? "bg-[#890C25] scale-125 ring-2 ring-[#890C25]/20"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
              onClick={() => setActiveIndex(index + items.length)}
            />
          ))}
        </div>
      </div>

      <div className="mt-10  mx-auto ">
        <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-red-700 mb-2 text-center">
          BUILDING A GLOBAL COMMUNITY OF LEADERS
        </h2>

        <div className="mb-6 flex justify-center">
          <p
            className="text-start md:text-lg text-black text-base leading-8 mb-4"
            style={{ fontSize: "15px" }}
          >
            <span className="uppercase font-semibold text-l">LITWITS</span>{" "}
            fosters a vibrant global community of students providing them with a
            compelling direction to collaborate, exchange <br />
            perspectives, and forge lasting partnerships that enrich their
            academic and college journeys.
          </p>
          {/* <h2 className="fw-semibold text-[18px] md:text-[1.5rem] leading-snug text-red-700  uppercase mb-3 text-center">
            Competitive Edge for College Admissions
          </h2>
          <p className=" md:text-xl text-black leading-relaxed  max-w-[1075px] mx-auto"style={{ fontSize: "15px" }}>
            Our team of seasoned experts in academia, consulting, writing,
            research, and the arts provides personalized, one-on-one mentorship
            tailored to each student's unique needs. From test preparation for
            SAT, AP exams, IELTS, ACT, LNAT, and other standardized assessments
            to crafting compelling Common App and supplementary essays; and
            building powerful profiles beyond academics, we ensure our students
            have the competitive edge to meet the expectations of leading
            institutions in the US, UK, Europe, Australia, and Singapore.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Glide3DSlider;
