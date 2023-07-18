import { ReactElement } from 'react';

import { Box } from '@mui/material';

import Calendar from '../calender/Calender';
import { CalendarTitle } from './StadiumProfile.styled';

const ProfileCalender = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '700px',
        height: '100%',
      }}
    >
      <CalendarTitle
        sx={{
          mb: '25px',
          mt: '-60px',
          color: theme => theme.palette.primary.contrastText,
        }}
      >
        الحجوزات
      </CalendarTitle>
      <Calendar type="profile" />
    </Box>
  );
};

export default ProfileCalender;
