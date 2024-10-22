import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaSave } from 'react-icons/fa';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Inc.',
    role: 'Product Manager'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log('Updated user data:', user);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-montserrat font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-montserrat text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              <FaUser className="inline mr-2" />
              Name
            </label>
            <input
              className="font-lato shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block font-montserrat text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              <FaEnvelope className="inline mr-2" />
              Email
            </label>
            <input
              className="font-lato shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block font-montserrat text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              <FaPhone className="inline mr-2" />
              Phone
            </label>
            <input
              className="font-lato shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block font-montserrat text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              <FaBuilding className="inline mr-2" />
              Company
            </label>
            <input
              className="font-lato shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="text"
              name="company"
              value={user.company}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="mb-6">
            <label className="block font-montserrat text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              <FaUser className="inline mr-2" />
              Role
            </label>
            <input
              className="font-lato shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              name="role"
              value={user.role}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex items-center justify-between">
            {isEditing ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <FaSave className="inline mr-2" />
                Save Changes
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
