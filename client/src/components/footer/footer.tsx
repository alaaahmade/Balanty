import React, { ReactElement } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer: React.FC = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h6">Logo</Typography>
      <Link href="https://example.com/about" color="inherit">
        About Us
      </Link>
      <Link href="https://example.com/contact" color="inherit">
        Contact Us
      </Link>
      <Link href="https://example.com/home" color="inherit">
        Home
      </Link>
      <Link href="https://example.com/services" color="inherit">
        Services
      </Link>
      <Typography variant="body2" align="center">
        Welcome all
      </Typography>
      <Facebook />
      <Twitter />
      <LinkedIn />
      <Instagram />
    </Box>
  );
};
