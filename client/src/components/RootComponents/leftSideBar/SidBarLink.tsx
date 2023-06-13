import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { StyledSidBarLink } from '../../index';

interface SidBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SidBarLink = ({ text, icon }: SidBarLinkProps): ReactElement => {
  return (
    <StyledSidBarLink
      sx={{
        mt: '30px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        {text}
      </Typography>
      {icon}
    </StyledSidBarLink>
  );
};

export default SidBarLink;
