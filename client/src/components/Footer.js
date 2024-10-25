import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaRocket, FaCog, FaChartBar, FaBook, FaGraduationCap, FaFolder } from 'react-icons/fa';

const Footer = () => {
  const productOptions = [
    { icon: <FaRocket className="text-xl" />, title: 'AI Implementation', description: 'Start your AI journey', link: '/ai-implementation' },
    { icon: <FaCog className="text-xl" />, title: 'Use Cases', description: 'Explore AI applications', link: '/use-cases' },
  ];

  const resourceOptions = [
    { icon: <FaBook className="text-xl" />, title: 'Blog', description: 'Latest updates and guides' },
    { icon: <FaGraduationCap className="text-xl" />, title: 'Academy', description: 'Learn from experts' },
    { icon: <FaFolder className="text-xl" />, title: 'Case Studies', description: 'Real-world examples' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Modi AI</h3>
            <p className="text-gray-400">Revolutionizing AI for businesses</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/who-we-are" className="text-gray-400 hover:text-white">Who we are</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productOptions.map((option, index) => (
                <li key={index}>
                  <Link to={option.link} className="text-gray-400 hover:text-white flex items-center">
                    <span className="mr-2">{option.icon}</span>
                    {option.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceOptions.map((option, index) => (
                <li key={index}>
                  <Link to="#" className="text-gray-400 hover:text-white flex items-center">
                    <span className="mr-2">{option.icon}</span>
                    {option.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">&copy; 2023 Modi AI. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
