import React, { useState } from 'react';
import { FaEllipsisV, FaEdit, FaTrash, FaChartLine } from 'react-icons/fa';

const RoadmapCard = ({ roadmap, onEdit, onDelete, onViewMetrics }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FaEllipsisV />
      </button>
      {showMenu && (
        <div className="absolute top-8 right-2 bg-white border rounded shadow-lg">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={onEdit}>
            <FaEdit className="inline mr-2" /> Edit
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={onDelete}>
            <FaTrash className="inline mr-2" /> Delete
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={onViewMetrics}>
            <FaChartLine className="inline mr-2" /> View Metrics
          </button>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{roadmap.title}</h3>
      <p className="text-gray-600 mb-4">{roadmap.description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Start: {roadmap.startDate}</span>
        <span>End: {roadmap.endDate}</span>
      </div>
      <div className="mt-4">
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 rounded-full h-2"
            style={{ width: `${roadmap.progress}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-600 mt-1">{roadmap.progress}% Complete</div>
      </div>
    </div>
  );
};

const CurrentRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([
    {
      id: 1,
      title: "Q2 2023 Growth Plan",
      description: "Focus on expanding market share in the EMEA region",
      startDate: "2023-04-01",
      endDate: "2023-06-30",
      progress: 35
    },
    {
      id: 2,
      title: "Product Launch: AI Assistant",
      description: "Develop and launch our new AI-powered assistant feature",
      startDate: "2023-03-15",
      endDate: "2023-05-31",
      progress: 60
    },
    {
      id: 3,
      title: "Q3 2023 Expansion Plan",
      description: "Focus on expanding market share in the APAC region",
      startDate: "2023-07-01",
      endDate: "2023-09-30",
      progress: 40
    }
  ]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <h2 className="text-2xl font-semibold mb-2">Current Roadmaps</h2>
      <div className="flex flex-col">
        {roadmaps.map((roadmap) => (
          <RoadmapCard
            key={roadmap.id}
            roadmap={roadmap}
            onEdit={() => console.log(`Edit ${roadmap.title}`)}
            onDelete={() => console.log(`Delete ${roadmap.title}`)}
            onViewMetrics={() => console.log(`View Metrics for ${roadmap.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentRoadmaps;
