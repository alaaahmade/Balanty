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
import { RedirectProvider } from '../context/RedirectContext';

const LandingPage: FC = (): ReactElement => {
  return (
    <RedirectProvider>
      <Header />
      <HeroSection />
      <Definition />
      <Features />
      <BestStadiums />
      <Contact />
      <Footer />
    </RedirectProvider>
  );
};

export default LandingPage;
