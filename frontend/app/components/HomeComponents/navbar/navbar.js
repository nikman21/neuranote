'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-grow">
            <Link href="/" className="flex-shrink-0">
              <p className="text-white font-bold text-2xl">NeuraNote</p>
            </Link>
            <div className="hidden md:block ml-auto">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                    About
                  </p>
                </Link>
                <Link href="/login">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                    Login
                  </p>
                </Link>
                <Link href="/signup">
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                    Signup
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about">
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                About
              </p>
            </Link>
            <Link href="/login">
              <p className="text-gray-300 hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Login
              </p>
            </Link>
            <Link href="/signup">
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Register
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
