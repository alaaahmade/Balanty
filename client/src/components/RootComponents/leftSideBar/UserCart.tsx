import { FC, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Typography } from '@mui/material';

import axios from 'axios';
import { BorderBox, StyledImag, StyledUserCart } from '../../index';

import { UserCardProps } from '../../../interfaces';

const UserCart: FC<UserCardProps> = ({
  username,
  userId,
  role,
}): ReactElement => {
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

  const getAvatar = async () => {
    try {
      if (role === 'stadium') {
        const { data } = await axios.get(`/api/v1/stadiums/details/${userId}`);
        setAvatar(data.data[0].image);
      } else {
        const { data } = await axios.get(`/api/v1/players/avatar/${userId}`);
        setAvatar(data.data);
      }
    } catch (error) {
      navigate('/serverError');
    }
  };

  useEffect(() => {
    getAvatar();
  }, [userId]);

  return (
    <BorderBox
      sx={{
        pb: '30px',
      }}
      onClick={() => {
        navigate(`/profile/${role}/${userId}`);
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
        {avatar ? (
          <StyledImag src={avatar} alt="userImage" />
        ) : (
          <Avatargit >{username[0]}</Avatargit>
        )}
      </StyledUserCart>
    </BorderBox>
  );
};

export default UserCart;
