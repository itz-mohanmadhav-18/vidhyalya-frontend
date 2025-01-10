import React, { useState } from 'react';

export default function UnderDevelopment() {
  const [notification, setNotification] = useState('');

  const handleNotifyMe = () => {
    setNotification('You will be notified when this page is ready!');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mb-8 flex items-center justify-center">
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4 hidden-scrollbar">Under Development</h1>
      <p className="text-gray-600 text-lg mb-8 text-center">We're working hard to bring you something amazing. Stay tuned!</p>
      <button
        onClick={handleNotifyMe}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      >
        Notify Me
      </button>
      {notification && (
        <p className="text-green-600 mt-6 text-lg font-semibold">{notification}</p>
      )}
    </div>
  );
}