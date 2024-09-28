'use client';

import { useState } from 'react';
import { loginUser } from '../../utils/auth/api';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(''); // Clear any previous error
      const response = await loginUser({ email, password });
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        router.push('/dashboard');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Wrong Username or Password. Please try again!');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome to NeuroNote</h1>
        <form onSubmit={handleLogin} className="w-full max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          {error && (
            <div className="bg-red-500 text-white px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

