import { Theme, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Link as scrollLink } from 'react-scroll';

export const CustomizedButton = styled(Link)({
  textDecoration: 'none',
  color: '#fff',
  padding: '5px',
  background: '#2cb674',
  transition: '0.2s',
  borderRadius: '3px',
  border: '1px solid transparent',

  '&:hover': {
    color: '#2cb674',
    background: 'transparent',
    border: '1px solid #2cb674',
  },
});

export const Logo = styled('img')({
  width: '350px',
  height: '100%',
  marginRight: '-110px',
  marginLeft: '-150px',
  marginTop: '15px',
});

export const CustomizedTypography = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xl')]: {
      display: 'flex',
    },
    marginRight: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    justifyContent: 'right',
    flexWrap: 'nowrap',
  }),
) as unknown as typeof Typography;

export const ScrollLink = styled(scrollLink)({
  margin: 2,
  color: 'white',
  display: 'block',
  cursor: 'pointer',
  padding: '8px',
  '&:hover': {
    color: '#2cb674',
    background: 'transparent',
  },
});
