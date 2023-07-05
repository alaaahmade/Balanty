import React, { FC, ReactElement } from 'react';
import { Title } from './LoginWrapper.styled';

type Props = {
  caption: string;
};

const TitleWrap: FC<Props> = ({ caption }): ReactElement => {
  return <Title variant="h5">{caption}</Title>;
};

export default TitleWrap;
