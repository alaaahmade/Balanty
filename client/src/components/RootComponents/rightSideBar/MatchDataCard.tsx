import React, { FC } from 'react';
import { InputLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Match } from '../../../interfaces';
import { StyledButton } from '../../styledRootComponent/SideComponents';

const MatchDataCard: FC<{ match: Match }> = ({ match }) => {
  const seatsNum = match.seats - match.Players.length;
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: '1.5rem' }}>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: theme => theme.palette.primary.contrastText,
          mb: '1rem',
        }}
      >
        {match.title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '15px',
          color: theme => theme.palette.primary.contrastText,
          m: '10px',
        }}
      >
        <Typography variant="body1">
          {new Date(match.startDate).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
          <InputLabel
            sx={{
              fontWeight: 'bold',
              display: 'inline',
              color: theme => theme.palette.primary.contrastText,
              ml: '10px',
            }}
          >
            : الوقت
          </InputLabel>
        </Typography>
        <Typography variant="body1">
          {match.seats}/{seatsNum}
          <InputLabel
            sx={{
              fontWeight: 'bold',
              display: 'inline',
              color: theme => theme.palette.primary.contrastText,
              ml: '5px',
            }}
          >
            : المقاعد المتاحة
          </InputLabel>
        </Typography>
        <Typography variant="body1">
          <InputLabel
            sx={{
              fontWeight: 'bold',
              display: 'inline',
              ml: '10px',
              color: theme => theme.palette.primary.contrastText,
            }}
          >
            الملعب:
          </InputLabel>
          {match.stadiumMatch.username}
        </Typography>
        <Typography variant="body1">
          {match.ownerUser.username}
          <InputLabel
            sx={{
              fontWeight: 'bold',
              display: 'inline',
              color: '#000000',
            }}
          />

          <InputLabel
            sx={{
              fontWeight: 'bold',
              display: 'inline',
              ml: '10px',
              color: theme => theme.palette.primary.contrastText,
            }}
          >
            :المسؤول عن اللعبة
          </InputLabel>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          mt: '1.5rem',
        }}
      >
        <StyledButton
          type="submit"
          onClick={() => {
            navigate(`/profile/stadium/${match.stadiumId}`);
          }}
        >
          زيارة الملعب
        </StyledButton>
      </Box>
    </Box>
  );
};

export default MatchDataCard;
