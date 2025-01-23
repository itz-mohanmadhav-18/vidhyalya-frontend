import React, { useState } from 'react'
import Navbar from './HomePage/NavBar'
import Footer from './HomePage/Footer'
// import { Contact } from 'lucide-react';
import HeroSection from './AboutPage/HeroSection';
import ContactUsForm from './HomePage/ContactUsForm';

export default function AboutPage() {
  const [isContactFormopen,setContactFormOpen] = useState(false);
  const openContactForm = () => {
    setContactFormOpen(true);
  };
  const closeContactForm = () => {
    setContactFormOpen(false);
  };
  return (
    <div>
      <Navbar className="bg-maroon" />
      <HeroSection />
      <Footer />
      <ContactUsForm />
    </div>
  )
}
