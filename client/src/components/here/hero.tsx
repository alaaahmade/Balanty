import React, { FC } from 'react';

interface Props {
  image: string;
  type: string;
}

const Hero: FC<Props> = ({ image, type }) => {
  console.log(image, type);

  return <>Hero</>;
};

export default Hero;
