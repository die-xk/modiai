import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Success with ModiAI',
    description: 'Achieving a 6-figure valuation and first clients in just 30 days through AI insights.',
    image: 'https://siteimages.simplified.com/blog/ai-bootcamp.png',
    link: 'https://simplified.com/blog/us/casestudy-ai-bootcamp'
  },
  {
    id: 2,
    title: 'Modi AI: The Cash-Printing Machine',
    description: 'Modi AI delivers a personalised, revenue roadmap with AI within 24 hours, attracting significant investment interest.',
    image: 'https://www.boltchatai.com/wp-content/uploads/2024/06/AI-Bootcamp-with-BoltChatAI-1536x852.png',
    link: 'https://www.boltchatai.com/empowering-the-next-generation-of-ai-entrepreneurs/'
  },
  {
    id: 3,
    title: 'Empowering Youth with AI',
    description: 'Achieved 1,000+ unique views, 3,500+ impressions, and 8,000% growth, creating 3+ business opportunities weekly.',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1367862/56735_965341.png',
    link: 'https://www.blackcube.digital/blog/ai-empowering-youth-bootcamp'
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
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
