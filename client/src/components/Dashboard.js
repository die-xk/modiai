import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { FaUser, FaSignOutAlt, FaUserCircle, FaCreditCard, FaRocket, FaChartLine, FaSmile, FaCog, FaTimes, FaStore, FaChartBar, FaHospital, FaIndustry, FaLaptopCode, FaGraduationCap, FaHome, FaHotel, FaTruck, FaSatelliteDish, FaBolt, FaEllipsisH, FaBullhorn, FaHandshake, FaCogs, FaUsers, FaHeadset, FaBox, FaTruckLoading, FaDatabase, FaBalanceScale, FaChessKing, FaPiggyBank, FaLightbulb, FaShieldAlt, FaUserClock, FaWarehouse, FaQuestionCircle, FaUserFriends, FaDollarSign, FaListOl, FaStar, FaCheck, FaClock, FaDownload } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";

const UserDropdown = ({ onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownItems = [
    { icon: FaUserCircle, title: 'User Profile', subtitle: 'View and edit your profile', action: () => console.log('User Profile clicked') },
    { icon: FaCreditCard, title: 'Billing', subtitle: 'Manage your billing information', action: () => console.log('Billing clicked') },
    { icon: FaSignOutAlt, title: 'Log out', subtitle: 'Sign out of your account', action: onSignOut },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="user-menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <FaUser className="h-8 w-8 rounded-full" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-start"
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              <div className="text-left">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DashboardNavbar = ({ activeTab, setActiveTab, onSignOut }) => {
  const tabs = ['Dashboard', 'Projects', 'Tasks'];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Company Name</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <UserDropdown onSignOut={onSignOut} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const StepModal = ({ isOpen, onClose, title, purpose, children, currentStep, totalSteps, onNext }) => {
  if (!isOpen) return null;

  const isLastStep = currentStep === totalSteps;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-600 mt-1">{purpose}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={onNext}>
          {children}
          <div className="flex justify-between items-center mt-6">
            <div className="text-gray-500">Step {currentStep} of {totalSteps}</div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const IndustrySelection = ({ selectedIndustry, setSelectedIndustry, otherIndustry, setOtherIndustry }) => {
  const industries = [
    { name: 'Retail', icon: FaStore, description: 'Selling goods directly to consumers' },
    { name: 'Finance', icon: FaChartBar, description: 'Managing money and investments' },
    { name: 'Healthcare', icon: FaHospital, description: 'Providing medical services and care' },
    { name: 'Manufacturing', icon: FaIndustry, description: 'Producing goods from raw materials' },
    { name: 'Technology', icon: FaLaptopCode, description: 'Developing and applying technologies' },
    { name: 'Education', icon: FaGraduationCap, description: 'Facilitating learning and development' },
    { name: 'Real Estate', icon: FaHome, description: 'Dealing with property and land' },
    { name: 'Hospitality', icon: FaHotel, description: 'Providing accommodation and entertainment' },
    { name: 'Transportation & Logistics', icon: FaTruck, description: 'Moving goods and people' },
    { name: 'Telecommunications', icon: FaSatelliteDish, description: 'Transmitting information over distances' },
    { name: 'Energy & Utilities', icon: FaBolt, description: 'Providing power and essential services' },
    { name: 'Others', icon: FaEllipsisH, description: 'Specify your unique industry' }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {industries.map((industry) => (
          <button
            key={industry.name}
            type="button"
            onClick={() => setSelectedIndustry(industry.name)}
            className={`flex items-start p-4 border rounded-lg ${
              selectedIndustry === industry.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <industry.icon className="text-2xl mr-3 mt-1 text-blue-500" />
            <div className="text-left">
              <h3 className="font-semibold">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          </button>
        ))}
      </div>
      {selectedIndustry === 'Others' && (
        <input
          type="text"
          value={otherIndustry}
          onChange={(e) => setOtherIndustry(e.target.value)}
          placeholder="Please specify your industry"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
      )}
    </div>
  );
};

const DepartmentFocus = ({ selectedDepartments, setSelectedDepartments }) => {
  const departments = [
    { name: 'Marketing', icon: FaBullhorn, description: 'Promote products and services' },
    { name: 'Sales', icon: FaHandshake, description: 'Generate revenue through customer acquisition' },
    { name: 'Operations', icon: FaCogs, description: 'Manage day-to-day business activities' },
    { name: 'Human Resources', icon: FaUsers, description: 'Manage employee relations and development' },
    { name: 'Finance/Accounting', icon: FaChartBar, description: 'Manage financial resources and reporting' },
    { name: 'Customer Support', icon: FaHeadset, description: 'Assist customers with inquiries and issues' },
    { name: 'Product Development', icon: FaBox, description: 'Create and improve products or services' },
    { name: 'Supply Chain Management', icon: FaTruckLoading, description: 'Oversee product flow from supplier to customer' },
    { name: 'IT and Data Analytics', icon: FaDatabase, description: 'Manage technology infrastructure and data insights' },
    { name: 'Legal and Compliance', icon: FaBalanceScale, description: 'Ensure adherence to laws and regulations' },
    { name: 'General Management/Executive', icon: FaChessKing, description: 'Provide overall strategic direction' }
  ];

  const toggleDepartment = (department) => {
    setSelectedDepartments(prev => 
      prev.includes(department)
        ? prev.filter(d => d !== department)
        : [...prev, department]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {departments.map((dept) => (
        <button
          key={dept.name}
          type="button"
          onClick={() => toggleDepartment(dept.name)}
          className={`flex flex-col items-start p-4 border rounded-lg ${
            selectedDepartments.includes(dept.name) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-center mb-2">
            <dept.icon className="text-2xl mr-3 text-blue-500" />
            <span className="font-semibold">{dept.name}</span>
          </div>
          <p className="text-sm text-gray-600">{dept.description}</p>
        </button>
      ))}
    </div>
  );
};

const BusinessGoals = ({ selectedGoals, setSelectedGoals }) => {
  const goals = [
    { name: 'Increase Efficiency', icon: FaCog, description: 'Automation, streamlined workflows' },
    { name: 'Improve Customer Experience', icon: FaSmile, description: 'Enhanced service, responsiveness' },
    { name: 'Cost Reduction', icon: FaPiggyBank, description: 'Minimizing overhead through automation' },
    { name: 'Revenue Growth', icon: FaChartLine, description: 'Better sales strategies, customer engagement' },
    { name: 'Increase Innovation', icon: FaLightbulb, description: 'AI-driven product development or new services' },
    { name: 'Risk Management and Compliance', icon: FaShieldAlt, description: 'AI for detecting risks, ensuring regulatory compliance' },
    { name: 'Employee Productivity', icon: FaUserClock, description: 'Using AI to augment employee output and effectiveness' }
  ];

  const toggleGoal = (goal) => {
    setSelectedGoals(prev => 
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {goals.map((goal) => (
        <button
          key={goal.name}
          type="button"
          onClick={() => toggleGoal(goal.name)}
          className={`flex flex-col items-start p-4 border rounded-lg ${
            selectedGoals.includes(goal.name) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-center mb-2">
            <goal.icon className="text-2xl mr-3 text-blue-500" />
            <span className="font-semibold">{goal.name}</span>
          </div>
          <p className="text-sm text-gray-600">{goal.description}</p>
        </button>
      ))}
    </div>
  );
};

const CompanySize = ({ selectedSize, setSelectedSize }) => {
  const sizes = [
    { name: 'Startup', icon: FaRocket, description: '1-50 employees' },
    { name: 'Small Business', icon: FaStore, description: '51-200 employees' },
    { name: 'Medium Business', icon: FaUserFriends, description: '201-1,000 employees' },
    { name: 'Large Enterprise', icon: FaIndustry, description: '1,001-5,000 employees' },
    { name: 'Enterprise', icon: FaWarehouse, description: '5,000+ employees' },
    { name: 'Not Sure', icon: FaQuestionCircle, description: 'Optional' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sizes.map((size) => (
        <button
          key={size.name}
          type="button"
          onClick={() => setSelectedSize(size.name)}
          className={`flex flex-col items-start p-4 border rounded-lg ${
            selectedSize === size.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-center mb-2">
            <size.icon className="text-2xl mr-3 text-blue-500" />
            <span className="font-semibold">{size.name}</span>
          </div>
          <p className="text-sm text-gray-600">{size.description}</p>
        </button>
      ))}
    </div>
  );
};

const CountryOfOperation = ({ selectedCountry, setSelectedCountry, otherCountry, setOtherCountry }) => {
  const countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Germany', code: 'DE' },
    { name: 'France', code: 'FR' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'Middle East Region', code: 'AE' }, // Using UAE flag for Middle East
    { name: 'Others', code: 'OTHERS' }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <button
            key={country.code}
            type="button"
            onClick={() => setSelectedCountry(country.name)}
            className={`flex items-center p-4 border rounded-lg ${
              selectedCountry === country.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {country.code !== 'OTHERS' && (
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title={country.name}
              />
            )}
            <span className="ml-3">{country.name}</span>
          </button>
        ))}
      </div>
      {selectedCountry === 'Others' && (
        <input
          type="text"
          value={otherCountry}
          onChange={(e) => setOtherCountry(e.target.value)}
          placeholder="Please specify your country"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      )}
    </div>
  );
};

const RoadmapInsights = () => {
  const handleDownload = () => {
    // Implement the download functionality here
    console.log("Downloading high-level roadmap...");
    // You might want to call an API endpoint to generate and serve the roadmap PDF
    // or trigger a download of a pre-generated file
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Your AI Roadmap is Being Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <InsightCard 
          icon={<FaRocket className="text-3xl text-blue-500" />}
          title="AI Readiness Score"
          content="Your organization shows a promising 72% AI readiness score."
        />
        <InsightCard 
          icon={<FaChartLine className="text-3xl text-green-500" />}
          title="Potential Impact"
          content="We've identified 5 high-impact areas where AI can boost your efficiency by up to 30%."
        />
        <InsightCard 
          icon={<FaLightbulb className="text-3xl text-yellow-500" />}
          title="Recommended First Steps"
          content="Based on your profile, we suggest starting with data analytics and process automation."
        />
        <InsightCard 
          icon={<FaClock className="text-3xl text-purple-500" />}
          title="Estimated Timeline"
          content="Your personalized AI implementation roadmap spans approximately 18 months."
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto"
        >
          <FaDownload className="mr-2" />
          Download Free High-Level Roadmap
        </button>
      </div>
    </div>
  );
};

const InsightCard = ({ icon, title, content }) => {
  return (
    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const AIInsights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-lg font-semibold">AI Implementation</h3>
        </div>
        <p className="text-gray-600">
          <span className="text-2xl font-bold text-blue-600">73%</span> of companies in your industry have implemented AI solutions.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaDollarSign className="text-green-500 text-2xl mr-2" />
          <h3 className="text-lg font-semibold">Projected Revenue Increase</h3>
        </div>
        <p className="text-gray-600">
          Average <span className="text-2xl font-bold text-green-600">27%</span> increase in revenue reported by companies using AI in your industry.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaListOl className="text-purple-500 text-2xl mr-2" />
          <h3 className="text-lg font-semibold">Actionable Steps</h3>
        </div>
        <p className="text-gray-600">
          We've identified <span className="text-2xl font-bold text-purple-600">5</span> high-impact actionable steps for your AI journey.
        </p>
      </div>
    </div>
  );
};

const AIReadinessModal = ({ isOpen, onClose, onNext }) => {
  const [familiarity, setFamiliarity] = useState(0);
  const [usingAITools, setUsingAITools] = useState(null);
  const [aiAreas, setAIAreas] = useState([]);
  const [otherArea, setOtherArea] = useState('');

  const aiAreaOptions = [
    'Automation (e.g., task handling)',
    'Data Analytics (e.g., insights generation)',
    'Customer Interactions (e.g., chatbots)',
    'Product Innovation (e.g., AI-driven design)',
    'Risk Management',
    'Other'
  ];

  const toggleAIArea = (area) => {
    setAIAreas(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ familiarity, usingAITools, aiAreas, otherArea });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">AI Readiness Assessment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <p className="text-gray-600 mb-8">Purpose: To gauge your familiarity with AI and your current adoption level.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-4">
              1. How familiar are you with AI technologies? (Scale of 1-5)
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFamiliarity(value)}
                  className={`mr-4 focus:outline-none ${
                    familiarity >= value ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <FaStar className="text-4xl" />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-4">
              2. Are you currently using any AI tools in your business?
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setUsingAITools(true)}
                className={`py-2 px-4 rounded ${
                  usingAITools === true
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setUsingAITools(false)}
                className={`py-2 px-4 rounded ${
                  usingAITools === false
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                No
              </button>
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-bold mb-4">
              3. Which areas are you considering AI for? (Choose multiple)
            </label>
            <div className="grid grid-cols-2 gap-4">
              {aiAreaOptions.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleAIArea(area)}
                  className={`flex items-center justify-between p-3 rounded ${
                    aiAreas.includes(area)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <span>{area}</span>
                  {aiAreas.includes(area) && <FaCheck />}
                </button>
              ))}
            </div>
            {aiAreas.includes('Other') && (
              <input
                type="text"
                value={otherArea}
                onChange={(e) => setOtherArea(e.target.value)}
                placeholder="Please specify other area"
                className="mt-4 w-full p-2 border border-gray-300 rounded"
              />
            )}
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-gray-500">Step 6 of 8</div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-lg"
              disabled={familiarity === 0 || usingAITools === null || aiAreas.length === 0}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AIBenefitsCard = () => {
  const benefits = [
    { icon: FaRocket, text: "Increased Efficiency and Productivity", color: "text-blue-500" },
    { icon: FaChartLine, text: "Data-Driven Decision Making", color: "text-green-500" },
    { icon: FaSmile, text: "Enhanced Customer Experience", color: "text-yellow-500" },
    { icon: FaCog, text: "Automation of Repetitive Tasks", color: "text-purple-500" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">AI Benefits for Your Business</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
            <benefit.icon className={`text-2xl ${benefit.color} mr-3 mt-1`} />
            <p className="text-gray-700">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const UpgradeModal = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upgrade to Create Your Personalized Roadmap</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Unlock the full potential of AI for your business with our personalized roadmap.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <FaCheck className="text-green-500 mt-1 mr-2" />
            <span>Detailed AI implementation strategy tailored to your business</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-green-500 mt-1 mr-2" />
            <span>Priority access to AI experts for consultation</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-green-500 mt-1 mr-2" />
            <span>Quarterly review and adjustment of your AI roadmap</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-green-500 mt-1 mr-2" />
            <span>Access to exclusive AI workshops and webinars</span>
          </li>
        </ul>
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">$12,000</span>
          <span className="text-gray-600"> / year</span>
        </div>
        <button
          onClick={onUpgrade}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  const userName = "John"; // Replace with actual user name from your auth system
  const [currentStep, setCurrentStep] = useState(0);
  const [formProgress, setFormProgress] = useState(0);
  const [isFirstFormCompleted, setIsFirstFormCompleted] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [otherIndustry, setOtherIndustry] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [otherCountry, setOtherCountry] = useState('');
  const [isAIReadinessModalOpen, setIsAIReadinessModalOpen] = useState(false);
  const [aiReadinessData, setAIReadinessData] = useState({
    familiarity: 0,
    usingAITools: null,
    aiAreas: [],
    otherArea: ''
  });
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleGetStarted = () => {
    setCurrentStep(1);
    setFormProgress(8); // 8% progress for starting the form
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      // Validate industry selection
      if (selectedIndustry === '' || (selectedIndustry === 'Others' && otherIndustry === '')) {
        alert('Please select an industry or specify your industry if selecting Others.');
        return;
      }
    } else if (currentStep === 2) {
      // Validate department selection
      if (selectedDepartments.length === 0) {
        alert('Please select at least one department.');
        return;
      }
    } else if (currentStep === 3) {
      // Validate business goals selection
      if (selectedGoals.length === 0) {
        alert('Please select at least one business goal.');
        return;
      }
    } else if (currentStep === 4) {
      // Validate company size selection
      if (selectedSize === '') {
        alert('Please select your company size.');
        return;
      }
    } else if (currentStep === 5) {
      // Validate country selection
      if (selectedCountry === '' || (selectedCountry === 'Others' && otherCountry === '')) {
        alert('Please select a country or specify your country if selecting Others.');
        return;
      }
    }

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      setFormProgress((currentStep + 1) * 8); // 8% progress per step
    } else {
      // Form completion logic
      setFormProgress(40);
      handleFormCompletion();
    }
  };

  const handleFormCompletion = () => {
    // Here you can add logic to handle the completed form data
    console.log("Form completed!", {
      selectedIndustry,
      otherIndustry,
      selectedDepartments,
      selectedGoals,
      selectedSize,
      selectedCountry,
      otherCountry
    });
    setIsFirstFormCompleted(true);
    setCurrentStep(0); // Reset the form
  };

  const handleClose = () => {
    setCurrentStep(0);
    // Reset other state if needed
  };

  const handleContinue = () => {
    if (formProgress >= 70) {
      setIsUpgradeModalOpen(true);
    } else {
      setIsAIReadinessModalOpen(true);
    }
  };

  const handleAIReadinessNext = (data) => {
    setAIReadinessData(data);
    setIsAIReadinessModalOpen(false);
    setFormProgress(70); // Update progress to 70%
    // Here you would typically move to the next question or step
    console.log("AI Readiness Data:", data);
  };

  const handleUpgrade = () => {
    // Implement navigation to pricing page
    console.log("Navigating to pricing page...");
    // You might want to use React Router or window.location to navigate
    // For example: history.push('/pricing');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepModal
            isOpen={true}
            onClose={handleClose}
            title="Step 1: Select Your Industry"
            purpose="To tailor the AI use cases and strategies to your specific industry."
            currentStep={1}
            totalSteps={5}
            onNext={handleNext}
          >
            <IndustrySelection
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
              otherIndustry={otherIndustry}
              setOtherIndustry={setOtherIndustry}
            />
          </StepModal>
        );
      case 2:
        return (
          <StepModal
            isOpen={true}
            onClose={handleClose}
            title="Step 2: Department Focus"
            purpose="To provide department-specific AI recommendations and workflows."
            currentStep={2}
            totalSteps={5}
            onNext={handleNext}
          >
            <DepartmentFocus
              selectedDepartments={selectedDepartments}
              setSelectedDepartments={setSelectedDepartments}
            />
          </StepModal>
        );
      case 3:
        return (
          <StepModal
            isOpen={true}
            onClose={handleClose}
            title="Step 3: Define Business Goals"
            purpose="To identify the key areas where AI can have the most significant impact."
            currentStep={3}
            totalSteps={5}
            onNext={handleNext}
          >
            <BusinessGoals
              selectedGoals={selectedGoals}
              setSelectedGoals={setSelectedGoals}
            />
          </StepModal>
        );
      case 4:
        return (
          <StepModal
            isOpen={true}
            onClose={handleClose}
            title="Step 4: Company Size"
            purpose="To fine-tune AI recommendations based on company size."
            currentStep={4}
            totalSteps={5}
            onNext={handleNext}
          >
            <CompanySize
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </StepModal>
        );
      case 5:
        return (
          <StepModal
            isOpen={true}
            onClose={handleClose}
            title="Step 5: Country of Operation"
            purpose="To ensure compliance with local AI and data regulations, and to offer region-specific recommendations."
            currentStep={5}
            totalSteps={5}
            onNext={handleNext}
          >
            <CountryOfOperation
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              otherCountry={otherCountry}
              setOtherCountry={setOtherCountry}
            />
          </StepModal>
        );
      default:
        return null;
    }
  };

  const renderProgressButtons = () => {
    const buttons = [
      { name: "Company Profile", completed: formProgress >= 40 },
      { name: "AI Readiness", completed: formProgress >= 70 },
      { name: "Timeline & Details", completed: formProgress === 100 }
    ];

    return (
      <div>
        <p className="text-sm text-gray-600 mb-2">
          Complete these forms to generate your personalized AI roadmap:
        </p>
        <div className="flex justify-between">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                button.completed
                  ? "bg-green-500 text-white"
                  : formProgress > 0 && index === 0
                  ? "bg-blue-500 text-white"
                  : formProgress >= 40 && index === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } ${index <= buttons.findIndex(b => !b.completed) ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={() => {
                if (index === 0) setCurrentStep(1);
                if (index === 1 && formProgress >= 40) setIsAIReadinessModalOpen(true);
                // Add logic for the third button when implemented
              }}
              disabled={index > buttons.findIndex(b => !b.completed)}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (formProgress >= 70) {
      return <RoadmapInsights />;
    } else if (isFirstFormCompleted) {
      return <AIInsights />;
    } else {
      return <AIBenefitsCard />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 py-8 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            {formProgress >= 70 
              ? `Great progress, ${userName}! Your AI roadmap is taking shape.`
              : isFirstFormCompleted 
              ? `Great job, ${userName}! Let's continue building your AI roadmap.`
              : `Welcome ${userName}! Let's get started with your AI roadmap.`
            }
          </h1>
          
          <div className="mb-8">
            <button 
              onClick={handleContinue}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              {formProgress >= 70 ? "Create Personalized Roadmap" : "Continue"}
            </button>
          </div>

          {renderContent()}
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-blue-600 rounded-full h-4 transition-all duration-500 ease-in-out" 
                style={{width: `${formProgress}%`}}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2 mb-4">{formProgress}% Complete</p>
            {renderProgressButtons()}
          </div>
        </div>
      </div>
      {renderStep()}
      <AIReadinessModal
        isOpen={isAIReadinessModalOpen}
        onClose={() => setIsAIReadinessModalOpen(false)}
        onNext={handleAIReadinessNext}
      />
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onUpgrade={handleUpgrade}
      />
    </div>
  );
};

const Projects = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Projects</h1>
    <p className="text-gray-600 mb-4">Here you can view and manage your projects.</p>
  </div>
);

const Tasks = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Tasks</h1>
    <p className="text-gray-600 mb-4">Here you can view and manage your tasks.</p>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardHome />;
      case 'Projects':
        return <Projects />;
      case 'Tasks':
        return <Tasks />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={handleSignOut} />
      <div className="flex-grow">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
