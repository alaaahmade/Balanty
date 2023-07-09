import { ReactElement } from 'react';

import { Theme, useTheme } from '@mui/material';

import { StyledLogo, StyledNavBox } from '../../index';

import AccountMenu from './AccountMenu';
import { customPalette } from '../../../interfaces';

const NavBar = (): ReactElement => {
  const currentTheme = useTheme();
  return (
    <StyledNavBox
      sx={{
        backgroundColor: ((currentTheme as Theme).palette as customPalette)
          .customColors.second,
      }}
    >
      <AccountMenu />

      <StyledLogo
        src="https://res.cloudinary.com/dtpbcx2kv/image/upload/v1688470562/pf3trycwmq9sw80w2ahf.svg"
        alt="logo"
      />
    </StyledNavBox>
  );
};

export default NavBar;
