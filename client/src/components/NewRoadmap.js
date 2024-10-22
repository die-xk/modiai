import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRoadmap = () => {
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    objectives: [''],
    keyMilestones: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoadmap(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const newArray = [...roadmap[field]];
    newArray[index] = e.target.value;
    setRoadmap(prevState => ({
      ...prevState,
      [field]: newArray
    }));
  };

  const addArrayItem = (field) => {
    setRoadmap(prevState => ({
      ...prevState,
      [field]: [...prevState[field], '']
    }));
  };

  const removeArrayItem = (index, field) => {
    const newArray = roadmap[field].filter((_, i) => i !== index);
    setRoadmap(prevState => ({
      ...prevState,
      [field]: newArray
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log('Submitting new roadmap:', roadmap);
    // After successful submission, navigate back to the current roadmaps page
    navigate('/app/roadmaps/current');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Roadmap</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={roadmap.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={roadmap.description}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={roadmap.startDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={roadmap.endDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Objectives</label>
          {roadmap.objectives.map((objective, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={objective}
                onChange={(e) => handleArrayChange(e, index, 'objectives')}
                className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'objectives')}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('objectives')}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Objective
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Key Milestones</label>
          {roadmap.keyMilestones.map((milestone, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={milestone}
                onChange={(e) => handleArrayChange(e, index, 'keyMilestones')}
                className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'keyMilestones')}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('keyMilestones')}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Milestone
          </button>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Roadmap
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRoadmap;
