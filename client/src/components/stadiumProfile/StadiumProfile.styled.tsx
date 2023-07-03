import styled from '@emotion/styled';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const arrowStyle = {};

export const ArrowStyle = styled(Box)({
  width: '35px',
  height: '35px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  color: 'white',
  fontSize: '34px',
  transition: '0.5s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: '#01031C',
    scale: '1.1',
  },
});

export const ThumbnailImage = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  gap: '3%',
  backgroundRepeat: 'no-repeat',
  width: '23%',
  height: '80px',
  transition: '0.4s',
  borderRadius: '5px',
  border: '1px solid #CCC',
});

export const ThumbnailBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const SliderImage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

export const SliderBox = styled(Box)({
  width: 'calc(100% - 320px)',
  borderRadius: '5px',
  height: '75vh',
});

export const BioBox = styled(Box)({
  maxWidth: '350px',
  minWidth: '350px',
  ml: '3%',
  padding: '10px',
  border: '0.1px solid #D9D9D9',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderRadius: '3px',
  boxShadow: '1px 1px 2px #D9D9D9 ',
});

export const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LocationTypo = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'row',
});

export const EditInputs = styled(TextField)({
  '& input': {
    color: '#5f5f5f',
    textAlign: 'right',
    paddingRight: '10px',
    padding: '0 10px 0 0',
  },
  width: '90%',
  padding: 0,
  margin: 0,
  mr: '10px',
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input': {
    color: '#5f5f5f',
  },
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input.Mui-disabled': {
    color: 'red',
    textAlign: 'right',

    WebkitTextFillColor: '#01031C',
  },
  '& .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled': {
    WebkitTextFillColor: '#01031C',
  },
});
