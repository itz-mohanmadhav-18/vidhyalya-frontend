import React, { useState } from "react";
import vision1 from '../../assets/vision1.jpeg';
import vision2 from '../../assets/vision2.jpeg';
import vision3 from '../../assets/vision3.jpg';
import useScrollAnimation from "./animation.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBrain, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const VisionCards = () => {
  useScrollAnimation();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animatedIndex, setAnimatedIndex] = useState(null);

  const visions = [
    {
      icon: faBrain,
      title: 'Empowering Minds',
      description: 'Unlocking potential through innovative education.',
      image: vision1,
    },
    {
      icon: faGlobe,
      title: 'Global Citizenship',
      description: 'Preparing students to thrive in a connected world.',
      image: vision2,
    },
    {
      icon: faLightbulb,
      title: 'Creative Thinking',
      description: 'Fostering creativity and problem-solving skills.',
      image: vision3,
    },
  ];

  return (
    <div className="pt-10 px-6 pb-24 space-y-16 bg-gradient-to-br from-white via-beige to-white">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
        Vision
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 scrollbar-hide">
        {visions.map((vision, index) => (
          <div
            key={index}
            className="cursor-pointer animate-on-scroll relative m-5 rounded-2xl shadow-lg overflow-hidden bg-center bg-cover hover:scale-110"
            style={{
              backgroundImage: `url(${vision.image})`,
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.7)',
            }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setAnimatedIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setAnimatedIndex(null);
            }}
          >
            <div
              className={`p-8 cursor-pointer text-white transition-transform duration-500 ease ${
                hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
              }}
            >
              <FontAwesomeIcon
                icon={vision.icon}
                className={`text-6xl mb-4 leading-tight ${
                  animatedIndex === index ? 'animate-enter' : ''
                }`}
              />
              <h3
                className={`mx-auto whitespace-nowrap overflow-hidden border-r border-r-white border-[1px] border-t-0 border-l-0 border-b-0 ${
                  animatedIndex === index ? 'animate-typing' : ''
                } w-fit text-2xl font-semibold mb-2 leading-tight`}
              >
                {vision.title}
              </h3>
              <p>{vision.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionCards;
