import React from 'react';
import { Link } from 'react-router-dom';

const Announcement = ({tagline}) => {
  return (
    <div className=" text-lg sm:text-xl sm:py-3 bg-maroon text-white py-2 shadow-md overflow-hidden ">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        📢 <span className="font-bold ">Admissions for the 2025-2026 academic year are now open!</span> Enroll your child today for a bright future. Limited seats available!{' '}
        <Link to = "/admissions" ><a href="/admissions" className="underline text-yellow-300 hover:text-yellow-400">
          Click here to apply.
        </a></Link>
      </marquee>
    </div>
  );
};

export default Announcement;
