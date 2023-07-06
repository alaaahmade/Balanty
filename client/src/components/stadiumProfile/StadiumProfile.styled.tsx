import styled from '@emotion/styled';
import { Button, Box, TextField, Typography, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
  minHeight: '480px',
  ml: '3%',
  padding: '10px',
  border: '0.1px solid #D9D9D9',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderRadius: '3px',
  boxShadow: '1px 1px 2px #D9D9D9 ',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'flex-end',
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
    color: '#11508fa3',
    textAlign: 'right',
    paddingRight: '10px',
    padding: '0 10px 0 0',
  },
  width: '90%',
  padding: 0,
  margin: 0,
  mr: '10px',
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input': {
    color: '#11508fa3',
  },
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input.Mui-disabled': {
    textAlign: 'right',

    WebkitTextFillColor: '#01031C',
  },
  '& .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled': {
    WebkitTextFillColor: '#01031C',
  },
});

export const EditGalleryButton = styled(Button)({
  position: 'absolute',
  bottom: '4%',
  right: '2%',
  color: '#01031C',
  margin: 0,
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
  borderRadius: '5px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
});

export const SelectTypography = styled(Typography)({
  width: 'fit-content',
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

export const DeleteButton = styled(DeleteForeverIcon)({
  color: '#ff00009c',
  position: 'absolute',
  bottom: '4%',
  left: '2%',
  padding: '0',
  margin: 0,
  backgroundColor: '#ffffff75',
  fontSize: '30px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#ffffffc2',
  },
});

export const NewIconButton = styled(IconButton)({
  position: 'absolute',
  left: '20px',
  top: '20px',
  padding: 0,
  margin: 0,
});

export const LoaderContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  zIndex: 40,
  backgroundColor: '#00000047',
});

export const LoaderBox = styled(Box)({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  zIndex: 40,
  height: '80px',
});

export const LDiv = styled('div')`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 8px;
  border: 6px solid #01031c;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #01031c transparent transparent transparent;

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CalendarTitle = styled(Typography)({
  textAlign: 'right',
  fontSize: '23px',
});
