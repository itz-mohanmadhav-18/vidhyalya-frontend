import React from 'react';
import back from '../../assets/about_back.jpeg';

const HeroSection = () => {
  return (
    <div className="pt-4 md:pt-0 bg-maroon flex flex-col justify-between items-center md:flex-row overflow-visible">
      {/* Left content section */}
      <div className="w-full lg:w-1/2 flex items-center px-8 md:px-16 align-middle">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-beige md:leading-tight lg:leading-tight mb-6">
            Empowering <span className="text-peach">Rural Education</span>, One Child at a Time
          </h1>
          <p className="text-md md:text-lg text-beige">
            Founded in 2022, Prakriti International creates safe spaces where every rural child can learn, grow, and thrive.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 relative overflow-visible mt-5">
        <img 
          src={back} 
          alt="Rural education" 
          className="w-full h-fit object-cover rounded-t-full md:rounded-t-none md:rounded-s-full shadow-[0_0_30px_beige]"
        />
      </div>
    </div>
  );
};

export default HeroSection;