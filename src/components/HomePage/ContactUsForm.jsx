import React, { useState } from 'react';

export default function ContactUsForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      query: ''
    });
    setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const chalkboardText = {
    fontFamily: "'Permanent Marker', 'Press Start 2P', cursive",
    letterSpacing: '1px',
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)'
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Contact Form Board */}
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50">
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] bg-[#383838] border-[12px] border-t-[#bda27e] border-l-[#b19876] border-b-[#c9ad86] border-r-[#b19876] rounded-lg z-50"
          style={{
            boxShadow: "0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5)",
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACmGA8nAAAAEElEQVQImWP4//8/wygAAgAB/xwVO9YAAAAASUVORK5CYII=")',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="relative p-6 text-white">
            <h2
              className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white tracking-wider hidden-scrollbar"
              style={chalkboardText}
            >
              <i className="fas fa-paper-plane mr-3"></i>
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-beige mb-1"
                  style={chalkboardText}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-beige focus:ring-1 focus:ring-beige transition-colors duration-200"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-beige mb-1"
                  style={chalkboardText}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-beige focus:ring-1 focus:ring-beige transition-colors duration-200"
                />
              </div>

              <div>
                <label 
                  htmlFor="query" 
                  className="block text-sm font-medium text-beige mb-1"
                  style={chalkboardText}
                >
                  Your Message
                </label>
                <textarea
                  id="query"
                  name="query"
                  required
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-beige focus:ring-1 focus:ring-beige transition-colors duration-200 max-h-48"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-beige text-gray-900 py-2 px-4 rounded-md hover:bg-beige transition duration-200 font-bold"
                style={chalkboardText}
              >
                Send Message
              </button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-xl text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110 bg-gray-900 bg-opacity-50 rounded-full p-1"
              onClick={onClose}
              aria-label="Close contact form"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Chalk dust effect */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/10 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Custom Success Alert */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          <div className="font-bold text-lg mb-1" style={chalkboardText}>
            Message Sent!
          </div>
          <div className="text-sm">
            We'll get back to you soon.
          </div>
        </div>
      )}
    </>
  );
}