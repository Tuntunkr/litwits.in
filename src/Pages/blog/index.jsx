import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import APLogo from "/AP-Logo.jpg";

// Sample blog data with 10 entries
const blogData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  // category: "Product Management",
  // date: `Jul ${6 + index}, 2024`,
  title: `Advanced Placement Exam 2025`,
  description: `This is a short description of blog post ${
    index + 1
  }. Learn about product management, feature voting, and SaaS tools.`,
  image: APLogo,
}));

const Blog = () => {
  // Extract first post and others
  const [firstPost, ...otherPosts] = blogData;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Recent Blogs</h1>
        </section>

        {/* First Blog Post - Large Horizontal Card */}

        {firstPost && (
          <Link
            to={`/BlogDetails/${firstPost.id}`}
            className="block mb-8 md:flex items-center gap-6 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={APLogo}
              alt="14 Feature Voting Tools for SaaS Companies"
              loading="lazy"
              width="600"
              height="200"
              decoding="async"
              class="aspect-eightbyfive md:aspect-twobyone scale-100 group-hover:scale-105 duration-500 object-center object-contain"
            />

            {/* Content Section */}
            <div className="md:w-1/2 p-6">
              <div className="flex items-center space-x-2 text-sm mb-2 text-gray-500">
                <span>{firstPost.category}</span>
                <span className="text-gray-300">|</span>
                <span>{firstPost.date}</span>
              </div>
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

        {/* Remaining Blog Posts in Grid Layout */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div> */}
      </div>
    </>
  );
};

export default Blog;
