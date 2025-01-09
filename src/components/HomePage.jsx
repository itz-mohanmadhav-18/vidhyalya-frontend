import React, { useEffect } from 'react';
import '../index.css';
import Section1 from './HomePage/Section1';
import Section2 from './HomePage/Section2';
import Section3 from './HomePage/Section3';
import Section4 from './HomePage/Section4';
import Section5 from './HomePage/Section5';
import Section6 from './HomePage/Timeline';
import Section7 from './HomePage/Section7';
import Notifications from './HomePage/Notifications';
import Footer from './HomePage/Footer';

export default function Homepage() {
    useEffect(() => {
        const handleScroll = () => {
          document.querySelectorAll('.headings').forEach((heading) => {
            const rect = heading.getBoundingClientRect();
            const start = window.innerHeight * 0.1;
            const end = window.innerHeight * 0.8;
    
            if (rect.top >= start && rect.top <= end) {
              // Calculate progress between start and end
              const progress = (rect.top - start) / (end - start);
              heading.style.backgroundSize = `${100 - progress * 100}% 100%`;
            } else if (rect.top < start) {
              heading.style.backgroundSize = `100% 100%`; // Fully revealed
            } else {
              heading.style.backgroundSize = `0% 100%`; // Fully hidden
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Notifications />
          <Footer />
        </>
      );
}
