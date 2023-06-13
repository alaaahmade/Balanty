import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const SidBox = styled(Box)({
  position: 'absolute',
  width: '270px',
  minHeight: 'calc(100vh - 65px)',
  top: '4.1em',
  backgroundColor: '#FFFFFF',
  borderTop: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px',
});

export const Line = styled('p')({
  width: '100%',
  height: '0.5px',
  backgroundColor: '#2CB674',
  marginTop: '30px',
});

export const StyledButton = styled(Button)({
  width: '135px',
  height: '35px',
  background: '#2CB674',
  borderRadius: '5px',
  gap: '10px',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2CB674',
    border: '1px solid #2CB674',
  },
});

export const StyledTypography = styled(Typography)({
  fontSize: '12px',
  width: '80%',
  textAlign: 'center',
});
