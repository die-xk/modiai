import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 flex items-center p-6 sm:p-8 mt-16 sm:mt-0 md:p-12 lg:p-22">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
              Transform Your Business with AI in 3 Simple Steps
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-center lg:text-left">
              Discover how easy AI adoption can be. Get a clear, actionable roadmap tailored to your business in just 3 steps.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-xl" />
                <span>Personalize by industry and goals.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-xl" />
                <span>Step-by-step AI guidance.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-xl" />
                <span>Automate and boost efficiency.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-xl" />
                <span>Cut costs, grow revenue.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-xl" />
                <span>Receive your AI roadmap in 24 hours.</span>
              </li>
            </ul>
            <div className="space-x-4 flex justify-center lg:justify-start">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-gray-400 rounded-lg shadow transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img 
              src="/Sarari - Dark.png" 
              alt="Product showcase" 
              className="rounded-lg shadow-xl mx-auto lg:mx-0 w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
