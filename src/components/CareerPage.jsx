import React from 'react';
import Footer from './HomePage/Footer'
import Hero from './CareerPage/HeroSection'
import Testimonials from './CareerPage/Testimonials'
import Jobs from './CareerPage/Jobs'
import Values from './CareerPage/Values'
import Notifications from './HomePage/Notifications'

export default function CareerPage() {
  return (
    <div>
      <Notifications />
      <Hero />
      <Testimonials />
      <Jobs />
      <Values />
      <Footer />
    </div>
  )
}
