import React, { useState } from 'react';
import Navbar from './HomePage/NavBar'
import Footer from './HomePage/Footer'
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
      <Navbar />
      <div className="text-6xl text-center m-16 leading-tight">Welcome To Career Page</div>
      <Footer openContactForm={openContactForm} />
      <ContactUsForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}
