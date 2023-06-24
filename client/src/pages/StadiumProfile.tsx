import { Box } from '@mui/system';
import {
  BioSection,
  ImageSlider,
  ProfileCalender,
} from '../components/stadiumProfile';

const StadiumProfile = () => {
  return (
    <Box>
      <ImageSlider />
      <BioSection />
      <ProfileCalender />
    </Box>
  );
};

export default StadiumProfile;
