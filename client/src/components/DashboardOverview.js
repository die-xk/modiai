import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const DashboardOverview = () => {
  // Sample data for Gantt chart
  const tasks = [
    {
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 15),
      name: 'Market Research',
      id: 'Task 1',
      type: 'task',
      progress: 100,
      isDisabled: true,
    },
    {
      start: new Date(2023, 0, 16),
      end: new Date(2023, 1, 15),
      name: 'Product Development',
      id: 'Task 2',
      type: 'task',
      progress: 75,
      isDisabled: false,
    },
    // Add more tasks as needed
  ];

  // Sample data for Revenue Projection Graph
  const revenueData = [
    { month: 'Jan', projected: 200000, actual: 180000 },
    { month: 'Feb', projected: 300000, actual: 320000 },
    { month: 'Mar', projected: 400000, actual: 350000 },
    // Add more data points as needed
  ];

  // Sample data for Key Milestones
  const keyMilestones = [
    { id: 1, name: 'Product Launch', status: 'On Track', nextSteps: 'Finalize marketing materials' },
    { id: 2, name: 'Sales Target Q1', status: 'At Risk', nextSteps: 'Increase outreach efforts' },
    { id: 3, name: 'New Market Entry', status: 'Completed', nextSteps: 'Monitor initial performance' },
  ];

  // Sample data for Alerts & Insights
  const alertsAndInsights = [
    { id: 1, type: 'Risk', message: 'Supply chain disruption may affect Q2 deliveries' },
    { id: 2, type: 'Action', message: 'Schedule customer feedback sessions for new feature' },
    { id: 3, type: 'Insight', message: 'Competitor X launching similar product next month' },
  ];

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-4">Q1 Growth Strategy</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="w-2/3 pr-4">
            <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
            <div className="bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 rounded-full h-4"
                style={{ width: '68%' }}
              ></div>
            </div>
          </div>
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-2">Projected Revenue</h2>
            <p className="text-3xl font-bold text-green-600">$850,000</p>
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Visual Timeline</h2>
        <div className="mb-6" style={{ height: '300px' }}>
          <Gantt tasks={tasks} viewMode={ViewMode.Month} />
        </div>

        <h2 className="text-2xl font-bold mb-4">Revenue Projection</h2>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="projected" stroke="#8884d8" name="Projected Revenue" />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" name="Actual Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Milestones and Alerts & Insights section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Key Milestones</h2>
          <ul className="space-y-4">
            {keyMilestones.map((milestone) => (
              <li key={milestone.id} className="border-b pb-2">
                <h3 className="font-semibold">{milestone.name}</h3>
                <p className="text-sm">
                  Status: <span className={`font-medium ${milestone.status === 'At Risk' ? 'text-red-600' : 'text-green-600'}`}>{milestone.status}</span>
                </p>
                <p className="text-sm">Next Steps: {milestone.nextSteps}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Alerts & Insights</h2>
          <ul className="space-y-4">
            {alertsAndInsights.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className={`inline-block w-20 text-sm font-medium px-2 py-1 rounded ${
                  item.type === 'Risk' ? 'bg-red-100 text-red-800' :
                  item.type === 'Action' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {item.type}
                </span>
                <p className="ml-3 text-sm">{item.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
