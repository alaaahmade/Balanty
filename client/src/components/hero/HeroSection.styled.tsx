import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';

export const HeroSectionWrapper = styled(Box)({
  display: 'flex',
  height: '80vh',
  width: '100vw',
});

export const DescriptionWrap = styled(Box)({
  width: '50%',
  minWidth: '250px',
  maxWidth: '450px',
  position: 'absolute',
  top: '20px',
  right: '50px',
  backgroundColor: '#000',
  opacity: '0.7',
  padding: '1rem',
  direction: 'rtl',
  display: 'none',
});

export const Title = styled(Typography)({
  fontWeight: '600',
  fontSize: '24px',
  color: '#fff',
});

export const Description = styled(Typography)({
  fontSize: '0.875rem',
  color: '#fff',
  marginTop: '0.5rem',
  lineHeight: 2,
});

interface Props {
  imageUrl: string;
}
export const Wrapper = styled(Box)<Props>(({ imageUrl }) => ({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  border: '2px solid #01031c',
  flexGrow: '1',
  position: 'relative',
  backgroundImage: `url(${imageUrl})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: 'all 0.3s linear',

  '&: hover': {
    width: '280%',
    '.description-wrap': {
      display: 'block',
    },
  },
}));

export const CustomizedButton = styled(Button)({
  '&:hover': {
    background: 'rgba(0,0,0,0.5)',
    borderColor: '#fff',
  },
});
