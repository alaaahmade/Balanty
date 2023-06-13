import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import TeamName from './TeamName';
import { StyledTeamBox, StyledWorldMatches } from '../../index';

const WorldMatch = (): ReactElement => {
  return (
    <StyledWorldMatches
      sx={{
        mt: '15px',
      }}
    >
      <Typography
        sx={{
          mt: '5px',
        }}
      >
        الساعة: 12:00
      </Typography>
      <StyledTeamBox>
        <TeamName text="ريال مدريد" />
        VS
        <TeamName text="ريال مدريد" />
      </StyledTeamBox>
    </StyledWorldMatches>
  );
};

// we gona to fetch matches from this Api: https://api.football-data.org/v4/matches

export default WorldMatch;
