import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'Boosting Efficiency at TechCorp',
    description: 'How our solution increased productivity by 40% for a leading tech company.',
    image: '/case-study-1.jpg',
    link: '/case-study/tech-corp'
  },
  {
    id: 2,
    title: 'Streamlining Operations for RetailGiant',
    description: 'Reducing operational costs by 25% for a major retail chain.',
    image: '/case-study-2.jpg',
    link: '/case-study/retail-giant'
  },
  {
    id: 3,
    title: 'Transforming Customer Service at ServicePro',
    description: 'Improving customer satisfaction scores by 60% for a service industry leader.',
    image: '/case-study-3.jpg',
    link: '/case-study/service-pro'
  }
];

const CaseStudies = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link 
                  to={study.link}
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
