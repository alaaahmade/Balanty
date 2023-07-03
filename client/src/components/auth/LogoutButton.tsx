import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../../context';
import { AuthContextData } from '../../interfaces';

const LogoutButton = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext as AuthContextData;
  const handleLogout = async () => {
    await logout();
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
