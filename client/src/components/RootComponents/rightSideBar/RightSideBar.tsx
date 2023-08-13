import { ReactElement, useContext, useEffect, useState } from 'react';
import { Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MyMatches from './MyMatches';
import RightSideBarTitle from './RightSideBarTitle';
import WorldMatch from './WorldMatch';
import { BorderBox, SideBox } from '../../index';
import { ThemeContext } from '../../../context/ThemeContext';
import { MatchesContext } from '../../../context/MyMatchesContext';

const RightSideBar = (): ReactElement => {
  const { isDarkMode } = useContext(ThemeContext);
  const { getMyMatches, myMatches } = useContext(MatchesContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getMyMatches();
    } catch (error) {
      navigate('/home');
    }
  }, []);

  return (
    <SideBox
      sx={{
        left: 0,
        borderRight: '1px solid ',
        borderRightColor: theme => theme.palette.customColors.grayColor,
        backgroundColor: theme => theme.palette.customColors.grayColor,
        color: theme => theme.palette.primary.contrastText,
        boxShadow: '-1px 4px 6px 1px rgba(0, 0, 0, 0.15)',
      }}
    >
      <BorderBox
        sx={{
          pb: '10px',
        }}
      >
        <RightSideBarTitle title="مبارياتي" />
      </BorderBox>

      {myMatches?.length ? (
        myMatches.map(match => (
          <MyMatches key={match.id} id={match.id} title={match.title} />
        ))
      ) : (
        <>
          <Typography
            sx={{
              padding: '1rem 0 0.7rem 0',
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            لا يوجد مباريات مشارك فيها حالياً
          </Typography>
          <Divider sx={{ height: '1px', width: '100%', background: 'white' }} />
        </>
      )}

      <BorderBox
        sx={{
          p: '5px 0',
        }}
      >
        <RightSideBarTitle title="المباريات العالمية" />
      </BorderBox>

      <WorldMatch />
      <WorldMatch />
      <WorldMatch />
    </SideBox>
  );
};

export default RightSideBar;
