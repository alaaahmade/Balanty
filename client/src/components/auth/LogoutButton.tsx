import React, { FC, ReactElement, useContext } from 'react';
import { Typography } from '@mui/material';
import { AuthContext } from '../../context';
import { AuthContextData } from '../../interfaces';

const LogoutButton: FC = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext as AuthContextData;
  const handleLogout = async () => {
    await logout();
  };
  return (
    <Typography
      color="#2cb676"
      sx={{ fontWeight: '600' }}
      onClick={handleLogout}
    >
      Logout
    </Typography>
  );
};

export default LogoutButton;
