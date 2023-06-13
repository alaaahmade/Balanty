import { Box, Button, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface MyMatchesProps {
  stadium: string;
}

const MyMatches = ({ stadium }: MyMatchesProps): ReactElement => {
  return (
    <Box
      sx={{
        width: '90%',
        height: '46px',
        backgroundColor: '#D9D9D9',
        borderRadius: '5px',
        mt: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
      }}
    >
      <Button
        sx={{
          width: '65px',
          height: '30px',
          background: '#2CB674',
          borderRadius: '5px',
          gap: '10px',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#2CB674',
            border: '1px solid #2CB674',
          },
        }}
      >
        المزيد
      </Button>
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        {stadium}
      </Typography>
    </Box>
  );
};

export default MyMatches;
