import React, { useState } from 'react';
import Footer from './HomePage/Footer'
import Hero from './CareerPage/HeroSection'
import Testimonials from './CareerPage/Testimonials'
import Jobs from './CareerPage/Jobs'
import Values from './CareerPage/Values'
import Notifications from './HomePage/Notifications'
import ContactUsForm from './HomePage/ContactUsForm';

export default function CareerPage() {
    const [isContactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => {
      setContactFormOpen(true);
    };
  
    const closeContactForm = () => {
      setContactFormOpen(false);
    };

  return (

    <div>
      <Notifications />
      <Hero />
      <Testimonials />
      <Jobs />
      <Values />
      <Footer openContactForm={openContactForm} />
      <ContactUsForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}
