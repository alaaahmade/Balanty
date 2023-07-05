import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Match {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  seats: number;
}

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          {match.title}
        </Typography>
        <Typography variant="body1">
          Description: {match.description}
        </Typography>
        <Typography variant="body1">Start Date: {match.startDate}</Typography>
        <Typography variant="body1">End Date: {match.endDate}</Typography>
        <Typography variant="body1">Seats: {match.seats}</Typography>
        {/* <Typography variant="body1">Ground: {match.stadium.ground}</Typography> */}
        {/* <Typography variant="body1">
          Address: {match.stadium.address}
        </Typography> */}
        {/* <Typography variant="body1">
          Position: {match.owner.position}
        </Typography>
        <Typography variant="body1">Cover: {match.owner.cover}</Typography> */}
      </CardContent>
    </Card>
  );
};

export default MatchCard;
