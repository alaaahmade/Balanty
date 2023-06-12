import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import MyMatches from './MyMatches';
import RightSidBarTitle from './RightSidBarTitle';
import WorldMatch from './WorldMatch';

const matches = ['الساحة', 'الساحة', 'الساحة', 'الساحة', 'الساحة'];

const RightSideBar = (): ReactElement => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '250px',
        minHeight: '100vh',
        right: '13%',
        top: '13%',
        backgroundColor: '#FFFFFF',
        borderWidth: ' 0.4px 0.4px 0.4px 0.4px',
        borderStyle: 'solid',
        borderColor: '#000000',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '20px',
        alignItems: 'center',
      }}
    >
      <RightSidBarTitle title="مبارياتي" />

      <p
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: '#2CB674',
          marginTop: '15px',
        }}
      />
      {matches.length && matches.map(match => <MyMatches stadium={match} />)}
      <p
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: '#2CB674',
          marginTop: '15px',
        }}
      />
      <RightSidBarTitle title="المباريات العالمية" />
      <p
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: '#2CB674',
          marginTop: '15px',
        }}
      />
      <WorldMatch />
      <WorldMatch />
      <WorldMatch />
    </Box>
  );
};

export default RightSideBar;
