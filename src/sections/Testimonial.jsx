import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import icons from "../assets/images/Quote.png";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    text: "LITWITS and all its educators are very supportive and encouraging. Their guidance has helped develop my personality as a whole. They make learning fun and interactive. Being with LITWITS has been a wholesome experience!",
    name: "Meher Mehra",
    title: "3 reviews · a week ago",
  },
  {
    id: 2,
    text: "LITWITS is a fantastic platform for those looking to enhance their critical thinking, debating, and writing skills through engaging, thought-provoking exercises. encourages participants to think deeply about various topics, helping develop clear, concise, and balanced perspectives. LITWITS promotes intellectual curiosity and creative expression by focusing on precision, which is especially valuable for students preparing for debates, essays, or competitive exams. With its mix of fun and challenging tasks, LITWITS is an excellent resource for anyone aiming to improve their language skills and broaden their analytical abilities. Highly recommended for budding writers and debaters.",
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
    extra: "They do the best to prepare them for all the competitions.",
    name: "Shweta Luthra",
    title: "14 reviews · 3 weeks ago",
  },
  {
    id: 5,
    text: "My Daughter started with LITWITS for WSC and their contribution could be made out in her TOC performance. LITWITS and the courses provided are helpful for children who are interested in Public speaking, Debating.",
    name: "Sutapa ghosh",
    title: "7 reviews · a month ago",
    rating: "5 star",
  },
  {
    id: 6,
    text: "Dear Sir, Ma’am & LITWITS Team Thank you for the insightful session on improving our product and advertising strategies. Your guidance has truly inspired us and will help us take Tech Titans to new heights. We'll Surely Work on your advice regarding Marketing,Name,Hook lines,etc. Thank You so Much 😊",
    name: "Aaditya Tiwari",
    title: "3 reviews · a month ago",
    rating: "5 star",
  },
  {
    id: 7,
    text: "I made my daughter join LITWITS and I am extremely satisfied with the result. Not only is she more aware about the world around her, but her vocabulary has also massively improved. Joining LITWITS has broadened her horizons along with opening doors to many new opportunities for her that will significantly impact her overall development.",
    name: "Anshika Chandrani",
    title: "4 reviews ·  a month ago",
    rating: "5 star",
  },
  {
    id: 8,
    text: "LITWITS has played a pivotal role in honing my daughter’s writing skills. She has won many national and international competitions,has been awarded prize for outstanding writing content in the Harvard International writing review academic contest. Ms.Kohli and her entire team handhold children and go into intricate details while preparing them for competitions. Their dedication and hard work is inspiring. It’s been a wonderful journey and looking forward to many more opportunities. A big thankyou to the LITWITS team.",
    name: "Rimi Sahni",
    title: "6 reviews ·  6 month ago",
    rating: "5 star",
  },
  {
    id: 9,
    text: "LITWITS is an amazing organization that offers opportunities for students like me to participate in writing and debating competitions. Through its programs, I’ve gained invaluable skills and knowledge, learning how to communicate effectively and think critically. The teachers at LITWITS are incredibly experienced, empathetic, and kind, always offering support and encouragement. They take the time to understand the psychology of each child and event, providing personalized guidance that helps us recognize our strengths and grow with confidence. With a strong focus on continuous improvement, LITWITS pushes us to refine our abilities and reach new heights. It’s been a truly enriching experience, and I’m grateful for the growth and support I’ve received.",
    name: "Namrata Dalmia",
    title: "5 reviews .  4 month ago",
    rating: "5 star",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleExternalClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.google.com/maps/place/LITWITS/@28.4154844,77.0605087,17z/data=!4m18!1m9!3m8!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!2sLITWITS!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6!3m7!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6?entry=ttu",
      "_blank"
    );
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative bg-white py-12 md:py-16 lg:py-20 font-noto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-2xl font-bold text-center text-[#890C25] uppercase mb-8 md:mb-6 tracking-wide">
          IN THEIR WORDS
        </h2>

        <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 opacity-10 z-0">
          <img
            src={icons}
            alt="Quote Icon"
            className="w-24 h-24 md:w-48 md:h-48"
          />
        </div>

        <div className="relative  max-w-6xl mx-auto z-10">
          <Link
            onClick={handleExternalClick}
            className="block w-full h-full cursor-pointer"
          >
            <div className="relative w-full h-[350px] p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  key={testimonials[currentIndex].id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 100 : -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -100 : 100,
                    transition: { duration: 0.5 },
                  }}
                  className="absolute inset-0 flex flex-col justify-center items-center p-6"
                >
                  <div className="text-center">
                    <div className="text-gray-700 italic text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                      <p>"{testimonials[currentIndex].text}"</p>
                      {testimonials[currentIndex].extra && (
                        <p className="mt-2 font-medium text-black not-italic">
                          {testimonials[currentIndex].extra}
                        </p>
                      )}
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg md:text-xl font-semibold text-[#890C25]">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 mt-1">
                        {testimonials[currentIndex].title}
                      </p>
                      {testimonials[currentIndex].rating && (
                        <div className="mt-2 flex justify-center items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Link>
        </div>

        <div className="flex justify-center gap-2 mt-8 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? "bg-[#890C25]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-4 md:mt-10">
          <a
            href="https://www.google.com/maps/place/LITWITS/@28.4154844,77.0605087,17z/data=!4m18!1m9!3m8!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!2sLITWITS!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6!3m7!1s0x390ce3c0ea6a7c37:0x566aba097b77a242!8m2!3d28.4154844!4d77.0630836!9m1!1b1!16s%2Fg%2F11whx8jmm6?entry=ttu"
            className="inline-block bg-[#890C25] text-white px-6 py-3 rounded-md hover:bg-[#6e0b1f] transition-colors text-sm md:text-base font-medium shadow-md hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
