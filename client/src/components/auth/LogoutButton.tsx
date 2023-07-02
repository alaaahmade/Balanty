import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../../hooks';

const LogoutButton = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
