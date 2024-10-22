import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              Welcome to Our Amazing Product
            </h1>
            <p className="text-xl mb-6">
              Discover how our solution can transform your business and boost your productivity.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Increase efficiency by 50%</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Reduce costs up to 30%</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Improve customer satisfaction</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Easy integration with existing systems</span>
              </li>
            </ul>
            <div className="space-x-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="md:w-1/2">
            <img 
              src="/Sarari - Dark.png" 
              alt="Product showcase" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
