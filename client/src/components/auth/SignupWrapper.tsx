import { ThreeDots } from 'react-loader-spinner';
import React, { FC, ReactElement, useContext } from 'react';

import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { signupProps } from '../../interfaces';
import { signupSchema } from '../../validation';
import { AuthContext } from '../../context';
import ErrorAlert from '../ErrorAlert';

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
  const navigate = useNavigate();
  const { signup, errorMessage, isLoading } = useContext(AuthContext);

  const { pathname } = useLocation();
  let isplayer = 'true';

  if (!(pathname.split('/')[1] === 'player')) {
    isplayer = 'false';
  }
  const onSubmit: SubmitHandler<signupProps> = async data => {
    await signup(data, isplayer);
    navigate('/home');
  };
  return (
    <Wrapper isplayer={isplayer}>
      <ImageWrap isplayer={isplayer} />
      <Form>
        {isplayer === 'true' ? (
          <TitleWrap caption="تسجيل كلاعب" />
        ) : (
          <TitleWrap caption="تسجيل كملعب" />
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
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isplayer === 'true' ? (
              <LinkWrap url="/player/login" caption="دخول كلاعب" />
            ) : (
              <LinkWrap url="/stadium/login" caption="دخول كملعب" />
            )}
            <OtherLink href="/">عودة إلى الرئيسية</OtherLink>
          </Box>
          <SignButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disableElevation
            disabled={isLoading}
            sx={{
              color: 'white',
              maxHeight: '44px',
              minHeight: '44px',
              position: 'relative',
            }}
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
      {errorMessage && <ErrorAlert errorMessage={errorMessage} />}
    </Wrapper>
  );
};

export default SignupWrapper;
