import { ReactElement } from 'react';
import MyMatches from './MyMatches';
import RightSideBarTitle from './RightSideBarTitle';
import WorldMatch from './WorldMatch';
import { BorderBox, SideBox } from '../../index';

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
    <SideBox
      sx={{
        right: '0px',
        borderLeft: '0.4px solid #ccc',
        boxShadow: '-5px 4px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <BorderBox
        sx={{
          pb: '30px',
        }}
      >
        <RightSideBarTitle title="مبارياتي" />
      </BorderBox>

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
      <BorderBox
        sx={{
          pb: '20px',
          borderTop: '1px solid #2CB674',
        }}
      >
        <RightSideBarTitle title="المباريات العالمية" />
      </BorderBox>

      <WorldMatch />
      <WorldMatch />
    </SideBox>
  );
};

export default RightSideBar;
