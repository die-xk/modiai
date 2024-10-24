import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import AppLayout from './components/AppLayout';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import WhoWeAre from './components/WhoWeAre';

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/app/*" element={user ? <AppLayout /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
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
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/who-we-are" element={<WhoWeAre />} />
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
