import React, { ReactElement } from 'react';
import {
  ActionButton,
  ActionsWrapper,
  UserName,
  ButtonsWrapper,
} from './Player.Styled';

const PlayerActions: React.FC = (): ReactElement => {
  return (
    <ActionsWrapper>
      <ButtonsWrapper>
        <ActionButton>متابعة</ActionButton>
        <ActionButton>مراسلة</ActionButton>
      </ButtonsWrapper>
      <UserName variant="h3"> أحمد عبدالله</UserName>
    </ActionsWrapper>
  );
};

export default PlayerActions;
