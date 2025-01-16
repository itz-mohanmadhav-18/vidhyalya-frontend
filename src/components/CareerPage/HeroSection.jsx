import React from 'react';
import HeroElement from './HeroElement';
import NavBar from '../HomePage/NavBar';

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen overflow-visible">
      <NavBar />
      <HeroElement />
    </div>
  )
}

export default HeroSection