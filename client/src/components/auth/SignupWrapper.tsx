import React, { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import {
  Form,
  ImageWrap,
  OtherLink,
  SignButton,
  Wrapper,
} from './LoginWrapper.styled';
import InputWrap from './Input';
import TitleWrap from './Title';
import GoogleIcon from '../../assets/image-2.svg';
import LinkWrap from './Link';

interface Props {
  isPlayer: boolean;
  isSignup: boolean;
}

const SignupWrapper: FC<Props> = ({ isPlayer, isSignup }): ReactElement => {
  return (
    <Wrapper isPlayer={isPlayer}>
      <ImageWrap isPlayer={isPlayer} />
      <Form>
        <TitleWrap isPlayer={isPlayer} isSignup={isSignup} />
        <Box component="form" noValidate autoComplete="off">
          <InputWrap
            type="text"
            label={isPlayer ? 'اسم اللاعب' : 'اسم الملعب'}
            placeholder={isPlayer ? 'ادخل اسم اللاعب' : 'ادخل اسم الملعب'}
          />
          {isSignup && (
            <InputWrap
              type="email"
              label="البريد الإلكتروني"
              placeholder="ادخل البريد الإلكتروني"
            />
          )}
          <InputWrap
            type="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
          />
          {isSignup && (
            <InputWrap
              type="password"
              label="تأكيد كلمة المرور"
              placeholder="قم بتأكيد كلمة المرور"
            />
          )}
          <SignButton variant="contained" disableElevation>
            {isSignup ? 'سجل الان' : 'تسجيل دخول'}
          </SignButton>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <LinkWrap isPlayer={isPlayer} isSignup={isSignup} />
            <OtherLink href="/">عودة إلى الرئيسية</OtherLink>
          </div>
          <SignButton
            sx={{ background: '#E6E6E6 !important', color: '#868686' }}
            variant="contained"
            disableElevation
          >
            {isSignup ? 'سجِل من خلال' : 'تسجيل دخول من خلال'}
            <img
              style={{
                width: '20px',
                height: '20px',
                verticalAlign: 'middle',
                marginRight: '0.7rem',
              }}
              src={GoogleIcon}
              alt="Google Icon"
            />
          </SignButton>
        </Box>
      </Form>
    </Wrapper>
  );
};

export default SignupWrapper;
