import React, { useState } from "react";
import './index.css';
import Homepage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AdmissionPage from './components/AdmissionPage'; // Corrected default import
import ErrorPage from './components/OtherPages/NotFound';
import UnderDevelopment from './components/OtherPages/underDevelopment';
import CareerPage from './components/CareerPage';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Disclosure from "./components/Disclosure";
import Copyright from "./components/OtherPages/Copyright";
import Disclaimer from "./components/OtherPages/Disclaimer";
import Privacy from "./components/OtherPages/Privacy";
import Terms from "./components/OtherPages/TermsAndConditions";
import Hyperlink from "./components/OtherPages/Hyperlinks";


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionPage />} />
        <Route path="/dashboard" element={<UnderDevelopment />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="copyright" element={<Copyright />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/hyperlink" element={<Hyperlink />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
