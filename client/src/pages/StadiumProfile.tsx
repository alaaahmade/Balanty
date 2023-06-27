import { Box } from '@mui/system';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  BioSection,
  ImageSlider,
  ProfileCalender,
} from '../components/stadiumProfile';
import { UserData, errorI } from '../interfaces';

const StadiumProfile = (): ReactElement => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [editMode, setEditMode] = useState(false);

  const [gallery, setGallery] = useState([
    {
      id: 0,
      image: '',
    },
  ]);

  const navigate = useNavigate();

  const { id } = useParams();
  const fetchProfileData = async (stadiumId: string) => {
    try {
      const { data } = await axios.get(`/api/v1/stadiums/profile/${stadiumId}`);

      setGallery(data.data.Stadium.stadiumGallery);
      setUserData(data.data as UserData);
    } catch (error) {
      if ((error as errorI).response?.status === 401) {
        navigate('/pageNotFound');
      } else {
        navigate('/serverError');
      }
    }
  };

  useEffect(() => {
    fetchProfileData(id ?? '');
  }, [id, editMode]);
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
        {userData && (
          <BioSection
            setEditMode={setEditMode}
            editMode={editMode}
            userData={userData}
          />
        )}
        <ProfileCalender />
      </Box>
    </Box>
  );
};

export default StadiumProfile;
