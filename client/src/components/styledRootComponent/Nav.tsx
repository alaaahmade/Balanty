import { Box, Input } from '@mui/material';
import { styled } from '@mui/system';
import { GiHamburgerMenu } from 'react-icons/gi';

export const StyledNavBox = styled(Box)({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 40px',
  width: '100%',
  height: '50px',
  left: 0,
  top: 0,
  backgroundColor: '#01031C',
  borderBottom: '0.5px solid #000000',
  zIndex: '11',
});

export const StyledLogo = styled('img')({
  width: '350px',
  height: '150px',
  marginRight: '-130px',
  marginLeft: '-150px',
  marginTop: '15px',
});

export const StyledSearchInput = styled(Input)({
  width: '40%',
  height: '40px',
  background: '#EDF7FF',
  borderRadius: '5px',
  padding: '20px 40px',
  br: '4px',
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
  right: '66%',
  top: '17px',
  zIndex: 2,
});
