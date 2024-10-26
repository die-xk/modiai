import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft, FaApple } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, microsoftProvider, appleProvider } from '../firebase';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSocialSignup = async (providerName) => {
    try {
      let provider;
      switch(providerName) {
        case 'Google':
          provider = googleProvider;
          break;
        case 'Microsoft':
          provider = microsoftProvider;
          break;
        case 'Apple':
          provider = appleProvider;
          break;
        default:
          throw new Error('Invalid provider');
      }
      
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const chartData = [
    { benefit: "Cost Reduction", value: 35 },
    { benefit: "Revenue Growth", value: 35 },
    { benefit: "Time Saved", value: 50 }
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left side - Signup form */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Hi, Welcome to Modi!</h1>
          <p className="text-gray-600 mb-8">Join today to get started</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Steve Jobs"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="steve@apple.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="At least 8 characters"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the Terms & Conditions
              </label>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Get Started
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialSignup('Google')}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaGoogle className="h-5 w-5 text-red-500" />
              </button>
              <button
                onClick={() => handleSocialSignup('Microsoft')}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaMicrosoft className="h-5 w-5 text-blue-500" />
              </button>
              <button
                onClick={() => handleSocialSignup('Apple')}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaApple className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Already a member? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign In</Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Feature highlight with chart */}
      <div className="w-full lg:w-1/2 bg-indigo-600 p-8 lg:p-12 flex flex-col justify-center items-center text-white">
        <div className="w-full max-w-lg text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">AI Implementation Benefits</h2>
          <p className="mb-8">Potential improvements after 24 months</p>
          <div className="bg-white rounded-lg p-4 lg:p-6 shadow-lg">
            <ResponsiveContainer width="100%" height={300} className="mt-4">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <XAxis 
                  dataKey="benefit" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4a5568', fontSize: 12 }}
                  angle={0}
                  textAnchor="end"
                  interval={0}
                  height={60}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4a5568', fontSize: 12 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Improvement']}
                  contentStyle={{ backgroundColor: '#f7fafc', border: 'none' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#4c51bf" 
                  barSize={40} 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
