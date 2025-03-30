import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import icons from "../assets/images/Quote.png";

const testimonials = [
  {
    id: 1,
    text: "LITWITS and all its educators are very supportive and encouraging. Their guidance has helped develop my personality as a whole. They make learning fun and interactive. Being with LITWITS has been a wholesome experience!",
    name: "Meher Mehra",
    title: "3 reviews · a week ago",
  },
  {
    id: 2,
    text: "LITWITS is a fantastic platform for those looking to enhance their critical thinking, debating, and writing skills through engaging, thought-provoking exercises. It encourages participants to think deeply about various topics, helping develop clear, concise, and balanced perspectives.",
    name: "Paramjit Singh Cheema",
    title: "Local Guide · 35 reviews · 3 weeks ago",
  },
  {
    id: 3,
    text: "LITWITS is the perfect place for one to open their minds to all kinds of debates, essays, and public speaking. They are doing a great job of giving our kids a global exposure.",
    name: "Geetanjali Nanda",
    title: "12 reviews · 4 weeks ago",
  },
  {
    id: 4,
    text: "I strongly recommend Sudeep ma'am & the LITWITS team. They are the best at building confidence in our kids. They are aware of each and every competition/opportunity available.",
    name: "Shweta Luthra",
    title: "14 reviews · 3 weeks ago",
  },
  {
    id: 5,
    text: "My Daughter started with LITWITS for WSC and their contribution could be made out in her TOC performance. LITWITS and the courses provided are helpful for children who are interested in Public speaking, Debating.",
    name: "Sutapa ghosh",
    title: "7 reviews · a month ago",
    rating: "5 star"
  },
  {
    id: 6,
    text: "Dear Sir, Ma’am & LITWITS Team Thank you for the insightful session on improving our product and advertising strategies. Your guidance has truly inspired us and will help us take Tech Titans to new heights. We'll Surely Work on your advice regarding Marketing,Name,Hook lines,etc. Thank You so Much 😊",
    name: "Aaditya Tiwari",
    title: "3 reviews · a month ago",
    rating: "5 star"
  },
  {
    id: 7,
    text: "I made my daughter join LITWITS and I am extremely satisfied with the result. Not only is she more aware about the world around her, but her vocabulary has also massively improved. Joining LITWITS has broadened her horizons along with opening doors to many new opportunities for her that will significantly impact her overall development.",
    name: "Anshika Chandrani",
    title: "4 reviews ·  a month ago",
    rating: "5 star"
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 font-noto relative">
      {/* <Helmet>
        <title>LITWITS</title>
        <meta name="description" content="Read what people say about LITWITS. Our students and parents share their experiences and testimonials." />
        <meta name="keywords" content="LITWITS reviews, Testimonials, Student feedback, Debate courses, Public speaking" />
        <meta property="og:title" content="LITWITS Testimonials" />
        <meta property="og:description" content="Discover how LITWITS has positively impacted students and parents through our courses." />
        <meta property="og:image" content={icons} />
        <meta property="og:url" content="https://litwits.in/testimonials" />
        <link rel="canonical" href="https://litwits.in/testimonials" />
      </Helmet> */}

      <h2 className="text-[30px] font-bold testimonial font-nato text-center text-[#890C25] uppercase mb-8">
        IN THEIR WORDS
      </h2>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 z-0">
        <img src={icons} alt="Quote Icon" className="w-48 h-48" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="relative h-40 p-8">
          <AnimatePresence mode="wait">
            {testimonials.length > 0 && (
              <motion.div
                key={testimonials[currentIndex].id}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 text-center"
              >
                <p className="text-gray-600 italic text-base md:text-base mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="text-xl font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].title}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex pt-8 justify-center gap-3 mt-6 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
