import React, { useState } from 'react';

const NotificationBoard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBoard = () => {
    setIsVisible((prev) => !prev);
  };

  // Updated styles object with more specific font styling
  const chalkboardText = {
    fontFamily: "'Permanent Marker', 'Press Start 2P', cursive", // Ensure 'Permanent Marker' is correctly referenced and fallback is present
    letterSpacing: '1px',
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)'
  };

  return (
    <>
      {/* Notification Bell Icon */}
      <div
        className="fixed hidden-scrollbar bottom-6 right-6 text-3xl cursor-pointer z-50 bg-black text-yellow-300 p-3 px-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gray"
        onClick={toggleBoard}
      >
        <i className="fas fa-bell animate-pulse "></i>
      </div>

      {/* Blackboard Notification Board */}
      {isVisible && (
        <div
          className="fixed bottom-24 w-[280px] h-[280px] xs:w-[300px] xs:h-[300px] right-4 sm:right-6 sm:w-[400px] sm:h-[360px] overflow-y-auto   bg-[#383838] border-[12px] border-t-[#bda27e] border-l-[#b19876] border-b-[#c9ad86] border-r-[#b19876] rounded-lg z-50 transition-all duration-300 transform scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900"
          style={{
            boxShadow: "0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5)",
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACmGA8nAAAAEElEQVQImWP4//8/wygAAgAB/xwVO9YAAAAASUVORK5CYII=")', // Subtle texture
            backgroundBlendMode: 'overlay',
          }}
        >
          {/* Blackboard Content */}
          <div
            className="relative p-6 text-white overflow-y-auto hidden-scrollbar "
          >
            <h2
              className="text-2xl sm:!text-3xl font-bold text-center mb-6 text-white hidden-scrollbar tracking-wider"
              style={chalkboardText}
            >
              <i className="fas fa-clipboard-list mr-3"></i>
              Notice Board
            </h2>

            <ul className="space-y-4 mt-4 hidden-scrollbar">
              {[
                { text: "Welcome to our website!", icon: "💫" },
                { text: "New features have been added!", icon: "✨" },
                { text: "Check out the upcoming events!", icon: "🎉" },
                { text: "Stay tuned for more updates!", icon: "🌟" },
                { text: "Join our community today!", icon: "👋" },
                { text: "New courses available now!", icon: "📚" },
                { text: "Special announcements coming soon!", icon: "🎯" },
                { text: "Don't miss our latest updates!", icon: "🔔" }
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center py-0 px-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  <span
                    className="text-yellow-400 mr-4 text-xl"
                    style={chalkboardText}
                  >
                  </span>
                  <span
                    className="leading-tight hover:text-yellow-100 transition-colors duration-300 flex-grow hidden-scrollbar"
                    style={chalkboardText}
                  >
                    {item.text} <span className="ml-2">{item.icon}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-3 right-4 text-xl text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110 bg-gray-900 bg-opacity-50 rounded-full p-1"
            onClick={toggleBoard}
            aria-label="Close notification board"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Chalk dust effect - subtle and at the top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>
      )}
    </>
  );
};

export default NotificationBoard;