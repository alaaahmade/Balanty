import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
import { FollowsInfoWrapper } from './Player.Styled';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';
import PlayerStats from './PlayerStats';
import PlayerInformation from './PlayerInformation';

const Profile: React.FC = (): ReactElement => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/profile/${id}`);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
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
