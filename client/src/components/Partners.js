import React from 'react';

const Partners = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Trusted Partners
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We collaborate with industry leaders to deliver the best solutions
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Replace the src attributes with your actual logo images */}
          <div className="col-span-1 flex justify-center items-center">
            <img className="h-12" src="/IBM.jpg" alt="Partner 1" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img className="h-12" src="/Simplified.jpeg" alt="Partner 2" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img className="h-12" src="/BlackCube.jpeg" alt="Partner 3" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img className="h-12" src="/logo-modified.png" alt="Partner 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
