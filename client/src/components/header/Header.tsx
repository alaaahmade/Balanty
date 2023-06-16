import React, { useState, FC, MouseEvent, ReactElement } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { CustomizedButton, CustomizedTypography } from './Header.styled';

interface Page {
  id: string;
  key: string;
}

const pages: Page[] = [
  { id: 'contact-us', key: 'تواصل معنا' },
  { id: 'services', key: 'خدماتنا' },
  { id: 'definition', key: 'من نحن' },
  { id: 'main', key: 'الرئيسية' },
];

const Header: FC<ReactElement> = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      sx={{ background: '#01031C', width: '100vw', padding: '0 40px' }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Link to="/login"> this will uncommint when routes get ready */}
          <CustomizedButton>تسجيل دخول</CustomizedButton>
          {/* </Link> */}
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
                  <Link
                    to={page.id}
                    activeClass="active"
                    smooth
                    spy
                    offset={-70}
                    duration={500}
                  >
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
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.key}
              </Button>
            ))}
          </Box>
          <CustomizedTypography component="a" href="/" variant="h6">
            بلنتي
          </CustomizedTypography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
