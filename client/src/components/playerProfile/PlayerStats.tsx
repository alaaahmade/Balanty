import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import PlayerFollows from './PlayerFollows';

const PlayerStats = () => {
  const [value, setValue] = useState(2);

  const handleChange = (_: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            marginLeft: 42,
            '& .MuiTabs-indicator': {
              backgroundColor: '#2CB674', // Change this to the desired border bottom color
            },
          }}
        >
          <Tab label="مباراياتي" />
          <Tab label="متابعين" />
          <Tab label="أتابع" />
        </Tabs>
      </Box>
      <Box
        sx={{
          ml: '120px',
        }}
      >
        {value === 2 && (
          <PlayerFollows action="إلغاء المتابعة" username="ahmed" />
        )}
        {value === 1 && <PlayerFollows action="متابعة" username="reema" />}
        {/* {value === 0 && <PlayerActions />} */}
      </Box>
    </Box>
  );
};

export default PlayerStats;
