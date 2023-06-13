import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { StyledButton, StyledMyMatches } from '../../index';

interface MyMatchesProps {
  stadium: string;
}

const MyMatches = ({ stadium }: MyMatchesProps): ReactElement => {
  return (
    <StyledMyMatches
      sx={{
        mt: '15px',
      }}
    >
      <StyledButton
        sx={{
          width: '65px',
          height: '30px',
        }}
      >
        المزيد
      </StyledButton>
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        {stadium}
      </Typography>
    </StyledMyMatches>
  );
};

export default MyMatches;
