import React, { FC } from 'react';
import { OtherLink } from './LoginWrapper.styled';

type Props = {
  url: string;
  caption: string;
};

const LinkWrap: FC<Props> = ({ url, caption }) => {
  return <OtherLink href={url}>{caption}</OtherLink>;
};

export default LinkWrap;
