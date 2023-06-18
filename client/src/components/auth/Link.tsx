import React, { FC } from 'react';
import { OtherLink } from './Login.styled';

type Props = {
  isPlayer: boolean;
  isSignup: boolean;
};

const LinkWrap: FC<Props> = ({ isPlayer, isSignup }) => {
  let caption = '';
  let url = '';
  if (isPlayer && isSignup) {
    caption = 'تسجيل كملعب';
    url = '/signup/stadium';
  } else if (isPlayer && !isSignup) {
    caption = 'دخول كملعب';
    url = '/login/stadium';
  } else if (!isSignup) {
    caption = 'الدخول كلاعب';
    url = '/login/player';
  } else {
    caption = 'تسجيل كلاعب';
    url = '/signup/player';
  }
  return <OtherLink href={url}>{caption}</OtherLink>;
};

export default LinkWrap;
