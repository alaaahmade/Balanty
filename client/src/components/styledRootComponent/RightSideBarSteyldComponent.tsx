import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const StyledMyMatches = styled(Box)({
  width: '90%',
  height: '46px',
  backgroundColor: '#D9D9D9',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
});
export const StyledWorldMatches = styled(Box)({
  width: '90%',
  height: '80px',
  backgroundColor: '#D9D9D9',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledTeamBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  p: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
});
export const StyledTeamName = styled(Typography)({
  width: '80px',
  height: '30px',
  background: '#2CB674',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '12px',
});
