import React, { useState, useContext, MouseEvent } from 'react';
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutButton from '../../auth/LogoutButton';
import { AuthContext } from '../../../context';
import { ThemeContext } from '../../../context/ThemeContext';

const AccountMenu = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTheme = () => {
    toggleTheme();
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to={
              user?.role === 'stadium'
                ? `/profile/stadium/${user?.id}`
                : `/profile/player/${user?.id}`
            }
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            My Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleTheme}>
          {!isDarkMode ? (
            <>
              <ListItemIcon>
                <DarkModeIcon fontSize="small" />
              </ListItemIcon>
              Dark Mode
            </>
          ) : (
            <>
              <ListItemIcon>
                <LightModeIcon fontSize="small" />
              </ListItemIcon>
              Light Mode
            </>
          )}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ fill: '#2cb676' }} />
          </ListItemIcon>
          <LogoutButton />
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
