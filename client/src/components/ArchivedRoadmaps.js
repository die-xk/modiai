import React, { useState } from 'react';
import { FaSearch, FaEye, FaDownload, FaArchive } from 'react-icons/fa';

const ArchivedRoadmapCard = ({ roadmap }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{roadmap.title}</h3>
      <p className="text-gray-600 mb-4">{roadmap.description}</p>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Start: {roadmap.startDate}</span>
        <span>End: {roadmap.endDate}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded text-sm ${
          roadmap.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {roadmap.status}
        </span>
        <div className="space-x-2">
          <button className="text-blue-500 hover:text-blue-700" title="View">
            <FaEye />
          </button>
          <button className="text-green-500 hover:text-green-700" title="Download">
            <FaDownload />
          </button>
          <button className="text-red-500 hover:text-red-700" title="Unarchive">
            <FaArchive />
          </button>
        </div>
      </div>
    </div>
  );
};

const ArchivedRoadmaps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Sample data for archived roadmaps
  const archivedRoadmaps = [
    {
      id: 1,
      title: "Q4 2022 Growth Initiative",
      description: "Focus on expanding product line and entering new markets",
      startDate: "2022-10-01",
      endDate: "2022-12-31",
      status: "Completed"
    },
    {
      id: 2,
      title: "Customer Retention Program",
      description: "Implement strategies to improve customer loyalty and reduce churn",
      startDate: "2022-07-01",
      endDate: "2022-12-31",
      status: "Completed"
    },
    {
      id: 3,
      title: "New Product Launch: XYZ",
      description: "Development and launch of our new product XYZ",
      startDate: "2022-01-15",
      endDate: "2022-09-30",
      status: "Cancelled"
    },
    // Add more sample data as needed
  ];

  const filteredRoadmaps = archivedRoadmaps.filter(roadmap => 
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === 'All' || roadmap.status === filterStatus)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Archived Roadmaps</h1>
      
      <div className="mb-6 flex space-x-4">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search archived roadmaps..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoadmaps.map(roadmap => (
          <ArchivedRoadmapCard key={roadmap.id} roadmap={roadmap} />
        ))}
      </div>

      {filteredRoadmaps.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No archived roadmaps found matching your criteria.</p>
      )}
    </div>
  );
};

export default ArchivedRoadmaps;
