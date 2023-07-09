import styled from '@emotion/styled';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';

export const StyledAutocomplete = styled(Autocomplete)({
  width: '80%',
  height: '39px',
  borderRadius: '5px',
  br: '4px',
  marginTop: '25px',
  border: '1px solid ',
  '& .MuiInputBase-input': {
    height: 6,
    textAlign: 'right',
  },
});

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
