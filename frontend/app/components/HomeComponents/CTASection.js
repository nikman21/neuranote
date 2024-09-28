import React from 'react';

function CTASection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Upgrade for More Benefits
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          While NeuroNote is currently free, consider upgrading in the future for even more productivity features and support.
        </p>
        <a
          href="/signup" // Replace with your signup or upgrade page URL
          className="bg-[#0072FF] text-white px-8 py-3 text-lg md:text-xl rounded-lg font-bold hover:bg-[#0057DA] transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default CTASection;
