import { Theme, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

export const CustomizedButton = styled(Button)`
  color: #2cb674;
  border-color: #2cb674;
  background: #fff;

  :hover {
    background: #fff;
  }
`;

export const CustomizedTypography = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xl')]: {
      display: 'flex',
    },
    marginRight: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    justifyContent: 'right',
    flexWrap: 'nowrap',
  }),
) as unknown as typeof Typography;
