import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FollowsInfoWrapper } from './Player.Styled';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';
import PlayerStats from './PlayerStats';
import PlayerInformation from './PlayerInformation';
import { UserData } from '../../interfaces/PLayerProfile';

const Profile: React.FC = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [editMode, setEditMode] = useState(false);
  const fetchData = async () => {
    try {
      const data = await axios.get(`/api/v1/players/profile/2`);
      const { age, avatar, bio, cover, position } = data.data.data;
      console.log({ age, avatar, bio, cover, position });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <PlayerBackground cover={cover} avatar={avater} />
      <PlayerActions />
      <FollowsInfoWrapper>
        <PlayerInformation
          setEditMode={setEditMode}
          editMode={editMode}
          userData={userData}
        />
        <PlayerStats />
      </FollowsInfoWrapper>
    </>
  );
};
export default Profile;
