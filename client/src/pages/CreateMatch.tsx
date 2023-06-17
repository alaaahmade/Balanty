/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useEffect, useState } from 'react';
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
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
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

interface createMatchInterface {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

interface Option {
  id: number;
  username: string;
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
  const [Stadiums, setStadiums] = useState([]);
  const [Details, setDetails] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const getOptionLabel = (Stadium: Option) => Stadium.username;

  const handleAutocompleteChange = (
    event: React.ChangeEvent<object>,
    value: Option | null,
  ): void => {
    if (value) {
      fetch(`/api/v1/stadiums/details/${value?.id}`)
        .then(data => data.json())
        // eslint-disable-next-line dot-notation
        .then(details => setDetails(details.data[0].image1))
        .catch(console.log);
    }
  };

  console.log(Details);

  useEffect(() => {
    fetch('/api/v1/stadiums')
      .then(data => data.json())
      .then(res => setStadiums(res.data))
      .catch(console.log);
  }, []);

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
            options={Stadiums}
            getOptionLabel={getOptionLabel as (option: unknown) => string}
            sx={{ width: 300 }}
            onChange={handleAutocompleteChange}
            renderInput={params => (
              <TextField {...params} placeholder="اسم الملعب" />
            )}
          />
          {Details && <CreateMatchImg src={Details} alt="ملعب" />}
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
