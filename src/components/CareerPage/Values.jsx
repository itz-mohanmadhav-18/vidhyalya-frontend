import { useState, useEffect } from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaRocket, FaHeart, FaCheckCircle, FaUserFriends, FaGlobe } from 'react-icons/fa';

const OurValuesCircular = () => {
  const [rotation, setRotation] = useState(0);

  const values = [
    { icon: <FaHandshake size={24} />, title: "Integrity" },
    { icon: <FaLightbulb size={24} />, title: "Excellence" },
    { icon: <FaUsers size={24} />, title: "Collaboration" },
    { icon: <FaRocket size={24} />, title: "Innovation" },
    { icon: <FaHeart size={24} />, title: "Respect" },
    { icon: <FaCheckCircle size={24} />, title: "Commitment" },
    { icon: <FaUserFriends size={24} />, title: "Empathy" },
    { icon: <FaGlobe size={24} />, title: "Diversity" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen mt-20 ">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
        Our Core Values
      </h1>
      <div className="max-w-6xl mx-auto mt-16">
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Central Globe */}
          <div className="absolute z-10 w-24 h-24 bg-brown rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <FaGlobe className="w-12 h-12 text-white" />
          </div>

          {/* Orbiting Values */}
          {values.map((value, index) => {
            const angle = ((index / values.length) * 2 * Math.PI) + (rotation * (Math.PI / 180));
            const radius = 140;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 hover:bg-beige transition-colors duration-300">
                  <div className="text-brown">
                    {value.icon}
                  </div>
                </div>
                <span className="text-sm font-semibold text-dark-brown bg-white px-3 py-1 rounded-full shadow-sm">
                  {value.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurValuesCircular;