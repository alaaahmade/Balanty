import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  PlayerInformation,
  PlayerBackground,
  PlayerStats,
  PlayerActions,
} from '../components/playerProfile';
import { FollowsInfoWrapper } from '../components/playerProfile/Player.Styled';
import { error } from '../interfaces/PLayerProfile';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [cover, setCover] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [phone, setPhone] = useState<number>(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchData = async (playerId: string) => {
    try {
      const { data } = await axios.get(`/api/v1/players/profile/${playerId}`);
      setCover(data.data.Player.cover);
      setAvatar(data.data.Player.avatar);
      setPhone(data.data.phone);
      setUsername(data.data.username);
      setBio(data.data.Player.bio);
      setPosition(data.data.Player.position);
      setAge(data.data.Player.age);
    } catch (err) {
      if ((err as error).response?.status === 401) {
        navigate('/pageNotFound');
      } else {
        navigate('/serverError');
      }
    }
  };

  useEffect(() => {
    fetchData(id ?? '');
  }, [id]);

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
