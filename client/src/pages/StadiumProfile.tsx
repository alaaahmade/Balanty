import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BioSection,
  ImageSlider,
  ProfileCalender,
} from '../components/stadiumProfile';
import { UserData } from '../interfaces/StadiumProfile';

const StadiumProfile = () => {
  const [userData, setUserData] = useState<UserData | undefined>();
  const [gallery, setGallery] = useState({
    id: 0,
    image1: '',
    image2: '',
    image3: '',
    image4: '',
  });

  const { id } = useParams();
  const fetchProfileData = async (stadiumId: string) => {
    const res = await fetch(`/api/v1/stadiums/profile/${stadiumId}`);
    const jsonData = await res.json();
    setGallery(jsonData.data.Stadium.stadiumGallery[0]);
    setUserData(jsonData.data as UserData);
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
          width: 'calc(100% - 240px)',
          height: '380px',
          gap: '30px',
          m: '2% 3%',
        }}
      >
        <BioSection userData={userData} />
        <ProfileCalender />
      </Box>
    </Box>
  );
};

export default StadiumProfile;
