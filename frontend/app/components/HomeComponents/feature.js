import React from 'react';

function Features() {
  const features = [
    {
      title: 'Graph View',
      description: 'Visualize the connections between your notes in a dynamic and futuristic graph view.',
    },
    {
      title: 'AI Assistant',
      description: 'Leverage AI to receive personalized suggestions and assistance in your projects and tasks.',
    },
    {
      title: 'Health & Habit Tracking',
      description: 'Track your health habits, including meditation sessions, to maintain a balanced life.',
    },
    {
      title: 'Task & Project Management',
      description: 'Effortlessly manage your tasks and projects for optimal productivity.',
    },
    {
      title: 'Interlinking Notes',
      description: 'Create a web of interconnected notes for efficient information management.',
    },
  ];

  return (
    <section className="bg-primary-blue py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
