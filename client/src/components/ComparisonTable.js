import React, { useState } from 'react';
import { FaChartBar, FaCogs, FaSearchDollar, FaShieldAlt, FaSyncAlt, FaCheck, FaTimes } from 'react-icons/fa';

const ComparisonTable = () => {
  const [activeTab, setActiveTab] = useState('Customer Data Analysis');

  const tasks = [
    {
      name: 'Customer Data Analysis',
      icon: <FaChartBar />,
      description: "Analyze customer behavior and preferences to drive business decisions.",
      traditional: [
        'High cost due to specialized software and personnel',
        'Several days to complete, delaying decision-making'
      ],
      modiAI: [
        'Lower cost with automated AI-driven analysis',
        'Results available in hours, enabling quick action'
      ]
    },
    {
      name: 'Task Automation Setup',
      icon: <FaCogs />,
      description: "Set up automated processes to increase efficiency and reduce manual work.",
      traditional: [
        'Custom coding requires extensive development time',
        'Weeks of setup and testing before deployment'
      ],
      modiAI: [
        'Pre-built AI recommendations for quick implementation',
        'Set up in days with minimal coding required'
      ]
    },
    {
      name: 'Market Trend Identification',
      icon: <FaSearchDollar />,
      description: "Identify and analyze market trends to stay ahead of the competition.",
      traditional: [
        'Requires specialists for in-depth market analysis',
        'Time-intensive process of data collection and interpretation'
      ],
      modiAI: [
        'Instant insights with AI-driven analysis of market data',
        'Continuous monitoring and real-time trend updates'
      ]
    },
    {
      name: 'Compliance and Security Checks',
      icon: <FaShieldAlt />,
      description: "Ensure compliance with regulations and maintain robust security measures.",
      traditional: [
        'Manual audits require significant human resources',
        'Days of work to thoroughly check all systems'
      ],
      modiAI: [
        'Automated checks powered by AI algorithms',
        'Comprehensive scans completed in just a few hours'
      ]
    },
    {
      name: 'Process Optimization',
      icon: <FaSyncAlt />,
      description: "Optimize business processes to improve efficiency and reduce costs.",
      traditional: [
        'High consulting costs for expert analysis',
        'Takes weeks to identify and implement improvements'
      ],
      modiAI: [
        'AI-powered suggestions based on data analysis',
        'Results and implementation plans available in days'
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">ModiAI vs Traditional Methods</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-wrap border-b">
            {tasks.map((task) => (
              <button
                key={task.name}
                className={`flex-1 py-4 px-6 text-base font-medium text-center focus:outline-none flex items-center justify-center ${
                  activeTab === task.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(task.name)}
              >
                <span className="mr-2">{task.icon}</span>
                {task.name}
              </button>
            ))}
          </div>
          <div className="p-8">
            {tasks.map((task) => (
              task.name === activeTab && (
                <div key={task.name}>
                  <p className="text-xl text-gray-600 mb-8">{task.description}</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 p-6 rounded-lg shadow">
                      <h3 className="text-2xl font-semibold mb-4 text-red-700">Traditional Method</h3>
                      <ul className="space-y-4">
                        {task.traditional.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow">
                      <h3 className="text-2xl font-semibold mb-4 text-green-700">With ModiAI</h3>
                      <ul className="space-y-4">
                        {task.modiAI.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
