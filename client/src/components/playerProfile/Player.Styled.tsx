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
  justifyContent: 'flex-start',
  marginTop: -60,
  marginLeft: 12,
  gap: 8,
});
