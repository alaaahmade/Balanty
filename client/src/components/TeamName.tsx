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
        fontSize: '14px',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#2CB674',
          border: '1px solid #2CB674',
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default TeamName;
