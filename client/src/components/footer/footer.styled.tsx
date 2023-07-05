import { styled, typography } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export const StyledFooter = styled('footer')`
  background-color: #01031c;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLogo = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 15px;
`;

export const StyledLinks = styled(Link)`
  display: flex;
  color: #ffffff;
  margin-bottom: 15px;
  text-decoration: none;

  & > * {
    margin: 0 10px;
    text-decoration: none;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;
export const StyledTypographyParagraph = styled(typography)`
  fontsize: 15px;
  color: #dddddd;
  text-align: center;
`;
export const StyledIcons = styled(Box)`
  display: flex;
  margin-top: 30px;

  & > * {
    margin: 0 6px;
  }
`;
