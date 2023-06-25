import { Typography, Tab } from '@mui/material';
import { styled } from '@mui/system';

export const Cover = styled('img')({
  width: '100%',
  height: 220,
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
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: -56,
  marginLeft: 12,
  gap: 8,
  marginRight: '32%',
  padding: '0 1rem',
});
export const ButtonsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export const UserName = styled(Typography)({
  display: 'block',
  fontSize: '22px',
  justifyContent: 'center',
  alignItems: 'stretch',
});

export const ActionButton = styled('button')({
  width: '80px',
  height: '35px',
  outline: 0,
  border: 0,
  background: '#2CB674',
  borderRadius: '5px',
  cursor: 'pointer',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2CB674',
    border: '1px solid #2CB674',
  },
});
export const StyledTab = styled(Tab)({
  color: 'black',
  '&:hover': {
    color: 'black',
  },
});
export const ContentWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  padding: '4px',
});

export const Text = styled(Typography)({});

export const FollowsInfoWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const FollowsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: 28,
});
