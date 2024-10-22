import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import AppLayout from './components/AppLayout';
import './App.css';

// Home component
const Home = () => (
  <div>
    <Hero />
    <Partners />
    <HowItWorks />
    <CaseStudies />
    {/* Add more sections here as needed */}
  </div>
);

// About component
const About = () => (
  <div className="container mx-auto mt-8 p-4">
    <h1 className="text-2xl font-bold mb-4">About Us</h1>
    <p className="text-gray-600">This is the About page</p>
  </div>
);

// Services component
const Services = () => (
  <div className="container mx-auto mt-8 p-4">
    <h1 className="text-2xl font-bold mb-4">Our Services</h1>
    <p className="text-gray-600">This is the Services page</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app/*" element={<AppLayout />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
