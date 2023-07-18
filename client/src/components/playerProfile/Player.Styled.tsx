import { Typography, Tab, Card, Button } from '@mui/material';
import { Box, styled } from '@mui/system';

export const Cover = styled(Box)({
  width: '100%',
  height: 320,
  backgroundPosition: 'top',
  backgroundSize: 'cover',
});
export const AvatarWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

export const MainWrapper = styled(Box)({
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  width: ' clac(100% - 240px)',
  alignItems: 'flex-end',
  marginRight: '240px',
});

export const ActionsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: -56,
  marginLeft: '32px',
  gap: 8,
  marginRight: '32%',
  padding: '0 1rem',
});
export const ButtonsWrapper = styled(Box)({
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
export const ContentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Text = styled(Typography)({});

export const FollowsInfoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
});

export const FollowsWrapper = styled(Box)({
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
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  borderRadius: '3px',
});

export const FollowCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  height: '100px',
  marginTop: '20px',
  border: 'none',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 1px rgb(222 222 222), 0px 1px 3px 0px #2cb67400',
  padding: '0 2rem',
  borderTop: '0.1px solid #0000002b',
  width: '500px',
});

export const FollowButton = styled(Button)({
  outline: 0,
  background: '#2CB674',
  borderRadius: '5px',
  cursor: 'pointer',
  border: '1px solid transparent',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2CB674',
    borderColor: '#2CB674',
  },
});
