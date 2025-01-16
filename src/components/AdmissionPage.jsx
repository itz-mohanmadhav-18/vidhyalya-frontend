import React,{useState} from 'react'
import Navbar from './HomePage/NavBar'
import Footer from './HomePage/Footer'
import ContactUsForm from './HomePage/ContactUsForm'
import HeroSection from './AdmissionPage/HeroSection';

export default function AdmissionPage() {
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
      <HeroSection />
      <Footer openContactForm={openContactForm} />
      <ContactUsForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}
