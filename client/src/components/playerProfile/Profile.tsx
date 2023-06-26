import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { FollowsInfoWrapper, FollowsWrapper } from './Player.Styled';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';
import PlayerStats from './PlayerStats';
import PlayerInformation from './PlayerInformation';
import PlayerFollows from './PlayerFollows';

const Profile: React.FC = (): ReactElement => {
  return (
    <>
      <PlayerBackground />
      <PlayerActions />
      <FollowsInfoWrapper>
        <PlayerInformation />
        <PlayerStats />
      </FollowsInfoWrapper>
    </>
  );
};
export default Profile;
