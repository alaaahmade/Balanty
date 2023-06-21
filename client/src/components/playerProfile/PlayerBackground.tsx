import { Avatar } from '@mui/material';
import React, { ReactElement } from 'react';
import LeftSideBar from '../RootComponents/leftSideBar/LeftSideBar';
import NavBar from '../RootComponents/navBar/NavBar';
import { Cover, AvatarWrapper, MainWrapper } from './Player.Styled';

const PlayerBackground: React.FC = (): ReactElement => {
  return (
    <>
      <NavBar />
      <MainWrapper>
        <AvatarWrapper>
          <Cover
            alt="backgroundimage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pTPIgF0WL3OISw6WCVR_BCDVX1BkT26V5l8kScTyk9fOu0PfZQdbk72ZT9pBIMYX7cg&usqp=CAU"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKrxLlVyJ00ejbBf8gTGIA5HKb7Ewr1WgJA&usqp=CAU"
            sx={{
              width: 145,
              height: 145,
              marginTop: -10,
              marginRight: '2.5em',
              border: '6px solid #fff',
            }}
          />
        </AvatarWrapper>
        <LeftSideBar />
      </MainWrapper>
    </>
  );
};

export default PlayerBackground;
