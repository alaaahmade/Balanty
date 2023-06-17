/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import {
  Button,
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
} from '@mui/material';
import {
  CreateMatchButtons,
  CreateMatchImg,
  DialogBox,
  DialogInputsBox,
  StyledAutocomplete,
  StyledButton,
  StyledSearchInput,
} from '../components';
import Calendar from '../components/calender/Calender';
import '../fullcalendar-custom.css';

const playgrounds = ['الساحة', 'بيت لاهيا', ' الزيتون', 'رفح'];

interface createMatchInterface {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="right" ref={ref} {...props} />;
});

const CreateMatch: React.FC<createMatchInterface> = ({
  open,
  setOpen,
}): ReactElement => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#01031C' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 76, flex: 1 }} variant="h6" component="div">
              انشاء مباراة
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              انشاء
            </Button>
          </Toolbar>
        </AppBar>
        <DialogBox>
          <DialogInputsBox>
            <StyledSearchInput
              sx={{ mt: '30px', width: '45%' }}
              placeholder="عدد اللاعبين"
              type="number"
            />
            <StyledSearchInput
              sx={{ mt: '30px', width: '45%' }}
              placeholder="عنوان المباراة"
            />
          </DialogInputsBox>
          <TextField
            color="primary"
            multiline
            minRows={2}
            placeholder="وصف المباراة"
            inputProps={{ style: { textAlign: 'right' } }}
            sx={{
              width: '40%',
              mt: '30px',
              backgroundColor: '#D9D9D9',
            }}
          />
          <StyledAutocomplete
            disablePortal
            id="combo-box-demo"
            options={playgrounds}
            sx={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} placeholder="اسم الملعب" />
            )}
          />

          <CreateMatchImg
            src="https://ar.integralspor.com/wp-content/uploads/2022/06/%D9%85%D9%84%D8%B9%D8%A8-%D9%83%D8%B1%D8%A9-%D9%82%D8%AF%D9%85-%D8%B9%D8%A7%D8%AF%D9%8A.jpg"
            alt="ملعب"
          />
          <Box
            sx={{
              width: '40%',
              height: '300px',
              mt: '30px',
            }}
          >
            <Calendar />
          </Box>
          <CreateMatchButtons>
            <StyledButton> الغاء</StyledButton>
            <StyledButton>انشاء المباراة</StyledButton>
          </CreateMatchButtons>
        </DialogBox>
      </Dialog>
    </Box>
  );
};

export default CreateMatch;
