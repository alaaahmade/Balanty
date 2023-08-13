import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FollowButton, PlayerCard } from './PlayerPage.styled';
import { customPalette } from '../../interfaces';

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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/player/${playerData.id}`);
  };
  return (
    <PlayerCard
      sx={{
        backgroundColor: theme =>
          (theme.palette as customPalette).customColors.grayColor,
        color: theme => theme.palette.primary.contrastText,
      }}
    >
      <FollowButton onClick={handleClick}>المزيد</FollowButton>
      <Typography
        sx={{ flexGrow: '2', direction: 'rtl', mr: '20px' }}
        gutterBottom
      >
        {playerData.username}
      </Typography>

      <Avatar
        alt="Remy Sharp"
        src={`${
          playerData.Player.avatar ||
          'https://i.insider.com/5fbe52b350e71a00115574c4?width=700}'
        } `}
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
