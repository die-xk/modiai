import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { 
  FaChartLine, FaRoad, FaChartBar, FaMoneyBillWave, FaLightbulb, FaUser,
  FaProjectDiagram, FaTrophy, FaBell, FaList, FaPlusCircle, FaArchive,
  FaUsers, FaChartPie, FaFileInvoiceDollar, FaPercentage,
  FaClipboardCheck, FaExclamationTriangle, FaCog, FaCreditCard
} from 'react-icons/fa';
import DashboardOverview from './DashboardOverview';
import CurrentRoadmaps from './CurrentRoadmaps';
import NewRoadmap from './NewRoadmap';
import PerformanceHighlights from './PerformanceHighlights';
import RecentUpdates from './RecentUpdates';
import ArchivedRoadmaps from './ArchivedRoadmaps';
import UserProfile from './UserProfile';  // Import the new UserProfile component
import Billing from './Billing';  // Import the new Billing component

const SidebarItem = ({ icon, title, children, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <button
        className="flex items-center w-full text-left p-2 hover:bg-gray-700"
        onClick={toggleOpen}
      >
        {icon}
        <span className="ml-2">{title}</span>
      </button>
      {isOpen && (
        <div className="ml-4">
          {children}
        </div>
      )}
    </div>
  );
};

const SidebarLink = ({ to, icon, title }) => (
  <Link to={to} className="flex items-center p-2 hover:bg-gray-700">
    {icon}
    <span className="ml-2">{title}</span>
  </Link>
);

const Sidebar = () => {
  const [openItem, setOpenItem] = useState(null);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenItem(null);
  }, [location]);

  const sidebarItems = [
    {
      icon: <FaChartLine />,
      title: "Dashboard",
      children: [
        { to: "/app/dashboard/overview", icon: <FaProjectDiagram />, title: "Roadmap Overview" },
        { to: "/app/dashboard/highlights", icon: <FaTrophy />, title: "Performance Highlights" },
        { to: "/app/dashboard/updates", icon: <FaBell />, title: "Recent Updates" },
      ]
    },
    {
      icon: <FaRoad />,
      title: "Revenue Roadmaps",
      children: [
        { to: "/app/roadmaps/current", icon: <FaList />, title: "Current Roadmaps" },
        { to: "/app/roadmaps/new", icon: <FaPlusCircle />, title: "Create New Roadmap" },
        { to: "/app/roadmaps/archived", icon: <FaArchive />, title: "Archived Roadmaps" },
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Market Insights",
      children: [
        { to: "/app/insights/competitive", icon: <FaUsers />, title: "Competitive Landscape" },
        { to: "/app/insights/trends", icon: <FaChartLine />, title: "Market Trends" },
      ]
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Financial Forecast",
      children: [
        { to: "/app/forecast/revenue", icon: <FaChartPie />, title: "Projected Revenue" },
        { to: "/app/forecast/expenses", icon: <FaFileInvoiceDollar />, title: "Expense Breakdown" },
        { to: "/app/forecast/roi", icon: <FaPercentage />, title: "ROI Analysis" },
      ]
    },
    {
      icon: <FaLightbulb />,
      title: "Actionable Insights",
      children: [
        { to: "/app/insights/recommendations", icon: <FaClipboardCheck />, title: "Strategic Recommendations" },
        { to: "/app/insights/risks", icon: <FaExclamationTriangle />, title: "Risk Analysis" },
      ]
    },
    {
      icon: <FaUser />,
      title: "Account & Settings",
      children: [
        { to: "/app/account/profile", icon: <FaUser />, title: "User Profile" },
        { to: "/app/account/plans", icon: <FaCog />, title: "Subscription Plans" },
        { to: "/app/account/billing", icon: <FaCreditCard />, title: "Billing & Invoices" },
      ]
    },
  ];

  return (
    <div ref={sidebarRef} className="bg-gray-800 text-white h-screen p-4 sticky top-0">
      <h2 className="text-2xl font-bold mb-4">App Menu</h2>
      <nav>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            title={item.title}
            isOpen={openItem === index}
            toggleOpen={() => toggleItem(index)}
          >
            {item.children.map((child, childIndex) => (
              <SidebarLink
                key={childIndex}
                to={child.to}
                icon={child.icon}
                title={child.title}
              />
            ))}
          </SidebarItem>
        ))}
      </nav>
    </div>
  );
};

const Dashboard = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to your dashboard!</p>
  </div>
);

const Profile = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Profile</h1>
    <p>This is your profile page.</p>
  </div>
);

const Settings = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <p>Manage your app settings here.</p>
  </div>
);

// Add placeholder components for new routes
const PlaceholderComponent = ({ title }) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p>This is a placeholder for the {title} page.</p>
  </div>
);

const AppLayout = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 bg-gray-100 min-h-screen overflow-y-auto">
        <Routes>
          <Route path="dashboard/overview" element={<DashboardOverview />} />
          <Route path="dashboard/highlights" element={<PerformanceHighlights />} />
          <Route path="dashboard/updates" element={<RecentUpdates />} />
          <Route path="roadmaps/current" element={<CurrentRoadmaps />} />
          <Route path="roadmaps/new" element={<NewRoadmap />} />
          <Route path="roadmaps/archived" element={<ArchivedRoadmaps />} />
          <Route path="insights/*" element={<PlaceholderComponent title="Market Insights" />} />
          <Route path="forecast/*" element={<PlaceholderComponent title="Financial Forecast" />} />
          <Route path="account/profile" element={<UserProfile />} />
          <Route path="account/billing" element={<Billing />} />
          <Route path="account/*" element={<PlaceholderComponent title="Account & Settings" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
