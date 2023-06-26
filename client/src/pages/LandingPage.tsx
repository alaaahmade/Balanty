import React, { FC, ReactElement } from 'react';
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
    <>
      <Header />
      <HeroSection />
      <Definition />
      <Features />
      <BestStadiums />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
