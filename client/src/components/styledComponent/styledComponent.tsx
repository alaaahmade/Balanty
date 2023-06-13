import { Button, Input, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { GiHamburgerMenu } from 'react-icons/gi';

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

export const CreateMatchBox = styled(Box)({
  width: '80%',
  height: '110px',
  backgroundColor: '#D9D9D9',
  borderRadius: '5px',
  mt: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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

export const StyledUserComponent = styled(Box)({
  width: '190px',
  height: '50px',
  background: '#D9D9D9',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  border: '0.1px solid rgb(133 133 133)',
});

export const StyledImag = styled('img')({
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  outline: '2px solid rgb(133 133 133)',
});

export const StyledSidBarLink = styled(Box)({
  width: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '20px',
  fontSize: '25px',
  cursor: 'pointer',
  transition: '0.2s',
  '&:hover': {
    color: '#2CB674',
    outline: '1px solid #2CB674',
  },
});

export const StyledMyMatches = styled(Box)({
  width: '90%',
  height: '46px',
  backgroundColor: '#D9D9D9',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
});

export const StyledWorldMatches = styled(Box)({
  width: '90%',
  height: '80px',
  backgroundColor: '#D9D9D9',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledTeamBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  p: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
});

export const StyledTeamName = styled(Typography)({
  width: '80px',
  height: '30px',
  background: '#2CB674',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '12px',
});

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
  fontSize: '40px',
  width: '100px',
});

export const StyledLabel = styled('label')({
  position: 'absolute',
  left: '66%',
  top: '17px',
  zIndex: 2,
});
