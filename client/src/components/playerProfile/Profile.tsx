import React, { ReactElement } from 'react';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';

const Profile: React.FC = (): ReactElement => {
  return (
    <>
      <PlayerBackground />
      <PlayerActions />
    </>
  );
};
export default Profile;
