import React, { FC, ReactElement } from 'react';
import { OtherLink } from './LoginWrapper.styled';

type Props = {
  url: string;
  caption: string;
};

const LinkWrap: FC<Props> = ({ url, caption }): ReactElement => {
  return <OtherLink href={url}>{caption}</OtherLink>;
};

export default LinkWrap;
