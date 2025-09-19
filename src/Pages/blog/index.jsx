import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import APLogo from "/AP-Logo.jpg";
import world from "/worlds.jpeg";
import Satimg from "/Satimage.jpeg";
import blogimage1 from "/debate.png";
import Explore from "/WomanSpeaking.jpeg";
import Ultimate from "/ultimate.png";
import Competitions from "/Competitions.jpeg";
import Book from "/Competitions.jpeg";
import mun from "/mun.png";
import pic1 from "/new-blog/1551992107032.jpg";


// Sample blog data with 10 entries
const blogData = [
  {
    id: 1,
    title: "Advanced Placement Exam 2025",
    description:
      "Prepare effectively for the AP Exam 2025 with expert tips, exam dates, syllabus details, and preparation resources. Discover how AP exams can boost your college application and unlock scholarship opportunities.",
    image: APLogo,
  },
  {
    id: 2,
    title: "Introduction to the World Scholar's Cup 2025 Tournament",
    description:
      "Every year, students from all over the world gather for something that's more than just a competition. ",
    image: world,
  },
  {
    id: 3,
    title: "SAT Exam Preparation 2025: How to Prepare for SAT Exam?",
    description:
      "If you’re planning to study abroad, the SAT Exam 2025 is likely on your radar. It’s a globally recognized test accepted by universities around the world, designed to measure your readiness for college-level academics. With intense competition and evolving exam patterns, preparing effectively is the key to achieving a high score.",
    image: Satimg,
  },
  {
    id: 4,
    title: "Learn All About Different Types of Debate",
    description:
      "Have you ever watched a passionate exchange of thoughts and ideas, and wondered, “I want to do that!”? Debating is not merely a formal argument. ",
    image: blogimage1,
  },
  {
    id: 5,
    title: "Explore Different Types Of Writing Formats And How To Master Them",
    description:
      "Writing is a powerful tool. We use it all the time - in school, at work, and even in our personal lives. It allows us to express, explain, and relate. ",
    image: Explore,
  },
  {
    id: 6,
    title: "Ultimate Guide to Debate Training: Courses, Tips & Competitions",
    description:
      "Debate training is a powerful way to foster confidence, critical thinking, and communication skills in students of all ages. ",
    image: Ultimate,
  },
  {
    id: 7,
    title: "Top Debate Competitions for School Students",
    description:
      "Debate competitions are more than just verbal sparring matches — they are rigorous intellectual arenas where young minds sharpen their logic, develop confidence, and voice their perspectives on global issues. From school auditoriums to international campuses, debate competitions offer students a unique opportunity to evolve as speakers, thinkers, and leaders. Whether you are a curious beginner or a seasoned team prepping for the global stage, this guide is your complete roadmap. ",
    image: Book,
  },
  {
    id: 8,
    title:
      "The Ultimate Guide to Model United Nations (MUN) for Students and Parents",
    description:
      "Welcome to the world of Model United Nations (MUN) - a space where international politics meets classroom learning, where young people practice the art of diplomacy, and where tomorrow’s changemakers are born.",
    image: mun,
  },
  {
    id: 9,
    title:
      "Mastering the Art of Research Paper Writing",
    description:
      "At LITWITS, we understand that research paper writing is both an art and a science. That’s why we offer personalized research paper guidance sessions to help students navigate the process with clarity and confidence",
    image: pic1,
  },
  ...Array.from({ length: 9 }, (_, index) => ({
    id: index + 3, // Start from ID 3 to avoid duplicate IDs
    title: `Advanced Placement Exam 2025`,
    description: `This is a short description of blog post ${index + 3
      }. Learn about product management, feature voting, and SaaS tools.`,
    image: Satimg,
  })),
];

const Blog = () => {
  // Fetch first and second blog posts
  const firstPost = blogData.find((post) => post.id === 1);
  const secondPost = blogData.find((post) => post.id === 2);
  const thirdPost = blogData.find((post) => post.id === 3);
  const fourthPost = blogData.find((post) => post.id === 4);
  const fifthPost = blogData.find((post) => post.id === 5);
  const sixPost = blogData.find((post) => post.id === 6);
  const sevenPost = blogData.find((post) => post.id === 7);
  const EightPost = blogData.find((post) => post.id === 8);
  const NinePost = blogData.find((post) => post.id === 9);


  return (
    <div className="">
      <section className="bg-red-900 h-[20vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center p-8 rounded-lg">
          <h1 className="text-[4vw] lg:text-2xl font-bold leading-tight mt-4 text-white">
            BLOG
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}

        {/* <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Recent Blogs</h1>
      </section> */}

        {/* First Blog Post */}
        {firstPost && (
          <Link
            to={`/blog/${firstPost.title
              .replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
              .toLowerCase()}`}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={firstPost.image}
              alt={firstPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            {/* Content Section */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {firstPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{firstPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}

        {/* Second Blog Post */}
        {secondPost && (
          <Link
            to={"/blog/introduction-to-the-world-scholars-cup-2025-tournament"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={secondPost.image}
              alt={secondPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            {/* Content Section */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {secondPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{secondPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}

        {/* Sat Blog Post */}
        {thirdPost && (
          <Link
            to={"/blog/sat-preparation-2025-how-to-prepare-for-sat-exam"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={thirdPost.image}
              alt={thirdPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            {/* Content Section */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {thirdPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{thirdPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}

        {/* fourth blog  */}
        {fourthPost && (
          <Link
            to={"/blog/learn-all-about-different-types-of-debate"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={fourthPost.image}
              alt={fourthPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {fourthPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{fourthPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}

        {/* fifth blog */}
        {fifthPost && (
          <Link
            to={"/blog/explore-different-types-of-writing-formats"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={fifthPost.image}
              alt={fifthPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {fifthPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{fifthPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}
        {/* sixpost */}

        {sixPost && (
          <Link
            to={"/blog/ultimate-guide-to-debate-training"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={sixPost.image}
              alt={sixPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {sixPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{sixPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}
        {/* Seven blog */}

        {sevenPost && (
          <Link
            to={"/blog/top-debate-competitions-for-school-students"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={sevenPost.image}
              alt={sevenPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {sevenPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{sevenPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}
        {/* Eight blog */}

        {EightPost && (
          <Link
            to={"/blog/Mun-blog"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={EightPost.image}
              alt={EightPost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {EightPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{EightPost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}

        {/* Nine blog */}
        {NinePost && (
          <Link
            to={"/blog/Mastering-the-Art-of-Research-Paper-Writing"}
            className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={NinePost.image}
              alt={NinePost.title}
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {NinePost.title}
              </h2>
              <p className="text-gray-600 mb-4">{NinePost.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read More</span>
                <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Blog;

{
  /* Remaining Blog Posts in Grid Layout */
  // {fourthPost && (
  //   <Link
  //     to={'/blog/learn-all-about-different-types-of-debate'}
  //     className="block mb-8 md:flex no-underline items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
  //   >
  //     <img
  //       src={fourthPost.image}
  //       alt={fourthPost.title}
  //       loading="lazy"
  //       width="600"
  //       height="200"
  //       decoding="async"
  //       className="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
  //     />
  //     <div className="md:w-1/2 p-6">
  //       <h2 className="text-2xl font-semibold text-gray-800 mb-2">
  //         {fourthPost.title}
  //       </h2>
  //       <p className="text-gray-600 mb-4">{fourthPost.description}</p>
  //       <div className="flex items-center text-blue-600 font-medium">
  //         <span>Read More</span>
  //         <ChevronRight className="ml-1 w-5 h-5" />
  //       </div>
  //     </div>
  //   </Link>
  // )}
}
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherPosts.map((blog) => (
          <Link
            to={`/BlogDetails/${blog.id}`}
            key={blog.id}
            className="block group bg-white shadow-xs rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                <span>{blog.category}</span>
                <span className="text-gray-300">|</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="text-lg font-semibold mt-1 text-gray-800 group-hover:underline line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                {blog.description}
              </p>
            </div>
            <div className="flex items-center justify-end p-4 border-t border-gray-200">
              <span className="text-sm text-blue-600 font-medium mr-2">
                Read More
              </span>
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </div>
          </Link>
        ))}
      </div> */
}
