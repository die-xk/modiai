import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Step 1: Sign Up',
    description: 'Create your account in just a few clicks. No credit card required to get started.',
    details: 'Our simple sign-up process takes less than 2 minutes. Youll only need to provide basic information like your name and email address. Once youve created your account, youll have immediate access to our platforms features.'
  },
  {
    id: 2,
    title: 'Step 2: Set Up Your Project',
    description: 'Customize your workspace and invite team members to collaborate.',
    details: 'After signing up, you can create your first project. Give it a name, set goals, and invite team members. Our intuitive interface makes it easy to organize tasks, set deadlines, and assign responsibilities. You can also integrate with your favorite tools to streamline your workflow.'
  },
  {
    id: 3,
    title: 'Step 3: Start Working',
    description: 'Utilize our powerful tools to boost your productivity and achieve your goals.',
    details: 'With everything set up, youre ready to start working more efficiently. Use our suite of productivity tools to track progress, communicate with your team, and meet deadlines. Our analytics dashboard provides real-time insights to help you optimize your workflow and achieve better results.'
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Left side: Steps */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`cursor-pointer p-4 mb-2 rounded-lg transition-colors duration-200 ${
                  activeStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm mt-1">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Right side: Step details */}
          <div className="md:w-2/3 md:ml-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {steps.find((step) => step.id === activeStep)?.title}
              </h3>
              <p className="text-gray-600">
                {steps.find((step) => step.id === activeStep)?.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
