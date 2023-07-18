import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const StyledDefinitionSection = styled(Box)({
  background: ' #f2fcf5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '50px 125px',
});

export const StyledTitle = styled(Typography)`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 30px;
`;

export const StyledDescription = styled(Typography)`
  margin-bottom: 30px;
`;
