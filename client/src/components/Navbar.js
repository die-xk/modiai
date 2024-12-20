import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { FaRocket, FaCog, FaChartBar, FaBook, FaGraduationCap, FaFolder } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const productOptions = [
    { 
      icon: <FaRocket className="text-xl text-blue-500" />, 
      title: 'AI Implementation', 
      description: 'Start your AI journey', 
      link: '/ai-implementation' 
    },
    { 
      icon: <FaCog className="text-xl text-blue-500" />, 
      title: 'Use Cases', 
      description: 'Explore AI applications', 
      link: '/use-cases' 
    },
  ];

  const resourceOptions = [
    { 
      icon: <FaBook className="text-xl text-blue-500" />, 
      title: 'Blog', 
      description: 'Latest updates and guides' 
    },
    { 
      icon: <FaGraduationCap className="text-xl text-blue-500" />, 
      title: 'Academy', 
      description: 'Learn from experts' 
    },
    { 
      icon: <FaFolder className="text-xl text-blue-500" />, 
      title: 'Case Studies', 
      description: 'Real-world examples' 
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductDropdown(false);
        setResourcesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const DropdownMenu = ({ options, isOpen, setIsOpen, title, isMobile = false }) => {
    const handleClick = () => {
      if (title === "Product") {
        setResourcesDropdown(false);
      } else if (title === "Resources") {
        setProductDropdown(false);
      }
      setIsOpen(!isOpen);
    };

    return (
      <div className={`${isMobile ? 'w-full' : 'relative group'}`}>
        <button
          className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
            isMobile ? 'hover:bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={handleClick}
        >
          {title}
          <FiChevronDown className={`ml-1 h-4 w-4 transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className={`${isMobile ? 'w-full' : 'absolute left-0 mt-2 w-64'} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
            <div className="py-1" role="menu" aria-orientation="vertical">
              {options.map((option, index) => (
                <Link
                  key={index}
                  to={option.link}
                  className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    setProductDropdown(false);
                    setResourcesDropdown(false);
                    setIsOpen(false);
                  }}
                >
                  <span className="mr-3">{option.icon}</span>
                  <div>
                    <p className="font-medium">{option.title}</p>
                    <p className="text-xs text-gray-500">{option.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Company Name */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              Modi AI
            </Link>
          </div>

          {/* Middle: Navigation Links (hidden on mobile) */}
          <div className="hidden lg:block" ref={dropdownRef}>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/who-we-are" className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Who we are</Link>
              <DropdownMenu options={productOptions} isOpen={productDropdown} setIsOpen={setProductDropdown} title="Product" />
              <Link to="/pricing" className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Pricing</Link>
              <DropdownMenu options={resourceOptions} isOpen={resourcesDropdown} setIsOpen={setResourcesDropdown} title="Resources" />
            </div>
          </div>

          {/* Right: Button (hidden on mobile) */}
          <div className="hidden lg:block">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate('/login')}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-50 bg-gray-800 overflow-y-auto ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="flex flex-col h-full">
          {/* Company name and close button */}
          <div className="flex items-center justify-between py-6 px-4 border-b border-gray-700">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-bold">Modi AI</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex-grow flex flex-col justify-start px-4 py-8 space-y-1 overflow-y-auto">
            <Link to="/who-we-are" className="block px-3 py-2 text-left text-base font-medium hover:bg-gray-700 rounded-md" onClick={() => setIsOpen(false)}>Who we are</Link>
            
            <DropdownMenu options={productOptions} isOpen={productDropdown} setIsOpen={setProductDropdown} title="Product" isMobile={true} />

            <Link to="/pricing" className="block px-3 py-2 text-left text-base font-medium hover:bg-gray-700 rounded-md" onClick={() => setIsOpen(false)}>Pricing</Link>
            
            <DropdownMenu options={resourceOptions} isOpen={resourcesDropdown} setIsOpen={setResourcesDropdown} title="Resources" isMobile={true} />
          </div>

          {/* Login button */}
          <div className="py-6 px-4 border-t border-gray-700">
            <button 
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md text-lg" 
              onClick={() => {
                setIsOpen(false);
                navigate('/login');
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
