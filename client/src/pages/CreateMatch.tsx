/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import { object, string, number } from 'yup';
import {
  Button,
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Alert,
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
import { Option, createMatchInterface, prevInterface } from '../interfaces';

const EventSchema = object({
  endDate: string().required('يجب حجز وقت المباراة'),
  startDate: string().required('يجب حجز وقت المباراة'),
  UserId: number()
    .min(1, '!يجب ادخال اسم الملعب')
    .required('!يجب ادخال اسم الملعب'),
  description: string()
    .min(5, 'يجب ان يكون الوصف 5 احرف على الاقل')
    .required('!يجب كتابة وصف للمباراة'),
  seats: number()
    .required('يجب ادخال عدد اللاعبين')
    .min(5, 'يجب ان يكون عدد اللاعبين 5 على الاقل')
    .max(50, 'يجب ان لا يزيد عدد اللاعبين عن 50'),
  title: string()
    .required('يجب كتابة عنوان للمباراة')
    .min(5, 'يجب ان يكون العنوان 5 احرف على الاقل')
    .max(50, 'يجب ان لا يزيد عدد الاحرف في العنوان عن 50'),
});

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
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
};
const CreateMatch: React.FC<createMatchInterface> = ({
  open,
  setOpen,
}): ReactElement => {
  const [Stadiums, setStadiums] = useState([]);
  const [UserId, setUserId] = useState<number>(0);
  const [Details, setDetails] = useState();
  const [ValidateError, setValidateError] = useState('');
  const [matches, setMatches] = useState<IEvent[]>([]);
  const [Event, setEvent] = useState<IEvent>({
    title: '',
    start: '',
    end: '',
    backgroundColor: '',
  });
  const [match, setMatch] = useState({
    title: '',
    startDate: '',
    endDate: '',
    seats: 0,
    description: '',
    UserId: 0,
  });
  useEffect(() => {
    setMatch({
      title: '',
      startDate: '',
      endDate: '',
      seats: 0,
      description: '',
      UserId: 0,
    });
    setEvent({
      title: '',
      start: '',
      end: '',
      backgroundColor: '',
    });
    setValidateError('');
  }, [open]);

  useEffect(() => {
    setMatch(prv => ({ ...prv, startDate: Event.start, endDate: Event.end }));
  }, [Event]);

  const handleClose = () => {
    setOpen(false);
  };

  const getOptionLabel = (Stadium: Option) => Stadium.username;

  const handleAutocompleteChange = async (
    event: React.ChangeEvent<object>,
    // value: Option | null,
    value: Option | unknown,
  ): Promise<void> => {
    if (value) {
      const selectedValue = value as Option;
      setUserId(+selectedValue.id);
      setMatch((prev: prevInterface) => ({
        ...prev,
        UserId: +selectedValue.id,
      }));
      const data = await fetch(`/api/v1/stadiums/details/${selectedValue?.id}`);
      const stadDetails = await data.json();
      setDetails(stadDetails.data[0].image1);
      setValidateError('');
    }
  };
  const handlePlayersCount = (e: { target: { value: string } }) => {
    setMatch((prev: prevInterface) => ({
      ...prev,
      seats: +e.target.value,
    }));
    setValidateError('');
  };

  const handleMatchName = (e: { target: { value: string } }) => {
    setMatch((prev: prevInterface) => ({
      ...prev,
      title: e.target.value,
    }));
    setValidateError('');
  };

  const fetchEvent = async (data: prevInterface) => {
    const matchesFetch = await fetch('/api/v1/matches', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resultCreate = await matchesFetch.json();
    if (resultCreate.status === 401) {
      setValidateError(resultCreate.message);
    } else if (resultCreate.status === 200) {
      handleClose();
    }
  };

  const HandleCreateEvent = async () => {
    try {
      const result = await EventSchema.validateSync(match);

      await fetchEvent(result);
    } catch (error: unknown) {
      const errorMessage = (error as Error).message || 'An error occurred.';
      setValidateError(errorMessage);
    }
  };

  const handleDescription = (e: { target: { value: string } }) => {
    setMatch((prev: prevInterface) => ({
      ...prev,
      description: e.target.value,
    }));
    setValidateError('');
  };
  const getStadiumMatchs = async (id: number) => {
    if (open) {
      try {
        const matchesFetch = await fetch('/api/v1/matches');
        const stadMatches = await matchesFetch.json();
        console.log(stadMatches);
      } catch (error: unknown) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getStadiumMatchs(UserId);
  }, [UserId]);

  useEffect(() => {
    fetch('/api/v1/stadiums')
      .then(data => data.json())
      .then(res => setStadiums(res.data))
      .catch(() => setValidateError('لا يوجد ملاعب متاحة في الوقت الحالي'));
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
            <Box
              sx={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '90%',
                  textAlign: 'right',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {ValidateError && (
                    <Alert
                      sx={{
                        mt: '85px',
                        position: 'absolute',
                        left: '0',
                      }}
                      severity="error"
                    >
                      {ValidateError}
                    </Alert>
                  )}
                  <Typography
                    sx={{
                      color: '#2CB674',
                      mt: '85px',
                      textAlign: 'right',
                      p: '3px 30px ',
                      fontWeight: 'bold',
                      position: 'absolute',
                      right: '0',
                    }}
                    variant="h5"
                  >
                    وقت المبارة
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '90%',
                  height: '450px',
                  mt: '90px',
                }}
              >
                <Calendar Event={Event} setEvent={setEvent} />
              </Box>
            </Box>
            <DialogInputsBox>
              <StyledSearchInput
                sx={{ mt: '25px', width: '80%', border: '1px solid #ccc' }}
                placeholder="عنوان المباراة"
                onChange={handleMatchName}
                disableUnderline
              />
              <StyledSearchInput
                sx={{
                  mt: '25px',
                  width: '80%',
                  p: '20px',
                  border: '1px solid #ccc',
                }}
                placeholder="عدد اللاعبين"
                type="number"
                onChange={handlePlayersCount}
                disableUnderline
              />

              <TextField
                InputProps={{
                  disableUnderline: true,
                  inputProps: {
                    style: {
                      textAlign: 'right',
                      padding: '7px 40px',
                    },
                  },
                }}
                color="primary"
                variant="standard"
                multiline
                minRows={2}
                placeholder="وصف المباراة"
                sx={{
                  width: '80%',
                  mt: '25px',
                  backgroundColor: '#EDF7FF',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                onChange={handleDescription}
              />
              <StyledAutocomplete
                disablePortal
                id="combo-box-demo"
                options={Stadiums}
                getOptionLabel={getOptionLabel as (option: unknown) => string}
                onChange={handleAutocompleteChange}
                renderInput={params => (
                  <TextField {...params} placeholder="اسم الملعب" />
                )}
              />
              <Box
                sx={{
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                {Details && <CreateMatchImg src={Details} alt="ملعب" />}
              </Box>
              <CreateMatchButtons>
                <StyledButton onClick={handleClose}> الغاء</StyledButton>
                <StyledButton onClick={HandleCreateEvent}>
                  انشاء المباراة
                </StyledButton>
              </CreateMatchButtons>
            </DialogInputsBox>
          </Box>
        </DialogBox>
      </Dialog>
    </Box>
  );
};

export default CreateMatch;
