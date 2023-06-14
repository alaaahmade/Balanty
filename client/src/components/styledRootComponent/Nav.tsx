import { Box, Input, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GiHamburgerMenu } from 'react-icons/gi';

export const StyledNavBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 40px',
  width: '100%',
  height: '65px',
  left: 0,
  top: 0,
  backgroundColor: '#01031C',
  borderBottom: '0.5px solid #000000',
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
  height: '40px',
  background: '#D9D9D9',
  borderRadius: '5px',
  padding: '20px',
  br: '4px',
  outline: '0',
  borderWidth: '1px',
  borderStyle: 'solid',
});

export const StyledMnu = styled(GiHamburgerMenu)({
  color: '#D9D9D9',
  cursor: 'pointer',
  fontSize: '30px',
  marginRight: '70px',
});

export const StyledLabel = styled('label')({
  position: 'absolute',
  left: '66%',
  top: '17px',
  zIndex: 2,
});
