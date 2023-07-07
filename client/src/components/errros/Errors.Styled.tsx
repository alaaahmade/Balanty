import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ErrorSvg = styled('img')({
  width: '30%',
  height: '20%',
  display: 'block',
  margin: 'auto',
  '@media (min-width: 768px)': {
    width: '40%',
  },
});

export const ErrorSubtitle = styled(Typography)({
  fontSize: 25,
  fontWeight: 800,
  color: '#2CB674',
  textAlign: 'center',
  margin: 0,
});

export const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
});

export const ErrorButton = styled(Button)({
  backgroundColor: '#2CB674',
  border: 'none',
  fontWeight: 600,
  fontSize: 16,
  textDecoration: 'none',
});

export const Page404Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#fff',
  fontFamily: 'Arvo, serif',
  textAlign: 'center',
}));

export const FourZeroFourBg = styled(Box)({
  backgroundImage:
    'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
  height: 400,
  backgroundPosition: 'center',
});

export const Title = styled(Typography)({
  fontSize: 80,
});

export const ContentBox404 = styled(Box)({
  marginTop: -50,
});
