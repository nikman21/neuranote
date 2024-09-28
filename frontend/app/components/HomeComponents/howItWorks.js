import React from 'react';

function HowItWorks() {
  const steps = [
    {
      title: '1. Create Your Dashboard',
      description: 'Customize your dashboard with widgets that suit your workflow. Easily access your most important information.',
    },
    {
      title: '2. Organize with Notes and Journals',
      description: 'Use notes for quick thoughts and ideas. Journals for daily reflections. Maintain a digital bullet journal for productivity.',
    },
    {
      title: '3. Efficient Task Management',
      description: 'Stay organized with to-do lists and task management. Prioritize your tasks and projects with ease.',
    },
    {
      title: '4. Interlinked Notes',
      description: 'Connect your notes for a second brain experience. See how ideas and information interconnect.',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
