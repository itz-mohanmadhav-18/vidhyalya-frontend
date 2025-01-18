import React,{useState} from 'react'
import Navbar from './HomePage/NavBar'
import Footer from './HomePage/Footer'
import ContactUsForm from './HomePage/ContactUsForm'
import AdmissionForm from './AdmissionPage/admissionForm';
import Announcement from './AdmissionPage/announcement';
import Cutouts from './AdmissionPage/cutouts';

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
      <Navbar className = "bg-gradient-to-r from-maroon via-amber-800 to-maroon-text" />
      < Announcement />
      < AdmissionForm />
      < Cutouts />
      <Footer openContactForm={openContactForm} />
      <ContactUsForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}
