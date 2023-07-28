import { useState, FC, MouseEvent, ReactElement } from 'react';
import { Link } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { CustomizedButton, Logo, ScrollLink } from './Header.styled';
import { Page } from '../../interfaces';

const pages: Page[] = [
  { id: 'contactUs', key: 'تواصل معنا' },
  { id: 'servicesLink', key: 'خدماتنا' },
  { id: 'definitionLink', key: 'من نحن' },
  { id: 'mainLink', key: 'الرئيسية' },
];

const Header: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      sx={{
        background: '#01031C',
        padding: '0 40px',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container sx={{ width: '100%' }}>
        <Toolbar disableGutters>
          <CustomizedButton to="/player/login">تسجيل دخول</CustomizedButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link activeClass="active" smooth spy to={page.id}>
                    <Typography textAlign="center">{page.key}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              gap: '1rem',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map(page => (
              <ScrollLink key={page.id} smooth spy to={page.id}>
                <Typography textAlign="center">{page.key}</Typography>
              </ScrollLink>
            ))}
          </Box>
          <RouteLink to="/">
            <Logo
              src="https://res.cloudinary.com/df3ydvucj/image/upload/v1689453636/%D8%A8%D9%84%D9%86%D8%AA%D9%8A_1-01_1_qqlmfb.svg"
              alt="logo"
            />
          </RouteLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
