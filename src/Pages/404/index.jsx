import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="bg-white shadow-lg rounded-lg p-10 text-center w-11/12 md:w-8/12 lg:w-6/12">
          <h1 className="text-8xl font-extrabold text-red-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Oops! Page not found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for does not exist. It might have been
            moved or deleted.
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

export default NotFound;
