import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <img src="https://freefrontend.com/assets/img/tailwind-404-page-templates/tailwind-404.jpg" alt="404 Error" className="w-1/2 md:w-1/3" />
      <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-800 mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
