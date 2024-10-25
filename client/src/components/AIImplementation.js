import React from 'react';
import { FaIndustry, FaBullseye, FaRobot, FaLanguage, FaRegClock, FaUserCheck, FaChartLine, FaSyncAlt, FaHeadset } from 'react-icons/fa';
import ComparisonTable from './ComparisonTable';

const AIImplementation = () => {
  const implementationSteps = [
    { step: "Sign Up", time: "5 minutes" },
    { step: "Fill Out Form", time: "10 minutes" },
    { step: "Receive AI Roadmap", time: "24 hours" },
    { step: "Implement Key Steps", time: "3 days" },
    { step: "Begin Measuring Impact", time: "1 week" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Personalized AI Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Personalized AI Solutions for Every Industry</h1>
          
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
            We understand that no two businesses are alike. ModiAI provides a personalized AI roadmap, designed to fit the needs of your industry and align with your business goals. Our onboarding process gathers information about your sector, department focus, and operational priorities. Then, we use this input to develop an AI strategy that's specific to your business, offering solutions that drive efficiency, reduce costs, and improve customer experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaIndustry className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h2 className="text-2xl font-semibold mb-4 text-center">Industry-Specific Use Cases</h2>
              <p className="text-gray-600 text-center">
                Focus on industry-specific use cases for meaningful impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaBullseye className="text-4xl text-green-500 mb-4 mx-auto" />
              <h2 className="text-2xl font-semibold mb-4 text-center">Tailored Insights</h2>
              <p className="text-gray-600 text-center">
                Tailored insights that align with your unique business objectives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaRobot className="text-4xl text-purple-500 mb-4 mx-auto" />
              <h2 className="text-2xl font-semibold mb-4 text-center">Step-by-Step Guidance</h2>
              <p className="text-gray-600 text-center">
                Step-by-step guidance designed for non-technical users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Success Rates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">AI Implementation Timeline</h2>
          <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-3 px-4 text-left text-lg font-semibold">Step</th>
                  <th className="py-3 px-4 text-left text-lg font-semibold">Average Time to Complete</th>
                </tr>
              </thead>
              <tbody>
                {implementationSteps.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-4 border-b">{item.step}</td>
                    <td className="py-4 px-4 border-b font-medium text-blue-600">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-4 text-gray-600 italic">
            *Actual times may vary based on business complexity and scale
          </p>
        </div>
      </section>
      
      {/* Simplified Implementation Roadmap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Simplified Implementation Roadmap</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
            Our AI roadmap is a step-by-step guide that removes the guesswork from AI adoption. Instead of overwhelming you with data or technical jargon, we provide clear instructions on how to implement AI across your operations. Each roadmap is tailored to the unique challenges of your industry, with easy-to-follow steps that anyone in your organization can execute.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaLanguage className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">Actionable Insights</h3>
              <p className="text-gray-600 text-center">
                Actionable insights in plain language.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaRegClock className="text-4xl text-teal-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">Clear Timelines</h3>
              <p className="text-gray-600 text-center">
                Clear timelines and milestones for easy tracking.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaUserCheck className="text-4xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">No Technical Knowledge</h3>
              <p className="text-gray-600 text-center">
                No technical knowledge needed to start making an impact.
              </p>
            </div>
          </div>
          
          {/* Placeholder for roadmap image */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">Implementation Roadmap</h3>
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Roadmap image coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Results and Continuous Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Measurable Results and Continuous Support</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
            ModiAI empowers you to track and measure the success of your AI initiatives. Each roadmap includes metrics to monitor improvements in efficiency, cost reduction, and customer satisfaction. With our roadmap, you're not only guided through the initial implementation but also supported in evaluating results, so you can see the real impact AI is having on your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">Built-in KPIs</h3>
              <p className="text-gray-600 text-center">
                Built-in KPIs to measure AI effectiveness.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaSyncAlt className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">Continuous Optimization</h3>
              <p className="text-gray-600 text-center">
                Guidelines for continuous optimization to improve results.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <FaHeadset className="text-4xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">Ongoing Support</h3>
              <p className="text-gray-600 text-center">
                Ongoing support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <ComparisonTable />

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Let us create a personalized AI roadmap for your business.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get Your Personalized AI Roadmap
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIImplementation;
