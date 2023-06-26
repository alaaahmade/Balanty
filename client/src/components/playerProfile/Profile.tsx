import React, { ReactElement } from 'react';
import { FollowsInfoWrapper } from './Player.Styled';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';
import PlayerStats from './PlayerStats';
import PlayerInformation from './PlayerInformation';

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
