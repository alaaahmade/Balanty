import { useEffect, useState, useContext } from 'react';
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
import { AuthContext, UpdateGalleryContext } from '../context';

const PlayerProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [cover, setCover] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [phone, setPhone] = useState<number>(0);
  const [playerId, setPlayerId] = useState<number>(0);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const { Agree } = useContext(UpdateGalleryContext);

  const [EditAble, setEditAble] = useState(
    user ? ((+user.id === +(id as string)) as boolean) : false,
  );

  const fetchData = async (Id: string) => {
    try {
      const { data } = await axios.get(`/api/v1/players/profile/${Id}`);
      setCover(data.data.Player.cover);
      setAvatar(data.data.Player.avatar);
      setPhone(data.data.phone);
      setUsername(data.data.username);
      setBio(data.data.Player.bio);
      setPosition(data.data.Player.position);
      setAge(data.data.Player.age);
      setPlayerId(data.data.Player.id);
    } catch (err) {
      if ((err as error).response?.status === 401) {
        navigate('/pageNotFound');
      } else {
        navigate('/serverError');
      }
    }
  };

  useEffect(() => {
    fetchData(id as string);
  }, [id, Agree]);

  useEffect(() => {
    setEditAble(user ? ((+user.id === +(id as string)) as boolean) : false);
  }, [id]);

  return (
    <>
      <PlayerBackground
        cover={
          cover ||
          'https://frontofficesports.com/wp-content/uploads/2022/12/FOS-PM-22-12.20-Ronaldo-Saudi-2030.jpg'
        }
        avatar={
          avatar || 'https://s.hs-data.com/bilder/spieler/gross/13029.jpg'
        }
        playerId={playerId}
      />
      <PlayerActions username={username} />
      <FollowsInfoWrapper>
        <PlayerInformation
          setEditMode={setEditMode}
          editMode={editMode}
          phone={phone}
          age={age}
          position={position}
          bio={bio}
          EditAble={EditAble}
          fetchData={fetchData}
        />
        <PlayerStats />
      </FollowsInfoWrapper>
    </>
  );
};

export default PlayerProfile;
