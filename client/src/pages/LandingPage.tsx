import React, { FC, ReactElement } from 'react';
import {
  BestStadiums,
  Header,
  HeroSection,
  Definition,
  Features,
  Contact,
} from '../components';

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <HeroSection />
      <Definition />
      <Features />
      <BestStadiums />
      <Contact />
    </>
  );
};

export default LandingPage;
