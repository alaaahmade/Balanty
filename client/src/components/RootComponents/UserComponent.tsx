import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

const UserComponent = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '190px',
        height: '50px',
        background: '#D9D9D9',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        border: '0.1px solid rgb(133 133 133)',
        mt: '25px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          transition: '0.2s',
          '&:hover': {
            color: '#2CB674',
          },
        }}
      >
        نيمار مزيف
      </Typography>
      <img
        src="https://static.dw.com/image/54662995_101.jpg"
        alt="userImage"
        style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          outline: '2px solid rgb(133 133 133)',
        }}
      />
    </Box>
  );
};

export default UserComponent;
