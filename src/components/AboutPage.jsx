import React, { useState } from 'react'
import Navbar from './HomePage/NavBar'
import Footer from './HomePage/Footer'
// import { Contact } from 'lucide-react';
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
      <Navbar />
      <div className="text-6xl text-center m-16 leading-tight">Welcome To About Page</div>
      <Footer />
      <ContactUsForm />
    </div>
  )
}
