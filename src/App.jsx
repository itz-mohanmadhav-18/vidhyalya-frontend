import React from "react";
import './index.css';
import Homepage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AdmissionPage from './components/AdmissionPage'; // Corrected default import
import ErrorPage from './components/OtherPages/NotFound';
import UnderDevelopment from './components/OtherPages/underDevelopment';
import CareerPage from './components/CareerPage';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionPage />} />
        <Route path="/dashboard" element={<UnderDevelopment />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
