import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { FollowButton, PlayerCard } from './PlayerPage.styled';

interface PlayerDataProps {
  id: number;
  username: string;
  Player: {
    id: number;
    avatar: string;
    UserId: number;
  };
}

const Card: React.FC<{ playerData: PlayerDataProps }> = ({ playerData }) => {
  return (
    <PlayerCard>
      <FollowButton>متابعة</FollowButton>
      <Typography sx={{ flexGrow: '2', direction: 'rtl' }} gutterBottom>
        {playerData.username}
      </Typography>

      <Avatar
        alt="Remy Sharp"
        src="https://i.insider.com/5fbe52b350e71a00115574c4?width=700"
        sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </PlayerCard>
  );
};

export default Card;
