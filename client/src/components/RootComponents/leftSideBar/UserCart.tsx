import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';

import { BorderBox, StyledImag, StyledUserCart } from '../../index';

const UserCart: FC<{ username: string; userId: number }> = ({
  username,
  userId,
}): ReactElement => {
  const navigate = useNavigate();

  return (
    <BorderBox
      sx={{
        pb: '30px',
      }}
      onClick={() => {
        navigate(`/profile/stadium/${userId}`);
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
          {username}
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
