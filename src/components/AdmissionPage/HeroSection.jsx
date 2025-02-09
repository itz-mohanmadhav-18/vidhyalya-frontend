// Hero.jsx
import React from "react";
import Navbar from "../HomePage/NavBar";
import Announcement from "./announcement";
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-maroon">
      <Navbar />
      <Announcement />
      <div className="h-[75vh] text-center p-8 flex items-center justify-center flex-col text-beige">
        <div
            className="xs:text-3xl sm:text-4xl lg:text-7xl font-black xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
            style={{
              filter: 'drop-shadow(-2.8px 2.8px 0px rgba(22,0,10,1)) drop-shadow(-2.5px 2.5px 0px rgba(255,255,255,0.8))',
            }}
          >
            Welcome to Admissions
          </div>
        <p className="mt-4 xs:text-sm sm:text-base md:text-lg">Join our prestigious institution today!</p>
        <Link to="/admissions" className="overflow-visible mt-10"><a
            href=""
            className="xs:px-3 xs:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 my-3 xs:text-base md:text-lg lg:text-xl text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out"
          >
            Open Admission Form
          </a></Link>
      </div>
    </div>
  );
};

export default Hero;