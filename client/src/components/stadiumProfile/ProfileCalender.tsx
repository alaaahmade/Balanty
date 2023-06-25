import React from 'react';
import { Box } from '@mui/system';
import Calendar from '../calender/Calender';

const ProfileCalender = () => {
  return (
    <Box
      sx={{
        width: '700px',
        height: '100%',
        // m: '40px 0 40px 80px',
      }}
    >
      <Calendar type="profile" />
    </Box>
  );
};

export default ProfileCalender;
