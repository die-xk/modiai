import React from 'react';
import { FaArrowUp, FaArrowDown, FaTrophy, FaChartLine, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const KPICard = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {React.cloneElement(icon, { className: "text-3xl text-blue-500" })}
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
        {Math.abs(change)}%
      </p>
    </div>
  );
};

const AchievementCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <FaTrophy className="text-3xl text-yellow-500 mr-3" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PerformanceHighlights = () => {
  const kpis = [
    { title: 'Total Revenue', value: '$1.2M', change: 15, icon: <FaMoneyBillWave /> },
    { title: 'New Customers', value: '1,234', change: 8, icon: <FaUsers /> },
    { title: 'Customer Retention', value: '95%', change: 2, icon: <FaUsers /> },
    { title: 'Average Deal Size', value: '$10,500', change: -3, icon: <FaMoneyBillWave /> },
  ];

  const achievements = [
    { title: 'Market Expansion', description: 'Successfully entered 3 new international markets' },
    { title: 'Product Launch', description: 'Launched our AI-powered analytics tool with 98% positive feedback' },
    { title: 'Customer Milestone', description: 'Reached 10,000 active customers worldwide' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Performance Highlights</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Key Performance Indicators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Performance Trend</h2>
        <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
          {/* Placeholder for a chart or graph */}
          <FaChartLine className="text-6xl text-blue-500" />
          <p className="ml-4 text-gray-600">Insert your performance trend chart here</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceHighlights;
