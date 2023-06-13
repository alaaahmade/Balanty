import { Box } from '@mui/material';
import { ReactElement } from 'react';
import MyMatches from './MyMatches';
import RightSidBarTitle from './RightSidBarTitle';
import WorldMatch from './WorldMatch';

const matches = [
  {
    id: 1,
    title: 'الساحة',
  },
  {
    id: 2,
    title: 'الساحة',
  },
  {
    id: 3,
    title: 'الساحة',
  },
];

const RightSideBar = (): ReactElement => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '270px',
        minHeight: 'calc(100vh - 65px)',
        right: '0em',
        top: '4.1em',
        backgroundColor: '#FFFFFF',
        borderLeft: '0.4px solid #ccc',
        boxShadow: '-5px 4px 4px rgba(0, 0, 0, 0.15)',
        borderTop: 0,
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
      {matches.length &&
        matches.map(match => (
          <MyMatches key={match.id} stadium={match.title} />
        ))}
      <a
        href="myMatches"
        style={{
          color: '#2CB674',
          marginTop: '15px',
        }}
      >
        المزيد
      </a>
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
    </Box>
  );
};

export default RightSideBar;
