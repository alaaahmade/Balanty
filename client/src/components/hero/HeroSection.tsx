import React, { FC, ReactElement } from 'react';
import Hero from './Hero';
import { HeroSectionWrapper } from './HeroSection.styled';

const HeroSection: FC = (): ReactElement => {
  return (
    <HeroSectionWrapper id="mainLink">
      <Hero
        image="https://store-images.s-microsoft.com/image/apps.2127.14621801316397473.3c7c0657-fe34-4727-8700-af9b251375de.193acee6-86b5-42a2-82f7-6ab2d5acea1a?mode=scale&q=90&h=1080&w=1920"
        type="لاعب"
      />
      <Hero
        image="https://res.cloudinary.com/df3ydvucj/image/upload/v1687159864/stadium_tsdye8.avif"
        type="ملعب"
      />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
