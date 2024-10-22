import React from 'react';
import { FaBullhorn, FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaUserCircle } from 'react-icons/fa';

const UpdateCard = ({ type, title, description, date, author }) => {
  const getIcon = () => {
    switch (type) {
      case 'announcement':
        return <FaBullhorn className="text-blue-500" />;
      case 'milestone':
        return <FaCheckCircle className="text-green-500" />;
      case 'alert':
        return <FaExclamationTriangle className="text-yellow-500" />;
      default:
        return <FaInfoCircle className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-2">
        <div className="text-2xl mr-3">{getIcon()}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span className="flex items-center">
          <FaUserCircle className="mr-1" /> {author}
        </span>
      </div>
    </div>
  );
};

const RecentUpdates = () => {
  const updates = [
    {
      type: 'announcement',
      title: 'New Feature Launch',
      description: "We're excited to announce the launch of our new AI-powered analytics dashboard. This feature will provide deeper insights into your revenue streams.",
      date: '2023-06-15',
      author: 'Product Team'
    },
    {
      type: 'milestone',
      title: 'Q2 Sales Target Achieved',
      description: "We've successfully reached our Q2 sales target, surpassing it by 15%. Great job to all teams involved!",
      date: '2023-06-30',
      author: 'Sales Department'
    },
    {
      type: 'alert',
      title: 'System Maintenance',
      description: 'Our systems will undergo maintenance on July 5th from 2 AM to 4 AM UTC. Some services may be temporarily unavailable during this time.',
      date: '2023-07-01',
      author: 'IT Department'
    },
    {
      type: 'info',
      title: 'New Market Research Available',
      description: 'The latest market research report for Q2 2023 is now available in the Insights section. This report includes new competitor analysis and market trends.',
      date: '2023-07-02',
      author: 'Research Team'
    },
    {
      type: 'milestone',
      title: 'Customer Satisfaction Milestone',
      description: 'Our latest customer satisfaction survey shows a 95% satisfaction rate, a 5% increase from last quarter!',
      date: '2023-07-05',
      author: 'Customer Success Team'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Recent Updates</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search updates..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {updates.map((update, index) => (
          <UpdateCard key={index} {...update} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Load More Updates
        </button>
      </div>
    </div>
  );
};

export default RecentUpdates;
