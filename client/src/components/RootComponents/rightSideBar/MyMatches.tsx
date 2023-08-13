import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledMyMatches } from '../../index';

import { MyMatchesProps } from '../../../interfaces';

const MyMatches = ({ id, title }: MyMatchesProps): ReactElement => {
  const navigate = useNavigate();
  return (
    <StyledMyMatches
      sx={{
        mt: '15px',
        backgroundColor: theme => theme.palette.customColors.backGroundColor,
      }}
    >
      <StyledButton onClick={() => navigate(`/home/match/${id}`)}>
        المزيد
      </StyledButton>
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
