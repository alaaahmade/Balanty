import { FC, ReactElement } from 'react';
import { Box } from '@mui/system';
import {
  BestStadiums,
  Header,
  HeroSection,
  Definition,
  Features,
  Contact,
} from '../components';
import Footer from '../components/footer/footer';

const LandingPage: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        mt: '5%',
      }}
    >
      <Header />
      <HeroSection />
      <Definition />
      <Features />
      <BestStadiums />
      <Contact />
      <Footer />
    </Box>
  );
};

export default LandingPage;
