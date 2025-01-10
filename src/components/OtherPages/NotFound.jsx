import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-bold hidden-scrollbar text-transparent bg-clip-text bg-gradient-to-r  from-maroon-text via-yellow-800 to-light-brown">
          404
        </h1>
        
        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for seems to have wandered off. 
            Don't worry though, you can find your way back home!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'} 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-maroon-text via-yellow-800 to-light-brown text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Home size={20} />
            Return Home
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;