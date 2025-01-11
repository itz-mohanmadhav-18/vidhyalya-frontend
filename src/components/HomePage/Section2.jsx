import React, { useEffect, useState } from "react";
import campusesGif from '../../assets/Campuses.gif';
import students320Gif from '../../assets/320Students.gif';
import Globe from '../../assets/Globe.gif';
import students from '../../assets/12perClass.gif';
import ratio from '../../assets/Ratio.gif';
import electives from '../../assets/Electives.gif'
import useScrollAnimation from "./animation.jsx";


const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 md:my-10 px-6">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl leading-snug bg-gradient-to-r from-maroon-text to-maroon-text">
        Our Journey in Numbers
      </h1>

      <div className="grid h-screen grid-row-5 grid-cols-5 md:grid-rows-7 gap-1 md:gap-4 px-6 py-4 md:py-8 w-screen md:h-screen text-light-black">
      {/* Card 1: 320 students */}
      <div className="animate-on-scroll col-span-3 row-span-1 md:col-span-2 md:row-span-3 border-2 border-dotted border-orange-400 rounded-sm p-2 md:p-4 text-center flex flex-row items-center justify-center gap-8">
        <img src={students320Gif} alt="Campuses" className="w-12 h-12 md:w-24 md:h-24 mb-2" />
        <div className="text-md sm:text-xl md:text-2xl">320 students</div>
      </div>

      {/* Card 2: 25 countries represented */}
      <div className="animate-on-scroll col-span-2 row-span-2 md:col-span-1 md:row-span-4 border-2 border-dotted border-green-500 rounded-sm p-2 md:p-4 text-center flex flex-col items-center justify-center gap-8">
        <img src={Globe} alt="Campuses" className="w-12 h-12 md:w-20 md:h-20 mb-2" />
        <div className="text-md sm:text-xl md:text-2xl">25 countries represented</div>
      </div>

      {/* Card 3: 7:1 student to teacher ratio */}
      <div className="animate-on-scroll col-span-3 row-span-2 md:col-span-2 md:row-span-4 border-2 border-dotted border-blue-400 rounded-sm p-2 md:p-4 text-center flex flex-col md:flex-row items-center justify-center gap-8">
        <img src={ratio} alt="Campuses" className="w-12 h-12 md:w-24 md:h-24 mb-2" />
        <div className="text-md sm:text-xl md:text-2xl">7:1 student to teacher ratio</div>
      </div>

      {/* Card 4: 2 campuses */}
      <div className="animate-on-scroll col-span-2 row-span-2 md:col-span-2 md:row-span-4 border-2 border-dotted border-brown-500 rounded-sm p-2 md:p-4 text-center flex flex-col items-center justify-center gap-8">
        <img src={campusesGif} alt="Campuses" className="w-12 h-12 md:w-24 md:h-24 -mb-2 md:mb-2" />
        <div className="text-md sm:text-xl md:text-2xl">2 campuses, Bridgehampton and East Hampton</div>
      </div>

      {/* Card 5: 12 students in the average class */}
      <div className="animate-on-scroll col-span-3 row-span-1 md:col-span-2 md:row-span-3 border-2 border-dotted border-blue-400 rounded-sm p-2 md:p-4 text-center flex flex-row items-center justify-center gap-3 md:gap-6">
        <img src={students} alt="Campuses" className="w-12 h-12 md:w-24 md:h-24 mx-2" />
        <div className="text-md sm:text-xl md:text-2xl">12 students in the average class</div>
      </div>

      {/* Card 6: 100+ electives */}
      <div className="animate-on-scroll col-span-5 md:col-span-1 md:row-span-3 border-2 border-dotted border-brown-500 rounded-sm p-2 md:p-4 text-center flex flex-row md:flex-col items-center justify-center gap-8">
        <img src={electives} alt="" className="w-12 h-12 md:w-20 md:h-20 leading-tight" />
        <div className="text-md sm:text-xl md:text-2xl">100+ electives</div>
      </div>
    </div>
    </div>
  );
};

export default Section2;
