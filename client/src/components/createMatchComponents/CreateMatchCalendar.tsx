import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Alert, Typography } from '@mui/material';
import { statsContext } from '../../context/CreateMatch';
import Calendar from '../calender/Calender';

const CreateMatchCalendar = () => {
  const states = useContext(statsContext);
  const { ValidateError, Event, setEvent } = states;

  return (
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
  );
};

export default CreateMatchCalendar;
