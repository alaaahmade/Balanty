import styled from '@emotion/styled';
import { Button, Box, TextField, Typography } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';

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
  width: '21%',
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
  position: 'relative',
});

export const SliderBox = styled(Box)({
  width: 'calc(100% - 280px)',
  borderRadius: '5px',
  height: '65vh',
});

export const BioBox = styled(Box)({
  maxWidth: '350px',
  minWidth: '350px',
  ml: '3%',
  padding: '10px',
  border: '0.1px solid #D9D9D9',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
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

export const EditGalleryButton = styled(Button)({
  position: 'absolute',
  bottom: '5%',
  right: '5%',
  color: '#01031C',
  backgroundColor: '#ffffff75',
  '&:hover': {
    backgroundColor: '#ffffffc2',
  },
});

export const GalleryAction = styled(Button)({
  color: '#4c8942',
  '&:hover': {
    backgroundColor: '#0d710d3d',
  },
});

export const DialogContentBox = styled(DialogContent)({
  width: '550px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
});

export const InputLabel = styled('label')({
  position: 'absolute',
  top: '46%',
  left: '50%',
  translate: '-50% -50%',
  padding: 0,
  borderRadius: 0,
  cursor: 'pointer',
  color: '#152c11',
});

export const SelectBox = styled(Box)({
  width: '500px',
  height: '280px',
  border: '2px dashed #ccc',
  borderRadius: '5px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
});

export const SelectTypography = styled(Typography)({
  width: 'fit-content',
  borderBottom: '1px solid #152c11',
  position: 'absolute',
  top: '50%',
  translate: '-50% -50%',
  left: '50%',
});

export const SelectButtonsBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});
