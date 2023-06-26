import React from 'react';
import Card from '@mui/material/Card';
import { Avatar, Button, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const PlayerFollows: React.FC<{ action: string; username: string }> = ({
  action,
  username,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        height: '100px',
        marginTop: '20px',
        border: 'none',
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 1px rgb(222 222 222), 0px 1px 3px 0px #2cb67400',
        padding: '0 2rem',
        borderTop: '0.1px solid #0000002b',
        width: '500px',
      }}
    >
      <Button
        sx={{
          outline: 0,
          background: '#2CB674',
          borderRadius: '5px',
          cursor: 'pointer',
          border: '1px solid transparent',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#2CB674',
            borderColor: '#2CB674',
          },
        }}
      >
        {action}
      </Button>
      <Typography sx={{ flexGrow: '2', direction: 'rtl' }} gutterBottom>
        {username}
      </Typography>

      <Avatar
        alt="Remy Sharp"
        src="https://i.insider.com/5fbe52b350e71a00115574c4?width=700"
        sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          objectFit: 'cover',
          bgcolor: deepOrange[500],
        }}
      />
    </Card>
  );
};

export default PlayerFollows;
