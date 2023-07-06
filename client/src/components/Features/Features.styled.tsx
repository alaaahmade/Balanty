import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const StyledBoxFeatures = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 50px 40px 50px',
  width: '30%',
  textAlign: 'center',
});

export const StyledImageFeatures = styled('img')`
  width: 300px;
  height: 200px;
  padding: 10px;
`;

export const StyledDescriptionFeatures = styled(Typography)`
  margin-top: 10px;
`;

export const StyledTitleF = styled(Typography)({
  fontWeight: 700,
  fontSize: '48px',
  marginBottom: '30px',
  paddingTop: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
