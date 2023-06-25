import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PlayerFollows from './PlayerFollows';

const PlayerStats = () => {
  const [value, setValue] = useState(2);

  const handleChange = (_, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          marginLeft: 31,
          '& .MuiTabs-indicator': {
            backgroundColor: '#2CB674', // Change this to the desired border bottom color
          },
        }}
      >
        <Tab label="مباراياتي" />
        <Tab label="متابعين" />
        <Tab label="أتابع" />
      </Tabs>
      {value === 2 && (
        <PlayerFollows action="إلغاء المتابعة" username="ahmed" />
      )}
      {value === 1 && <PlayerFollows action="متابعة" username="reema" />}
      {/* {value === 0 && <PlayerActions />} */}
    </>
  );
};

export default PlayerStats;
