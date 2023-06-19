import React, { FC, ReactElement } from 'react';
import { Description, DescriptionWrap, Title } from './HeroSection.styled';

interface Props {
  title: string;
  description: string;
}

const HeroDescription: FC<Props> = ({ title, description }): ReactElement => {
  return (
    <DescriptionWrap className="description-wrap">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </DescriptionWrap>
  );
};

export default HeroDescription;
