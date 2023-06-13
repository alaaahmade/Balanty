import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { StyledSideBarLink } from '../../index';

interface SideBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SideBarLink = ({ text, icon }: SideBarLinkProps): ReactElement => {
  return (
    <StyledSideBarLink
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
    </StyledSideBarLink>
  );
};

export default SideBarLink;
