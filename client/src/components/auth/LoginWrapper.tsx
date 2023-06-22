import React, { FC, ReactElement, useState } from 'react';

import { Box, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
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

interface userDataProps {
  username?: string;
  password?: string;
}

const schema = yup.object<userDataProps>().shape({
  username: yup
    .string()
    .min(4, 'Username must be at least 8 characters')
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    ),
});

const LoginWrapper: FC = (): ReactElement => {
  // const [userData, setUserData] = useState<userDataProps>({
  // username: '',
  // password: '',
  // });
  const { register, control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = (data: userDataProps) =>
    console.log('onSubmited data', data);

  const { pathname } = useLocation();
  let isPlayer = true;

  if (!(pathname.split('/')[1] === 'player')) {
    isPlayer = false;
  }

  // const handleChanges = e => {
  //   setUserData({ useusername: e.target.value, ...userData });
  // };
  return (
    <Wrapper isPlayer={isPlayer}>
      <ImageWrap isPlayer={isPlayer} />
      <Form>
        {isPlayer ? (
          <TitleWrap caption="دخول كلاعب" />
        ) : (
          <TitleWrap caption="دخول كملعب" />
        )}
        <Box component="form" noValidate autoComplete="off">
          {/* <Controller
            name="username"
            control={control}
            render={({ formState, fieldState }) => ( */}
          <TextField
            inputRef={register}
            title="username"
            error={!!formState.errors?.username}
          />
          {/* )} */}
          {/* /> */}
          <InputWrap
            // value={userData.username}
            // onChange={handleChanges}
            type="text"
            label={isPlayer ? 'اسم اللاعب' : 'اسم الملعب'}
            placeholder={isPlayer ? 'ادخل اسم اللاعب' : 'ادخل اسم الملعب'}
          />
          <InputWrap
            type="password"
            label="كلمة المرور"
            placeholder="ادخل كلمة المرور"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isPlayer ? (
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
    </Wrapper>
  );
};

export default LoginWrapper;
