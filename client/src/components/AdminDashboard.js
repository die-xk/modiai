import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [caseStudyTitle, setCaseStudyTitle] = useState('');
  const [caseStudyContent, setCaseStudyContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isAdminLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    console.log('Blog submitted:', { title: blogTitle, content: blogContent });
    setBlogTitle('');
    setBlogContent('');
  };

  const handleCaseStudySubmit = (e) => {
    e.preventDefault();
    console.log('Case study submitted:', { title: caseStudyTitle, content: caseStudyContent });
    setCaseStudyTitle('');
    setCaseStudyContent('');
  };

  const handleSignOut = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Post a Blog</h2>
        <form onSubmit={handleBlogSubmit}>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            placeholder="Blog Title"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            placeholder="Blog Content"
            className="w-full p-2 mb-4 border rounded"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Post Blog
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Post a Case Study</h2>
        <form onSubmit={handleCaseStudySubmit}>
          <input
            type="text"
            value={caseStudyTitle}
            onChange={(e) => setCaseStudyTitle(e.target.value)}
            placeholder="Case Study Title"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            value={caseStudyContent}
            onChange={(e) => setCaseStudyContent(e.target.value)}
            placeholder="Case Study Content"
            className="w-full p-2 mb-4 border rounded"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Post Case Study
          </button>
        </form>
      </div>

      <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
        Sign Out
      </button>
    </div>
  );
};

export default AdminDashboard;
