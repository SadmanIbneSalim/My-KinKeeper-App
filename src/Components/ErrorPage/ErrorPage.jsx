import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4 text-center">

      <h1 className="text-6xl md:text-8xl font-bold text-neutral-700">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-neutral-600 mt-2 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-xl hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;