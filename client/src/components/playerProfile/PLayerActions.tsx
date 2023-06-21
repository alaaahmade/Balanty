import { Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { StyledButton } from '../styledRootComponent/SideComponents';
import { ActionsWrapper, UserName } from './Player.Styled';

const PlayerActions: React.FC = (): ReactElement => {
  return (
    <ActionsWrapper>
      <div>
        <StyledButton>متابعة</StyledButton>
        <StyledButton>مراسلة</StyledButton>
      </div>
      <div>
        <UserName>عبدالله</UserName>
      </div>
    </ActionsWrapper>
  );
};

export default PlayerActions;
