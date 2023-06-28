import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FollowsInfoWrapper } from './Player.Styled';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';
import PlayerStats from './PlayerStats';
import PlayerInformation from './PlayerInformation';

const Profile: React.FC = (): ReactElement => {
  const { id } = useParams<{ id: string }>();

  const fetchData = async () => {
    try {
      const { avater, cover, age, position } = await axios.get(
        `/api/v1/players/profile/2`,
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
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
