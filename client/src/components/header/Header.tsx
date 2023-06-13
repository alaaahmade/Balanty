import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material';
import { Link } from 'react-scroll';

const CustomizedButton = styled(Button)`
  color: #2cb674;
  border-color: #2cb674;
  background: #fff;

  :hover {
    background: #fff;
  }
`;

const pages = [
  { id: 'contact-us', key: 'تواصل معنا' },
  { id: 'services', key: 'خدماتنا' },
  { id: 'definition', key: 'من نحن' },
  { id: 'main', key: 'الرئيسية' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
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
                    // style={{ color: '#333', textDecoration: 'none' }}
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'right',
            }}
          >
            بلنتي
          </Typography>
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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            بلنتي
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
