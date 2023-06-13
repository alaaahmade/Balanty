import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { StyledImag, StyledUserComponent } from '../index';

const UserComponent = (): ReactElement => {
  return (
    <StyledUserComponent
      sx={{
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
      <StyledImag
        src="https://static.dw.com/image/54662995_101.jpg"
        alt="userImage"
      />
    </StyledUserComponent>
  );
};

export default UserComponent;
