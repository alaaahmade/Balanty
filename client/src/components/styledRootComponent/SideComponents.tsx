import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const SideBox = styled(Box)({
  position: 'fixed',
  width: '240px',
  minHeight: 'calc(100vh - 50px)',
  top: '3.2em',
  borderTop: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px',
});

export const StyledButton = styled(Button)({
  width: 'fit-content',
  height: '30px',
  background: '#2CB674',
  borderRadius: '5px',
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'center',
  lineHeight: '28px',
  padding: '0 0.5rem',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2CB674',
    border: '1px solid #2CB674',
    fontWeight: 'bold',
  },
});

export const StyledTypography = styled(Typography)({
  fontSize: '12px',
  width: '80%',
  textAlign: 'center',
});

export const BorderBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& :hover': {
    color: '#2CB674',
  },
});
