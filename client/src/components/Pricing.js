import React from 'react';
import { FaCheck, FaStar, FaTimes, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PricingCard = ({ title, price, description, features, cta, isPopular }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transform ${isPopular ? 'scale-105 border-2 border-blue-500' : ''}`}>
      <div className="px-6 py-8">
        {isPopular && (
          <div className="flex justify-center items-center mb-4">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center">
              <FaStar className="mr-1" /> Most Popular
            </span>
          </div>
        )}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold text-blue-600">{price}</span>
          <span className="text-gray-500 text-sm ml-1">Starting from</span>
        </div>
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        <ul className="mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => navigate('/signup')}
          className={`w-full py-2 px-4 rounded-lg transition duration-200 ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          {cta || 'Get Started'}
        </button>
      </div>
    </div>
  );
};

const FeatureRow = ({ feature, basic_plan, pro_plan, enterprise_plan }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50">
    <td className="py-4 px-6 text-left text-lg">{feature}</td>
    <td className="py-4 px-6 text-center">
      {basic_plan === true ? <FaCheck className="text-green-500 mx-auto text-xl" /> : 
       basic_plan === false ? <FaTimes className="text-red-500 mx-auto text-xl" /> : 
       <span className="text-lg">{basic_plan}</span>}
    </td>
    <td className="py-4 px-6 text-center">
      {pro_plan === true ? <FaCheck className="text-green-500 mx-auto text-xl" /> : 
       pro_plan === false ? <FaTimes className="text-red-500 mx-auto text-xl" /> : 
       <span className="text-lg">{pro_plan}</span>}
    </td>
    <td className="py-4 px-6 text-center">
      {enterprise_plan === true ? <FaCheck className="text-green-500 mx-auto text-xl" /> : 
       enterprise_plan === false ? <FaTimes className="text-red-500 mx-auto text-xl" /> : 
       <span className="text-lg">{enterprise_plan}</span>}
    </td>
  </tr>
);

const Pricing = () => {
  const navigate = useNavigate();
  const features_and_benefits = [
    {
      "feature": "Customized AI Implementation Roadmap",
      "basic_plan": true,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Industry-Specific Insights",
      "basic_plan": true,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Department-Specific AI Strategies",
      "basic_plan": false,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Step-by-Step Integration Tips",
      "basic_plan": true,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "AI Use Cases for ROI",
      "basic_plan": false,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Competitor and Market Analysis",
      "basic_plan": false,
      "pro_plan": false,
      "enterprise_plan": true
    },
    {
      "feature": "Long-Term Scalability Roadmap",
      "basic_plan": false,
      "pro_plan": false,
      "enterprise_plan": true
    },
    {
      "feature": "1-Hour Consultation with AI Expert",
      "basic_plan": false,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "3-Hour Strategy Planning Session",
      "basic_plan": false,
      "pro_plan": false,
      "enterprise_plan": true
    },
    {
      "feature": "Resource Recommendations",
      "basic_plan": true,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Expanded Resource Library",
      "basic_plan": false,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Email Support (Post-Delivery)",
      "basic_plan": "30 Days",
      "pro_plan": "60 Days",
      "enterprise_plan": "90 Days"
    },
    {
      "feature": "Priority Support",
      "basic_plan": false,
      "pro_plan": true,
      "enterprise_plan": true
    },
    {
      "feature": "Premium Access to Future Updates",
      "basic_plan": false,
      "pro_plan": false,
      "enterprise_plan": true
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">ModiAI AI Implementation Roadmap</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Tailored AI solutions for businesses of all sizes. Select the plan that fits your company's needs and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <PricingCard
            title="Basic Plan"
            price="$1,999"
            description="Best for small businesses or startups seeking a clear and actionable AI roadmap to improve efficiency and decision-making."
            features={[
              "Customized AI Implementation Roadmap",
              "Industry-specific insights and strategies",
              "Step-by-step AI integration tips",
              "Access to resource recommendations",
              "30 days of email support post-delivery"
            ]}
            cta="Start with Basic"
          />

          <PricingCard
            title="Pro Plan"
            price="$10,000"
            description="Perfect for mid-sized businesses looking to leverage AI across multiple departments to drive growth and efficiency."
            features={[
              "Everything in the Basic Plan",
              "Department-specific AI strategies",
              "Advanced AI use cases tailored for higher ROI",
              "Expanded resource library for integration",
              "1-hour virtual consultation with an AI expert",
              "60 days of priority email support"
            ]}
            cta="Go Pro"
            isPopular={true}
          />

          <PricingCard
            title="Enterprise Plan"
            price="$50,000"
            description="Tailored for large enterprises seeking a comprehensive AI strategy to transform operations and maintain a competitive edge."
            features={[
              "Everything in the Pro Plan",
              "Comprehensive AI strategies for enterprise-wide implementation",
              "Long-term AI scalability planning",
              "Competitor analysis and market positioning with AI",
              "3-hour planning session with senior AI consultants",
              "90 days of ongoing support post-delivery",
              "Premium access to future updates and AI resources"
            ]}
            cta="Contact Sales"
          />
        </div>

        {/* Features and Benefits Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-4">Features and Benefits</h2>
          <p className="text-2xl text-center text-gray-600 mb-12">
            Compare our plans to find the perfect fit for your business
          </p>
          <div className="overflow-x-auto shadow-2xl rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-xl font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-xl font-semibold">Basic Plan</th>
                  <th className="py-4 px-6 text-center text-xl font-semibold">Pro Plan</th>
                  <th className="py-4 px-6 text-center text-xl font-semibold">Enterprise Plan</th>
                </tr>
              </thead>
              <tbody>
                {features_and_benefits.map((item, index) => (
                  <FeatureRow key={index} {...item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-600 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started today and receive your personalized AI implementation roadmap.
          </p>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-xl hover:bg-blue-100 transition duration-300 flex items-center justify-center mx-auto"
          >
            Get Started Now
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg">
          Prices exclude VAT. Custom solutions available upon request for businesses with unique needs.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
