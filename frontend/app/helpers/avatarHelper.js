'use client';

import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const useUserAvatar = (initialToken) => {
  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.username) {
        setUsername(decodedToken.username);
      }
    }
  }, [token]);

  return { token, username };
};

export default useUserAvatar;
