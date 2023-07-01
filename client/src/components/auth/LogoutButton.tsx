import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../../hooks';

const LogoutButton = () => {
  const { logout } = useAuth();
  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
