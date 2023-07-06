import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const StyledMyMatches = styled(Box)({
  width: '100%',
  height: '46px',
  backgroundColor: '#F2FCF5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
});
export const StyledWorldMatches = styled(Box)({
  width: '100%',
  height: '80px',
  backgroundColor: '#F2FCF5',
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
