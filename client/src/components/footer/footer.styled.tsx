import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const StyledFooter = styled('footer')`
  background-color: #01031c;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLogo = styled(Box)`
  margin-bottom: 10px;
`;

export const StyledLinks = styled(Box)`
  display: flex;
  margin-bottom: 10px;

  & > * {
    margin: 0 10px;
  }
`;

export const StyledIcons = styled(Box)`
  display: flex;

  & > * {
    margin: 0 5px;
  }
`;
