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

      {matches.length &&
        matches.map(match => (
          <MyMatches key={match.id} stadium={match.title} />
        ))}

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
