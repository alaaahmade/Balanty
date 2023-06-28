import { Typography, Tab } from '@mui/material';
import { Box, styled } from '@mui/system';

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
  marginLeft: '32px',
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
});

export const Text = styled(Typography)({});

export const FollowsInfoWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const FollowsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: 28,
});

export const BioBox = styled(Box)({
  marginTop: 22,
  width: '350px',
  marginLeft: '42px',
  padding: '10px',
  border: '1px solid #ccc',
  backgroundColor: '#F2FCF5',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  borderRadius: '3px',
});
