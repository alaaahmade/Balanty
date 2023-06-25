/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useContext, useEffect } from 'react';
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
} from '@mui/material';
import axios from 'axios';
import { DialogBox } from '../components';
import '../fullcalendar-custom.css';
import { createMatchInterface, prevInterface } from '../interfaces';
import { statsContext } from '../context/CreateMatch';
import {
  CreateMatchForm,
  CreateMatchCalendar,
} from '../components/createMatchComponents';
import MatchSchema from '../validation/MatchSchema';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="right" ref={ref} {...props} />;
});

export type IEvent = {
  UserId: number;
  Seats: number;
  description: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
};
const CreateMatch: React.FC<createMatchInterface> = ({
  open,
  setOpen,
}): ReactElement => {
  const states = useContext(statsContext);
  const { setStadiums, setValidateError, match, setStadiumId } = states;

  const handleClose = () => {
    setOpen(false);
  };
  const fetchEvent = async (data: prevInterface) => {
    const matchesFetch = await fetch('/api/v1/matches', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resultCreate = await matchesFetch.json();
    if (resultCreate.status === 401) {
      setValidateError(resultCreate.data);
    } else if (resultCreate.status === 201) {
      handleClose();
    }
  };
  const HandleCreateEvent = async () => {
    try {
      const result = await MatchSchema.validateSync(match);

      await fetchEvent(result);
      setStadiumId(0);
    } catch (error: unknown) {
      const errorMessage = (error as Error).message || 'An error occurred.';
      setValidateError(errorMessage);
    }
  };

  const getStadiums = async () => {
    try {
      const { data } = await axios.get('/api/v1/stadiums');
      setStadiums(data.data);
    } catch (error) {
      setValidateError('لا يوجد ملاعب متاحة في الوقت الحالي');
    }
  };

  useEffect(() => {
    getStadiums();
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
            <Button autoFocus color="inherit" onClick={HandleCreateEvent}>
              انشاء
            </Button>
          </Toolbar>
        </AppBar>
        <DialogBox>
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <CreateMatchCalendar />

            <CreateMatchForm setOpen={setOpen} />
          </Box>
        </DialogBox>
      </Dialog>
    </Box>
  );
};

export default CreateMatch;
