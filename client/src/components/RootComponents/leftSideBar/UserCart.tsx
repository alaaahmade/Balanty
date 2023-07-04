import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { BorderBox, StyledImag, StyledUserCart } from '../../index';

const UserCart = (): ReactElement => {
  return (
    <BorderBox>
      <StyledUserCart
        sx={{
          m: '15px 0',
        }}
      >
        <Typography
          sx={{
            transition: '0.2s',
            '& :hover': {
              color: '#2CB674',
            },
          }}
        >
          محمد عبد الصمد
        </Typography>
        <StyledImag
          sx={{
            mr: '30px',
            backgroundImage: `url(https://static.dw.com/image/54662995_101.jpg)`,
          }}
        />
      </StyledUserCart>
    </BorderBox>
  );
};

export default UserCart;
