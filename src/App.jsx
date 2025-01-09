import React, { useEffect } from 'react';
import './index.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Timeline';
import Section7 from './components/Section7';
import Notifications from './components/Notifications';
import Footer from './components/Footer';


function App() {
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

export default App;
