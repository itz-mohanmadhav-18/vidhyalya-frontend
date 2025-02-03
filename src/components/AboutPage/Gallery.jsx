import { useState } from "react";

import imageU from '../../assets/vision1.jpeg';

const Gallery = () => {
  const allImages = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    placeholder: true,
  }));

  const [visibleImages, setVisibleImages] = useState(6);

  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 6, allImages.length));
  };

  const seeLessImages = () => {
    setVisibleImages((prev) => Math.max(prev - 6, 6));
  };

  return (
    <div className="px-6 py-12 bg-maroon min-h-screen">
      {/* Heading */}
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-[#fff] to-[#fff]">
        Visual Treasures
    </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6 overflow-visible my-10">
        {allImages.slice(0, visibleImages).map((image) => (
          <div
            key={image.id}
            style={{ backgroundImage: `url(${imageU})`}}
            className="bg-light-white bg-cover rounded-xl w-full h-40 sm:h-48 lg:h-56 transition-transform duration-300 hover:scale-105 shadow-[5px_5px_0_brown] hover:shadow-[7px_7px_0_brown]"
          ></div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 text-center flex justify-center gap-4">
        {visibleImages < allImages.length && (
          <button
            onClick={loadMoreImages}
            className="px-5 py-2 text-white bg-brown rounded-lg hover:bg-light-brown transition-all duration-300 shadow-md focus:outline-none focus:ring focus:ring-light-brown"
          >
            See More
          </button>
        )}
        {visibleImages > 6 && (
          <button
            onClick={seeLessImages}
            className="px-5 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring focus:ring-red-400"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
