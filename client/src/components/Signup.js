import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft, FaApple, FaArrowLeft } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';

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
      // You might want to update the user's display name here
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      if (provider === 'Google') {
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider);
        navigate('/dashboard');
      } else {
        // Implement other providers as needed
        console.log(`Signup with ${provider} not implemented yet`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        {/* Social Signup Options */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleSocialSignup('Google')}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-200"
          >
            <FaGoogle className="text-xl" />
          </button>
          <button
            onClick={() => handleSocialSignup('Microsoft')}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          >
            <FaMicrosoft className="text-xl" />
          </button>
          <button
            onClick={() => handleSocialSignup('Apple')}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition duration-200"
          >
            <FaApple className="text-xl" />
          </button>
        </div>

        <div className="relative mb-6">
          <hr className="border-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
            or
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
