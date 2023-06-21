import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Cover = styled('img')({
  width: '100%',
  height: 250,
});
export const AvatarWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

export const MainWrapper = styled('div')({
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  width: ' clac(100% - 240px)',
  alignItems: 'flex-end',
  marginRight: '240px',
});

export const ActionsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  marginTop: -60,
  marginLeft: 12,
  gap: 8,
});

export const UserName = styled(Typography)({
  fontSize: '22px',
  marginBottom: '30px',
  // marginRight: 'px',
});
