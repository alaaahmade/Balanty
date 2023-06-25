import React, { ReactElement } from 'react';
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
      <PlayerStats />
      <FollowsInfoWrapper>
        <PlayerInformation />
        <FollowsWrapper>
          {/* <PlayerFollows action="إلغاء المتابعة" username="eman alabsi" /> */}
        </FollowsWrapper>
      </FollowsInfoWrapper>
    </>
  );
};
export default Profile;
