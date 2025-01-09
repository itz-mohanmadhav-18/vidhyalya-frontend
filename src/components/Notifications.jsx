import React, { useState } from 'react';
import '../index.css';

const NotificationBoard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBoard = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      {/* Notification Bell Icon */}
      <div
        className="fixed bottom-6 right-6 text-3xl cursor-pointer z-50 bg-black text-yellow-300 p-3 px-4 rounded-full shadow-md hover:scale-110 transition-transform"
        onClick={toggleBoard}
      >
        <i className="fas fa-bell"></i>
      </div>

      {/* Blackboard Notification Board */}
      {isVisible && (
        <div className="fixed bottom-20 right-6 w-[400px] h-[360px] overflow-y-auto scrollbar-hide bg-[#333] border-[12px] border-t-[#bda27e] border-l-[#b19876] border-b-[#c9ad86] font-marker border-r-[#b19876] shadow-lg rounded-lg z-50"
        style={{boxShadow: "0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5)"}}>
          {/* Blackboard Content */}
          <div className="relative bg-[#333] p-6 text-white overflow-y-auto scrollbar-hide">
            <h2 className="text-2xl font-bold text-center mb-4">
              <i className="fas fa-clipboard-list mr-2"></i>Notice Board
            </h2>
            <div className="p-4 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center text-base">
                  <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  Welcome to our website!
                </li>
                <li className="flex items-center text-base">
                <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  New features have been added.
                </li>
                <li className="flex items-center text-base">
                <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  Check out the upcoming.
                </li>
                <li className="flex items-center text-base">
                <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  Stay tuned for more updates!
                </li>
                <li className="flex items-center text-base">
                  <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  Welcome to our website!
                </li>
                <li className="flex items-center text-base">
                <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  New features have been added.
                </li>
                <li className="flex items-center text-base">
                <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  Check out the upcoming.
                </li>
                <li className="flex items-center text-base">
                <i className="fas fa-arrow-right text-yellow-400 mr-3"></i>
                  Stay tuned for more updates!
                </li>
              </ul>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-2 right-3 text-lg text-gray hover:text-red-500 transition-colors"
            onClick={toggleBoard}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default NotificationBoard;
