import React, { useEffect, useState } from "react";
import "../index.css";
import Footer from './HomePage/Footer'
import Hero from './CareerPage/HeroSection'
import Testimonials from './CareerPage/Testimonials'
import Jobs from './CareerPage/Jobs'
import Values from './CareerPage/Values'
import Notifications from './HomePage/Notifications'

export default function CareerPage() {
  useEffect(() => {
      const handleScroll = () => {
        document.querySelectorAll(".headings").forEach((heading) => {
          const rect = heading.getBoundingClientRect();
          const start = window.innerHeight * 0.1;
          const end = window.innerHeight * 0.8;
  
          if (rect.top >= start && rect.top <= end) {
            // Calculate progress between start and end
            const progress = (rect.top - start) / (end - start);
            heading.style.backgroundSize = `${100 - progress * 100}% 100%`;
          } else if (rect.top < start) {
            heading.style.backgroundSize = "100% 100%"; // Fully revealed
          } else {
            heading.style.backgroundSize = "0% 100%"; // Fully hidden
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
}, []);
  return (
    <div>
      <Notifications />
      <Hero />
      <Testimonials />
      <Jobs />
      <Values />
      <Footer />
    </div>
  )
}
