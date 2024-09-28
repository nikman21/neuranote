import React from 'react';
import Navbar from '../components/HomeComponents/navbar/navbar';
import Footer from '../components/HomeComponents/Footer';

function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0072FF] to-[#00C6FF] text-white">
        <Navbar />
        <div className="container mx-auto py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8">
            About 
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                At NeuraNote, we're on a mission to empower individuals and teams to unlock their full potential and boost productivity through innovative note-taking and productivity solutions.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
              <p className="text-gray-300">
                Our dedicated team is composed of experts in artificial intelligence, productivity, and software development. We are committed to providing the best tools to help you succeed.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions, suggestions, or want to contribute, don't hesitate to get in touch with us. We value your feedback and are here to assist you.
              </p>
              <a href="/contact" className="text-[#0072FF] hover:underline mt-4 block">Contact NeuroNote</a>
            </div>
          </div>
          <div className="my-12 text-center bg-gray-900 p-6 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-300">
              NeuraNote was born from a personal journey to find the ultimate productivity tool. Frustrated by the limitations of existing apps and the inefficiency of traditional note-taking methods, I set out to create a digital bullet journal that's easy to use and packed with all the features I needed to optimize my day.
              <br /><br />
              As an avid believer in the power of AI and digital solutions, I wanted to develop a second brain for myself and others. NeuroNote is the realization of that vision, and we're excited to share it with you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;



