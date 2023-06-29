import { ReactElement } from 'react';

import { Typography, Box } from '@mui/material';

import Calendar from '../calender/Calender';

const ProfileCalender = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '700px',
        height: '100%',
      }}
    >
      <Typography
        sx={{
          textAlign: 'right',
          mb: '15px',
          mt: '-45px',
          fontSize: '20px',
        }}
      >
        الحجوزات
      </Typography>
      <Calendar type="profile" />
    </Box>
  );
};

export default ProfileCalender;
