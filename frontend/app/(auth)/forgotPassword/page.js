'use client';

import { useState } from 'react';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={ForgotPassword}>Send Reset Email</button>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;