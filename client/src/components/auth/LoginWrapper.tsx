import React, { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import { Form, ImageWrap, SignButton, Wrapper } from './LoginWrapper.styled';
import InputWrap from './Input';
import TitleWrap from './Title';
import GoogleIcon from '../../assets/image-2.svg';
import LinkWrap from './Link';

interface Props {
  isPlayer: boolean;
  isSignup: boolean;
}

const LoginWrapper: FC<Props> = ({ isPlayer, isSignup }): ReactElement => {
  return <Wrapper isPlayer={isPlayer} />;
};

export default LoginWrapper;
