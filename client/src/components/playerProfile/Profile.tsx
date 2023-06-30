import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FollowsInfoWrapper } from './Player.Styled';
import PlayerActions from './PLayerActions';
import PlayerBackground from './PlayerBackground';
import PlayerStats from './PlayerStats';
import PlayerInformation from './PlayerInformation';
import { UserData, player } from '../../interfaces/PLayerProfile';

const Profile: React.FC = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [editMode, setEditMode] = useState(false);
  const [cover, setCover] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [phone, setPhone] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/v1/players/profile/2`);
        setCover(data.data.Player.cover);
        setAvatar(data.data.Player.avatar);
        setPhone(data.data.phone);
        setUsername(data.data.username);
        setBio(data.data.Player.bio);
        setPosition(data.data.Player.position);
        setAge(data.data.Player.age);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {cover && avatar && <PlayerBackground cover={cover} avatar={avatar} />}
      <PlayerActions username={username} />
      <FollowsInfoWrapper>
        <PlayerInformation
          setEditMode={setEditMode}
          editMode={editMode}
          phone={phone}
          age={age}
          position={position}
          bio={bio}
        />
        <PlayerStats />
      </FollowsInfoWrapper>
    </>
  );
};

export default Profile;
