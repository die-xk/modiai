import React, { useState } from 'react';
import { FaUserPlus, FaLock, FaRocket, FaIndustry, FaBullseye, FaMapMarkerAlt, FaClipboardCheck, FaChartLine, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: 'Step 1: Sign Up',
      description: 'Create your account in just a few clicks. No credit card required to get started.',
      details: (
        <div>
          <ul className="mb-4 space-y-4">
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaRocket className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>No commitment required. Explore how AI can transform your business with a free, personalized roadmap.</span>
            </li>
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaUserPlus className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Quick sign-up to access your AI roadmap.</span>
            </li>
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaLock className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Secure and easy setup.</span>
            </li>
          </ul>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            onClick={() => navigate('/login')}
          >
            Get Started
          </button>
        </div>
      )
    },
    {
      id: 2,
      title: 'Step 2: Set Up Your Project',
      description: 'Provide your details to get tailored insights. This helps us understand your business needs.',
      details: (
        <div>
          <ul className="mb-4 space-y-4">
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaIndustry className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Select your industry and business goals.</span>
            </li>
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaBullseye className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Add optional details like company size and location.</span>
            </li>
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaMapMarkerAlt className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Image Suggestion: A form with dropdowns for industry, goals, and company info.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: 'Step 3: Start Working',
      description: 'Your custom roadmap arrives shortly. Start using AI to enhance efficiency and drive growth.',
      details: (
        <div>
          <ul className="mb-4 space-y-4">
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaClipboardCheck className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Receive your custom AI implementation steps.</span>
            </li>
            <li className="flex items-start bg-gray-100 p-3 rounded-lg shadow-sm">
              <FaChartLine className="text-blue-500 mr-3 text-xl flex-shrink-0 mt-1" />
              <span>Start using AI to drive efficiency and growth.</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Left side: Steps */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`cursor-pointer p-4 mb-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-md flex items-center justify-between ${
                  activeStep === step.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm mt-1">{step.description}</p>
                </div>
                <FaChevronRight className={`ml-2 transition-transform duration-200 ${activeStep === step.id ? 'rotate-90' : ''}`} />
              </div>
            ))}
          </div>
          
          {/* Right side: Step details */}
          <div className="md:w-2/3 md:ml-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {steps.find((step) => step.id === activeStep)?.title}
              </h3>
              <div className="text-gray-600">
                {steps.find((step) => step.id === activeStep)?.details}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
