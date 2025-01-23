import React, {useState} from "react";
import NavBar from "./HomePage/NavBar";
import Footer from "./HomePage/Footer";
import ContactUsForm from "./HomePage/ContactUsForm";
import Hero from "./Disclosure/Hero";
import Announcement from "./AdmissionPage/announcement";

export default function Disclosure() {
    const [isContactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => {
        setContactFormOpen(true);
      };
    
      const closeContactForm = () => {
        setContactFormOpen(false);
      };


  return (

    <>
      <NavBar className="bg-maroon" />
      < Announcement tagline="Learn More" />
      <div className="flex flex-col min-h-screen">
        < Hero />
      </div>

      <Footer openContactForm={openContactForm} />
      < ContactUsForm isOpen={isContactFormOpen} onClose={closeContactForm}  />
    </>
  );
}
