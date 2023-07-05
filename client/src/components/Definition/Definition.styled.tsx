import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const StyledDefinitionSection = styled(Box)({
  background: ' #f2fcf5',
  height: '418px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
});

export const StyledTitle = styled(Typography)`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 30px;
  padding-top: 60px;
`;

export const StyledDescription = styled(Typography)`
  margin: 5px;
`;
