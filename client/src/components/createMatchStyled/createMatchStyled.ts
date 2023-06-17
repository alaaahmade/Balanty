import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';

export const StyledAutocomplete = styled(Autocomplete)({
  width: '40%',
  height: '39px',
  background: '#D9D9D9',
  borderRadius: '5px',
  br: '4px',
  marginTop: '30px',
  '& .MuiInputBase-input': {
    height: 6,
    textAlign: 'right',
  },
  '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
    backgroundColor: '#D9D9D9',
  },
});

export const DialogBox = styled(Box)({
  backgroundColor: '#c1d2c1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pb: '30px',
});

export const DialogInputsBox = styled(Box)({
  width: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const CreateMatchImg = styled('img')({
  width: '40%',
  marginTop: '30px',
  border: '1px solid #01031C',
  borderRadius: '5px',
});

export const CreateMatchButtons = styled(Box)({
  width: '40%',
  mt: '30px',
  display: 'flex',
  justifyContent: 'space-between',
});
