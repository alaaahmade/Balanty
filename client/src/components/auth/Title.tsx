import React, { FC } from 'react';
import { Title } from './Login.styled';

type Props = {
  isPlayer: boolean;
  isSignup: boolean;
};

const TitleWrap: FC<Props> = ({ isPlayer, isSignup }) => {
  let caption = '';
  if (isPlayer && isSignup) {
    caption = 'تسجيل في الموقع';
  } else if (isPlayer && !isSignup) {
    caption = 'تسجيل دخول';
  } else if (!isSignup) {
    caption = 'الدخول كملعب';
  } else {
    caption = 'إضافة ملعب';
  }
  return <Title variant="h5">{caption}</Title>;
};

export default TitleWrap;
