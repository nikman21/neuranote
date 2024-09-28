import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg mb-4">© 2023 NeuraNote. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
