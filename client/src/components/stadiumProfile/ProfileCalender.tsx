import React from 'react';
import { Box } from '@mui/system';
import Calendar from '../calender/Calender';

const ProfileCalender = () => {
  return (
    <Box
      sx={{
        width: 'calc(100% - 400px)',
        height: '500px',
        m: '40px 0 40px 80px',
      }}
    >
      <Calendar type="profile" />
    </Box>
  );
};

export default ProfileCalender;
