import { Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { StyledButton } from '../styledRootComponent/SideComponents';
import { ActionsWrapper } from './Player.Styled';

const PlayerActions: React.FC = (): ReactElement => {
  return (
    <ActionsWrapper>
      <StyledButton>متابعة</StyledButton>
      <StyledButton>مراسلة</StyledButton>
      <Typography>أحمد</Typography>
    </ActionsWrapper>
  );
};

export default PlayerActions;
