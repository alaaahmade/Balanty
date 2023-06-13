import { Typography } from '@mui/material';
import { ReactElement } from 'react';

interface TeamNameProps {
  text: string;
}

const TeamName = ({ text }: TeamNameProps): ReactElement => {
  return (
    <Typography
      sx={{
        width: '80px',
        height: '30px',
        background: '#2CB674',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '12px',
      }}
    >
      {text}
    </Typography>
  );
};

export default TeamName;
