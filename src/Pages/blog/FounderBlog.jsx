import React from "react";
import { Link } from "react-router-dom";

const founderArticles = [
  {
    title: "Leading with Empathy: Lessons from the Litwits Journey",
    excerpt:
      "Discover how empathy and vision shaped Litwits’ unique approach to education, directly from our founder.",
    image: "/images/founder-article-1.jpg",
    url: "/blog/founder/leading-with-empathy",
    date: "April 2024",
  },
  {
    title: "Why Reading is the Ultimate Superpower",
    excerpt:
      "Our founder shares insights on how reading transforms lives and builds future leaders.",
    image: "/images/founder-article-2.jpg",
    url: "/blog/founder/reading-superpower",
    date: "March 2024",
  },
];

const FounderBlog = () => {
  return (
    <div>
      <section className="bg-[#f9f6f4] py-12 px-4 rounded-lg shadow-md my-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-red-800 mb-6 text-center">
            From the Founder’s Desk
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Insights, stories, and advice from the founder of Litwits.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {founderArticles.map((article) => (
              <div
                key={article.url}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs text-red-700 font-semibold mb-2">
                    {article.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 flex-1">{article.excerpt}</p>
                  <Link
                    to={article.url}
                    className="inline-block mt-auto text-red-800 font-semibold hover:underline"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderBlog;