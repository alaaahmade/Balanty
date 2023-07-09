import { ReactElement } from 'react';

import '../../../App.css';
import { useTheme } from '@emotion/react';
import { Theme } from '@mui/material';
import { DarkSideLink } from '../../styledRootComponent/LiftSideBarStyledComponent';
import { customPalette, SideBarLinkProps } from '../../../interfaces';

const SideBarLink = ({ text, icon }: SideBarLinkProps): ReactElement => {
  const currentTheme = useTheme();
  return (
    <DarkSideLink
      sx={{
        backgroundColor: ((currentTheme as Theme).palette as customPalette)
          .customColors.grayColor,
        color: (currentTheme as Theme).palette.primary.contrastText,
        '&:hover': {
          backgroundColor: ((currentTheme as Theme).palette as customPalette)
            .customColors.backGroundColor,
          color: (currentTheme as Theme).palette.primary.main,
          padding: '15px 30px 15px 0',
        },
      }}
      to={
        text === 'الصفحة الرئيسية'
          ? '/home'
          : text === 'اللاعبين'
          ? '/home/players'
          : text === 'الملاعب'
          ? '/home/stadiums'
          : text === 'اخر اللاعبين'
          ? '/home/players'
          : '/home'
      }
    >
      {text}
      {icon}
    </DarkSideLink>
  );
};

export default SideBarLink;
