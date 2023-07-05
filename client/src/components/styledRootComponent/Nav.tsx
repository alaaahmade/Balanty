import { Box, Input, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GiHamburgerMenu } from 'react-icons/gi';

export const StyledNavBox = styled(Box)({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2px 10px',
  width: '100%',
  left: 0,
  top: 0,
  backgroundColor: '#01031C',
  borderBottom: '0.5px solid #000000',
  zIndex: '11',
});

export const StyledLogo = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  width: '100px',
  backgroundColor: '#D9D9D9',
  borderRadius: '20px',
});
export const StyledSearchInput = styled(Input)({
  width: '40%',
  height: '12px',
  background: '#D9D9D9',
  borderRadius: '5px',
  padding: '18px',
  br: '4px',
  // borderWidth: '1px',
  '& input': {
    textAlign: 'Right',
  },
});

export const StyledMnu = styled(GiHamburgerMenu)({
  color: '#D9D9D9',
  cursor: 'pointer',
  fontSize: '25px',
  marginRight: '70px',
});

export const StyledLabel = styled('label')({
  position: 'absolute',
  left: '66%',
  top: '6px',
  zIndex: 2,
});
