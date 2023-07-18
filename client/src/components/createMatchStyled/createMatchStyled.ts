import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
import { CustomTheme, customPalette } from '../../interfaces';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '80%',
  height: '39px',
  borderRadius: '5px',
  borderTopRightRadius: '4px',
  marginTop: '25px',
  border: '1px solid',
  borderColor: ((theme as CustomTheme).palette as customPalette).primary
    .contrastText,
  color: ((theme as CustomTheme).palette as customPalette).primary.contrastText,
  backgroundColor: ((theme as CustomTheme).palette as customPalette)
    .customColors.grayColor,
  '& .MuiInputBase-input': {
    height: '6px',
    textAlign: 'right',
  },
  '& input': {
    color: (theme as CustomTheme).palette.primary.contrastText,
    backgroundColor: ((theme as CustomTheme).palette as customPalette)
      .customColors.grayColor,
  },
  '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
    backgroundColor: ((theme as CustomTheme).palette as customPalette)
      .customColors.grayColor,
    color: (theme as CustomTheme).palette.primary.main,
  },
}));

export const DialogBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pb: '30px',
});

export const DialogInputsBox = styled(Box)({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CreateMatchImg = styled('img')({
  width: '80%',
  marginTop: '25px',
  border: '1px solid #01031C',
  borderRadius: '5px',
  height: '180px',
});

export const CreateMatchButtons = styled(Box)({
  width: '80%',
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'space-evenly',
  // flexDirection: 'column',
  alignItems: 'center',
});
