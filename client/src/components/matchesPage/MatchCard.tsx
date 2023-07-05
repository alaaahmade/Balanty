import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';
// import { styled } from '@mui/material/styles';

interface Match {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  seats: number;
  stadiumMatch: {
    username: string;
  };
  ownerUser: {
    username: string;
  };
  Players: [];
}

interface MatchCardProps {
  match: Match;
}

const CenteredCard = styled(Card)({
  margin: 'auto',
  marginTop: '20px',
});

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <CenteredCard>
      <CardContent>
        <Typography variant="h6" component="h3">
          {match.title}
        </Typography>
        <Typography variant="body1">
          {match.startDate}بداية المباراة:
        </Typography>
        <Typography variant="body1"> {match.endDate}نهاية المباارة:</Typography>
        <Typography variant="body1"> {match.seats}عدد المقاعد:</Typography>
        <Typography variant="body1">
          {match.stadiumMatch.username}الملعب:
        </Typography>
        <Typography variant="body1">
          مسؤول اللعبة: {match.ownerUser.username}
        </Typography>
      </CardContent>
    </CenteredCard>
  );
};

export default MatchCard;
