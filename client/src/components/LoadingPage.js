import React from 'react';
import ReactLoading from 'react-loading';

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ReactLoading type="spinningBubbles" color="#3B82F6" height={100} width={100} />
      <p className="mt-4 text-xl font-semibold text-gray-700">Loading Modi AI...</p>
    </div>
  );
};

export default LoadingPage;
