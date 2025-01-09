import React from 'react';
import heroImage from '../assets/hero_image.png';

const HeroSection = () => {
  return (
    <div className="py-10 px-9 overflow-hidden">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 h-[50vh] backdrop-blur-sm px-2 rounded-lg">
          <h1 className="text-6xl font-semibold leading-tight text-white">
            Empowering <span className="text-beige">Minds</span>, Shaping <span className="text-beige">Future</span>
          </h1>
          <p className="text-base text-justify mb-8 text-light-white">
            Join a community that inspires excellence, fosters creativity, and nurtures lifelong learners.
          </p>
          <a
            href=""
            className="px-6 py-4 my-3 text-xl text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out"
          >
            Apply for Admission
          </a>
        </div>
        <img src={heroImage} alt="Hero" width="30%" />
      </div>
    </div>
  );
};

export default HeroSection;
