import { useTheme } from '@mui/material';
import {
  ActionButton,
  ActionsWrapper,
  UserName,
  ButtonsWrapper,
} from './Player.Styled';
import { playerActionsProps } from '../../interfaces/PLayerProfile';
import { customPalette } from '../../interfaces';

const PlayerActions = ({ username }: playerActionsProps) => {
  const currentTheme = useTheme();
  return (
    <ActionsWrapper>
      <ButtonsWrapper>
        <ActionButton>متابعة</ActionButton>
        <ActionButton>مراسلة</ActionButton>
      </ButtonsWrapper>
      <UserName
        sx={{
          color: (currentTheme.palette as customPalette).primary
            .contrastText as string,
        }}
        variant="h3"
      >
        {username}
      </UserName>
    </ActionsWrapper>
  );
};

export default PlayerActions;
