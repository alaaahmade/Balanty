import { useState } from 'react';

import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
        ml: -8,
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
              backgroundColor: '#2CB674',
            },
            '& .MuiTab-root': {
              color: '#2CB674',
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
      </Box>
    </Box>
  );
};

export default PlayerStats;
