import React, { ReactElement } from 'react';

import { Box } from '@mui/system';

import Calendar from '../calender/Calender';

const ProfileCalender = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '700px',
        height: '100%',
      }}
    >
      <Calendar type="profile" />
    </Box>
  );
};

export default ProfileCalender;
