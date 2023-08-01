import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { StyledButton, StyledMyMatches } from '../../index';

import { MyMatchesProps } from '../../../interfaces';

const MyMatches = ({ id, title }: MyMatchesProps): ReactElement => {
  return (
    <StyledMyMatches
      sx={{
        mt: '15px',
        backgroundColor: theme => theme.palette.customColors.backGroundColor,
      }}
    >
      <StyledButton to={`/home/match/${id}`}>المزيد</StyledButton>
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        {title}
      </Typography>
    </StyledMyMatches>
  );
};

export default MyMatches;
