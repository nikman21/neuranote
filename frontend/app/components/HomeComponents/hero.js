import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] w-screen bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center Montserrat">
        Unleash Your Mind's Potential with NeuraNote
      </h1>
      <p className="text-white text-lg mt-4 max-w-lg text-center">
        Your Personal AI Assistant for Ultimate Productivity
      </p>
      <div className="flex justify-center mt-8">
        <Link href="/signup">
          <button className="bg-white text-[#00C6FF] px-8 py-3 text-lg md:text-xl rounded-lg font-bold hover:bg-[#0072FF] transition-colors duration-300 shadow-xl">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
