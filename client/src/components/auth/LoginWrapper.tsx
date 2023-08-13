import React, { FC, ReactElement, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Control, SubmitHandler, useForm } from 'react-hook-form';
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
import { loginProps, AuthContextData, signupProps } from '../../interfaces';
import { AuthContext } from '../../context';
import ErrorAlert from '../ErrorAlert';

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

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const { login, errorMessage, isLoading } = authContext as AuthContextData;

  const { pathname } = useLocation();
  let isplayer = 'true';

  if (!(pathname.split('/')[1] === 'player')) {
    isplayer = 'false';
  }
  const onSubmit: SubmitHandler<loginProps> = async data => {
    await login(data.username, data.password);
    navigate('/home');
  };

  return (
    <Wrapper isplayer={isplayer}>
      <ImageWrap isplayer={isplayer} />
      <Form>
        {isplayer === 'true' ? (
          <TitleWrap caption="دخول كلاعب" />
        ) : (
          <TitleWrap caption="دخول كملعب" />
        )}
        <Box component="form" noValidate autoComplete="off">
          <InputWrap
            name="username"
            type="text"
            label={isplayer === 'true' ? 'اسم اللاعب' : 'اسم الملعب'}
            placeholder={
              isplayer === 'true' ? 'ادخل اسم اللاعب' : 'ادخل اسم الملعب'
            }
            errors={errors}
            control={control as unknown as Control<signupProps>}
          />
          <InputWrap
            control={control as unknown as Control<signupProps>}
            name="password"
            type="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
            errors={errors}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isplayer === 'true' ? (
              <LinkWrap url="/player/signup" caption="تسجيل كلاعب" />
            ) : (
              <LinkWrap url="/stadium/signup" caption="تسجيل كملعب" />
            )}
            <OtherLink href="/">عودة إلى الرئيسية</OtherLink>
          </div>
          <SignButton
            sx={{
              color: 'white',
              maxHeight: '44px',
              minHeight: '44px',
              position: 'relative',
            }}
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disableElevation
            disabled={isLoading}
          >
            {(isLoading && (
              <ThreeDots
                height="60"
                width="60"
                radius="9"
                color="#2CB674"
                ariaLabel="three-dots-loading"
                visible
                wrapperStyle={{
                  position: 'absolute',
                  top: '-7px',
                  left: '50%',
                  transform: 'translate(-50%)',
                }}
              />
            )) ||
              'تسجيل دخول'}
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
      {errorMessage && <ErrorAlert errorMessage={errorMessage} />}
    </Wrapper>
  );
};

export default LoginWrapper;
