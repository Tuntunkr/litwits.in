import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Adult = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Coming Soon | Litwits</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="bg-white shadow-lg rounded-lg p-10 text-center w-11/12 md:w-8/12 lg:w-6/12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-4">
            Coming Soon
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            This page is under construction
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We are working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="bg-red-800 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adult;
