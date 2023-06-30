import {
  ActionButton,
  ActionsWrapper,
  UserName,
  ButtonsWrapper,
} from './Player.Styled';
import { playerActionsProps } from '../../interfaces/PLayerProfile';

const PlayerActions = ({ username }: playerActionsProps) => {
  return (
    <ActionsWrapper>
      <ButtonsWrapper>
        <ActionButton>متابعة</ActionButton>
        <ActionButton>مراسلة</ActionButton>
      </ButtonsWrapper>
      <UserName variant="h3">{username}</UserName>
    </ActionsWrapper>
  );
};

export default PlayerActions;
