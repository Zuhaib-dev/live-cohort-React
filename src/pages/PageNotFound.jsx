import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <img 
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif" 
        alt="Page not found"
        className="w-72 mb-8"
      />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 text-gray-400 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link 
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg font-medium shadow-lg transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
