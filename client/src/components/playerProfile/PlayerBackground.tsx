import { Avatar } from '@mui/material';
import { Cover, AvatarWrapper, MainWrapper } from './Player.Styled';
import { playerBackgroundProps } from '../../interfaces/PLayerProfile';

const PlayerBackground = ({ avatar, cover }: playerBackgroundProps) => {
  return (
    <MainWrapper>
      <AvatarWrapper>
        <Cover
          sx={{
            backgroundImage: `url(${cover})`,
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{
            width: 145,
            height: 145,
            marginTop: -10,
            marginRight: '2.5em',
            border: '6px solid ',
            borderColor: theme => theme.palette.primary.backGroundColor,
          }}
        />
      </AvatarWrapper>
    </MainWrapper>
  );
};

export default PlayerBackground;
