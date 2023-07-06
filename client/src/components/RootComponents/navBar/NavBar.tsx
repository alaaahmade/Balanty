import { ReactElement } from 'react';
import { StyledLogo, StyledNavBox, StyledMnu } from '../../index';

const NavBar = (): ReactElement => {
  return (
    <StyledNavBox
      sx={{
        backgroundColor: theme => theme.palette.primary.second,
      }}
    >
      <StyledMnu
        sx={{
          color: theme => theme.palette.primary.main,
        }}
      />
      <StyledLogo
        src="https://res.cloudinary.com/dtpbcx2kv/image/upload/v1688470562/pf3trycwmq9sw80w2ahf.svg"
        alt="logo"
      />
    </StyledNavBox>
  );
};

export default NavBar;
