import React, { FC, ReactElement, useContext } from 'react';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { signupProps, AuthContextData } from '../../interfaces';
import { signupSchema } from '../../validation';
import { AuthContext } from '../../context';

const SignupWrapper: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signupProps>({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const authContext = useContext(AuthContext);
  const { signup } = authContext as AuthContextData;

  const { pathname } = useLocation();
  let isPlayer = true;

  if (!(pathname.split('/')[1] === 'player')) {
    isPlayer = false;
  }
  const onSubmit: SubmitHandler<signupProps> = async data => {
    await signup(data, isPlayer);
  };
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
            name="username"
            type="text"
            label={isPlayer ? 'اسم اللاعب' : 'اسم الملعب'}
            placeholder={isPlayer ? 'ادخل اسم اللاعب' : 'ادخل اسم الملعب'}
            errors={errors}
            control={control}
          />
          <InputWrap
            name="email"
            type="email"
            label="البريد الإلكتروني"
            placeholder="ادخل البريد الإلكتروني"
            errors={errors}
            control={control}
          />
          <InputWrap
            name="phone"
            type="tel"
            label="رقم الهاتف"
            placeholder="ادخل رقم الهاتف"
            errors={errors}
            control={control}
          />
          <InputWrap
            name="password"
            type="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
            errors={errors}
            control={control}
          />
          <InputWrap
            name="confirmPassword"
            type="password"
            label="تأكيد كلمة المرور"
            placeholder="قم بتأكيد كلمة المرور"
            errors={errors}
            control={control}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isPlayer ? (
              <LinkWrap url="/player/login" caption="دخول كلاعب" />
            ) : (
              <LinkWrap url="/stadium/login" caption="دخول كملعب" />
            )}
            <OtherLink href="/">عودة إلى الرئيسية</OtherLink>
          </div>
          <SignButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disableElevation
          >
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
