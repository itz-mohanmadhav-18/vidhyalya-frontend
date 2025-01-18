import React, { useEffect } from 'react';
import backImage from '../../assets/career-back.png';

const HeroElement = ({className}) => {
  const scrollToJobs = () => {
    // Add a small delay to ensure the element is rendered
    setTimeout(() => {
      const element = document.getElementById('job-listings');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.error("Element with id 'job-listings' not found!");
      }
    }, 100);
  };

  return (
    <div className={`relative w-screen h-screen overflow-visible ${className}`}>
      <div className="w-screen h-[60vh] md:h-[70vh] xs:flex-col md:flex-row text-center bg-maroon shadow-[0_5px_6px_gray] text-beige flex items-center xs:justify-evenly md:justify-around">
        <div>
          <div
            className="xs:text-3xl sm:text-4xl lg:text-7xl font-black xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
            style={{
              filter: 'drop-shadow(-2.8px 2.8px 0px rgba(22,0,10,1)) drop-shadow(-2.5px 2.5px 0px rgba(255,255,255,0.8))',
            }}
          >
            Work With Us
          </div>
          <div
            className="md:text-2xl xs:text-base my-3 text-brown xs:leading-tight md:leading-tight"
            style={{ filter: 'drop-shadow(-1px 1px 0px rgba(255,255,255,0.75))' }}
          >
            Where passion meets purpose!
          </div>
        </div>
        <div className="flex justify-center items-center overflow-visible">
          <img src={backImage} alt="background" className="w-1/2 md:w-2/3 drop-shadow-[0_0_50px_beige]" />
        </div>
        <div className="absolute w-3/4 md:w-1/2 xs:top-[55vh] md:top-[60vh] rounded-md overflow-visible shadow-[5px_10px_8px_gray] z-10">
          <div className="xs:p-2 md:p-6 flex justify-center items-center flex-col bg-beige shadow-[6px_6px_0_maroon] rounded-md">
            <div className="text-dark-brown font-semibold md:font-extrabold m-3 md:m-6 xs:leading-tight md:leading-tight text-xl md:text-4xl">
              Explore Roles At Vidyalaya
            </div>
            <button
              className="bg-maroon-text w-full xs:text-base md:text-2xl font-bold md:tracking-[2rem] text-light-white p-2 mt-2 md:mt-6 rounded-lg cursor-pointer hover:bg-brown hover:text-beige"
              onClick={scrollToJobs}
            >
              Get Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroElement;