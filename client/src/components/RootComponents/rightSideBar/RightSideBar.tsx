import { ReactElement } from 'react';
import MyMatches from './MyMatches';
import RightSidBarTitle from './RightSidBarTitle';
import WorldMatch from './WorldMatch';
import { Line, SidBox } from '../../index';

const matches = [
  {
    id: 1,
    title: 'الساحة',
  },
  {
    id: 2,
    title: '2الساحة',
  },
  {
    id: 3,
    title: 'الساحة',
  },
];

const RightSideBar = (): ReactElement => {
  return (
    <SidBox
      sx={{
        right: '0px',
        borderLeft: '0.4px solid #ccc',
        boxShadow: '-5px 4px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <RightSidBarTitle title="مبارياتي" />

      <Line />
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
      <Line
        sx={{
          mt: '15px',
        }}
      />

      <RightSidBarTitle title="المباريات العالمية" />
      <Line
        sx={{
          mt: '15px',
        }}
      />

      <WorldMatch />
      <WorldMatch />
    </SidBox>
  );
};

export default RightSideBar;
