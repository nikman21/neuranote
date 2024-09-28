'use client';
import { useState } from 'react';
import { signUp } from '../../utils/auth/api';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the signup API call
      const response = await signUp(formData);

      // Handle the response here (e.g., show a success message, redirect to login page)
      console.log('Signup response:', response);

      router.push('/');
    } catch (error) {
      setError('Error during signup. Please check your inputs.');
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Sign Up for NeuroNote</h1>
        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow-md focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
