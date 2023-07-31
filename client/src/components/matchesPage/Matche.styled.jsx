import styled from '@emotion/styled';
import { Box, Card, CardContent } from '@mui/material';

export const CenteredCard = styled(Card)({
  margin: 'auto',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  width: 'calc(100% - 560px)',
  height: '300px',
  padding: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
});

export const MatchCardContainer = styled(Box)({
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const MatchCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',

  gap: '2px',
});
