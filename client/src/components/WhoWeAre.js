import React from 'react';
import { FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Who We Are</h1>
        
        <div className="mb-16">
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            At Modi AI, we're passionate about revolutionizing the way businesses interact with artificial intelligence. Our mission is to make AI accessible, understandable, and actionable for companies of all sizes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaLightbulb className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where AI enhances human potential, driving innovation and efficiency across all industries.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaUsers className="text-4xl text-green-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
            <p className="text-gray-600">
              Our diverse team of experts combines deep technical knowledge with industry experience to deliver cutting-edge AI solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaRocket className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Approach</h2>
            <p className="text-gray-600">
              We believe in a collaborative, iterative approach that puts our clients' needs at the center of everything we do.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you're a startup looking to leverage AI or an enterprise seeking to optimize your processes, we're here to guide you every step of the way.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get Started with Modi AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
