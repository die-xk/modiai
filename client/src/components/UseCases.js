import React from 'react';
import { Link } from 'react-router-dom';

const UseCaseSection = ({ percentage, title, description, reportLink }) => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-3xl font-bold mb-4">
      <span className="text-blue-600">{percentage}%</span> of businesses are using
    </h2>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <Link 
      to={reportLink} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      View Full Report
    </Link>
  </div>
);

const UseCases = () => {
  const useCases = [
    {
      percentage: 63,
      title: "Customer Service AI",
      description: "Businesses are leveraging AI-powered chatbots and virtual assistants to provide 24/7 customer support, reducing response times and improving customer satisfaction.",
      reportLink: "/reports/customer-service-ai"
    },
    {
      percentage: 57,
      title: "Predictive Analytics",
      description: "Companies are using AI to analyze historical data and predict future trends, helping them make data-driven decisions in areas such as inventory management and sales forecasting.",
      reportLink: "/reports/predictive-analytics"
    },
    {
      percentage: 45,
      title: "Process Automation",
      description: "AI is being used to automate repetitive tasks across various departments, from HR to finance, increasing efficiency and reducing human error.",
      reportLink: "/reports/process-automation"
    },
    {
      percentage: 38,
      title: "Personalized Marketing",
      description: "Businesses are utilizing AI to analyze customer data and behavior, creating highly targeted and personalized marketing campaigns that improve conversion rates.",
      reportLink: "/reports/personalized-marketing"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">AI Use Cases Across Industries</h1>
        {useCases.map((useCase, index) => (
          <UseCaseSection key={index} {...useCase} />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
