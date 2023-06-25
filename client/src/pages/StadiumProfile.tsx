import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  BioSection,
  ImageSlider,
  ProfileCalender,
} from '../components/stadiumProfile';
import { UserData } from '../interfaces/StadiumProfile';

const StadiumProfile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [gallery, setGallery] = useState({
    id: 0,
    image1: '',
    image2: '',
    image3: '',
    image4: '',
  });

  const { id } = useParams();
  const fetchProfileData = async (stadiumId: string) => {
    const { data } = await axios.get(`/api/v1/stadiums/profile/${stadiumId}`);

    setGallery(data.data.Stadium.stadiumGallery[0]);
    setUserData(data.data as UserData);
  };

  useEffect(() => {
    fetchProfileData(id ?? '');
  }, []);
  return (
    <Box>
      <ImageSlider gallery={gallery} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'calc(100% - 310px)',
          height: '480px',
          gap: '30px',
          m: '17% 3% 3% 3%',
        }}
      >
        {userData && <BioSection userData={userData} />}
        <ProfileCalender />
      </Box>
    </Box>
  );
};

export default StadiumProfile;
