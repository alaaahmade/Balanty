import { Box, Input } from '@mui/material';
import { styled } from '@mui/system';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CustomTheme, customPalette } from '../../interfaces';

export const StyledNavBox = styled(Box)({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2px 40px',
  width: '100%',
  height: '50px',
  left: 0,
  top: 0,
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

export const StyledSearchInput = styled(Input)(({ theme }) => ({
  height: '12px',
  background: '#F2FCF5',
  borderRadius: '5px',
  padding: '18px',
  br: '4px',
  width: '80%',
  p: '20px',
  border: '1px solid ',
  borderColor: (theme as CustomTheme).palette.primary.contrastText,
  color: (theme as CustomTheme).palette.primary.contrastText,
  backgroundColor: ((theme as CustomTheme).palette as customPalette)
    .customColors.grayColor,
  '& input': {
    textAlign: 'Right',
  },
}));

export const StyledMnu = styled(GiHamburgerMenu)({
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
