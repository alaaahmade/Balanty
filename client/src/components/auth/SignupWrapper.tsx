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
}

const SignupWrapper: FC<Props> = ({ isPlayer }): ReactElement => {
  return (
    <Wrapper isPlayer={isPlayer}>
      <ImageWrap isPlayer={isPlayer} />
      <Form>
        {isPlayer ? (
          <TitleWrap caption="تسجيل كلاعب" />
        ) : (
          <TitleWrap caption="تسجيل كملعب" />
        )}
        <Box component="form" noValidate autoComplete="off">
          <InputWrap
            type="text"
            label={isPlayer ? 'اسم اللاعب' : 'اسم الملعب'}
            placeholder={isPlayer ? 'ادخل اسم اللاعب' : 'ادخل اسم الملعب'}
          />
          <InputWrap
            type="email"
            label="البريد الإلكتروني"
            placeholder="ادخل البريد الإلكتروني"
          />
          <InputWrap
            type="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
          />
          <InputWrap
            type="password"
            label="تأكيد كلمة المرور"
            placeholder="قم بتأكيد كلمة المرور"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isPlayer ? (
              <LinkWrap url="/signup/stadium" caption="تسجيل كملعب" />
            ) : (
              <LinkWrap url="/signup/player" caption="تسجيل كلاعب" />
            )}
            <OtherLink href="/">عودة إلى الرئيسية</OtherLink>
          </div>
          <SignButton variant="contained" disableElevation>
            تسجيل دخول
          </SignButton>
          <SignButton
            sx={{ background: '#E6E6E6 !important', color: '#868686' }}
            variant="contained"
            disableElevation
          >
            سجٍل من خلال
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
