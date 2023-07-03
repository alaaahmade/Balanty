import React, { FC, ReactElement, useContext } from 'react';
import { Alert, AlertTitle, Box, Stack } from '@mui/material';
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
import { loginSchema } from '../../validation';
import { loginProps, AuthContextData } from '../../interfaces';
import { AuthContext } from '../../context';

const LoginWrapper: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginProps>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const authContext = useContext(AuthContext);
  const { login, errorMessage } = authContext as AuthContextData;

  const { pathname } = useLocation();
  let isplayer = true;

  if (!(pathname.split('/')[1] === 'player')) {
    isplayer = false;
  }
  const onSubmit: SubmitHandler<loginProps> = async data => {
    await login(data.username, data.password);
  };

  return (
    <Wrapper isplayer={isplayer}>
      <ImageWrap isplayer={isplayer} />
      <Form>
        {isplayer ? (
          <TitleWrap caption="دخول كلاعب" />
        ) : (
          <TitleWrap caption="دخول كملعب" />
        )}
        <Box component="form" noValidate autoComplete="off">
          <InputWrap
            name="username"
            type="text"
            label={isplayer ? 'اسم اللاعب' : 'اسم الملعب'}
            placeholder={isplayer ? 'ادخل اسم اللاعب' : 'ادخل اسم الملعب'}
            errors={errors}
            control={control}
          />
          <InputWrap
            control={control}
            name="password"
            type="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
            errors={errors}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isplayer ? (
              <LinkWrap url="/player/signup" caption="تسجيل كلاعب" />
            ) : (
              <LinkWrap url="/stadium/signup" caption="تسجيل كملعب" />
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
            تسجيل دخول من خلال
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
      {errorMessage && (
        <Stack
          sx={{
            width: '45%',
            position: 'absolute',
            right: '2rem',
            bottom: '2rem',
            zIndex: '1000',
          }}
          spacing={2}
        >
          <Alert severity="error">
            {errorMessage} — <strong>تفحصه!</strong>
          </Alert>
        </Stack>
      )}
    </Wrapper>
  );
};

export default LoginWrapper;
