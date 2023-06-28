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
import { StadiumGallery } from '../interfaces/StadiumProfile';

const StadiumProfile = (): ReactElement => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editGallery, setEditGallery] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const [gallery, setGallery] = useState<StadiumGallery[]>([
    {
      id: 0,
      image: '',
      StadiumId: 0,
    },
  ]);

  const navigate = useNavigate();

  const { id } = useParams();
  const fetchProfileData = async (userId: string) => {
    try {
      const { data } = await axios.get(`/api/v1/stadiums/profile/${userId}`);

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
  }, [id, editMode, editGallery]);
  return (
    <Box>
      <ImageSlider
        editGallery={editGallery}
        setEditGallery={setEditGallery}
        gallery={gallery}
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
      />
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
