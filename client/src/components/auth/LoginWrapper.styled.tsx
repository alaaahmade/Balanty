import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';

interface Props {
  isPlayer: boolean;
}
export const Wrapper = styled(Box)<Props>(({ isPlayer }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: isPlayer ? 'row' : 'row-reverse',
  alignItems: 'center',
  direction: 'rtl',
}));

export const ImageWrap = styled(Box)<Props>(({ isPlayer }) => ({
  width: '50vw',
  height: '100vh',
  backgroundImage: isPlayer
    ? 'url(https://img.freepik.com/premium-photo/football-scene-with-soccer-players-stadium-with-technology-analysis_207634-6513.jpg)'
    : 'url(https://img.freepik.com/premium-photo/close-up-soccer-ball-center-stadium-illuminated-by-headlights_207634-2741.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

export const Form = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: '1',
  height: '100vh',
});

export const Title = styled(Typography)({
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '44px',
  color: '#2CB674',
  textAlign: 'right',
  marginBottom: '1.5rem',
});

export const InputLabel = styled(Typography)({
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '44px',
});

export const SignButton = styled(Button)({
  background: '#2CB674',
  fontWeight: '700',
  width: '100%',
  display: 'block',
  fontSize: '16px',
  marginBottom: '1rem',
  '&:hover': {
    background: '#2CB685',
  },
});

export const OtherLink = styled('a')({
  display: 'block',
  fontWeight: '500',
  fontSize: '1rem',
  marginBottom: '0.5rem',
  color: '#2CB674',
  textAlign: 'right',
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
});
