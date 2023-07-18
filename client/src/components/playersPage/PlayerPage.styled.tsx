import styled from '@emotion/styled';
import { Box, Button, Card } from '@mui/material';

export const DotsLoaderBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
});

export const CardsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const PlayerCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  height: '110px',
  marginTop: '22px',
  border: 'none',
  // boxShadow:
  //   '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 1px rgb(222 222 222), 0px 1px 3px 0px #2cb67400',
  padding: '0 2rem',
  borderTop: '0.1px solid #0000002b',
  width: 'calc(100% - 700px)',
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
