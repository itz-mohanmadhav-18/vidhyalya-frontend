import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from 'react';
import image from '../../assets/Gallery/IndependenceDay/001.jpeg';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  // Array of image URLs. Here we use Picsum Photos for placeholder images.
  const [images] = useState([
    image,
    image,
    image,
    image,
    image,
    image,
  ]);

  // Duplicate the images array to create a smoother infinite scroll effect.
  const duplicatedImages = [...images, ...images];

  return (
    <div className="min-h-screen bg-maroon p-8 flex flex-col justify-between -z-10">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-[#fff] to-[#fff]">
        Visual Treasures
      </h1>
      <div className="mx-auto rounded-md relative flex items-center overflow-hidden">
        {/* Using marquee for infinite scrolling effect */}
        <marquee behavior="scroll" direction="left" scrollamount="10" className="whitespace-nowrap overflow-hidden mx-10">
          {duplicatedImages.map((img, index) => (
            <div key={index} className="inline-block mx-4">
              <img
                src={img}
                alt={`carousel-img-${index}`}
                className="w-60 h-60 object-cover"
              />
            </div>
          ))}
        </marquee>
      </div>
      <Link to="/gallery" className="w-full flex justify-center">
        <a
          href=""
          className="xs:px-3 xs:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 my-3 xs:text-base md:text-lg lg:text-xl text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out"
        >
          Visit Gallery
        </a>
      </Link>
    </div>
  );
};

export default IndexPage;
