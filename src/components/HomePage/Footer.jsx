import React from "react";
import logo from "../../assets/logo.png";

const Footer = ({ openContactForm }) => {
  return (
    <footer className="bg-dark-brown text-white p-16 h-fit">
      {/* Top Section with Logo and Social Icons */}
      <div className="mx-auto px-4 pb-4 flex flex-col md:flex-row items-center justify-between mb-10 relative after:content-[''] after:w-full after:border-b-2 after:border-white after:absolute after:-bottom-0">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="h-16 drop-shadow-[2px_2px_1px_beige]"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-beige hover:text-light-brown text-2xl"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-beige hover:text-light-brown text-2xl"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-beige hover:text-light-brown text-2xl"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="#"
            className="text-beige hover:text-light-brown text-2xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Google Map Section */}
        <div className="flex justify-center md:justify-start">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204772.16739471912!2d77.29216469453125!3d27.604857699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e1!3m2!1sen!2sin!4v1736658656806!5m2!1sen!2sin&zoomControl=0"
            width="300"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <button
            onClick={openContactForm}
            className="text-lg font-semibold hover:text-light-brown underline"
          >
            Contact Us
          </button>
          <address className="not-italic mt-4 text-sm leading-relaxed">
            7165 Burton Avenue <br />
            Rohnert Park, CA 94928
          </address>
          <p className="mt-2 text-sm">P: 707-792-4700</p>
          <p className="text-sm">F: 707-792-4537</p>
          <a href="#" className="mt-9 text-lg underline hover:text-light-brown">
            Career Opportunities
          </a>
        </div>

        {/* Links Section */}
        <div className="flex flex-row justify-center md:justify-start gap-4">
          <div className="flex flex-col space-y-3 text-md">
            <a href="#" className="hover:text-light-brown">
              District Resources
            </a>
            <a href="#" className="hover:text-light-brown">
              Careers
            </a>
            <a href="#" className="hover:text-light-brown">
              Use of Facilities
            </a>
            <button
              onClick={openContactForm}
              className="text-left hover:text-light-brown"
            >
              Contact Us
            </button>
            <a href="#" className="hover:text-light-brown">
              Uniform Complaint Procedure
            </a>
            <a href="#" className="hover:text-light-brown">
              Title IX
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-md">
            <a href="#" className="hover:text-light-brown">
              Find Your School
            </a>
            <a href="#" className="hover:text-light-brown">
              School Locations Map
            </a>
            <a href="#" className="hover:text-light-brown">
              Family Resources
            </a>
            <a href="#" className="hover:text-light-brown">
              School Calendar
            </a>
            <a href="#" className="hover:text-light-brown">
              Enrollment Information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
