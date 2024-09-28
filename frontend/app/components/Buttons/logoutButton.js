'use client';
import { logoutUser } from '../../utils/auth/api';
import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logoutUser();
    console.log('Response:', response);
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <IconButton
      aria-label="Logout"
      onClick={handleLogout}
      color="primary"
      size="small"
    >
      <ExitToApp />
    </IconButton>
  );
};

export default LogoutButton;