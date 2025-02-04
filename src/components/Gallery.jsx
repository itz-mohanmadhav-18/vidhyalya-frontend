import React, { useState, useEffect } from "react";
import Navbar from "./HomePage/NavBar";

// Import all images dynamically (both .jpg and .jpeg)
const jpgImages = import.meta.glob("../assets/Gallery/*/*.jpg", { eager: true });
const jpegImages = import.meta.glob("../assets/Gallery/*/*.jpeg", { eager: true });

// Function to categorize images by event folder (handling both jpg and jpeg)
const categorizeImages = () => {
  const categorizedImages = {};

  const addImagesToCategory = (imageSet) => {
    Object.entries(imageSet).forEach(([path, module]) => {
      const parts = path.split("/");
      const category = parts[parts.length - 2]; // Extract folder name (event name)

      if (!categorizedImages[category]) {
        categorizedImages[category] = new Set(); // Use Set to avoid duplicates
      }
      categorizedImages[category].add(module.default);
    });
  };

  addImagesToCategory(jpgImages);
  addImagesToCategory(jpegImages);

  // Convert Set to an array for rendering
  Object.keys(categorizedImages).forEach((key) => {
    categorizedImages[key] = Array.from(categorizedImages[key]);
  });

  return categorizedImages;
};

const eventImages = categorizeImages();

const Gallery = () => {
  // State to track expanded status for each event category
  const [expandedEvents, setExpandedEvents] = useState({});
  // State to track window width
  const [isMdScreen, setIsMdScreen] = useState(false);

  // Effect to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get visible images count based on screen size and expanded status
  const getVisibleImages = (eventName, images) => {
    const isExpanded = expandedEvents[eventName];
    if (isExpanded) return images;
    return isMdScreen ? images.slice(0, 6) : images.slice(0, 3);
  };

  // Toggle expanded status for an event
  const toggleExpand = (eventName) => {
    setExpandedEvents(prev => ({
      ...prev,
      [eventName]: !prev[eventName]
    }));
  };

  return (
    <div>
      <Navbar className="bg-maroon" />
      <section className="bg-maroon py-20 dark:bg-dark flex flex-col justify-center items-center">
        <div className="text-center mb-5">
          <h1 className="text-3xl md:text-6xl overflow-visible font-bold font-times text-peach">
            Cherished Moments
          </h1>
          <p className="text-base md:text-lg text-beige italic">
            A Glimpse into Our School's Vibrant Journey
          </p>
        </div>

        <div className="container">
          {Object.entries(eventImages).map(([event, images]) => {
            const visibleImages = getVisibleImages(event, images);
            const hasMoreImages = images.length > (isMdScreen ? 6 : 3);

            return (
              <div key={event} className="mb-10">
                <div className="flex items-center justify-between">
                  <h2 className="w-fit text-base md:text-2xl text-beige italic whitespace-nowrap">
                    {event.replace(/([A-Z])/g, " $1").trim()}
                  </h2>
                  <div className="h-[1px] bg-beige w-[70%]"></div>
                </div>
                <div className="break-inside-avoid gap-2 md:columns-2 lg:columns-3 mt-3">
                  {visibleImages.length > 0 ? (
                    visibleImages.map((src, imgIndex) => (
                      <div key={imgIndex} className="mb-2 overflow-hidden">
                        <img
                          src={src}
                          alt={`${event} image ${imgIndex + 1}`}
                          className="w-full object-cover object-center hover:brightness-50 transition-all ease-in-out duration-300"
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-white">No images found for {event}</p>
                  )}
                </div>
                {hasMoreImages && (
                  <button
                    onClick={() => toggleExpand(event)}
                    className="mt-4 px-4 py-2 text-beige border border-beige rounded-md hover:bg-beige hover:text-maroon transition-colors duration-300"
                  >
                    {expandedEvents[event] ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;