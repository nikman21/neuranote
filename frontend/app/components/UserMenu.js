import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutButton from './Buttons/logoutButton';
import { useRouter } from 'next/navigation';
import { useUserAvatar } from '../helpers/avatarHelper';

const UserMenu = () => {
    const [firstLetter, setFirstLetter] = useState('');
    const initialToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    const { token, username } = useUserAvatar(initialToken);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    if (event.target.closest('.Menu')) {
      event.preventDefault();
      return;
    }

    setAnchorEl(null);
  };

  const handleProfileClick = (event) => {
    event.preventDefault(); // Added the event.preventDefault() method
    router.push('/profile');
    // Added the event object as a parameter to the handleMenuClose() function
    handleMenuClose(event);
  };

  const handleTeamsClick = (event) => {
    event.preventDefault(); // Added the event.preventDefault() method
    router.push('/teams');
    // Added the event object as a parameter to the handleMenuClose() function
    handleMenuClose(event);
  };

  const handleSettingsClick = (event) => {
    event.preventDefault(); // Added the event.preventDefault() method
    router.push('/settings');
    // Added the event object as a parameter to the handleMenuClose() function
    handleMenuClose(event);
  };

  useEffect(() => {
    if (username) {
      setFirstLetter(username.charAt(0).toUpperCase());
    }
  }, [username]);

  return (
    <div>
      <IconButton
        aria-label="User Menu"
        onClick={handleMenuClick}
        color="primary"
        size="small"
      >
        {token && username && <Avatar>{firstLetter}</Avatar>}
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleTeamsClick}>Teams</MenuItem>
        <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
        <LogoutButton />
      </Menu>
    </div>
  );
}

export default UserMenu;

