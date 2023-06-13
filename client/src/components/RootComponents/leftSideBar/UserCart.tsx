import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { BorderBox, StyledImag, StyledUserCart } from '../../index';

const UserCart = (): ReactElement => {
  return (
    <BorderBox
      sx={{
        pb: '30px',
      }}
    >
      <StyledUserCart
        sx={{
          mt: '25px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            transition: '0.2s',
            cursor: 'pointer',
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
      </StyledUserCart>
    </BorderBox>
  );
};

export default UserCart;
