import React,{useState, useEffect} from 'react'
import Navbar from './HomePage/NavBar'
import Footer from './HomePage/Footer'
import Hero from './AdmissionPage/HeroSection';
import Eli from './AdmissionPage/Eligibility';
import Pro from './AdmissionPage/Procedure';


export default function AdmissionPage() {
      const [isContactFormOpen, setContactFormOpen] = useState(false);
      const openContactForm = () => {
        setContactFormOpen(true);
      };
    
      const closeContactForm = () => {
        setContactFormOpen(false);
      }; 
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
      <Hero />
      <Eli />
      <Pro />
      <Footer />
    </div>
  )
}
