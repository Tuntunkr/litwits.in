import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import APLogo from "/AP-Logo.jpg";
import world from "/worlds.jpeg";
import Satimg from "/Satimage.jpeg";

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
    title: "SAT Preparation 2025: How to Prepare for SAT Exam",
    description:
      "Scholastic Assessment Test, often known as SAT, is an important standardized test that functions as the key admission criterion for college admissions, specifically for Indian students who aim to study abroad. ",
    image: Satimg,
  },
  ...Array.from({ length: 9 }, (_, index) => ({
    id: index + 3, // Start from ID 3 to avoid duplicate IDs
    title: `Advanced Placement Exam 2025`,
    description: `This is a short description of blog post ${
      index + 3
    }. Learn about product management, feature voting, and SaaS tools.`,
    image: Satimg,
  })),
];

const Blog = () => {
  // Fetch first and second blog posts
  const firstPost = blogData.find((post) => post.id === 1);
  const secondPost = blogData.find((post) => post.id === 2);
  const thirdPost = blogData.find((post) => post.id === 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Recent Blogs</h1>
      </section>

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
          to={'/blog/introduction-to-the-world-scholars-cup-2025-tournament'}
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
          to={'/blog/sat-preparation-2025-how-to-prepare-for-sat-exam'}
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
    </div>
  );
};

export default Blog;

{
  /* Remaining Blog Posts in Grid Layout */
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
